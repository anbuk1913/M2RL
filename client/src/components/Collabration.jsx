import React from "react";
import "./collab.css";

const logos = [
    { image: "collab\\Anbu.png", name: "Anbukumar Careers" },
    { image: "collab\\D&R.jpeg", name: "D&R Technologies" },
    { image: "collab\\Nano.png", name: "Nano Tech" },
    { image: "collab\\Oscar.png", name: "Oscar Academy" },
    { image: "collab\\Stj.png", name: "STJ Academy" },
];

const ClientLogoSlider = () => {
  return (
    <div className="content-wrap bottom-animated middle-animated animated top-animated">
      <p className="cm-eyebrow">Trusted by teams at</p>
      <div className="logo-slider">
        <div className="logo-track">
            {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <div className="logo-item" key={index}>
                <img src={logo.image} alt={logo.name} />
                <div className="logo-name">{logo.name}</div>
            </div>
            ))}
        </div>
        </div>
    </div>
  );
};

export default ClientLogoSlider;