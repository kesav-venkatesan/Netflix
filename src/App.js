import Nav from "./Navigation.js";
import "./App.css";
import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
const PriceCard = (props) => {
  return (
    <div
      style={{
        backgroundColor: "azure",
        height: "80%",
        width: "80%",
        padding: "56px 24px",
      }}
      className="PriceCard"
    >
      <h1>{props.price}</h1>
      <div className="Plan">
        <h5>Features:</h5>
        <div>
          <h5>✅ {props.devices} devices</h5>
          <h5>{props.lap} TV, Laptop & mobile</h5>
          <h5>{props.add} No ads</h5>
          <h5>{props.video} 4k 2160+ Video</h5>
          <h5>{props.audio} Dalby Atmos</h5>
        </div>
      </div>
    </div>
  );
};

const PriceContent = () => {
  return (
    <div>
      <h3 className="Plan_heading">A plan to suit your needs</h3>
      <div className="PriceContent">
        <PriceCard
          price="₹299"
          lap="❌"
          add="❌"
          video="❌"
          audio="❌"
          devices="1"
        />
        <PriceCard
          price="₹499"
          lap="❌"
          add="✅"
          video="❌"
          audio="❌"
          devices="2"
        />
        <PriceCard
          price="₹699"
          lap="✅"
          add="✅"
          video="✅"
          audio="❌"
          devices="4"
        />
        <PriceCard
          price="₹1299"
          lap="✅"
          add="✅"
          video="✅"
          audio="✅"
          devices="4"
        />
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="HomePage"style={{background: `linear-gradient(to bottom,rgba(0,0,0,0.7),rgba(0,0,0,0.7)) ,url(${"/images/header-image.png"})`}}>
      <Nav />
      <div className="HomeContent">
        <h1>
          Ultimated movies,TV
          <br />
          shows and more
        </h1>
        <h4 style={{ color: "#ffffffa0" }}>
          Starts at ₹299. Cancel at any time.
        </h4>
        <p style={{ color: "#ffffffa0" }}>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="search">
          <input type="text" placeholder=" Email address "></input>
          <button>
            Get Explore{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-right-circle"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="Footer">
      {" "}
      <p style={{ color: "#ffffffa0" }}>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="search">
        <input type="text" placeholder=" Email address "></input>
        <button>
          Get Explore{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-right-circle"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
            />
          </svg>
        </button>
      </div>
      <div className="Footer_Content">
        <div className="call">
          <p style={{ color: "#ffffffa0" }}>Questions? Call 000-800-919-1743</p>
        </div>
        <div className="Below_Call">
          <p class="call_below_text">FAQ</p>
          <p class="call_below_text">Help Centre</p>
          <p class="call_below_text">Account</p>
          <p class="call_below_text">Media Centre</p>
          <p class="call_below_text">Investor Relations</p>
          <p class="call_below_text">Jobs</p>
          <p class="call_below_text">Ways to Watch</p>
          <p class="call_below_text">Terms of Use</p>
          <p class="call_below_text">Privacy</p>
          <p class="call_below_text">Cookie Preferences</p>
          <p class="call_below_text">Corporate Information</p>
          <p class="call_below_text">Corporate Information</p>
          <p class="call_below_text">Speed Test</p>
          <p class="call_below_text">Legal Notices</p>
          <p class="call_below_text">Only on Netflix</p>
        </div>
        <p style={{color:"azure"}}>Netflix India</p>
      </div>
    </div>
  );
};
const App = () => {
  
  return (
    <div>
      <HomePage />
      <PriceContent />
      <Footer />
    </div>
  );
};
export  {App,Footer};
