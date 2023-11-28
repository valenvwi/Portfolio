const descriptions = [
  "🍎 Originally from Macau and moved to Zurich in 2021",
  "🧑‍🎓 Completed a web development bootcamp at Le Wagon in June 2023",
  "💻 I enjoy working on personal projects and finding interesting solutions",
  "🗣️ Native Cantonese speaker. I am fluent in English and Mandarin. My German level is B1",
];

export const AboutMeContent = () => {
  return (
    <>
      {/* Big screen and larger */}
      <div className="d-none d-md-block">
        {descriptions.map((description) => {
          return <h5 key={description}>{description}</h5>;
        })}
      </div>

      {/* mobile */}
      <div className="d-block d-md-none">
        {descriptions.map((description) => {
          return (
            <h6 key={description} className="p-1">
              {description}
            </h6>
          );
        })}
      </div>
    </>
  );
};
