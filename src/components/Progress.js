import styled from "@emotion/styled";

export default function StepBar () {
  const StepBar = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly; 
    gap: 20px;
  `;
  const Step = styled.form`
    .number {
      font-weight: 400;
      font-size: 16px;
      line-height: 19.36px;
    }
    .number--finished {

    }
    .number--progress {
      color: #fff;
      background-color: #2F80ED;

      
    }
    .number--finished {

    }

    .title {

    }
    .description {

    }

  `;

  return (
    <StepBar>
      <Step>
        <p className="number">1</p>
        <p className="title">Finished</p>
        <p className="description">Description of the step</p>
      </Step>
    </StepBar>

  ) 
}