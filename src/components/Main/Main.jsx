import React, { useContext } from "react";
import "./Main.css";
import profile from "../../assets/profile.jpg";
import map from "../../assets/map.svg";
import light from "../../assets/light.png";
import bed from "../../assets/bed.png";
import send from "../../assets/send.png";
import gal from "../../assets/galary.png";
import mic from "../../assets/mic.png";
import gemini from "../../assets/gemini.svg";
import { Context } from "../../context/Context";
const Main = () => {
  const { onSent, recentPrompt, result, loading, resultData, setInput, input } =
    useContext(Context);
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={profile} alt="" />
      </div>
      <div className="main-container">
        {!result ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev.</span>
              </p>
              <p>How can i help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>What's the time it takes to walk to several landmarks</p>
                <img src={map} alt="" />
              </div>
              <div className="card">
                <p>
                  Act like Mowgli from The Jungle Book. Answer this question:
                  What's your favorite memory with Baloo?
                </p>
                <img src={light} alt="" />
              </div>
              <div className="card">
                <p>
                  Find hotels in Phuket for a week in March and suggest a
                  packing list
                </p>
                <img src={bed} alt="" />
              </div>
              <div className="card">
                <p>
                  Explain the key rules of rugby. Start with the basics and go
                  step-by-step.
                </p>
                <img src={light} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={profile} height={30} width={30} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={gemini} alt="" />
              {loading ? (
                <div className="loader">
                    <hr />
                    <hr />
                    <hr />

                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here..."
            />
            <div>
              <img src={gal} alt="" />
              <img src={mic} alt="" />
            {input? <img onClick={() => onSent()} src={send} alt="" /> : null } 
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses.{" "}
            <a href="">Your privacy and Gemini Apps</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
