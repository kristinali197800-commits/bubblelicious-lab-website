"use client";

import { useState } from "react";

const reviews = [
  {
    quote: "The owners were friendly and helpful explaining how to customize our drinks.",
    name: "Ashley Suthammanont",
    detail: "Google review · 5 stars",
  },
  {
    quote: "The interior is super cute, and I love how you can mix and match flavors.",
    name: "Ashesh Dalwadi",
    detail: "Google review · 5 stars",
  },
  {
    quote: "Very quick turnover. Interesting combination design.",
    name: "Teir",
    detail: "Google Local Guide · 5 stars",
  },
  {
    quote: "The staff is always very nice, and the food and drinks have been good every single time.",
    name: "Yuki Rosaline",
    detail: "Google review · 5 stars",
  },
  {
    quote: "Already thinking about my next flavor combinations.",
    name: "Jennifer Nguyen",
    detail: "Google review · 5 stars",
  },
  {
    quote: "Mocha coffee, Thai iced tea, and strawberry bubble tea were all delicious.",
    name: "J Na",
    detail: "Google Local Guide · 5 stars",
  },
  {
    quote: "My nine-year-old said this place deserves 100 stars.",
    name: "Judith Savage",
    detail: "Google review · 5 stars",
  },
  {
    quote: "The signs make the different drink sections easy to follow.",
    name: "Combat Chan",
    detail: "Google Local Guide · 5 stars",
  },
  {
    quote: "The owner accommodated my low-sugar request, and service was very fast.",
    name: "Lisa Minerd",
    detail: "Google review · 5 stars",
  },
];

export default function ReviewCarousel() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<"next" | "previous">("next");
  const review = reviews[active];

  const move = (amount: number) => {
    setDirection(amount > 0 ? "next" : "previous");
    setActive((current) => (current + amount + reviews.length) % reviews.length);
  };

  const selectReview = (index: number) => {
    if (index === active) return;
    setDirection(index > active ? "next" : "previous");
    setActive(index);
  };

  return (
    <div className="review-carousel">
      <div className="review-progress" aria-live="polite">
        <span>Review {String(active + 1).padStart(2, "0")}</span>
        <span>{String(reviews.length).padStart(2, "0")}</span>
      </div>
      <div className="review-slide-window">
      <blockquote key={`${review.name}-${active}`} className={`review-slide review-slide-${direction}`}>
        <span className="quote-mark" aria-hidden="true">“</span>
        <p>{review.quote}</p>
        <footer>
          <span className="review-avatar" aria-hidden="true">{review.name.charAt(0)}</span>
          <span><strong>{review.name}</strong><small>{review.detail}</small></span>
        </footer>
      </blockquote>
      </div>
      <div className="carousel-controls">
        <button type="button" onClick={() => move(-1)} aria-label="Previous review">←</button>
        <div className="review-dots" aria-label="Choose a review">
          {reviews.map((item, index) => (
            <button
              type="button"
              key={item.name}
              className={index === active ? "active" : ""}
              onClick={() => selectReview(index)}
              aria-label={`Show review ${index + 1}`}
              aria-current={index === active ? "true" : undefined}
            />
          ))}
        </div>
        <button type="button" onClick={() => move(1)} aria-label="Next review">→</button>
      </div>
    </div>
  );
}
