export const ProjectCardImage = ({ href, title }) => {
  return (
    <>
      <img
        src={href}
        alt={title}
        className="card-image"
      ></img>
    </>
  );
};
