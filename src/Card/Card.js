import React, { useState } from "react";

import threeDots from "../media/three-dots.png";
import cardView from "../media/card-views.png";
import cardShare from "../media/card-share.png";

import "./Card.css";
export default function Card(props) {
  const {
    imgSrc,
    cardType,
    cardTitle,
    cardVenue,
    cardDetails,
    cardBtnRed,
    cardBtnGreen,
    cardAuthor,
    cardViews,
  } = props;

  const cardTypes = {
    article: {
      imgSrc: "https://image.flaticon.com/icons/png/512/864/864970.png",
      name: "Article",
    },
    education: {
      imgSrc: "https://image.flaticon.com/icons/png/512/4290/4290187.png",
      name: "Education",
    },
    meetup: {
      imgSrc: "https://image.flaticon.com/icons/png/512/3143/3143636.png",
      name: "Meetup",
    },
    job: {
      imgSrc: "https://image.flaticon.com/icons/png/128/639/639343.png",
      name: "Job",
    },
  };

  const [showOptions, setShowOptions] = useState(false);
  function handleCardMoreClick() {
    setShowOptions((prevValue) => !prevValue);
  }

  return (
    <div className="card">
      {imgSrc && <img src={imgSrc} alt="card-pic" />}
      <div className="card__info">
        <h3 className="card__type">
          <img
            className="img-20"
            src={cardTypes[cardType].imgSrc}
            alt={cardTypes[cardType].name}
          />
          {cardTypes[cardType].name}
        </h3>
        <div className="card__title flex flex-jc-sb">
          <h1>{cardTitle}</h1>
          <button
            onClick={handleCardMoreClick}
            className={`flex flex-jc-c flex-ai-c ${
              showOptions && "three-dots"
            }`}
          >
            <img src={threeDots} alt="three-dots" />
            {showOptions && (
              <div>
                <button>Edit</button>
                <button>Report</button>
                <button>Option 3</button>
              </div>
            )}
          </button>
        </div>
        {cardVenue && (
          <div className="card__venue">
            {cardVenue.name && (
              <button>
                <img
                  src="https://image.flaticon.com/icons/png/512/181/181649.png"
                  alt="name"
                />
                {cardVenue.name}
              </button>
            )}
            {cardVenue.date && (
              <button>
                <img
                  src="https://image.flaticon.com/icons/png/512/61/61469.png"
                  alt="date"
                />
                {cardVenue.date}
              </button>
            )}

            {cardVenue.location && (
              <button>
                <img
                  src="https://image.flaticon.com/icons/png/512/684/684809.png"
                  alt="location"
                />
                {cardVenue.location}
              </button>
            )}
          </div>
        )}

        {cardDetails && <p className="card__details">{cardDetails}</p>}

        {cardBtnRed && <button className="card__btn red">Visit Website</button>}
        {cardBtnGreen && (
          <button className="card__btn green">Apply on Timesjobs</button>
        )}

        <div className="card__author flex flex-jc-sb flex-ai-c">
          <div className="flex flex-ai-c">
            <img src={cardAuthor.img} alt="person" />
            <h5>{cardAuthor.name}</h5>
          </div>
          <div>
            <span className="flex-inline flex-ai-c">
              <img src={cardView} alt="views" />
              {cardViews}
            </span>
            <button className="flex-inline flex-jc-c flex-ai-c">
              <img src={cardShare} alt="share" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
