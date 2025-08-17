import React from "react";
import backgroundImg from "./banner.png";
import css from "./Banner.module.css";

function Banner() {
  return (
    <>
      <div className={css.bannerContainer}>
        <div className={css.innerContainer}>
          <div className={css.banner}>

            <img src={backgroundImg} className={`block w-full h-[70%] object-cover  ${css.imgCss}`}   alt="" />
          </div>
        </div>

        <div className={`${css.textBox}`}>
          <h2>Your Title Here</h2>
          <p>
            This is some content on the right side of the image. You can
            customize this text, add buttons, or anything else.
          </p>
        </div>
      </div>
    </>
  );
}

export default Banner;
