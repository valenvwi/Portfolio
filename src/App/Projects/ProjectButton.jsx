import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const ProjectButton = ({ website, title }) => {
  return (
    <>
      <Link to={website} target="_blank" rel="noreferrer">
        <motion.button
          className="button"
          whileHover={{ scale: 1.1, backgroundColor: "rgb(22, 220, 235)" }}
        >
          {title}
        </motion.button>
      </Link>
    </>
  );
};
