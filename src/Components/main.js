import "../Static/App.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

var speech = new SpeechSynthesisUtterance();
const Main = () => {
  const SpeechReco = window.SpeechRecognition || window.webkitSpeechRecognition;
  var recognition = null;
  var error = false;
  try {
    recognition = new SpeechReco();
    recognition.lang = "hi-IN";
    speech.lang = "hi-IN";
  } catch(e) {
    error = true;
  }
  
  /*
    useEffect is used here because when we are running try it is returning multiples errors if we are not using chrome so we used useEffect so that we dont see the alerts multiple times
  */
  useEffect(() => {
    if (error) {
      alert(`Please Use Google Chrome for the website to work`);
    }
  }, [error]);

  var User = {
    name: "",
    about: "",
    education: "",
    skills: "",
    experience: "",
  };
  const [str, setstr] = useState("");
  const [title, setTitle] = useState("Name: "); // to make vars reactive
  const history = useNavigate();
  const [Inst, setInst] = useState("Waiting for button to be clicked")

  var mode = "about"; // setting mode to about on load, to move on to about query after getting input for name
  const reload = async (d) => { 
    /* function for getting translated text from the api and passing it into handleData function*/
    handleData(await (await fetch("https://api.sh1ft3r.repl.co/" + d)).json());  
    
  };


  const startreco = () => {
    const start = document.getElementById("lmao"); // button
    if (start.textContent === "Reset || Mic On") {  // checks if recording is already on
      recognition.stop(); // if on stops it
    } else {
      recognition.start(); // else starts it
    }
    recognition.onstart = function () {   // gets fired on recording start
      start.innerHTML = "Reset || Mic On";
    };
    recognition.onend = function () {     
      /* gets fired on recording end (recording automatically ends if user stops speaking) */
      start.innerHTML = "Reset || Mic Off";
    };
    recognition.onresult = function (event) {
      /* gets fired when webspeech api returns the results */
      setstr(event.results[0][0].transcript); // sets the str var to the result
      reload(event.results[0][0].transcript); // calls reload function passing the results
    };
  };

  function tts(mtr) {
    speech.text = mtr; // basically sets text property to the text
    speechSynthesis.speak(speech);  
  }

  function input(text) {
    setInst(text) // displaying the text incase the speech dosent work
    tts(text); // speaking the text
    setTimeout(startreco, 2000); // waiting for tts to finish and then calls startreco function
  }

  function init() { //getting called by button
    input("कृपया अपना नाम बताइए");
    setTitle(`Name: `);
  }

  function handleData(data) { // gets called by reload function after getting the data
    switch (mode) { // initially set to about when the page loads
      case "about":
        setTitle("About: "); // changes the question in the h1 element
        input("कृपया अपने बारे में कुछ बताइये "); // moves to the next question
        User.name = data.output; // sets the name property to the translated text
        mode = "edu"; // sets the mode to edu to move on to next question when again called
        break;  // to break out of switch to prevent execution of all cases

      case "edu":
        setTitle("Education: ");
        input("आपकी शैक्षिक योग्यता कितनी है ");
        User.about = data.output;
        mode = "skill";
        break;

      case "skill":
        setTitle("Skill: ");
        input("आपको किन चीज़ों में कौशल प्राप्त है");
        User.education = data.output;
        mode = "exp";
        break;

      case "exp":
        setTitle("Experience: ");
        input("कृपया इसमें अपना अनुभव बताइये ");
        User.skills = data.output;
        mode = "fully";
        break;

      case "fully":
        User.experience = data.output;
        history(`/word?user=${JSON.stringify(User)}`);
        break;

      default:
        return;
    }
  }


  return (
    <div className="main">
      <p>
        Please wait a little time after clicking the button, If there is no
        sound try reloading
      </p>
      <h1>{Inst}</h1>
      <h1>{title}</h1>
      <input
        disabled
        type="text"
        value={str}
        placeholder="Voice Input"
        style={{ width: "79%", textAlign: "left", paddingLeft: "12px" }}
      />
      <button
        id="lmao"
        onClick={init}
        style={{ width: "19%", display: "inline" }}
      >
        Start Voice Input
      </button>
    </div>
  );
};

export default Main;
