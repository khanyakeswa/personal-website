import React from "react";
import Image from "next/image";
import { useEffect } from "react";

function Landing({ scrollYPosition }) {
  return (
    <div id="landing" className="section top">
      <div className="splash-container">
        <div className="splash-wrapper">
          <Image
            src="/assets/imgs/splash_1.jpg"
            alt="splash"
            width={1920}
            height={1080}
            style={{
              width: "auto",
              height: "100%",
              top: `${scrollYPosition / 3}px`,
              objectFit: "cover",
            }}
          />
        </div>
      </div>
      <div className="header"></div>
    </div>
  );
}

export default Landing;
