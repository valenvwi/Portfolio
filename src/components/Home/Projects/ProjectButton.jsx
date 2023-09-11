export const ProjectButton = ({ website, title }) => {
  return (
    <>
      <a className="button" href={website} target="_blank" rel="noreferrer">
        {title}
      </a>
    </>
  );
};
