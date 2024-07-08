function Footer() {
  const icons = [
    { name: "github", url: "https://github.com/jordanchives" },
    { name: "linkedin", url: "https://www.linkedin.com/in/jordan-miller-80a888182/" },
  ];

  return (
    <footer>
      {icons.map((icon, i) => (
        <a href={icon.url} key={i} target="_blank" rel="noopener noreferrer">
          {" "}
          {icon.name}{" "}
        </a>
      ))}
    </footer>
  );
}

export default Footer;
