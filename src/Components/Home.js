import '../Static/homestyle_new.css'
import Try from '../Static/try now.png'
import Trans from "../Static/ai_image.jpeg"
import Job from "../Static/job_op.png"
import Logo from "../Static/applogo.png"
import Vision from"../Static/vision.png"
import Trans_op from "../Static/trans_op.png"

const Home = () => {
    document.body.style.backgroundImage = "url('banner.png')";
    return ( 
        <div className='Home'>
            <img src={Logo} alt="" class="logo" />
     <div class="head">
        <h1>Résumister</h1>
        <hr className='Line'/>
        <h2>Be Job Ready!</h2> 
        <div class="box">
         <img src={Trans} alt="" class="image1"/>
         <img src={Job} alt="" class="image2"/>
         <img src={Trans_op} alt="" class="image3"/>
        </div>
     </div> 
     <h2 className="info">About Us</h2>
     <div className="para">
         <p>Hello All, this is Résumister, an app which helps you in translating your speech In English.
         This app also helps increase your Job Chances as you can make your interview speech from Résumister.
         So what are you waiting for try Résumister now for free!!</p>
     </div>
     <img src={Try} alt="" class="img1"/>
     <img src={Vision} alt="" class="img2"/>
     <h2 className="info2">Our Vision</h2>
     
     <div className="para2">
         <p>Our Vision is to help people by getting their Job easily. They can create their CV
        using our app. Our aim is to help all the people who have
        difficulties in speaking in English and don't have high end devices. This app also have support for specially abled people, who arent able to see.( Inbuilt TTS and Speech Recognition )</p>
     </div>
     <h2 className="info3">Developers</h2>
     <div className="para3">
         <p className='Devs'>
             The developers of this app are two students from the school Birla Vidya Niketan whose name are <br/>
             Kartik Arora from 8F and Parth Chauhan from 7A .
         </p>
     </div>
     <br />
        </div>
     );
}
 
export default Home;