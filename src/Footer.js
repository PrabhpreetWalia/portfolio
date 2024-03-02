import "./Footer.css";
import Linkdin from "./assets/Linkdin";
import Github from "./assets/Github";
import Gmail from "./assets/Gmail";

export default function Footer() {
  return (
    <div className="footer--container" id="footer">
      <div className="about--heading footer--heading">Don't be shy... Hit me up 👇</div>

      <div className="contact--container">
        <div className="hero--contact">
          <a href="https://www.linkedin.com/in/prabhpreeet/" target="_blank">
            <Linkdin />
          </a>
          <a href="https://github.com/PrabhpreetWalia" target="_blank">
            <Github />
          </a>
          <a href="mailto:prabhpreet.business@gmail.com" target="_blank">
            <Gmail />
          </a>
        </div>
      </div>
    </div>
  );
}
