import { Link } from "react-router";
import DoctorCard from "../components/DoctorCard";

function Home({ doctors }) {
  const availableDoctors = doctors.filter(
    (doctor) => doctor.isAvailableToday && doctor.availableSlots > 0
  );

  const bookedDoctors = doctors.filter(
    (doctor) => doctor.isBooked
  );

  return (
    <div className="container">
      <div className="hero">
        <h1>Welcome to MediSlot</h1>
        <p>Find doctors and book your appointments easily.</p>

        <Link to="/doctors" className="view-button">
          Find Doctors
        </Link>
      </div>

      <div className="stats">
        <div>
          <h2>{doctors.length}</h2>
          <p>Total Doctors</p>
        </div>

        <div>
          <h2>{availableDoctors.length}</h2>
          <p>Doctors Available Today</p>
        </div>

        <div>
          <h2>{bookedDoctors.length}</h2>
          <p>Booked Appointments</p>
        </div>
      </div>

      <h2>Doctors</h2>

      <div className="doctors-grid">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
}

export default Home;
