import React from "react";

import GroupCard from "./GroupCard";

import "./RecommendedGroups.css";
export default function RecommendedGroups() {
  return (
    <div className="recommended-groups">
      <div className="flex">
        <img
          className="img-16"
          src="https://image.flaticon.com/icons/png/512/889/889221.png"
          alt="thumbs"
        />
        <h2>Recommended Groups</h2>
      </div>

      <div className="all-groups">
        <GroupCard
          imgSrc="https://picsum.photos/id/230/200/"
          cardName="Leisure"
        />
        <GroupCard
          imgSrc="https://picsum.photos/id/270/200/"
          cardName="Activisim"
        />
        <GroupCard imgSrc="https://picsum.photos/id/255/200/" cardName="MBA" />
        <GroupCard
          imgSrc="https://picsum.photos/id/340/200/"
          cardName="Philosophy"
        />
      </div>
    </div>
  );
}
