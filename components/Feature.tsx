import React from "react";

const Feature = () => {
  return (
    <div>
      <div className="flex mx-auto feature">
        <video playsInline autoPlay muted loop width="100%">
          <source src="https://tally.so/videos/demo/just-type.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Feature;
