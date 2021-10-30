import styled from "@emotion/styled";
import { MaxCh, NameInput } from "./Texts";
import cancel from "../assets/cancelBubble.svg";
import query from "../assets/query.svg";
import { InputRadio, Label, LabelForm } from "./Forms";

const Filters = () => {
  return (
    <div>
      <Form>
        <LabelW>
          <NameInput style={{ marginBottom: "4px" }}>Company</NameInput>
          <input
            className="inputCompany"
            type="text"
            name="company"
            placeholder="query"
          />
        </LabelW>
        <LabelW style={{marginBottom: "4px"}}>
          <NameInput style={{ marginTop: "4px", marginBottom: "4px" }}>
            Years of experience:
          </NameInput>
          <label className="label-text">Min:</label>
          <input
            className="input-number"
            type="number"
            name="min"
            min="0"
            placeholder="0"
          />
          <label className="label-text">Max:</label>
          <input
            className="input-number"
            type="number"
            name="max"
            min="0"
            placeholder="0"
          />
        </LabelW>
        <LabelW>
          <NameInput style={{marginBottom: "4px"}}>Country</NameInput>
          <select
            className="inputSelect"
            name="nationality"
            id="nationality"
            defaultValue={"DEFAULT"}
          >
            <option value="DEFAULT" disabled hidden>
              Select a country
            </option>
            <option value="argentina">Argentina</option>
            <option value="bolivia">Bolivia</option>
            <option value="chile">Chile</option>
            <option value="colombia">Colombia</option>
            <option value="ecuador">Ecuador</option>
            <option value="peru">Peru</option>
            <option value="venezuela">Venezuela</option>
            <option value="other">Other</option>
          </select>
          <div>
            <label className="label-country">Selected:</label>
            <label className="label-bubble">
              Peru <img alt="cancel" src={cancel} />
            </label>
            <label className="label-bubble">
              Colombia <img alt="cancel" src={cancel} />
            </label>
            <label className="label-bubble">
              Argentina <img alt="cancel" src={cancel} />
            </label>
          </div>
        </LabelW>
        <LabelW>
          <NameInput style={{ marginTop: "4px" }}>Age</NameInput>
          <label className="label-text">Min:</label>
          <input
            className="input-number"
            type="number"
            name="age-min"
            min="0"
            placeholder="0"
          />
          <label className="label-text">Max:</label>
          <input
            className="input-number"
            type="number"
            name="age-max"
            min="0"
            placeholder="0"
          />
        </LabelW>
        <LabelW>
          <NameInput style={{ marginTop: "4px", marginBottom: "4px" }}>
            Gender
          </NameInput>
          <LabelForm style={{ marginBottom: "0" }}>
            <InputRadio type="checkbox" id="male" value="male" name="gender" />
            <Label htmlFor="male">Male</Label>
            <InputRadio
              type="checkbox"
              id="female"
              value="female"
              name="gender"
            />
            <Label htmlFor="female">Female</Label>
            <InputRadio
              type="checkbox"
              id="other"
              value="other"
              name="gender"
            />
            <Label htmlFor="other">Other</Label>
          </LabelForm>
        </LabelW>
      </Form>
      <MaxCh>Chose one or more</MaxCh>
    </div>
  );
};

export default Filters;

const Form = styled.form`
  font-family: "Inter", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  margin-top: 12px;
  .inputCompany {
    border: 1px solid #f2f2f2;
    box-sizing: border-box;
    border-radius: 8px;
    background: white;
    width: 240px;
    padding: 4px 12px;
    &:focus {
      outline: none;
      border-color: gray;
    }
    &::placeholder{
      color: var(--gray-5)
    }
    background-image: url(${query});
    background-position: calc(100% - 10px) calc(0.3em + 0.1px),
      calc(100% - 5px) calc(0.8em + 0.1px), calc(100% - 2.5em) 10em;
    background-repeat: no-repeat;
  }
  .inputSelect {
    appearance: none;
    margin-bottom: 4px;
    background: white;
    border: 1px solid #f2f2f2;
    box-sizing: border-box;
    border-radius: 8px;
    width: 240px;
    padding: 4px 12px;
    color: var(--gray-2);
    background-image: linear-gradient(45deg, transparent 50%, var(--gray-3) 50%),
      linear-gradient(135deg, var(--gray-3) 50%, transparent 50%),
      linear-gradient(to right, #ccc, #ccc);
    background-position: calc(100% - 14.66px) calc(0.8em + 0.1px),
      calc(100% - 10px) calc(0.8em + 0.1px), calc(100% - 2.5em) 10em;
    background-size: 5px 5px, 5px 5px, 1px 1.5em;
    background-repeat: no-repeat;
    &:focus {
      outline: none;
      border-color: gray;
    }
    &::placeholder{
      color: var(--gray-5)
    }
  }
  .input-number {
    margin-right: 4px;
    padding: 4px 12px;
    border: 1px solid #f2f2f2;
    box-sizing: border-box;
    border-radius: 8px;
    background: white;
    width: 80px;
    &:focus {
      outline: none;
      border-color: gray;
    }
    &::placeholder{
      color: var(--gray-5)
    }
  }
  .label-text {
    margin-right: 4px;
    font-size: 14px;
    line-height: 17px;
  }
  .label-country {
    font-size: 14px;
    line-height: 17px;
    margin: 8px 4px 0 0;
  }
  .label-bubble {
    border-radius: 8px;
    background: var(--gray-3);
    padding: 3px 4px;
    font-size: 10px;
    line-height: 12px;
    color: white;
    margin: 0 8px 8px 0;
  }
  img {
    position: relative;
    top: 2px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(0.9);
    }
  }
`;

const LabelW = styled.label`
  width: 296px;
`;
