import React from "react";

const Skill = (props) => {
  return (
    <div>
      <div className="skill" style={{backgroundColor: props.colour}}>
        <span>{props.skill}</span>
      </div>
    </div>
  );
};

export default Skill;

