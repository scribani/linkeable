import styled from "@emotion/styled";
import { MaxCh, NameInput } from "./Texts";
import cancel from "../assets/cancelBubble.svg";
import query from "../assets/query.svg";
import { InputRadio, Label, LabelForm } from "./Forms";
import { useState } from "react";

const Filters = ({git }) => {
  const initialForm = {
    company: "",
    minexp: "",
    maxexp: "",
    minage: "",
    maxage: "",
    gender: "",
  };

  const initialFormCountry = {
    Argentina: "",
    Bolivia: "",
    Chile: "",
    Colombia: "",
    Ecuador: "",
    Peru: "",
    Mexico: "",
    Venezuela: "",
  };

  const [filter, setFilter] = useState(initialForm);
  const [country, setCountry] = useState(initialFormCountry);

  function setFilterValue(e) {
    e.preventDefault();
    setFilter({ ...filter, [e.target.name]: e.target.value });
    companies(e.target.value)
  }

  function setCountryValue(e) {
    e.preventDefault();
    setCountry({ ...country, [e.target.value]: e.target.value });
  }

  function cleanCountry(e) {
    e.preventDefault();
    setCountry({ ...country, [e.target.id]: "" });
  }

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
            value={filter.company}
            onChange={setFilterValue}
          />
        </LabelW>
        <LabelW style={{ marginBottom: "4px" }}>
          <NameInput style={{ marginTop: "4px", marginBottom: "4px" }}>
            Years of experience:
          </NameInput>
          <label className="label-text">Min:</label>
          <input
            className="input-number"
            type="number"
            name="minexp"
            min="0"
            placeholder="0"
            value={filter.minexp}
            onChange={setFilterValue}
          />
          <label className="label-text">Max:</label>
          <input
            className="input-number"
            type="number"
            name="maxexp"
            min="0"
            placeholder="0"
            value={filter.maxexp}
            onChange={setFilterValue}
          />
        </LabelW>
        <LabelW>
          <NameInput style={{ marginBottom: "4px" }}>Country</NameInput>
          <select
            className="inputSelect"
            name="country"
            defaultValue={""}
            onChange={setCountryValue}
          >
            <option value="" disabled hidden>
              Select a country
            </option>
            <option value="Argentina" name="Argentina">
              Argentina
            </option>
            <option value="Bolivia" name="Bolivia">
              Bolivia
            </option>
            <option value="Chile" name="Chile">
              Chile
            </option>
            <option value="Colombia" name="Colombia">
              Colombia
            </option>
            <option value="Ecuador" name="Ecuador">
              Ecuador
            </option>
            <option value="Mexico" name="Mexico">
              Mexico
            </option>
            <option value="Peru" name="Peru">
              Peru
            </option>
            <option value="Venezuela" name="Venezuela">
              Venezuela
            </option>
          </select>
          <div>
            <label className="label-country">Selected:</label>
            {Object.entries(country)
              .filter((v) => v[1].length > 1)
              .map((c) => (
                <label key={c[1]} className="label-bubble">
                  {c[1]}{" "}
                  <img
                    alt="cancel"
                    src={cancel}
                    id={c[1]}
                    onClick={cleanCountry}
                  />
                </label>
              ))}
          </div>
        </LabelW>
        <LabelW>
          <NameInput style={{ marginTop: "4px" }}>Age</NameInput>
          <label className="label-text">Min:</label>
          <input
            className="input-number"
            type="number"
            name="minage"
            min="0"
            placeholder="0"
            value={filter.minage}
            onChange={setFilterValue}
          />
          <label className="label-text">Max:</label>
          <input
            className="input-number"
            type="number"
            name="maxage"
            min="0"
            placeholder="0"
            value={filter.maxage}
            onChange={setFilterValue}
          />
        </LabelW>
        <LabelW>
          <NameInput style={{ marginTop: "4px", marginBottom: "4px" }}>
            Gender
          </NameInput>
          <LabelForm
            style={{ marginBottom: "0" }}
            value={filter.gender}
            name="gender"
          >
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
    &::placeholder {
      color: var(--gray-5);
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
    &::placeholder {
      color: var(--gray-5);
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
    &::placeholder {
      color: var(--gray-5);
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
