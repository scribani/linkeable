import { useState } from "react";
import styled from "@emotion/styled";
import { LargeButton, LargeButtonDisable } from "../components/UI/Buttons";

/*
  [x] create component that renders a form
  [x] add useState to the form
  [ ] add styles to component
  [ ] function to save work experience
  [x] link to next button
  [x] condition to make next button active when 
      form is filled
  [ ] function to add another experience button
      to save experience and show experiences
  [ ] show experiences
*/
  const ExperienceForm = styled.form`
    display:flex;
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
      background-color: #4F4F4F;
      color: #fff;
    }
    .inactive {
      background-color: #F2F2F2;
      color: #E0E0E0;
      border: solid 1px #E0E0E0;
    }
  `;


export default function WorkExperienceForm () {
  const [form, setForm] = useState({
    ocupation: "",
    company: "",
    startDate: "",
    endDate: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.endDate === "") { 
      setForm({...form, endDate: "current" });
    }
    // let experienceForm = e.target;

    // let formData = {
    //   ocupation: experienceForm.ocupation.value,
    //   company: experienceForm.company.value,
    //   startDate: experienceForm.startDate.value,
    //   endDate: experienceForm.endDate.value
    // }
    // // console.log(formData);
    // setForm(formData);
    console.log(form)
  }

  function setFormValue(e) {
    setForm({...form, [e.target.name]: e.target.value });
  }

  function isCompleted() {
    if (
      form.ocupation !== ""
      && form.company !== ""
      && form.startDate !== ""
      // && form.endDate !== "" // not obligatory, end date = current
    ) {
      return true
    } else {
      return false
    }
  }

  return (
    <>
      <ExperienceForm onSubmit={handleSubmit}>
        <label>Occupation</label>
        <input 
          name="ocupation" 
          onChange={setFormValue} 
          value={form.ocupation}
          type="text" />
        <label>Company</label>
        <input 
          name="company" 
          onChange={setFormValue} 
          value={form.company}
          type="text" />
        <label>Start date</label>
        <input 
          name="startDate" 
          onChange={setFormValue} 
          value={form.startDate}
          type="date" />
        <label>End date</label>
        <input 
          name="endDate" 
          onChange={setFormValue} 
          value={form.endDate}
          type="date" />
          { isCompleted() && (
            <LargeButton style={{ margin: "auto" }} type="submit" value="Submit">
              Add another experience
            </LargeButton>
            )}
          { !isCompleted() && (
            <LargeButtonDisable type="submit" value="Submit" disabled>
              Add another experience
            </LargeButtonDisable>
          )}
        <div className="prev-next">
          { isCompleted() && (
            <LargeButton style={{ margin: "auto" }} type="submit" value="Submit">
              Next
            </LargeButton>
            )}
          { !isCompleted() && (
            <LargeButtonDisable type="submit" value="Submit" disabled>
              Next
            </LargeButtonDisable>
          )}
        </div>
      </ExperienceForm>
    </>
  )
}