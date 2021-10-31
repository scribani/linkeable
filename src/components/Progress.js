import styled from "@emotion/styled";
import { Finished, InProgress, Waiting } from "./ProgressSteps";

const ProgressBar = styled.div`
  width: 340px;
  display: flex;
  gap: 12px;
  padding: 8px;
`;

export default function Progress({ currentStep }) {
  const steps = [
    { number: 1, description: "Personal information" },
    { number: 2, description: "Work experience" },
    { number: 3, description: "Avatar" },
  ];

  return (
    <>
      <ProgressBar>
        {steps.map(({ number, description }) => {
          if (number < currentStep) {
            return <Finished key={number} description={description} />;
          } else if (number === currentStep) {
            return (
              <InProgress
                key={number}
                step={number}
                description={description}
              />
            );
          } else {
            return (
              <Waiting key={number} step={number} description={description} />
            );
          }
        })}
      </ProgressBar>
    </>
  );
}
