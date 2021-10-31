import { useState, useEffect } from "react";
import { LargeButton, LargeButtonDisable } from "./UI/Buttons";
import styled from "@emotion/styled";
import { CloseButton } from "./UI/Buttons";
import cancelButton from "../assets/cancel.svg";
import useSubmitable from "../hooks/useSubmitable";
import { WORK_EXP } from "../constants";
import { Input, Label, InputDate, Form } from "./Forms";
import { NameInput } from "./Texts";

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 200px;
  align-items: center;
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

  const onNextStep = (e) => {
    e.preventDefault();
    if (!submitable && experiences.length < 1) {
      alert("Fill at least one experience");
      return;
    }

    if (submitable && form.endDate === "") {
      setForm({ ...form, endDate: "current" });
    }
    fillForm({ type: WORK_EXP, experiences: [...experiences, form] });
    // addExperience(form);
    stepUpdate(3);
  };

  const onPreviousStep = (e) => {
    e.preventDefault();
    stepUpdate(1);
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
      <Form className="occupation" onSubmit={handleSubmit}>
        <label>
          <NameInput>Occupation</NameInput>
          <Input
            name="occupation"
            onChange={setFormValue}
            value={form.occupation}
            type="text"
            disabled={!!data}
          />
        </label>
        <label>
          <NameInput>Company</NameInput>
          <Input
            name="company"
            onChange={setFormValue}
            value={form.company}
            type="text"
            disabled={!!data}
          />
        </label>
        <label>
          <NameInput>Start date</NameInput>
          <InputDate
            name="startDate"
            onChange={setFormValue}
            value={form.startDate}
            type="date"
            disabled={!!data}
          />
        </label>
        <label>
          <NameInput>End date</NameInput>
          <InputDate
            name="endDate"
            onChange={setFormValue}
            value={form.endDate}
            type="date"
            disabled={!!data}
          />
        </label>
        {submitable && !data && (
          <>
            <LargeButton type="submit">Add another experience</LargeButton>
            <BtnContainer>
              <LargeButton onClick={onPreviousStep}>Previous</LargeButton>
              <LargeButton onClick={onNextStep}>Next</LargeButton>
            </BtnContainer>
          </>
        )}
        {!submitable && !data && (
          <>
            <LargeButtonDisable type="submit" disabled>
              Add another experience
            </LargeButtonDisable>
            <BtnContainer>
              <LargeButton onClick={onPreviousStep}>Previous</LargeButton>
              <LargeButton onClick={onNextStep}>Next</LargeButton>
            </BtnContainer>
          </>
        )}
      </Form>
    </>
  );
}
