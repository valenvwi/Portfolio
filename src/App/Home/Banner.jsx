import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { motion, useAnimate } from "framer-motion";

export const Banner = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (likeCount === 0) {
      return;
    }
    animate(scope.current, { scale: [1.2, 1] });
  }, [likeCount, scope, animate]);

  function handleLike(e) {
    setLikeCount(likeCount + 1);
    if (likeCount === 0) {
      e.target.innerText = "One more please!";
    } else {
      e.target.innerText = "Thanks a lot!";
    }
  }

  return (
    <div className="header d-flex justify-content-center align-items-center text-white flex-column text-center gap-3">
      <h1> Hi! My name is Wai Ian. </h1>
      <h3> I am a junior software developer.</h3>
      <div className="d-flex align-items-center position-relative">
        <motion.button
          className="button p-3 mx-3"
          onClick={handleLike}
          whileHover={{ scale: 1.05, backgroundColor: "rgb(22, 220, 235)" }}
        >
          Give me a like!
        </motion.button>
        {likeCount === 0 ? (
          <FontAwesomeIcon
            icon={faHeart}
            style={{ color: "#ffffff" }}
            className="banner-fonticon"
            ref={scope}
          />
        ) : (
          <FontAwesomeIcon
            icon={faHeart}
            style={{ color: "#ff0000" }}
            className="banner-fonticon"
            ref={scope}
          />
        )}
        {likeCount > 1 && <h5 className="likecount-text"> + {likeCount}</h5>}
      </div>
    </div>
  );
};
