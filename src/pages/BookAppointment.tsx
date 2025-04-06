
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AppointmentSection from '@/components/AppointmentSection';

const BookAppointment = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AppointmentSection />
      </main>
      <Footer />
    </div>
  );
};

export default BookAppointment;
