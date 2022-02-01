import '../Static/feedbackstyle.css'
import Nope from '../Static/image-nope.png'
import Blank from '../Static/blank_op.png'
import emailjs from '@emailjs/browser'

const Feed = () => {
    const send = async (e)=>{
        e.preventDefault()
        const first = document.getElementById("first").value
        const last = document.getElementById("last").value
        const email = document.getElementById("email").value
        const feed = document.getElementById("feeds").value
        const tokens = await (await fetch('https://API.sh1ft3r.repl.co/tokens')).json()

        emailjs.send(tokens.service, tokens.template, {
            from_name: first + " " + last,
            my_html: `<style>a {text-decoration:none; color:white}</style><center style='display:flex; font-size: 40px; text-decoration:none; background: rgb(0,36,28);background: linear-gradient(180deg, rgba(0,36,28,1) 0%, rgba(9,86,121,1) 17%, rgba(255,0,194,1) 71%); color:white'><br><img src="https://cdn.discordapp.com/attachments/927419772772163634/931471124963946506/feedback.png" style="float:left;"><p style="float:right; text-decoration:none;">Name: ${first} ${last}<br>Email: ${email} <br>Feedback: ${feed}</p></center>`
        }, tokens.user
        ).then((res) =>{
            alert("Your feedback has been recorded!")
        }).catch((err)=>{
            alert("Sorry an error occured!" + err)
        })
    }
  return (
    <div className="feed_root">
    <img src={Blank} className="png-img" alt=""/>
    <h1 className="heading">Feedback Form</h1>
    <div className="container">
        <img src={Nope} className="feedback" alt=""/>
       <div className="vertical-line"></div>
        <form>
            <div className="user">
               <i className="fas fa-user"></i>
                <input name="first_name" required type="text"id='first' placeholder="Your First Name"/>
            </div>
            <div name="last_name" className="name">
               <i className="fas fa-user"></i>
               <input required type="text" id='last' placeholder="Your Last Name"/>
           </div>
           <div name="email" className="gmail">
               <i className="fas fa-envelope-square"></i>
               <input required type="email" id='email' placeholder="Your Email Id" />
           </div>
           <div name="feedback" className="feed">Your Feedback:</div>
           <div className="Opinion">
               <textarea required cols="36" rows="8" id='feeds' placeholder="Your Opinions About our app"></textarea>
           </div>
           <button onClick={send}>Submit</button>
       </form>
    </div>
    </div>
  );
};

export default Feed;
