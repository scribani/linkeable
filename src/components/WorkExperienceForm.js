import { useState } from "react";
import styled from "@emotion/styled";
import { LargeButton, LargeButtonDisable } from "./UI/Buttons";
import ExperienceForm from "./ExperienceForm";
import useSubmitable from "../hooks/useSubmitable";

/*
 */

// import { WORK_EXP } from "../constants";
// import { LargeButton } from "./UI/Buttons";
// export default function WorkExperienceForm({ fillForm, stepUpdate, data }) {
//   function handleSubmit(e) {
//     e.preventDefault();
//     fillForm({ type: WORK_EXP, experience: data });
//     stepUpdate(3);
//   }

export default function WorkExperienceForm({ fillForm, stepUpdate, data }) {
  const [experiences, setExperiences] = useState(data);

  const addExperience = (newExperience) => {
    setExperiences([...experiences, newExperience]);
  };

  // const submitable = useSubmitable(experiences, [...experiences.keys()]);

  return (
    <>
      {experiences.map((experience, index) => (
        <ExperienceForm key={index} data={experience} />
      ))}

      <ExperienceForm
        addExperience={addExperience}
        experiences={experiences}
        fillForm={fillForm}
        stepUpdate={stepUpdate}
      />
    </>
  );
}
