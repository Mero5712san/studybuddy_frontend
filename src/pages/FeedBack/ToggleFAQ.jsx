import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const ToggleFAQ = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="bg-gray-100 p-5 rounded-xl shadow-sm cursor-pointer transition duration-200 hover:shadow-md"
            onClick={() => setIsOpen(!isOpen)}
        >
            {/* Header (Question + Arrow) */}
            <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg text-gray-800">{question}</h3>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.1 }}
                >
                    <ChevronDown className="w-5 h-5 text-gray-700" />
                </motion.div>
            </div>

            {/* Animated Answer Section */}
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                        <p className="text-gray-600 mt-3 border-t border-gray-200 pt-3">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ToggleFAQ;