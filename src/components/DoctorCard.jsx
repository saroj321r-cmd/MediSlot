import { Link } from "react-router";

function DoctorCard({ doctor, cancelAppointment }) {
  return (
    <div className="doctor-card">
      <h3>{doctor.name}</h3>
      <p>Specialization: {doctor.specialization}</p>
      <p>Experience: {doctor.experience} years</p>
      <p>Consultation Fee: ₹{doctor.fee}</p>
      <p>Rating: {doctor.rating}</p>

      {doctor.experience >= 10 && (
        <p className="badge senior">Senior Doctor</p>
      )}

      {doctor.isAvailableToday && doctor.availableSlots > 0 ? (
        <p className="badge available">Available Today</p>
      ) : (
        <p className="badge unavailable">Not Available</p>
      )}

      <p>Available Slots: {doctor.availableSlots}</p>

      <Link
        to={"/doctors/" + doctor.id}
        className="view-button"
      >
        View Details
      </Link>

      {doctor.isBooked && cancelAppointment && (
        <button onClick={() => cancelAppointment(doctor.id)}>
          Cancel Appointment
        </button>
      )}
    </div>
  );
}

export default DoctorCard;
