import React from "react";

interface FloatingActionButtonProps {
  visible: boolean;
}

/**
 * Source - https://gist.github.com/andjosh/6764939
 * @param t - current time
 * @param b - start value
 * @param c - change in value
 * @param d - duration
 */
const easeInOutQuad = function(t: number, b: number, c: number, d: number) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};

/**
 *
 * @param element
 * @param to
 * @param duration
 */
function scrollTo(element: HTMLElement, to: number, duration: number) {
  let start = element.scrollTop,
    change = to - start,
    currentTime = 0,
    increment = 20;

  const animateScroll = function() {
    currentTime += increment;

    let val = easeInOutQuad(currentTime, start, change, duration);

    element.scrollTop = val;

    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };

  animateScroll();
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  visible
}) => {
  return visible ? (
    <div
      className="fixed-action-btn"
      onClick={() =>
        scrollTo(document.getElementById("brewery-list-view")!, 0, 1000)
      }
    >
      <a className="btn-floating btn-large orange">
        <i className="large material-icons">arrow_upward</i>
      </a>
    </div>
  ) : (
    <></>
  );
};

export default FloatingActionButton;
