import Fade from "react-reveal/Fade";
import { Brand } from "../assets/brand";

export const Header = () => (
  <div className="header">
    <Fade>
      <div className="header-container">
        <div className="title">
          <Brand />
        </div>
        {/* <nav>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav> */}
      </div>
    </Fade>
  </div>
);
