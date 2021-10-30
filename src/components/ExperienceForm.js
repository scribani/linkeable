import { useState, useEffect } from "react";
import { LargeButton, LargeButtonDisable } from "./UI/Buttons";
import styled from "@emotion/styled";
import { CloseButton } from "./UI/Buttons";
import cancelButton from "../assets/cancel.svg";
import useSubmitable from "../hooks/useSubmitable";
import { WORK_EXP } from "../constants";

const Experience = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 20px;
  .prev-next {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 8px;
  }
  .button {
    display: block;
    border: solid 1px;
    padding: 8px 12px;
    border-radius: 8px;
    text-decoration: none;
  }
  .active {
    background-color: #4f4f4f;
    color: #fff;
  }
  .inactive {
    background-color: #f2f2f2;
    color: #e0e0e0;
    border: solid 1px #e0e0e0;
  }
`;

const initialForm = {
  occupation: "",
  company: "",
  startDate: "",
  endDate: "",
};

export default function ExperienceForm({
  data,
  addExperience,
  experiences,
  fillForm,
  stepUpdate,
}) {
  const [form, setForm] = useState(data || initialForm);

  const submitable = useSubmitable(form, [
    "occupation",
    "company",
    "startDate",
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.endDate === "") {
      setForm({ ...form, endDate: "current" });
    }
    addExperience(form);
    setForm(initialForm);
  };

  const onNextStep = () => {
    if (experiences.length < 1) {
      alert("Fill at least one experience");
      return;
    }

    if (form.endDate === "") {
      setForm({ ...form, endDate: "current" });
    }
    addExperience(form);
    fillForm({ type: WORK_EXP, experiences: experiences });
    stepUpdate(3);
  };

  function setFormValue(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <>
      {!data && (
        <CloseButton onClick={() => setForm(initialForm)}>
          <img src={cancelButton} alt="Cancel new candidate" />
        </CloseButton>
      )}
      <Experience onSubmit={handleSubmit}>
        <label>Occupation</label>
        <input
          name="occupation"
          onChange={setFormValue}
          value={form.occupation}
          type="text"
          disabled={!!data}
        />
        <label>Company</label>
        <input
          name="company"
          onChange={setFormValue}
          value={form.company}
          type="text"
          disabled={!!data}
        />
        <label>Start date</label>
        <input
          name="startDate"
          onChange={setFormValue}
          value={form.startDate}
          type="date"
          disabled={!!data}
        />
        <label>End date</label>
        <input
          name="endDate"
          onChange={setFormValue}
          value={form.endDate}
          type="date"
          disabled={!!data}
        />
        {submitable && !data && (
          <>
            <LargeButton type="submit">Add another experience</LargeButton>
            <LargeButton>Previous</LargeButton>
            <LargeButton onClick={onNextStep}>Next</LargeButton>
          </>
        )}
        {!submitable && !data && (
          <>
            <LargeButtonDisable disabled>
              Add another experience
            </LargeButtonDisable>
            <LargeButton>Previous</LargeButton>
            <LargeButton onClick={onNextStep}>Next</LargeButton>
          </>
        )}
      </Experience>
    </>
  );
}
