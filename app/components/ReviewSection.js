"use client";
import React, { useState } from "react";

const initialReviews = [
  {
    name: "root@client1",
    message: "Absolutely loved the work! Delivered before deadline.",
    timestamp: new Date().toLocaleString(),
  },
  {
    name: "guest@developer",
    message: "Code quality was clean and modular. Very impressive.",
    timestamp: new Date().toLocaleString(),
  },
  {
    name: "user@hec",
    message: "Professional communication and great UI/UX sense.",
    timestamp: new Date().toLocaleString(),
  },
];

export const ReviewSection = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [showTimestamps, setShowTimestamps] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && message.trim()) {
      const newReview = {
        name,
        message,
        timestamp: new Date().toLocaleString(),
      };
      setReviews((prev) => [...prev, newReview]);
      setName("");
      setMessage("");
    }
  };

  const handleClear = () => {
    setReviews([]);
  };

  return (
    <div className="bg-black text-green-400 font-mono rounded-lg p-4 shadow-lg max-w-3xl mx-auto my-8">
      {/* Terminal Top Bar */}
      <div className="bg-gray-800 text-white px-3 py-1 rounded-t-md flex items-center space-x-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="ml-2">Terminal Reviews</span>
      </div>

      {/* Terminal Body */}
      <div className="bg-black px-4 py-3 rounded-b-md space-y-3">
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index}>
              <p>
                <span className="text-blue-400">{review.name}</span>
                <span className="text-white">:~$</span>{" "}
                <span>{review.message}</span>
              </p>
              {showTimestamps && (
                <p className="text-xs text-gray-500 ml-4">
                  [{review.timestamp}]
                </p>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-500">No reviews yet.</p>
        )}

        {/* Terminal Input */}
        <form onSubmit={handleSubmit} className="mt-4 space-y-2">
          <div>
            <span className="text-blue-400">you@terminal</span>
            <span className="text-white">:~$</span>{" "}
            <input
              type="text"
              placeholder="your-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-black border-b border-green-500 text-green-400 focus:outline-none px-1"
            />
          </div>
          <div>
            <span className="text-blue-400">you@terminal</span>
            <span className="text-white">:~$</span>{" "}
            <input
              type="text"
              placeholder="your-review"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-black border-b border-green-500 text-green-400 focus:outline-none px-1 w-full"
            />
          </div>
          <button
            type="submit"
            className="mt-2 bg-green-600 text-black px-2 py-1 rounded hover:bg-green-500 transition"
          >
            Submit
          </button>
        </form>

        {/* Optional Features */}
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <label className="flex items-center gap-1">
            <input
              type="checkbox"
              checked={showTimestamps}
              onChange={() => setShowTimestamps((prev) => !prev)}
            />
            Show timestamps
          </label>
          <button
            onClick={handleClear}
            className="text-red-500 underline hover:text-red-400"
          >
            Clear terminal
          </button>
        </div>
      </div>
    </div>
  );
};
