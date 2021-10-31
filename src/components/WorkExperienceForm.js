import { useState } from "react";
import ExperienceForm from "./ExperienceForm";

export default function WorkExperienceForm({ fillForm, stepUpdate, data }) {
  const [experiences, setExperiences] = useState(data);

  const addExperience = (newExperience) => {
    setExperiences([...experiences, newExperience]);
  };

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
