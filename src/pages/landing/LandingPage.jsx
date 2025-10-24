import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen text-white font-sans overflow-x-hidden bg-gradient-to-b from-[#03045E] via-[#023E8A] to-[#00B4D8]">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 fixed top-0 left-0 w-full bg-[#03045E]/70 backdrop-blur-md z-50">
        <h1 className="text-2xl font-bold">Study Buddy</h1>
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 bg-white text-blue-800 rounded-lg hover:bg-gray-100 transition"
          >
            Log in
          </button>
          <button
            onClick={() => navigate("/register")}
            className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-blue-900 transition"
          >
            Sign up
          </button>
        </div>
      </nav>

      {/* Wrapper for all sections — unified gradient */}
      <main className="flex flex-col divide-y divide-white/10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-10 px-8 md:px-20 pt-24">
          <div className="max-w-lg md:w-1/2 text-center md:text-left">
            <h2 className="text-5xl font-semibold mb-6 leading-snug">
              Your Personal Academic Partner
            </h2>
            <p className="text-gray-200 mb-8 leading-relaxed text-lg">
              StudyBuddy helps you organize study materials, connect with peers,
              and track progress easily. Plan smarter, learn better, and grow
              together with your all-in-one academic companion.
            </p>
            <button
              onClick={() => navigate("/register")}
              className="px-6 py-3 bg-white text-blue-800 rounded-lg font-medium hover:bg-gray-100 transition"
            >
              Get Started →
            </button>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img
              src="learn.png"
              alt="Learning illustration"
              className="rounded-2xl shadow-2xl w-96 md:w-[28rem] animate-fadeInUp"
            />
          </div>
        </section>

        {/* Mid Section */}
        <section className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-10 px-8 md:px-20">
          <div className="md:w-1/2 flex justify-center">
            <img
              src="team.png"
              alt="Teamwork illustration"
              className="rounded-2xl shadow-2xl w-96 md:w-[28rem] animate-fadeInUp"
            />
          </div>

          <div className="max-w-lg md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">
              Connect, Collaborate & Grow
            </h2>
            <p className="text-gray-200 mb-8 text-lg leading-relaxed">
              Join a vibrant community of learners. Share notes, join group
              discussions, and collaborate on projects. StudyBuddy transforms
              learning into a social and interactive experience.
            </p>
            <button
              onClick={() => navigate("/register")}
              className="px-6 py-3 bg-white text-blue-800 rounded-lg font-medium hover:bg-gray-100 transition"
            >
              Connect →
            </button>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-8">
          <h2 className="text-4xl font-bold mb-12">
            What Students Love About StudyBuddy
          </h2>
          <div className="flex flex-wrap justify-center gap-6 max-w-5xl">
            {[
              "I can keep all my study notes and reminders in one place. It’s like having a digital friend who never forgets!",
              "The collaboration feature helped me find amazing teammates for my semester project. It really builds community!",
              "StudyBuddy’s reminders and progress tracking make exam prep way easier and more organized.",
            ].map((text, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-lg w-72 hover:scale-105 transition-transform duration-300"
              >
                <p className="text-gray-100 italic">“{text}”</p>
              </div>
            ))}
          </div>
        </section>

        {/* Dual Content Section */}
        <section className="min-h-screen grid md:grid-cols-2 gap-16 px-10 md:px-20 py-20">
          <div className="flex flex-col justify-center">
            <h3 className="text-4xl font-semibold mb-6">
              Smart Productivity Tools
            </h3>
            <p className="text-gray-100 mb-8 text-lg leading-relaxed">
              Manage your day efficiently with reminders, task lists, and goal
              tracking. StudyBuddy helps you organize your academic life and
              focus on what truly matters.
            </p>
            <button
              onClick={() => navigate("/home")}
              className="px-6 py-3 bg-white text-blue-800 rounded-lg font-medium hover:bg-gray-100 transition"
            >
              Learn More
            </button>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-4xl font-semibold mb-6">
              Empowering Every Student
            </h3>
            <p className="text-gray-100 mb-8 text-lg leading-relaxed">
              From individual learners to group study sessions, StudyBuddy gives
              you tools to collaborate, stay accountable, and achieve your
              academic goals effectively.
            </p>
            <button
              onClick={() => navigate("/register")}
              className="px-6 py-3 bg-white text-blue-800 rounded-lg font-medium hover:bg-gray-100 transition"
            >
              Join Now
            </button>
          </div>
        </section>

        {/* Why StudyBuddy Section */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-8">
          <h2 className="text-5xl font-bold mb-8">Why Choose StudyBuddy?</h2>
          <p className="max-w-4xl text-gray-100 text-lg mb-10 leading-relaxed">
            StudyBuddy makes education engaging and collaborative. Manage
            assignments, track performance, and connect with peers—all in one
            unified platform built for students like you.
          </p>
          <button
            onClick={() => navigate("/feedback")}
            className="px-8 py-4 bg-white text-blue-800 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Get StudyBuddy
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 py-4 px-8 border-t border-gray-600 bg-[#000814]/80 backdrop-blur-md">
        <p>Need Help? ⓘ</p>
        <p>© 2025 StudyBuddy Inc. All rights reserved.</p>
        <p>English</p>
      </footer>
    </div>
  );
};

export default LandingPage;