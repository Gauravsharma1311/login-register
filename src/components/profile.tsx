import React from "react";
import "./profile.css";
import pic from "../1708392191394.jpg";

const Profile: React.FC = () => {
  const handleFollowClick = () => {
    window.location.href = "https://www.instagram.com/jaipur_k_nawabjade_/";
  };
  return (
    <div className="sp-container">
      <div className="sp-content">
        <div className="sp-globe"></div>
        <h2 className="frame-1">हम एक वेब डेवलपर हैं, </h2>
        <h2 className="frame-2">हमारे साथ जुड़ने के लिए आपका धन्यवाद🙏</h2>
        <h2 className="frame-3">हमारी डेयरी आपका स्वागत करती है|</h2>
        <h2 className="frame-4">
          <a className="sp-circle-link" href="https://hamaridairy.com/">
            Join
          </a>
        </h2>
        <h2 className="frame-5">
          <span>Welcome☺︎</span>
          <br />
          <span style={{ color: "#2c2c2c" }}>
            Hamari Dairy Desktop Application
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Profile;
