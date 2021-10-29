import styled from "@emotion/styled";
import { parseDate } from "../utils/dateParser";

const MainContainer = styled.li`
  display: flex;
  gap: 8px;
  width: 296px;
  height: 76px;
  padding: 8px;
  background: white;
  border: var(--border-gray);
  box-shadow: var(--card-shadow);
  border-radius: 8px;
`;

const FlexContainer = styled.div`
  max-width: 196px;
  display: flex;
  flex-direction: ${(props) => (props.flexColumn ? "column" : "row")};
  gap: 4px;
  overflow: hidden;
`;

const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 100px;
  border: var(--border-gray);
`;

const CountryFlag = styled.img`
  width: 14px;
  height: 10px;
  align-self: center;
`;

const Name = styled.h3`
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
`;

const Text = styled.p`
  font-size: 12px;
  line-height: 15px;
  color: var(--gray-3);
`;

// These 2 styles will be use after adding more details view to cards
const SubTitle = styled(Text)`
  color: var(--gray-2);
`;

const Title = styled.p`
  font-size: 14px;
  line-height: 17px;
  color: black;
`;

export default function CandidateCard({
  name,
  phone,
  gender,
  birthday,
  nationality,
  bio,
  profesion,
  workExperience,
  avatarURL,
}) {
  return (
    <MainContainer>
      <Avatar src={avatarURL} alt="" />
      <FlexContainer flexColumn>
        <FlexContainer>
          <CountryFlag
            src={`https://flagcdn.com/16x12/${nationality}.png`}
            alt=""
          />
          <Name>{name}</Name>
        </FlexContainer>
        <Text>{profesion}</Text>
        <Text>{parseDate(workExperience, false)} of experience</Text>
      </FlexContainer>
    </MainContainer>
  );
}
