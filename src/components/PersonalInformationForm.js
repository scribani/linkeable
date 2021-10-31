import { useState } from "react";
import { PERSONAL_INFO } from "../constants";
import useSubmitable from "../hooks/useSubmitable";
import {
  Form,
  Input,
  Select,
  TextArea,
  InputDate,
  InputRadio,
  Label,
  LabelForm,
} from "./Forms";
import { MaxCh, NameInput } from "./Texts";
import { LargeButton, LargeButtonDisable } from "./UI/Buttons";

function PersonalInformationForm({ data, fillForm, stepUpdate }) {
  const { name, phone, gender, birthday, nationality, bio, profession } = data;
  const [form, setForm] = useState({
    name,
    phone,
    gender,
    birthday,
    nationality,
    bio,
    profession,
  });
  const submitable = useSubmitable(form, [
    "name",
    "phone",
    "gender",
    "birthday",
    "nationality",
    "profession",
  ]);

  function handleSubmit(e) {
    e.preventDefault();
    fillForm({ type: PERSONAL_INFO, personalInfo: form });
    stepUpdate(2);
  }

  function setFormValue(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        <NameInput>Name</NameInput>
        <Input
          type="text"
          name="name"
          value={form.name}
          onChange={setFormValue}
          placeholder="John Doe"
        />
      </label>
      <label>
        <NameInput>Phone</NameInput>
        <Input
          type="text"
          name="phone"
          value={form.phone}
          onChange={setFormValue}
          placeholder="xxx-xxx-xxx"
        />
      </label>
      <NameInput>Gender</NameInput>
      <LabelForm>
        <InputRadio
          type="radio"
          id="male"
          value="male"
          onChange={setFormValue}
          name="gender"
          checked={form.gender === "male"}
        />
        <Label htmlFor="male">Male</Label>
        <InputRadio
          type="radio"
          id="female"
          value="female"
          onChange={setFormValue}
          name="gender"
          checked={form.gender === "female"}
        />
        <Label htmlFor="female">Female</Label>
        <InputRadio
          type="radio"
          id="other"
          value="other"
          onChange={setFormValue}
          name="gender"
          checked={form.gender === "other"}
        />
        <Label htmlFor="other">Other</Label>
      </LabelForm>
      <label>
        <NameInput>Birthday</NameInput>
        <InputDate
          type="text"
          onFocus={(e) => {
            e.currentTarget.type = "date";
            e.currentTarget.focus();
          }}
          name="birthday"
          value={form.birthday}
          onChange={setFormValue}
          placeholder="Pick a date"
        />
      </label>
      <label>
        <NameInput>Nationality</NameInput>
        <Select
          name="nationality"
          id="nationality"
          value={form.nationality}
          onChange={setFormValue}
        >
          <option value="" disabled hidden>
            Select an option
          </option>
          <option value="ar" onChange={setFormValue}>
            Argentina
          </option>
          <option value="bo" onChange={setFormValue}>
            Bolivia
          </option>
          <option value="cl" onChange={setFormValue}>
            Chile
          </option>
          <option value="co" onChange={setFormValue}>
            Colombia
          </option>
          <option value="ec" onChange={setFormValue}>
            Ecuador
          </option>
          <option value="pe" onChange={setFormValue}>
            Peru
          </option>
          <option value="ve" onChange={setFormValue}>
            Venezuela
          </option>
          <option value="un" onChange={setFormValue}>
            Other
          </option>
        </Select>
      </label>
      <label>
        <NameInput>Bio</NameInput>
        <TextArea
          type="text"
          name="bio"
          maxlength="140"
          value={form.bio}
          onChange={setFormValue}
          placeholder="Tell us about you..."
        ></TextArea>
        <MaxCh>Max 140 characteres</MaxCh>
      </label>
      <label>
        <NameInput>Profession</NameInput>
        <Input
          type="text"
          name="profession"
          value={form.profession}
          onChange={setFormValue}
          placeholder="Software Engineer"
        />
      </label>
      {submitable ? (
        <LargeButton type="submit">Next</LargeButton>
      ) : (
        <LargeButtonDisable disabled>Next</LargeButtonDisable>
      )}
    </Form>
  );
}

export default PersonalInformationForm;
