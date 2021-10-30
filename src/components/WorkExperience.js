import { useState } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

/*
  [x] create component that renders a form
  [.] add useState to the form
  [ ] add styles to component
  [ ] function to save work experience
  [.] link to next button
  [ ] condition to make next button active when 
      form is filled
  [ ] function to add another experience button
      to save experience and show experiences
  [ ] show experiences
*/
 
export default function WorkExperience () {
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

  const [workData, setWorkData] = useState({
    ocupation: "",
    company: "",
    startDate: "",
    endDate: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let experienceForm = e.target;
    let formData = {
      ocupation: experienceForm.ocupation.value,
      company: experienceForm.company.value,
      startDate: experienceForm.startDate.value,
      endDate: experienceForm.endDate.value
    }
    // console.log(formData);
    setWorkData(formData);
    console.log(workData)
  }

  const setActive = () => 

  return (
    <>
      <ExperienceForm onSubmit={handleSubmit}>
        <label>Occupation</label>
        <input name="ocupation" type="text" />
        <label>Company</label>
        <input name="company" type="text" />
        <label>Start date</label>
        <input name="startDate" type="date" />
        <label>End date</label>
        <input name="endDate" type="date" />
        <button type="submit">"Add another experience"</button>
        <div className="prev-next">
          <Link to="/" className="button inactive">Previous</Link>
          <Link to="/" className="button active">Next</Link>
        </div>
      </ExperienceForm>
    </>
  )
}