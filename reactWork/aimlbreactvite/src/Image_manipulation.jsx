import React, { useState } from "react";
import "./Image_manipulation.css";
import logo from "./assets/Thalapathy-vijay.jpg";

function ImageManipulation() {
  const [bg, setBg] = useState("black");
  const [ht, setHt] = useState(300);
  const [wd, setWd] = useState(100);
  const [imgRotate, setImgRotate] = useState(0);

  const changecolor = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    setBg(`RGB(${red}, ${green}, ${blue})`);
  };

  const heightEnhance = () => {
    setHt(ht + 20);
  };

  const widthEnhance = () => {
    setWd(wd + 20);
  };

  const imageRotate = () => {
    setImgRotate(imgRotate + 30);
  };

  return (
    <div className="imageCard">
      <div className="imgdiv" style={{ backgroundColor: bg }}>
        <img
          src={logo}
          alt=""
          height={ht}
          width={wd}
          style={{ transform: `rotate(${imgRotate}deg)` }}
        />
      </div>

      <div className="btn">
        <button onClick={changecolor}>Change Background</button>
        <button onClick={heightEnhance}>Change Height</button>
        <button onClick={widthEnhance}>Change Width</button>
        <button onClick={imageRotate}>Rotate</button>
      </div>
    </div>
  );
}

export default ImageManipulation;
