import { CloseButton } from "./Buttons";
import {
  FlexTitleForm,
  NumberProgressC,
  NumberProgressNC,
  ProgressBar,
  ProgressStatus,
  StateProgressNC,
  TextProgress,
} from "./Forms";
import {
  StateProgressC,
  StepProgressC,
  StepProgressNC,
  TitleForm,
} from "./Texts";
import cancelButton from "../assets/cancel.svg";
import checked from "../assets/checked.svg";

const Progress = () => {
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
          <img src={checked} alt="checked" />
          <TextProgress>
            <StateProgressNC>Waiting</StateProgressNC>
            <StepProgressNC>Avatar</StepProgressNC>
          </TextProgress>
        </ProgressStatus>
      </ProgressBar>
    </div>
  );
};

export default Progress;
