import React from "react";

export const Resume = () => {
  return (
    <>
      <section id="resume">
        <h2 className="section__title" style={{ paddingTop: "7rem" }}>
          My <span className="different">Resume</span>

        </h2>
        <div>
          <div style={{ textAlign: "center" }}>
            <button
              className="btnResume"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1J1TYVae3D_3vZaqlLOBPqpQz5oSpI38D/view?usp=drive_link"
                )
              }
            >
              View Resume
            </button>
          </div>
          <div style={{ textAlign: "center" }}>
            <button className="btnResume">
              <a href="/faisal_resume.pdf" download>
                Download Resume
              </a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
