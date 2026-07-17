const uberUrl =
  "https://www.ubereats.com/store/bubblelicious-lab/BQBu6StxTiCa3hSJDh299Q?srsltid=AfmBOopfNs-geJdFd9EmLvhnxwHqtQ6XdN_Efg_s4X4ew4oFkUiEMEra";
const mapsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=Bubblelicious+Lab%2C+2110+Marlton+Pike+East%2C+Cherry+Hill%2C+NJ+08003";
const reviewsUrl =
  "https://www.google.com/maps/place/Bubblelicious+Lab/@39.896435,-74.9469054,17z/data=!4m8!3m7!1s0x89c135154f418c67:0x5d46a6c23705f1e4!8m2!3d39.896435!4d-74.9469054!9m1!1b1!16s%2Fg%2F11fd7c9tb5";

const categories = [
  {
    code: "BASE 01",
    title: "Fruit Tea & Slush",
    note: "Flavor syringes make these fruit-forward bases easy to mix and match.",
    image: "/photos/customer-6.jpg",
    tags: ["Lychee", "Mango", "Strawberry", "Green apple"],
  },
  {
    code: "BASE 02",
    title: "Bubble Milk Tea",
    note: "Choose two test-tube flavor powders, a sugar level, and your toppings.",
    image: "/photos/menu-2.webp",
    tags: ["Taro", "Thai", "Matcha", "Mocha"],
  },
  {
    code: "BASE 03",
    title: "Hot Milk Tea & Coffee Slush",
    note: "Hot milk tea uses one flavor powder; coffee slush lets you choose two.",
    image: "/photos/uber-cover-1.jpg",
    tags: ["Mocha", "Coffee", "Thai", "Taro"],
  },
  {
    code: "BASE 04",
    title: "Yogurt Drink",
    note: "Pair one fruit-flavor syringe with a yogurt container, then add toppings.",
    image: "/photos/menu-1.webp",
    tags: ["Lychee", "Strawberry", "Mango", "Peach"],
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Bubblelicious Lab home">
          <span className="brand-mark" aria-hidden="true">
            BL
          </span>
          <span>
            <strong>Bubblelicious Lab</strong>
            <small>Cherry Hill, New Jersey</small>
          </span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#protocol">The protocol</a>
          <a href="#menu">Menu</a>
          <a href="/reviews">Reviews</a>
          <a href="#visit">Visit</a>
        </nav>
        <a className="button button-small" href={uberUrl} target="_blank" rel="noreferrer">
          Order online <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Cherry Hill&apos;s build-your-own bubble tea lab</p>
          <h1>
            Your drink.
            <br />
            Your <em>experiment.</em>
          </h1>
          <p className="hero-lede">
            Pick a base, choose the flavors made for that drink, and finish with the
            toppings you love. There is no wrong formula here.
          </p>
          <div className="hero-actions">
            <a className="button" href={uberUrl} target="_blank" rel="noreferrer">
              Start an order <span aria-hidden="true">→</span>
            </a>
            <a className="text-link" href="#protocol">
              See how it works <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="proof-strip" aria-label="Customer rating and services">
            <div>
              <strong>4.9</strong>
              <span>★★★★★</span>
              <small>420 Google reviews</small>
            </div>
            <div>
              <strong>20+</strong>
              <span>flavors</span>
              <small>Mix, match, repeat</small>
            </div>
            <div>
              <strong>7 days</strong>
              <span>a week</span>
              <small>Dine-in · Takeout</small>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Inside Bubblelicious Lab and a fruit tea">
          <div className="photo photo-main">
            <img src="/photos/uber-cover-1.jpg" alt="Colorful Bubblelicious Lab drinks and desserts" />
          </div>
          <div className="photo photo-syringes">
            <img src="/photos/customer-3.jpg" alt="Rows of labeled flavor syringes" />
          </div>
          <div className="photo photo-drink">
            <img src="/photos/menu-2.webp" alt="Orange milk tea with popping bubbles" />
          </div>
          <div className="formula-sticker" aria-hidden="true">
            <span>C₈H₁₀N₄O₂</span>
            <strong>+ joy</strong>
          </div>
          <span className="scribble scribble-one" aria-hidden="true">your formula!</span>
        </div>
      </section>

      <section className="protocol section" id="protocol">
        <div className="section-heading">
          <p className="eyebrow">Procedure · 001</p>
          <h2>A tea shop that acts like a lab.</h2>
          <p>
            Bubblelicious Lab makes bubble tea more fun by letting you build it yourself.
            Grab a tray, choose a base, collect the matching flavor syringes or test-tube
            powders, then make a drink that is completely yours.
          </p>
        </div>
        <div className="steps">
          <article>
            <span className="step-number">01</span>
            <div className="step-icon cup-icon" aria-hidden="true">◯</div>
            <h3>Choose your base</h3>
            <p>Fruit tea, bubble milk tea, hot milk tea, fruit slush, yogurt drink, or coffee slush.</p>
          </article>
          <article>
            <span className="step-number">02</span>
            <div className="step-icon syringe-icon" aria-hidden="true">↗</div>
            <h3>Choose your flavors</h3>
            <p>Fruit drinks use syrup syringes. Milk tea and coffee slush use flavor powders in test tubes.</p>
          </article>
          <article>
            <span className="step-number">03</span>
            <div className="step-icon bubble-icon" aria-hidden="true">●</div>
            <h3>Add your specimens</h3>
            <p>Finish with tapioca, popping bubbles, jellies, or your favorite texture.</p>
          </article>
        </div>
        <p className="protocol-note">First experiment? The owners will walk you through every step.</p>
      </section>

      <section className="menu section" id="menu">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">Formula index</p>
            <h2>Build a classic. Or invent one.</h2>
          </div>
          <p>
            These are starting points, not limits. Flavor availability rotates, so the best
            menu is the one waiting at the lab.
          </p>
        </div>
        <div className="menu-grid">
          {categories.map((item) => (
            <article className="menu-card" key={item.title}>
              <div className="menu-photo">
                <img src={item.image} alt={`${item.title} from Bubblelicious Lab`} />
                <span>{item.code}</span>
              </div>
              <div className="menu-card-copy">
                <h3>{item.title}</h3>
                <p>{item.note}</p>
                <ul aria-label={`${item.title} flavor ideas`}>
                  {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <div className="menu-banner">
          <div>
            <p className="eyebrow">Lab favorites</p>
            <h3>Need a little inspiration?</h3>
          </div>
          <p>
            Try mango + lychee milk tea, strawberry + lychee fruit tea, pomegranate +
            blueberry, a taro slush, or a coffee slush with boba.
          </p>
          <a className="button button-light" href={uberUrl} target="_blank" rel="noreferrer">
            Explore online menu <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="visit section" id="visit">
        <div className="visit-photo">
          <img src="/photos/customer-hero.jpg" alt="Exterior of Bubblelicious Lab in Cherry Hill" />
          <span>FZ 8 · The Point at Marlton</span>
        </div>
        <div className="visit-copy">
          <p className="eyebrow">Lab location</p>
          <h2>Come thirsty.<br />Come curious.</h2>
          <div className="visit-details">
            <div>
              <span className="detail-label">Address</span>
              <p>2110 Marlton Pike East<br />Cherry Hill, NJ 08003</p>
              <a href={mapsUrl} target="_blank" rel="noreferrer">Get directions ↗</a>
            </div>
            <div>
              <span className="detail-label">Hours</span>
              <p>Monday–Sunday<br />11:30 AM–8:00 PM</p>
              <small>Hours may vary on holidays.</small>
            </div>
            <div>
              <span className="detail-label">Contact</span>
              <p><a href="tel:+18564899898">(856) 489-9898</a><br /><a href="https://www.instagram.com/bubblelicious_lab/" target="_blank" rel="noreferrer">@bubblelicious_lab</a></p>
            </div>
            <div>
              <span className="detail-label">Service</span>
              <p>Dine-in · Takeout<br />Online ordering</p>
            </div>
          </div>
          <div className="visit-actions">
            <a className="button" href={mapsUrl} target="_blank" rel="noreferrer">Plan your visit →</a>
            <a className="button button-outline" href="tel:+18564899898">Call the lab</a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand">
          <span className="brand-mark">BL</span>
          <div><strong>Bubblelicious Lab</strong><small>Build your own happy.</small></div>
        </div>
        <div className="footer-links">
          <a href="#protocol">The protocol</a>
          <a href="#menu">Menu</a>
          <a href="/reviews">Reviews</a>
          <a href="#visit">Visit</a>
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
