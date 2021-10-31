import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { LargeButton } from "./UI/Buttons";
import avatar from "../assets/avatar.png";
import { AVATAR_URL } from "../constants";
import { Form, Input } from "./Forms";
import { NameInput } from "./Texts";

const BtnContainer = styled.div`
  display: flex;
  gap: 8px;
  width: max-content;
  margin: auto;
  margin-top: 35px;
`;

const AvatarPreview = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 100px;
  border: var(--border-gray);
  margin: auto;
  margin-top: 6px;
`;

export const AvatarForm = ({ fillForm, stepUpdate }) => {
  const [avatarURL, setAvatarURL] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fillForm({ type: AVATAR_URL, url: avatarURL });
  }

  return (
    <Form>
      <label>
        <NameInput>Avatar Files</NameInput>
        <Input
          type="text"
          name="avatar"
          value={avatarURL}
          onChange={(e) => setAvatarURL(e.target.value)}
          placeholder="https://..."
          required
        />
      </label>
      <NameInput>Preview:</NameInput>
      {avatarURL && <AvatarPreview src={avatarURL} alt="" />}
      <BtnContainer>
        <LargeButton onClick={() => stepUpdate(2)}>Previous</LargeButton>
        <LargeButton type="submit" onClick={handleSubmit}>
          Finish
        </LargeButton>
      </BtnContainer>
    </Form>
  );
};
