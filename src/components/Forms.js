import styled from "@emotion/styled";
import calendar from "../assets/calendar.svg";

export const FlexTitleForm = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 32px 12px 20px 10px;
`;

export const ProgressBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 18px;
`;

export const ProgressStatus = styled.div`
  display: flex;
  align-items: flex-start;
`;

// C in the last part of the variables means COMPLETED
// NC in the last part of the variables means NO-COMPLETED

export const NumberProgressC = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 19px;
  width: 24px;
  height: 24px;
  border: 1px solid var(--blue-c);
  background-color: var(--blue-c);
  color: white;
  border-radius: 50%;
`;

export const NumberProgressNC = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 19px;
  width: 24px;
  height: 24px;
  border: 1px solid var(--gray-4);
  color: var(--gray-4);
  border-radius: 50%;
`;

export const TextProgress = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 4px;
`;

export const StateProgressNC = styled.h2`
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 2px;
  color: var(--gray-4);
`;

export const Form = styled.form`
  margin: 20px 60px 32px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  border-radius: 8px;
  width: 100%;
  height: 27px;
  padding: 4px 12px;
  margin-bottom: 8px;
  color: var(--gray-2);
  &::placeholder {
    color: var(--gray-5);
  }
  &:focus {
    outline: none;
    border-color: gray;
  }
`;

export const Select = styled.select`
  appearance: none;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  border-radius: 8px;
  width: 100%;
  height: 27px;
  padding: 4px 12px;
  margin-bottom: 8px;
  color: var(--gray-2);
  background-image: linear-gradient(45deg, transparent 50%, var(--gray-3) 50%),
    linear-gradient(135deg, var(--gray-3) 50%, transparent 50%),
    linear-gradient(to right, #ccc, #ccc);
  background-position: calc(100% - 15px) calc(0.8em + 0.1px),
    calc(100% - 10px) calc(0.8em + 0.1px), calc(100% - 2.5em) 10em;
  background-size: 5px 5px, 5px 5px, 1px 1.5em;
  background-repeat: no-repeat;
  &:focus {
    outline: none;
    border-color: gray;
  }
`;

export const TextArea = styled.textarea`
  font-family: "Inter", sans-serif;
  resize: none;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  border-radius: 8px;
  width: 100%;
  height: 80px;
  padding: 4px 12px;
  color: var(--gray-2);
  &::placeholder {
    color: var(--gray-5);
  }
  &:focus {
    outline: none;
    border-color: gray;
  }
`;

export const InputDate = styled.input`
  font-family: "Inter", sans-serif;
  cursor: pointer;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  border-radius: 8px;
  width: 100%;
  height: 27px;
  padding: 4px 12px;
  margin-bottom: 8px;
  color: var(--gray-2);
  background-image: url(${calendar});
  background-position: calc(100% - 10px) calc(0.4em + 0.1px),
    calc(100% - 5px) calc(0.8em + 0.1px), calc(100% - 2.5em) 10em;
  background-repeat: no-repeat;
  &::placeholder {
    color: var(--gray-5);
  }
  &:focus {
    outline: none;
    border-color: gray;
    color: rgba(255, 255, 255, 0.46) !important;
  }
  &::-webkit-calendar-picker-indicator {
    color: rgba(0, 0, 0, 0);
    opacity: 1;
    display: block;
    background: url(calendar) no-repeat;
    margin-top: 5px;
    cursor: pointer;
  }
`;

export const InputRadio = styled.input`
  position: absolute;
  visibility: hidden;
  display: none;
  &:checked + Label {
    color: white;
    background: var(--gray-3);
  }
`;

export const Label = styled.label`
  height: 30px !important;
  border-radius: 5px;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: var(--gray-2);
  display: inline-block;
  cursor: pointer;
  padding: 5px 20px;
`;

export const LabelForm = styled.label`
  border: 1px solid #BDBDBD;
  display: inline-block;
  margin: auto;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 8px;
`;
