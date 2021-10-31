import { AvatarForm } from "../components/AvatarForm";
import Progress from "../components/Progress";
import PersonalInformationForm from "../components/PersonalInformationForm";
import { TitleForm } from "../components/Texts";
import { CloseButton } from "../components/UI/Buttons";
import cancelButton from "../assets/cancel.svg";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import WorkExperienceForm from "../components/WorkExperienceForm";
import useFormReducer from "../hooks/useFormReducer";
import { saveDocument } from "../services/firebase/store";

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 340px;
`;

const NewCandidate = () => {
  const [form, dispatch] = useFormReducer();
  const [currentStep, setCurrentStep] = useState(1);
  const { push } = useHistory();

  useEffect(() => {
    if (form.avatarURL) {
      saveDocument("candidates", form).then(() => push("/candidates"));
    }
  }, [form]);

  const formByStep = {
    1: (
      <PersonalInformationForm
        data={form}
        fillForm={dispatch}
        stepUpdate={setCurrentStep}
      />
    ),
    2: (
      <WorkExperienceForm
        data={form.workExperience}
        fillForm={dispatch}
        stepUpdate={setCurrentStep}
      />
    ),
    3: <AvatarForm fillForm={dispatch} stepUpdate={setCurrentStep} />,
  };

  return (
    <MainContainer>
      <Header>
        <TitleForm>Create a new Candidate</TitleForm>
        <Link to="/candidates">
          <CloseButton>
            <img src={cancelButton} alt="Cancel new candidate" />
          </CloseButton>
        </Link>
      </Header>
      <Progress currentStep={currentStep} />
      {formByStep[currentStep]}
    </MainContainer>
  );
};

export default NewCandidate;
