import React, { useState } from "react";

import "./GroupCard.css";
export default function GroupCard(props) {
  const { imgSrc, cardName } = props;
  const [cardState, setCardState] = useState(false);
  function handleGroupCardClick() {
    setCardState((prevState) => {
      const newState = prevState === false ? true : false;
      return newState;
    });
  }
  return (
    <div className="group-card flex flex-ai-c">
      <img className="img-36" src={imgSrc} alt="group-pic" />
      <p>{cardName}</p>
      <button
        className={cardState === false ? null : "newCardState"}
        onClick={handleGroupCardClick}
      >
        {cardState === false ? "Follow" : "Following"}
      </button>
    </div>
  );
}
