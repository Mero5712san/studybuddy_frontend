import React from "react";
import ToggleFAQ from "./ToggleFAQ";

const FeedBack = () => {
    return (
        <div className="bg-gray-100 min-h-screen overflow-y-auto">
            {/* Section 1: Full Page Feedback Form */}
            <section className="flex flex-col md:flex-row w-full h-screen">
                {/* Left Illustration Section */}
                <div className="flex justify-center items-center w-full md:w-1/2 bg-gray-50">
                    <img
                        src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
                        alt="Feedback Illustration"
                        className="w-4/5 md:w-3/4 lg:w-2/3"
                    />
                </div>

                {/* Right Form Section */}
                <div className="flex flex-col justify-center w-full md:w-1/2 bg-white px-8 md:px-16 py-10">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                        Share your Thoughts ...
                    </h2>
                    <form className="flex flex-col gap-5">
                        <input
                            type="text"
                            placeholder="Enter your Name"
                            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <textarea
                            rows="5"
                            placeholder="Share your thoughts"
                            className="border border-gray-300 rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-blue-900 text-white rounded-lg py-2 hover:bg-blue-800 shadow-md transition duration-200"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </section>

            <section className="py-16 px-6 md:px-20 bg-white shadow-inner">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-10">
                    Frequently Asked Questions (FAQs)
                </h2>

                <div className="max-w-4xl mx-auto space-y-6">
                    <ToggleFAQ
                        question="What is StudyBuddy?"
                        answer="StudyBuddy is a platform that helps students collaborate, share notes, and track progress efficiently."
                    />
                    <ToggleFAQ
                        question="How can I provide feedback?"
                        answer="You can share your feedback using the form above. Your opinions help us improve StudyBuddy."
                    />
                    <ToggleFAQ
                        question="Is StudyBuddy free to use?"
                        answer="Yes! StudyBuddy is completely free for students. Premium features may come later."
                    />
                    <ToggleFAQ
                        question="Can I connect with other learners?"
                        answer="Absolutely! StudyBuddy allows you to connect, chat, and form study groups with peers."
                    />
                    <ToggleFAQ
                        question="How do I report a problem?"
                        answer="You can report issues via the feedback form or through the 'Contact Support' option."
                    />
                </div>
            </section>
        </div>
    );
};

export default FeedBack;