import React from "react";

const Title = ({ text }) => {
  return (
    <div className="my-5">
      <p className="text-2xl font-semibold sm:text-4xl">{text}</p>
    </div>
  );
};

export default Title;
