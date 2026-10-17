import { useState } from "react";
import "./PropsStateLab.css";

// CHILD COMPONENT
// Props receive data from the parent component.
function StudentCard({ name, role, level }) {
  return (
    <div className="student-card">
      <div className="student-avatar">
        {name.charAt(0).toUpperCase()}
      </div>

      <div>
        <h3>{name}</h3>
        <p>{role}</p>
        <span className="level-badge">{level}</span>
      </div>
    </div>
  );
}

export default function PropsStateLab() {
  // STATE: Data that can change over time.
  const [studentName, setStudentName] = useState("Arun");
  const [studentRole, setStudentRole] = useState("React Learner");
  const [level, setLevel] = useState("Beginner");
  const [count, setCount] = useState(0);

  // Normal JavaScript variable (not state)
  const courseName = "React Fundamentals";

  return (
    <div className="lab-page">
      {/* HEADER */}
      <header className="lab-header">
        <div className="brand">
          <div className="brand-icon">R</div>
          <div>
            <h1>React Lab</h1>
            <p>Learn by experimenting</p>
          </div>
        </div>

        <span className="header-tag">PROPS + STATE</span>
      </header>

      {/* INTRO */}
      <section className="lab-hero">
        <span className="eyebrow">YOUR INTERACTIVE PLAYGROUND</span>
        <h2>
          Understand React.
          <br />
          <span>One concept at a time.</span>
        </h2>
        <p>
          Change values, click buttons, and see how React components
          work behind the scenes.
        </p>
      </section>

      {/* CONCEPT CARDS */}
      <section className="concept-grid">
        <article className="concept-card props-concept">
          <span className="concept-number">01</span>
          <div className="concept-symbol">&lt; / &gt;</div>
          <h3>Props</h3>
          <p>
            Props pass information from a parent component to a
            child component.
          </p>
          <code>Parent → Child</code>
        </article>

        <article className="concept-card state-concept">
          <span className="concept-number">02</span>
          <div className="concept-symbol">↻</div>
          <h3>State</h3>
          <p>
            State stores component data that can change and trigger
            a re-render.
          </p>
          <code>Value → Update → UI</code>
        </article>
      </section>

      {/* PROPS PLAYGROUND */}
      <section className="lab-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">EXPERIMENT 01</span>
            <h2>Props Playground</h2>
          </div>
          <span className="section-tag">DATA FLOW</span>
        </div>

        <p className="section-description">
          Edit the parent values below. The child component receives
          those values through props and updates its displayed content.
        </p>

        <div className="playground-grid">
          <div className="control-panel">
            <h3>Parent Component</h3>
            <p className="muted">Change the props here.</p>

            <label htmlFor="student-name">Student name</label>
            <input
              id="student-name"
              type="text"
              value={studentName}
              onChange={(event) =>
                setStudentName(event.target.value)
              }
              placeholder="Enter student name"
            />

            <label htmlFor="student-role">Student role</label>
            <input
              id="student-role"
              type="text"
              value={studentRole}
              onChange={(event) =>
                setStudentRole(event.target.value)
              }
              placeholder="Enter student role"
            />

            <label htmlFor="student-level">Student level</label>
            <select
              id="student-level"
              value={level}
              onChange={(event) => setLevel(event.target.value)}
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>

            <div className="info-note">
              <strong>Remember</strong>
              <p>
                The parent owns these state values. The child only
                receives them as props.
              </p>
            </div>
          </div>

          <div className="preview-panel">
            <div className="preview-top">
              <span className="live-dot"></span>
              Live child preview
            </div>

            <div className="child-label">CHILD COMPONENT</div>

            <StudentCard
              name={studentName || "Student"}
              role={studentRole || "React Learner"}
              level={level}
            />

            <div className="flow-diagram">
              <div className="flow-box">
                <strong>Parent</strong>
                <span>Props source</span>
              </div>
              <span className="flow-arrow">→</span>
              <div className="flow-box active-flow">
                <strong>Child</strong>
                <span>Props receiver</span>
              </div>
            </div>

            <div className="code-snippet">
              <span className="code-label">HOW IT WORKS</span>
              <pre>{`<StudentCard
  name={studentName}
  role={studentRole}
  level={level}
/>`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* STATE PLAYGROUND */}
      <section className="lab-section state-lab">
        <div className="section-heading">
          <div>
            <span className="eyebrow">EXPERIMENT 02</span>
            <h2>State Playground</h2>
          </div>
          <span className="section-tag">INTERACTION</span>
        </div>

        <p className="section-description">
          State remembers the current value. When you update it,
          React renders the UI again using the new value.
        </p>

        <div className="counter-card">
          <div className="counter-info">
            <span className="eyebrow">LIVE COUNTER</span>
            <h3>Practice your clicks</h3>
            <p>
              Every button updates the count using the state setter.
            </p>

            <div className="counter-display">{count}</div>
            <span className="counter-caption">CURRENT STATE VALUE</span>

            <div className="counter-actions">
              <button
                className="btn-primary"
                onClick={() => setCount((previous) => previous + 1)}
              >
                + Increase
              </button>

              <button
                className="btn-secondary"
                onClick={() =>
                  setCount((previous) => Math.max(0, previous - 1))
                }
              >
                − Decrease
              </button>

              <button
                className="btn-reset"
                onClick={() => setCount(0)}
              >
                Reset
              </button>
            </div>
          </div>

          <div className="state-explanation">
            <h3>What happens on click?</h3>

            <div className="step-item">
              <span>1</span>
              <div>
                <strong>Event occurs</strong>
                <p>You click the Increase button.</p>
              </div>
            </div>

            <div className="step-item">
              <span>2</span>
              <div>
                <strong>State updates</strong>
                <p>
                  The setter schedules the next state value.
                </p>
              </div>
            </div>

            <div className="step-item">
              <span>3</span>
              <div>
                <strong>React re-renders</strong>
                <p>
                  React updates the displayed count to match the new
                  state.
                </p>
              </div>
            </div>

            <div className="code-snippet">
              <span className="code-label">STATE LOGIC</span>
              <pre>{`const [count, setCount] =
  useState(0);

setCount(previous =>
  previous + 1
);`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARE */}
      <section className="lab-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">QUICK REVISION</span>
            <h2>Props vs State</h2>
          </div>
        </div>

        <div className="comparison-table">
          <div className="comparison-row comparison-header">
            <div>Concept</div>
            <div>Props</div>
            <div>State</div>
          </div>

          <div className="comparison-row">
            <div>Purpose</div>
            <div>Receive data</div>
            <div>Store changing data</div>
          </div>

          <div className="comparison-row">
            <div>Managed by</div>
            <div>Parent supplies it</div>
            <div>Component owns it</div>
          </div>

          <div className="comparison-row">
            <div>Can child modify it directly?</div>
            <div>No</div>
            <div>Use its setter</div>
          </div>

          <div className="comparison-row">
            <div>Causes re-render?</div>
            <div>When received props change</div>
            <div>When state changes</div>
          </div>
        </div>
      </section>

      {/* HTML + CSS LEARNING */}
      <section className="learning-footer">
        <span className="eyebrow">BONUS: FRONTEND REVISION</span>
        <h2>Learn the whole picture.</h2>

        <div className="learning-grid">
          <div>
            <span className="learning-icon html-icon">5</span>
            <h3>HTML / JSX</h3>
            <p>
              <code>section</code>, <code>div</code>,{" "}
              <code>h2</code>, <code>p</code>, <code>label</code>,
              <code> input</code> and <code>button</code> build the
              page structure.
            </p>
          </div>

          <div>
            <span className="learning-icon css-icon">#</span>
            <h3>CSS</h3>
            <p>
              Classes, flexbox, grid, padding, margin, borders,
              colors and responsive layouts control the appearance.
            </p>
          </div>

          <div>
            <span className="learning-icon js-icon">JS</span>
            <h3>React + JavaScript</h3>
            <p>
              <code>useState</code>, props, event handlers and
              JSX expressions make the page interactive.
            </p>
          </div>
        </div>

        <p className="footer-note">
          React Lab · Learn the logic, test the behaviour, remember
          the concepts.
        </p>
      </section>
    </div>
  );
}
