import { FlexTitleForm, TextProgress, ProgressBar, ProgressStatus } from "../components/Forms";
import { NumberProgressNC, StateProgressNC, NumberProgressC } from "../components/Forms";
import { InputDate, InputRadio, Label, LabelForm } from "../components/Forms";
import { Form, Input, Select, TextArea } from "../components/Forms";
import { MaxCh, NameInput, StateProgressC, StepProgressC, StepProgressNC, TitleForm } from "../components/Texts";
import { CloseButton, LargeButton, LargeButtonDisable } from "../components/Buttons";
import cancelButton from "../assets/cancel.svg";

const PersonalInformationForm = () => {
  return (
    <div>
      <FlexTitleForm>
        <TitleForm>Create a new Candidate</TitleForm>
        <CloseButton src={cancelButton} alt="close" />
      </FlexTitleForm>
      <ProgressBar>
        <ProgressStatus>
          <NumberProgressC>1</NumberProgressC>
          <TextProgress>
            <StateProgressC>Progress</StateProgressC>
            <StepProgressC>Personal</StepProgressC>
            <StepProgressC>information</StepProgressC>
          </TextProgress>
        </ProgressStatus>

        <ProgressStatus>
          <NumberProgressNC>2</NumberProgressNC>
          <TextProgress>
            <StateProgressNC>Waiting</StateProgressNC>
            <StepProgressNC>Work</StepProgressNC>
            <StepProgressNC>experience</StepProgressNC>
          </TextProgress>
        </ProgressStatus>

        <ProgressStatus>
          <NumberProgressNC>3</NumberProgressNC>
          <TextProgress>
            <StateProgressNC>Waiting</StateProgressNC>
            <StepProgressNC>Avatar</StepProgressNC>
          </TextProgress>
        </ProgressStatus>
      </ProgressBar>

      <Form>
        <label>
          <NameInput>Name</NameInput>
          <Input type="text" name="name" placeholder="John Doe" />
        </label>
        <label>
          <NameInput>Phone</NameInput>
          <Input type="text" name="phone" placeholder="xxx-xxx-xxx"/>
        </label>
        <NameInput>Gender</NameInput>
        <LabelForm>
          <InputRadio type="radio" id="male" value="male" name="gender" />
          <Label htmlFor="male">Male</Label>
          <InputRadio type="radio" id="female" value="female" name="gender" />
          <Label htmlFor="female">Female</Label>
          <InputRadio type="radio" id="other" value="other" name="gender" />
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
            placeholder="Pick a date"
          />
        </label>
        <label>
          <NameInput>Nationality</NameInput>
          <Select name="nationality" id="nationality" defaultValue={'DEFAULT'}>
            <option value="DEFAULT" disabled hidden>
              Select an option
            </option>
            <option value="argentina">Argentina</option>
            <option value="bolivia">Bolivia</option>
            <option value="chile">Chile</option>
            <option value="colombia">Colombia</option>
            <option value="ecuador">Ecuador</option>
            <option value="peru">Peru</option>
            <option value="venezuela">Venezuela</option>
            <option value="other">Other</option>
          </Select>
        </label>
        <label>
          <NameInput>Bio</NameInput>
          <TextArea
            type="text"
            name="bio"
            maxlength="140"
            placeholder="Tell us about you..."
          ></TextArea>
          <MaxCh>Max 140 characteres</MaxCh>
        </label>
        <label>
          <NameInput>Profession</NameInput>
          <Input
            type="text"
            name="profession"
            placeholder="Software Engineer"
          />
        </label>
        <LargeButtonDisable type="submit" value="Submit" disabled>
          Next
        </LargeButtonDisable>
        <LargeButton style={{margin: "auto"}} type="submit" value="Submit">
          Next
        </LargeButton>
      </Form>
    </div>
  );
};

export default PersonalInformationForm;
