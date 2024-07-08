const Project = ({ project }) => {
  const { name, description, link } = project;

  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <a href={link}>View Project</a>
    </div>
  );
};

export default Project;
