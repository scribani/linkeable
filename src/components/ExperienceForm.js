import { useState } from "react";
import { LargeButton, SmallButton, SmallButtonDisable } from "./UI/Buttons";
import styled from "@emotion/styled";
import { CloseButton } from "./UI/Buttons";
import cancelButton from "../assets/cancel.svg";
import useSubmitable from "../hooks/useSubmitable";
import { WORK_EXP } from "../constants";
import { Input, InputDate, FormExperience } from "./Forms";
import { NameInput } from "./Texts";

const BtnContainer = styled.div`
  display: flex;
  gap: 8px;
  width: max-content;
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
        <CloseButton
          style={{ marginLeft: "215px" }}
          onClick={() => setForm(initialForm)}
        >
          <img src={cancelButton} alt="Cancel new candidate" />
        </CloseButton>
      )}
      <FormExperience onSubmit={handleSubmit}>
        <div className="border-form">
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
        </div>
        {submitable && !data && (
          <>
            <SmallButton type="submit">Add another experience</SmallButton>
            <BtnContainer>
              <LargeButton onClick={onPreviousStep}>Previous</LargeButton>
              <LargeButton onClick={onNextStep}>Next</LargeButton>
            </BtnContainer>
          </>
        )}
        {!submitable && !data && (
          <>
            <SmallButtonDisable type="submit" disabled>
              Add another experience
            </SmallButtonDisable>
            <BtnContainer>
              <LargeButton onClick={onPreviousStep}>Previous</LargeButton>
              <LargeButton onClick={onNextStep}>Next</LargeButton>
            </BtnContainer>
          </>
        )}
      </FormExperience>
    </>
  );
}
