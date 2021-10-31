import styled from "@emotion/styled";
import calendar from "../assets/calendar.svg";

export const Form = styled.form`
  width: ${(props) => props.width || "240px"};
  display: flex;
  flex-direction: column;
`;

export const FormExperience = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  .border-form {
    border: 1px solid #e0e0e0;
    border-radius: 8px 8px 8px 8px;
    padding: 8px;
  }
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
  border: 1px solid #bdbdbd;
  display: inline-block;
  margin: auto;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 8px;
`;
