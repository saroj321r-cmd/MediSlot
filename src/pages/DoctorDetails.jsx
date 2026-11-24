import { useParams, Link } from "react-router";

function DoctorDetails({ doctors, bookDoctor, cancelAppointment }) {
  const { id } = useParams();

  const doctor = doctors.find(
    (item) => item.id === Number(id)
  );

  if (!doctor) {
    return (
      <div className="container">
        <h2>Doctor not found</h2>
        <Link to="/doctors">Back to Doctors</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="doctor-details">
        <h1>{doctor.name}</h1>

        <p>Specialization: {doctor.specialization}</p>
        <p>Hospital: {doctor.hospital}</p>
        <p>Experience: {doctor.experience} years</p>
        <p>Consultation Fee: ₹{doctor.fee}</p>
        <p>Rating: {doctor.rating}</p>
        <p>Available Slots: {doctor.availableSlots}</p>

        {doctor.experience >= 10 && (
          <p className="badge senior">Senior Doctor</p>
        )}

        {doctor.isBooked ? (
          <div>
            <p className="badge booked">Appointment Booked</p>

            <button onClick={() => cancelAppointment(doctor.id)}>
              Cancel Appointment
            </button>
          </div>
        ) : !doctor.isAvailableToday ? (
          <p className="badge unavailable">Not Available Today</p>
        ) : doctor.availableSlots === 0 ? (
          <p className="badge unavailable">No Slots Left</p>
        ) : (
          <button onClick={() => bookDoctor(doctor.id)}>
            Book Appointment
          </button>
        )}

        <br />

        <Link to="/doctors">Back to Doctors</Link>
      </div>
    </div>
  );
}

export default DoctorDetails;
