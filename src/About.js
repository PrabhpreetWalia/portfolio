import './About.css'
import Work from './assets/work.jpg'
import Circle from './assets/Circle'
import WorkingEmoji from './assets/working-emoji2.png'

export default function About() {

    return(
        
        <div className="about--container" id="about">

            <div className="about--img">
                <img src={Work} alt="background"/>
                <Circle />
                <img className="about--emoji" src={WorkingEmoji} alt="developer emoji"/>

            </div>

            <div className="about--text">
                <p className="about--heading">ABOUT ME</p><br />
                <p className="about--subheading">📍 Chandigarh, India</p><br />
                <p className="about--paragraph">Hey, my name is Prabhpreet Walia, and I'm a Frontend Developer. My passion is to create and develop a clean UI/UX for my users. My main stack currently is React.js in combination with Tailwind CSS. <br /> AND YES, I AM A <span className='primary-blue'>CHAI LOVER!!!</span></p>
            </div>

        </div>

    )

}