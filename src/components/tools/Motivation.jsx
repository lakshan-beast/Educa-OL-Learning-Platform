import { useState } from "react";
import { FaQuoteLeft, FaQuoteRight, FaArrowsRotate } from "react-icons/fa6";

const Motivation = () => {
  const quotes = [
    "අද කරන කැපවීම හෙට දිනන ජයග්‍රහණයේ රහසයි.",
    "විභාගය කියන්නේ තවත් එක කඩඉමක් විතරයි, බය නැතුව මුහුණ දෙන්න.",
    "සාර්ථකත්වය කරා යන පාරේ කෙටි මං නැත.",
    "Your future is created by what you do today, not tomorrow.",
    "Believe in yourself and you are halfway there.",
  ];

  const [quote, setQuote] = useState(quotes[0]);

  const nextQuote = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[random]);
  };

  return (
    <div className="card-container motivation-tool" data-aos="fade-up">
      <h1>Daily Motivation</h1>
      <div className="quote-box">
        <p>
          <FaQuoteLeft />
          {quote}
          <FaQuoteRight />
        </p>

        <button onClick={nextQuote} className="browse-btn">
          <FaArrowsRotate /> Next Quote
        </button>
      </div>
    </div>
  );
};

export default Motivation;
