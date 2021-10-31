import styled from "@emotion/styled";

export const LargeButtonDisable = styled.button`
  padding: 8px 12px;
  font-size: 14px;
  line-height: 17px;
  width: 56px;
  background: transparent;
  color: var(--gray-5);
  border: 1px solid var(--gray-5);
  border-radius: 8px;
  cursor: not-allowed;
  margin: auto;
`;

export const LargeButton = styled.button`
  padding: 8px 12px;
  font-size: 14px;
  line-height: 17px;
  color: white;
  background-color: var(--gray-2);
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

export const MediumButton = styled(LargeButton)`
  padding: 4px 12px;
  cursor: pointer;
`;

export const SmallButton = styled(LargeButton)`
  padding: 2px 8px;
  font-size: 12px;
  line-height: 15px;
  cursor: pointer;
`;

export const IconButton = styled.button`
  width: 40px;
  height: 40px;
  background: white;
  border: 1px solid #bdbdbd;
  box-shadow: var(--card-shadow);
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(0.7);
  }
`;

export const CloseButton = styled.img`
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(0.7);
  }
`;
