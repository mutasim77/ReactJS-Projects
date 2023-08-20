import "./styles.css";
import "./ResponsiveHero.css";

import HeroImg from "../../../assets/Illustration.svg";

export const Hero = () => {
  return (
    <section className="HeroSec">
      <div className="contentWrapper">
        <div className="leftContent">
          <h2>Ready for Trying a new recipe?</h2>
          <div className="handle">
            <input type="text" placeholder="Search healthy recipes" />
            <button type="text">🔎</button>
          </div>
        </div>

        <div className="rigthContent">
          <div className="heroImg">
            <img src={HeroImg} alt="draw with healthy calcule" />
          </div>
        </div>
      </div>
    </section>
  );
};
