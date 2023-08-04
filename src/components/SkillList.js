import React from "react";
import Skill from "./Skill";

const SkillList = () => {
  return (
    <div>
      <div className="skill-list">
        <Skill skill={"html+css"} colour={'red'}/>
        <Skill skill={"JavaScript"} colour={'blue'}/>
        <Skill skill={"Web Design"} colour={'green'}/>
        <Skill skill={"Git And GitHub"} colour={'yellow'}/>
        <Skill skill={"React"} colour={'pink'}/>
        <Skill skill={"Svelte"} colour={'purple'}/>
      </div>
    </div>
  );
};

export default SkillList;
