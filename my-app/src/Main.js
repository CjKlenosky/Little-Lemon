import { useState } from "react";

function Main() {
  // Testimonials data
  const testimonialsData = [
    {
      avatar: "SJ",
      name: "Sarah Johnson",
      text: "Absolutely incredible! The flavors are authentic and the service is exceptional. Little Lemon has become our go-to restaurant for special occasions.",
    },
    {
      avatar: "MC",
      name: "Michael Chen",
      text: "The best Mediterranean food in Chicago! Every dish is fresh and delicious. Little Lemon is perfect for both casual dining and celebrations.",
    },
    {
      avatar: "AK",
      name: "Alex Kim",
      text: "Wonderful experience! The ambiance is cozy and the staff is friendly. Highly recommend Little Lemon to anyone craving fresh, authentic flavors.",
    },
  ];

  const [centerIndex, setCenterIndex] = useState(1);

  const handleTestimonialClick = (index) => {
    setCenterIndex(index);
  };

  return (
    <main>
      {/* Specials Section */}
      <section className="specials">
        <div className="section-header">
          <h2>This Week’s Specials!</h2>
          <button className="btn-secondary">Online Menu</button>
        </div>

        <div className="specials-grid">
          <article className="card">
            <img src="/images/greek-salad.jpg" alt="Greek Salad" />
            <div className="card-body">
              <div className="card-header">
                <h3>Greek Salad</h3>
                <span className="price">$12.99</span>
              </div>
              <p>
                The famous Greek salad of crispy lettuce, peppers, olives, and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.
              </p>
              <button className="btn-link">Order For Delivery →</button>
            </div>
          </article>

          <article className="card">
            <img src="/images/bruchetta.svg" alt="Bruschetta" />
            <div className="card-body">
              <div className="card-header">
                <h3>Bruschetta</h3>
                <span className="price">$8.50</span>
              </div>
              <p>
                Our Bruschetta is made from grilled bread that has been smeared
                with garlic and seasoned with salt and olive oil.
              </p>
              <button className="btn-link">Order For Delivery →</button>
            </div>
          </article>

          <article className="card">
            <img src="/images/lemon-dessert.jpg" alt="Lemon Dessert" />
            <div className="card-body">
              <div className="card-header">
                <h3>Lemon Dessert</h3>
                <span className="price">$6.50</span>
              </div>
              <p>
                This comes straight from grandma’s recipe book, every last
                ingredient has been sourced and is as authentic as can be
                imagined.
              </p>
              <button className="btn-link">Order For Delivery →</button>
            </div>
          </article>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonials-grid">
          {testimonialsData.map((testimonial, index) => {
            const position = index === centerIndex ? "center" : "side";
            return (
              <div
                key={index}
                className={`testimonial ${position}`}
                onClick={() => handleTestimonialClick(index)}
              >
                <div className="testimonial-header">
                  <div className="avatar">{testimonial.avatar}</div>
                  <div className="name-and-stars">
                    <h4>{testimonial.name}</h4>
                    <div className="stars">★★★★★</div>
                  </div>
                </div>
                <p>{testimonial.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="about-text">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            Founded in 1995, Little Lemon is a beloved family-owned Mediterranean
            restaurant located in Chicago. Our story began with a mission to
            bring the authentic flavors of the Mediterranean to our neighborhood
            while infusing a warm, welcoming spirit for every visitor.
          </p>
          <p>
            We take pride in using the freshest ingredients, traditional recipes
            passed through generations, and a modern culinary twist. Little
            Lemon isn’t just about food – it’s about family, heritage, and
            community. Every dish we serve tells a story of our heritage and
            passion for exceptional food.
          </p>
        </div>
        <div className="about-images">
            <img src="/images/mario-adrian-b.jpg" alt="Little Lemon staff" />
          <img src="/images/mario-adrian-a.jpg" alt="Chefs preparing food" />
        </div>
      </section>
    </main>
  );
}

export default Main;
