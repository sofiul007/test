import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function Slider() {
  const [cont, setCont] = useState(0);
  let interval;
  let loop;

  useEffect(() => {
    const loopSlider = () => {
      interval = setInterval(() => {
        switch (cont) {
          case 0: {
            fadeOutAndFadeIn("#slider-1", "#slider-2", "#sButton1", "#sButton2");
            setCont(1);
            break;
          }
          case 1: {
            fadeOutAndFadeIn("#slider-2", "#slider-1", "#sButton2", "#sButton1");
            setCont(0);
            break;
          }
          default:
            break;
        }
      }, 8000);
    };

    loop = loopSlider();

    return () => clearInterval(interval);
  }, [cont]);

  function fadeOutAndFadeIn(fadeOutId, fadeInId, removeClassId, addClassId) {
    const fadeOutElement = document.querySelector(fadeOutId);
    const fadeInElement = document.querySelector(fadeInId);
    const removeClassElement = document.querySelector(removeClassId);
    const addClassElement = document.querySelector(addClassId);

    fadeOutElement.style.opacity = "0";
    setTimeout(() => {
      fadeOutElement.style.display = "none";
      fadeInElement.style.display = "block";
      fadeInElement.style.opacity = "1";
      removeClassElement.classList.remove("bg-purple-800");
      addClassElement.classList.add("bg-purple-800");
    }, 400);
  }

  function reinitLoop(time) {
    clearInterval(interval);
    setTimeout(loop, time);
  }

  function sliderButton1() {
    fadeOutAndFadeIn("#slider-2", "#slider-1", "#sButton2", "#sButton1");
    reinitLoop(4000);
    setCont(0);
  }

  function sliderButton2() {
    fadeOutAndFadeIn("#slider-1", "#slider-2", "#sButton1", "#sButton2");
    reinitLoop(4000);
    setCont(1);
  }

  return (
    <div>
      <div className="sliderAx h-auto">
        <div id="slider-1" className="container mx-auto">
          {/* Rest of the JSX code */}
        </div>

        <div id="slider-2" className="container mx-auto">
          {/* Rest of the JSX code */}
        </div>
      </div>
      <div className="flex justify-between w-12 mx-auto pb-2">
        <button id="sButton1" onClick={sliderButton1} className="bg-purple-400 rounded-full w-4 pb-2"></button>
        <button id="sButton2" onClick={sliderButton2} className="bg-purple-400 rounded-full w-4 p-2"></button>
      </div>
    </div>
  );
}

ReactDOM.render(<Slider />, document.getElementById("root"));

export default Slider;
