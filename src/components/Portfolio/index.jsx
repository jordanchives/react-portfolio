import { useState } from "react";
import Project from "../Project/";

function Portfolio() {
  const [projects] = useState([
    {
      name: "Run Buddy",
      description: "A website that offers fitness training services.",
      link: "https://lernantino.github.io/run-buddy/",
      github: ""
    },
  ]);

  return (
    <section>
      <h1>Portfolio</h1>
      <div>
        {projects.map((project, i) => (
          <Project key={i} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
