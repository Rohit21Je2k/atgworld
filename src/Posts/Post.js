import React, { useState } from "react";

import Card from "../Card/Card";
import RecommendedGroups from "../RecommendedGroups/RecommendedGroups.js";

import "./Post.css";

export default function Post() {
  const [location, setLocation] = useState("Noida");
  const [editLocation, setEditLocation] = useState(false);
  function handleLocation(event) {
    setLocation(event.target.value);
  }

  function handleLocationEdit() {
    setEditLocation(true);
  }

  function handleLocationSubmit(e) {
    e.preventDefault();
    e.target.location.blur();
    setEditLocation(false);
  }
  return (
    <div className="post flex flex-jc-sb container">
      <div>
        <Card
          imgSrc="https://wallpapercave.com/wp/wp2532971.jpg"
          cardType="article"
          cardTitle="What if famous brands had regular fonts? Meet RegulaBrands"
          cardDetails=" I’ve worked in UX for the better part of a decade. From now on, I
        plan to rei…"
          cardAuthor={{
            img: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
            name: "Sarthak ",
          }}
          cardViews="1.4k views"
        />
        <Card
          imgSrc="https://c0.wallpaperflare.com/preview/534/41/125/school-books-young-adult-education.jpg"
          cardType="education"
          cardTitle="Tax Benefits for Investment under National Pension Scheme launched by Government"
          cardDetails=" I’ve worked in UX for the better part of a decade. From now on, I
        plan to rei…"
          cardAuthor={{
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0-8CYleGWDG2Vt9fKFSCnK7LPbp77RbUldw&usqp=CAU",
            name: "Sarah West",
          }}
          cardViews="1.4k views"
        />
        <Card
          imgSrc="https://images.unsplash.com/photo-1584343292021-f2d13cb7711a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXVzY2xlJTIwY2FyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
          cardType="meetup"
          cardTitle="Finance & Investment Elite Social Mixer @Lujiazui"
          cardVenue={{
            date: "Fri, 12 Oct, 2018",
            location: "Ahmedabad, India",
          }}
          cardBtnRed={true}
          cardAuthor={{
            img: "https://image.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg",
            name: "Ronal Jones",
          }}
          cardViews="1.4k views"
        />
        <Card
          cardType="job"
          cardTitle="Software Developer"
          cardVenue={{
            name: "Innovaccer Analytics Private Ltd.",
            location: "Noida, India",
          }}
          cardBtnGreen={true}
          cardAuthor={{
            img: "https://img.freepik.com/free-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg?size=626&ext=jpg",
            name: "Joseph Grey",
          }}
          cardViews="1.4k views"
        />
      </div>

      {/* Location */}
      <div className="post__location hide-for-mobile">
        <div className="flex flex-jc-sb flex-ai-c">
          <form onSubmit={handleLocationSubmit}>
            <img
              src="https://image.flaticon.com/icons/png/512/684/684809.png"
              alt="location"
            />
            <input
              onClick={handleLocationEdit}
              onChange={handleLocation}
              type="text"
              name="location"
              value={location}
              placeholder="Enter your location"
            />
          </form>
          <img
            src={
              editLocation === true
                ? "https://image.flaticon.com/icons/png/512/1828/1828778.png"
                : "https://image.flaticon.com/icons/png/512/1828/1828911.png"
            }
            alt="edit"
          />
        </div>
        <div className="flex">
          <img
            src="https://image.flaticon.com/icons/png/128/292/292178.png"
            alt="info"
          />
          <p>
            Your location will help us serve better and extend a personalised
            experience.
          </p>
        </div>
        <RecommendedGroups />
        <button className="see-more">See More...</button>
      </div>
    </div>
  );
}
