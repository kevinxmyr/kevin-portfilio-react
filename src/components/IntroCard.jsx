import React from "react";
import profile from "../assets/profile.jpg";

export default function IntroCard() {
  return (
    <div className="intro-card">
      <div className="card-wrapper">
        <div className="three-dots">
          <div className="dot-1"></div>
          <div className="dot-2"></div>
          <div className="dot-3"></div>
        </div>
        <div className="email-wrapper">punongbayan.kev@gmail.com</div>
      </div>

      {/* //Profile and WHO AM I SECTION */}

      <div className="main-section">
        <div className="image-wrapper">
          <img className="user-img" src={profile} />
        </div>
        <div className="whoami-wrapper">
          <div className="small-dot-1"> </div>
          <div className="small-dot-2"> </div>
          <div className="small-dot-3"> </div>
          <div className="small-dot-4"> </div>
          <div className="blue-card">
            <div className="blue-card-content">
              <h3>Who am I?</h3>
              <p>
                An enthusiastic developer with a knack for building products with good UI and UX.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
