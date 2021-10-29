import React from "react";
import styled from "@emotion/styled";
import { LargeButton } from "./Buttons";
import avatar from "../assets/avatar.png"
const AvatarContainer = styled.div`

  max-width: 300px;
  height: 350px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  section {
    display: flex;
    flex-direction: column;
    p {
      padding: 0;
      margin: 3px;
    }
    span {
      margin: 3px;
      font-weight: bold;
      font-size: 12px;
    }
    label {
      border: 1px solid #ccc;
      display: inline-block;
      border-radius: 10px;
      padding: 6px 12px;
      cursor: pointer;
      width: 200px;
      color: var(--gray-5);
    }
    input {
      display: none;
    }
    img{
      width: 50%;
      align-self: center;
     margin-bottom:-10px;
     border-radius: 50px;
     border: 1px solid #ccc;
    }
  }
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 200px;
  align-items: center;
`;

export const AvatarForm = () => {
  return (
    <AvatarContainer>
      <section>
        <p>Avatar File</p>
        <label>
          https://...
          <input type="file" placeholder="https//..." />
        </label>
        <span>Preview:</span>
        <img src={avatar} alt="previewImage" />
      </section>

      <BtnContainer>
        <LargeButton>Previous</LargeButton>
        <LargeButton>Finish</LargeButton>
      </BtnContainer>
    </AvatarContainer>
  );
};
