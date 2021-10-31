import styled from "@emotion/styled";
import { Input } from "./Forms";
import { MediumButton } from "./UI/Buttons";

const MainContainer = styled.div`
  width: 296px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 14px;
  line-height: 17px;
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export default function SearchBar() {
  return (
    <MainContainer>
      <label>Search for candidates</label>
      <FlexContainer>
        <Input style={{ marginBottom: "0" }} type="text" placeholder="Search" />
        <MediumButton>Search</MediumButton>
      </FlexContainer>
    </MainContainer>
  );
}
