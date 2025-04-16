import { Link } from 'react-router-dom';
import '../index.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">TourMate</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/tours">Tours</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
