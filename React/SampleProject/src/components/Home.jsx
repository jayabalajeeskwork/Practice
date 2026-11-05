import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
// import "./Home.css";

function Home() {
  const stats = [
    { number: 2, title: "Years of Experience", icon: "💼" },
    { number: 25, title: "Projects Completed", icon: "🚀" },
    { number: 15, title: "Technologies Used", icon: "💻" },
    { number: 10, title: "Happy Reviews", icon: "⭐" },
  ];

  const [counts, setCounts] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const timers = stats.map((item, index) => {
      return setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];

          if (newCounts[index] < item.number) {
            newCounts[index]++;
          }

          return newCounts;
        });
      }, 600);
    });

    return () => timers.forEach((timer) => clearInterval(timer));
  }, []);

  return (
    <>
      <Navbar />

      {/* STATISTICS SECTION */}

      <section className="stats-section" id="stats-section">
        <div className="stats-heading">
          <span>MY JOURNEY</span>
          <h2>Experience & Achievements</h2>
          <p>A quick look at my journey and achievements.</p>
        </div>

        <div className="stats-container">
          {stats.map((item, index) => (
            <div className="stat-card" key={index}>
              <div className="stat-icon">{item.icon}</div>

              <h2>{counts[index]}+</h2>

              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
