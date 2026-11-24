import DoctorCard from "../components/DoctorCard";

function Appointments({ bookedDoctors, cancelAppointment }) {
  const totalFee = bookedDoctors.reduce(
    (total, doctor) => total + doctor.fee,
    0
  );

  return (
    <div className="doctors-container">
      <h1>My Appointments</h1>

      {bookedDoctors.length > 0 ? (
        <div>
          <div className="total-fee">
            <h3>Total Consultation Fee: ₹{totalFee}</h3>
          </div>

          <div className="doctors-grid">
            {bookedDoctors.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
                cancelAppointment={cancelAppointment}
              />
            ))}
          </div>
        </div>
      ) : (
        <p>No appointments booked.</p>
      )}
    </div>
  );
}

export default Appointments;
