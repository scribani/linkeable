import styled from "@emotion/styled";
import checked from "../assets/checked.svg";

const Step = styled.div`
  width: 100px;
  display: flex;
  align-items: flex-start;
  gap: 4px;
  padding: 4px;
`;

const StepNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 19px;
  width: 24px;
  height: 24px;
  border: 1px solid
    ${(props) => (props.inProgress ? "var(--blue-c)" : "var(--gray-4)")};
  background-color: ${(props) => (props.inProgress ? "var(--blue-c)" : "none")};
  color: ${(props) => (props.inProgress ? "white" : "var(--gray-4)")};
  border-radius: 50%;
`;

const FlexColumn = styled.div`
  width: 64px;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Title = styled.p`
  font-size: 14px;
  line-height: 17px;
  color: ${(props) => (props.dark ? "var(--gray-2)" : "var(--gray-4)")};
`;

const Description = styled.p`
  font-size: 10px;
  line-height: 12px;
  color: ${(props) => (props.dark ? "var(--gray-2)" : "var(--gray-4)")};
`;

export const InProgress = ({ step, description }) => (
  <Step>
    <StepNumber inProgress>{step}</StepNumber>
    <FlexColumn>
      <Title dark>Progress</Title>
      <Description dark>{description}</Description>
    </FlexColumn>
  </Step>
);

export const Waiting = ({ step, description }) => (
  <Step>
    <StepNumber>{step}</StepNumber>
    <FlexColumn>
      <Title>Waiting</Title>
      <Description>{description}</Description>
    </FlexColumn>
  </Step>
);

export const Finished = ({ description }) => (
  <Step>
    <img src={checked} alt="checked" />
    <FlexColumn>
      <Title dark>Finished</Title>
      <Description>{description}</Description>
    </FlexColumn>
  </Step>
);
