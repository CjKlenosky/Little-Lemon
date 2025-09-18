function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Navigation</h4>
        <ul>
          <li><a href="#home">Home</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#reservations">Reservations</a></li>
        <li><a href="#order">Order Online</a></li>
        <li><a href="#login">Login</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Contact</h4>
        <p>2200 N. Western Ave<br />Chicago, IL 60647</p>
        <p>(312) 555-1234</p>
        <p>info@littlelemon.com</p>
      </div>

      <div className="footer-section">
        <h4>Hours</h4>
        <p>Monday - Saturday: 5pm - 11pm</p>
        <p>Sunday: 5pm - 9:30pm</p>
      </div>
    </footer>
  );
}

export default Footer;