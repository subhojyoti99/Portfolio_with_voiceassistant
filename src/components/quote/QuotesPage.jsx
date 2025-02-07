import React from "react";
import { useNavigate } from "react-router-dom";
import "./quotesPage.css";

const quotes = [
  { bn: "মেট্রো যেন একটা বিশাল কেন্ন।", en: "Metro is like a huge cane." },
  {
    bn: "সফলতা চূড়ান্ত নয়, ব্যর্থতাও ধ্বংসাত্মক নয়।",
    en: "Success is not final, failure is not fatal.",
  },
  {
    bn: "আপনার সময় সীমিত, তাই এটি অন্যের জীবনযাপন করে নষ্ট করবেন না।",
    en: "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
  },
  {
    bn: "একটি দুর্দান্ত কাজ করার একমাত্র উপায় হল আপনার যা করা ভালোবাসেন তা করা।",
    en: "The only way to do great work is to love what you do. - Steve Jobs",
  },
  {
    bn: "বড় স্বপ্ন দেখুন এবং ব্যর্থ হওয়ার সাহস করুন।",
    en: "Dream big and dare to fail. - Norman Vaughan",
  },
  {
    bn: "আপনি যে ১০০% শট নেন না, তা আপনি মিস করেন।",
    en: "You miss 100% of the shots you don't take. - Wayne Gretzky",
  },
];

export const QuotesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="quotes-container">
      {/* <button className="back-button" onClick={() => navigate(-1)}> */}
      <button
        className="back-button"
        onClick={() => navigate("/Portfolio_with_voiceassistant")}
      >
        ← Back
      </button>
      <h1 className="quotes-title">My Thoughts</h1>
      <div className="quotes-grid">
        {quotes.map((quote, index) => (
          <div key={index} className="quote-card">
            <p className="bn-quote">{quote.bn}</p>
            <p className="en-quote">{quote.en}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
