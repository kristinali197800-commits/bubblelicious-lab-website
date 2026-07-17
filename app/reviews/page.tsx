import type { Metadata } from "next";
import Link from "next/link";
import { siteUrl } from "../site-paths";
import ReviewCarousel from "./ReviewCarousel";

const uberUrl =
  "https://www.ubereats.com/store/bubblelicious-lab/BQBu6StxTiCa3hSJDh299Q?srsltid=AfmBOopfNs-geJdFd9EmLvhnxwHqtQ6XdN_Efg_s4X4ew4oFkUiEMEra";
const reviewsUrl =
  "https://www.google.com/maps/place/Bubblelicious+Lab/@39.896435,-74.9469054,17z/data=!4m8!3m7!1s0x89c135154f418c67:0x5d46a6c23705f1e4!8m2!3d39.896435!4d-74.9469054!9m1!1b1!16s%2Fg%2F11fd7c9tb5";

export const metadata: Metadata = {
  title: "Reviews | Bubblelicious Lab",
  description: "Read customer reviews of Bubblelicious Lab in Cherry Hill, New Jersey.",
  alternates: { canonical: `${siteUrl}/reviews/` },
  openGraph: {
    title: "Reviews | Bubblelicious Lab",
    description: "Read customer reviews of Bubblelicious Lab in Cherry Hill, New Jersey.",
    url: `${siteUrl}/reviews/`,
  },
};

export default function ReviewsPage() {
  return (
    <main className="reviews-page">
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Bubblelicious Lab home">
          <span className="brand-mark" aria-hidden="true">BL</span>
          <span><strong>Bubblelicious Lab</strong><small>Cherry Hill, New Jersey</small></span>
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/">Home</Link>
          <Link href="/reviews" aria-current="page">Reviews</Link>
          <Link href="/#visit">Visit</Link>
        </nav>
        <a className="button button-small" href={uberUrl} target="_blank" rel="noreferrer">
          Order online <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="reviews-stage">
        <div className="reviews-intro">
          <p className="eyebrow">Peer review</p>
          <h1>Made by you.<br /><em>Loved by many.</em></h1>
          <div className="review-score-row">
            <strong>4.9</strong>
            <span><b aria-label="4.9 out of 5 stars">★★★★★</b><small>420 Google reviews</small></span>
          </div>
          <p className="reviews-lede">
            Guests keep coming back for the friendly owners, mix-and-match flavors,
            quick service, and a process that is easier than it first looks.
          </p>
          <a className="text-link" href={reviewsUrl} target="_blank" rel="noreferrer">
            Read every Google review <span aria-hidden="true">↗</span>
          </a>
        </div>
        <ReviewCarousel />
      </section>

      <section className="review-topics" aria-label="What customers mention most">
        <p className="eyebrow">Common findings</p>
        <div>
          <span>Friendly owners</span>
          <span>54 mentions of flavor selection</span>
          <span>Customizable drinks</span>
          <span>Fun atmosphere</span>
          <span>Low-sugar options</span>
        </div>
      </section>

      <footer className="site-footer reviews-footer">
        <div className="footer-brand">
          <span className="brand-mark">BL</span>
          <div><strong>Bubblelicious Lab</strong><small>Build your own happy.</small></div>
        </div>
        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/#visit">Visit</Link>
        </div>
        <div className="footer-social">
          <a href="https://www.instagram.com/bubblelicious_lab/" target="_blank" rel="noreferrer">Instagram ↗</a>
          <a href={uberUrl} target="_blank" rel="noreferrer">Uber Eats ↗</a>
          <a href={reviewsUrl} target="_blank" rel="noreferrer">Google ↗</a>
        </div>
        <p className="footer-note">© 2026 Bubblelicious Lab · Cherry Hill, NJ</p>
      </footer>
    </main>
  );
}
