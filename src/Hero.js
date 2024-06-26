import "./Hero.css";
import self from "./self.jpg";
import Linkdin from "./assets/Linkdin.js";
import Github from "./assets/Github.js";
import Gmail from "./assets/Gmail.js"

export default function Hero() {
  return (
    <div className="hero--container" id="hero">
      <div className="hero--main">
        <div className="hero--text">
          <h1>
            Full Stack Web Developer <span className="wave">👋</span>
          </h1>
          <br />
          <p>
            Hi, I'm Prabhpreet Walia. A passionate Full Stack Web Developer
            based in Chandigarh, India.
          </p>
          <br />
          <div className="hero--contact">
            <a href="https://www.linkedin.com/in/prabhpreeet/" rel="noreferrer" target="_blank"><Linkdin /></a>
            <a href="https://github.com/PrabhpreetWalia" rel="noreferrer" target="_blank"><Github /></a>
            <a href="mailto:prabhpreet.business@gmail.com" rel="noreferrer" target="_blank"><Gmail /></a>

          </div>
        </div>
        <div className="hero--img">
          <img src={self} alt="prabhpreet's pic"/>
        </div>
      </div>
      <div className="hero--footer">
        <p>Tech Stack |</p>
        <div className="hero--stack">
          <img src="https://skillicons.dev/icons?i=mongodb,express" alt="nodejs, react svg"/>
          <img src="https://skillicons.dev/icons?i=react,nodejs" alt="nodejs, react svg"/>

        </div>
      </div>
    </div>
  );
}
