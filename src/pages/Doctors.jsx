import { useState } from "react";
import DoctorCard from "../components/DoctorCard";

function Doctors({ doctors }) {
  const [search, setSearch] = useState("");
  const [specialization, setSpecialization] = useState("All");

  const filteredDoctors = doctors.filter((doctor) => {
    const nameMatch = doctor.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const specializationMatch =
      specialization === "All" ||
      doctor.specialization === specialization;

    return nameMatch && specializationMatch;
  });

  return (
    <div className="doctors-container">
      <h1>Find Doctors</h1>

      <input
        type="text"
        placeholder="Search doctor name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={specialization}
        onChange={(e) => setSpecialization(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Cardiologist">Cardiologist</option>
        <option value="Dermatologist">Dermatologist</option>
        <option value="Orthopedic">Orthopedic</option>
        <option value="Pediatrician">Pediatrician</option>
        <option value="Dentist">Dentist</option>
      </select>

      <div className="doctors-grid">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))
        ) : (
          <p>No doctors found.</p>
        )}
      </div>
    </div>
  );
}

export default Doctors;
