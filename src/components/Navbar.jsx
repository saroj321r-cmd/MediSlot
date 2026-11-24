import { Link } from "react-router";

function Navbar({ bookedCount }) {
  return (
    <div className="navbar">
      <h2>MediSlot</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/doctors">Find Doctors</Link>
        <Link to="/appointments">
          Appointments ({bookedCount})
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
