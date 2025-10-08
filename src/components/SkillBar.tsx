import React from "react";

export default function SkillBar({ skill, level }: { skill: string; level: number }) {
  return (
    <div className="skill-bar">
      <span>{skill}</span>
      <div className="bar-bg">
        <div className="bar-fill" style={{ width: `${level}%` }}></div>
      </div>
    </div>
  );
}
