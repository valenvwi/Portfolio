import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const Banner = () => {
  const [likeCount, setLikeCount] = useState(0);

  function handleLike(e) {
    setLikeCount(likeCount + 1);
    if (likeCount === 0) {
      e.target.innerText = "One more please!";
    } else {
      e.target.innerText = "Thanks a lot!";
    }
    e.target.classList.add("bump");
    const timer = setTimeout(() => {
      e.target.classList.remove("bump");
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }

  return (
    <div className="header d-flex justify-content-center align-items-center text-white flex-column text-center gap-3">
      <h1> Hi! My name is Wai Ian. </h1>
      <h3> I am a junior software developer.</h3>
      <div className="d-flex align-items-center position-relative">
        <a type="button" className="button p-3 mx-3" onClick={handleLike}>
          Give me a like!
        </a>
        {likeCount === 0 ? (
          <FontAwesomeIcon
            icon={faHeart}
            style={{ color: "#ffffff" }}
            className="banner-fonticon"
          />
        ) : (
          <FontAwesomeIcon
            icon={faHeart}
            style={{ color: "#ff0000" }}
            className="banner-fonticon"
          />
        )}
        {likeCount > 1 && <h5 className="likecount-text"> + {likeCount}</h5>}
      </div>
    </div>
  );
};
