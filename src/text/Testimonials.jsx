// import React from 'react';
import { FaCircleCheck, FaGraduationCap, FaStar } from "react-icons/fa6";

const Testimonials = () => {
  const reviews = [
    {
      name: "Student 01",
      batch: "2019 O/L batch",
      subject: "Maths Teacher",
      text: "The Maths lessons were so simple! I went from an S grade to an A in just 6 months.",
      rating: 5,
    },
    {
      name: "Student 02",
      batch: "2021 O/L batch",
      subject: "Science Teacher",
      text: "Simplified theories and amazing memory techniques helped me ace my Science paper.",
      rating: 5,
    },
    {
      name: "Student 03",
      batch: "2022 O/L batch",
      subject: "English Teacher",
      text: "I gained so much confidence in my writing and speaking. Highly recommended!",
      rating: 5,
    },
  ];

  return (
    <section className="testimonials parts" id="testimonials">
      <h2>
        What <span>Our Students Say</span>
      </h2>
      <p>
        Real Success Stories from students who transformed their results with
        us.
      </p>

      <div className="testimonials-container">
        {reviews.map((review, index) => (
          <div className="comment-box" key={index} data-aos="fade-up">
            <div className="comment-top">
              <h2>
                {review.name} <FaCircleCheck />
              </h2>
              <span>
                <FaGraduationCap /> | {review.batch}
              </span>
            </div>
            <h3>{review.subject}</h3>
            <div className="comment-content">
              <p>{review.text}</p>
            </div>
            <div className="comment-rate">
              <span>
                {/* Rating එක අනුව තරු පෙන්වීම */}
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </span>
            </div>
          </div>
        ))}
      </div>
      <a href="review.html" className="reviews-btn">
        Read more success stories.
      </a>
    </section>
  );
};

export default Testimonials;
