function Footer (){
    return (
        <footer>
            <div>
                <img
                src="/images/litle-lemon-logo.png"
                alt="Little Lemon Logo"
                width="120"
                />
            </div>

            <nav>
                 <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href ="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/order">Order Online</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
            </nav>

            <section>
                <h4>Follow Us</h4>
                <ul>
                    <li><a href="https://facebook.com">Facebook</a></li>
                    <li><a href="https://instagram.com">Instagram</a></li>
                    <li><a href="https://twitter.com">Twitter</a></li>
                </ul>
            </section>

            <p>&copy; {newdate().getFullYear()} Little Lemon. All rights reserved.</p>

        </footer>
    );
}

export default Footer;