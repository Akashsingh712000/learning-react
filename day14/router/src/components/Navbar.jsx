import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>MyWebsite</h2>

      <ul style={styles.ul}>
        <li><NavLink className={({isActive}) => isActive ? "bg-amber-700" : ""} to="/">Home</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? "bg-amber-700" : ""} to="/about">About</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? "bg-amber-700" : ""} to="/contact">Contact</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? "bg-amber-700" : ""} to="/Product">Product</NavLink></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    background: "#222",
    color: "white",
  },
  logo: {
    margin: 0,
  },
  ul: {
    display: "flex",
    listStyle: "none",
    gap: "20px",
    margin: 0,
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "18px",
  }
};
