import React, { useEffect, useState } from "react";

interface FloatingActionButtonProps {
  action: any;
  appearAt: number;
  disappearAt: number;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  action,
  disappearAt,
  appearAt
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let element = document.getElementById("brewery-list-view");

    element!.addEventListener("scroll", () => {
      let scrollTop = element!.scrollTop;

      if (scrollTop % 100 === 0) {
        if (scrollTop >= appearAt) {
          setVisible(true);
        } else if (scrollTop <= disappearAt) {
          setVisible(false);
        }
      }
    });
  });

  return visible ? (
    <div className="fixed-action-btn" onClick={() => action()}>
      <a className="btn-floating btn-large orange">
        <i className="large material-icons">arrow_upward</i>
      </a>
    </div>
  ) : (
    <></>
  );
};

export default FloatingActionButton;
