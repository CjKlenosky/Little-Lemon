

function Header() {
  return (
    <div className="hero-container">
    <header className="hero">
      <div className="hero-text">
        <h1>LITTLE LEMON</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button className="btn-primary">Reserve a Table</button>
      </div>
      <div className="hero-image">
        <img src="/images\restaurant-food.jpg" alt="Delicious Mediterranean dish" />
      </div>
    </header>
    </div>
  );
}

export default Header;
