
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import doctorsData from "./data/doctors";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import DoctorDetails from "./pages/DoctorDetails";
import Appointments from "./pages/Appointments";

import "./App.css";

function App() {
  const [doctors, setDoctors] = useState(doctorsData);

  function bookDoctor(id) {
    const updatedDoctors = doctors.map((doctor) => {
      if (
        doctor.id === id &&
        doctor.isAvailableToday &&
        doctor.availableSlots > 0 &&
        !doctor.isBooked
      ) {
        return {
          ...doctor,
          isBooked: true,
          availableSlots: doctor.availableSlots - 1
        };
      }

      return doctor;
    });

    setDoctors(updatedDoctors);
  }

  function cancelAppointment(id) {
    const updatedDoctors = doctors.map((doctor) => {
      if (doctor.id === id && doctor.isBooked) {
        return {
          ...doctor,
          isBooked: false,
          availableSlots: doctor.availableSlots + 1
        };
      }

      return doctor;
    });

    setDoctors(updatedDoctors);
  }

  const bookedDoctors = doctors.filter((doctor) => doctor.isBooked);

  return (
    <BrowserRouter>
      <Navbar bookedCount={bookedDoctors.length} />

      <Routes>
        <Route
          path="/"
          element={<Home doctors={doctors} />}
        />

        <Route
          path="/doctors"
          element={<Doctors doctors={doctors} />}
        />

        <Route
          path="/doctors/:id"
          element={
            <DoctorDetails
              doctors={doctors}
              bookDoctor={bookDoctor}
              cancelAppointment={cancelAppointment}
            />
          }
        />

        <Route
          path="/appointments"
          element={
            <Appointments
              bookedDoctors={bookedDoctors}
              cancelAppointment={cancelAppointment}
            />
          }
        />
      </Routes>

      <footer>
        <p>© 2026 MediSlot | Doctor Appointment System</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
