
import React from 'react';
import { Award, ThumbsUp, Users, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-2 text-gray-900">About Dr. Shraddhanand Prajapati</h2>
            <div className="w-20 h-1 bg-physio-500 mb-6"></div>
            <p className="text-gray-600 mb-6">
            Dr. Shraddhanand Prajapati is a renowned physiotherapist with over 10 years of expertise in treating a wide range of musculoskeletal conditions. His practice combines evidence-based techniques with a compassionate, patient-centered approach to deliver optimal outcomes.
            </p>
            <p className="text-gray-600 mb-6">
              After graduating with honors and receiving specialized training in orthopedic rehabilitation, sports medicine, and neurological recovery, Dr. Shraddhanand Prajapati established PhysioHealth with a mission to provide exceptional care that addresses the root cause of pain and dysfunction.
            </p>
            <p className="text-gray-600 mb-8">
              His passion for continuous learning and commitment to staying at the forefront of physiotherapy innovations ensures that his patients receive the most effective treatments available.
            </p>
            <Button className="bg-physio-600 hover:bg-physio-700 text-white">
              <Link to="/about">Learn More About Dr. Shraddhanand Prajapati</Link>
            </Button>
          </div>
          <div className="md:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-physio-500 hover:shadow-md transition-shadow">
                <Award className="text-physio-500 h-10 w-10 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-900">Qualifications</h3>
                <p className="text-gray-600">
                  - Doctor of Physiotherapy<br />
                  - Certified Sports Therapist<br />
                  - Orthopedic Specialist<br />
                  - Neuromuscular Therapist
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-physio-500 hover:shadow-md transition-shadow">
                <ThumbsUp className="text-physio-500 h-10 w-10 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-900">Experience</h3>
                <p className="text-gray-600">
                  - 10+ Years of Practice<br />
                  - 5000+ Treated Patients<br />
                  - National Conference Speaker<br />
                  - Published Researcher
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-physio-500 hover:shadow-md transition-shadow">
                <Users className="text-physio-500 h-10 w-10 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-900">Patient Focus</h3>
                <p className="text-gray-600">
                  - Personalized Treatment Plans<br />
                  - Holistic Approach<br />
                  - Compassionate Care<br />
                  - Clear Communication
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-physio-500 hover:shadow-md transition-shadow">
                <Activity className="text-physio-500 h-10 w-10 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-900">Specializations</h3>
                <p className="text-gray-600">
                  - Sports Injuries<br />
                  - Chronic Pain Management<br />
                  - Post-Surgical Rehabilitation<br />
                  - Neurological Recovery
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
