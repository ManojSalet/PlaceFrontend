import React from "react";
import styls from "./hero.module.css";

const Hero = () => {
    return (
    <div className={`${styls.hero}`}>
        <div className={`${styls.warp}`}>
          <div className={`${styls.copy}`}>
            <div className="the-future-of-web-design-today">
              The future of web design, today
            </div>
            <div className="the-future-of-web-design-today-2">
              The future of web design, today
            </div>
            <div className={`${styls.button}`}>Call to action</div>
          </div>
          <div className={`${styls.image}`} />
        </div>
      </div>
)};

export default Hero;