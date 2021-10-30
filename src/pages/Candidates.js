import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import CandidatesContainer from "../components/CandidatesContainer";
import { IconButton } from "../components/UI/Buttons";
import homeIcon from "../assets/home.svg";
import addIcon from "../assets/add.svg";
import CandidateCard from "../components/CandidateCard";
import { getDocuments } from "../services/firebase/store";
import Collapse from "../components/UI/Collapse";
import Filters from "../components/Filters";

const StyledNavBar = styled.nav`
  position: fixed;
  top: calc(100vh - 54px);
  width: 360px;
  display: flex;
  justify-content: space-between;
  padding: 0 32px 14px 32px;
  background: linear-gradient(180deg, #ffffff 0%, #f2f2f2 100%);
  img {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(0.9);
    }
  }
`;

export default function Candidates() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    getDocuments("candidates").then((candidates) => {
      setCandidates(candidates);
    });
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2px",
          fontSize: "14px",
          lineHeight: "17px",
        }}
      >
        <label>Search for candidates</label>
        <input type="text" placeholder="Search" />
      </div>

      <div>
        <Collapse button="More filters">
          <Filters />
        </Collapse>
      </div>

      <CandidatesContainer>
        {candidates.map((candidate) => (
          <CandidateCard key={candidate.name} {...candidate} />
        ))}
      </CandidatesContainer>

      <StyledNavBar>
        <Link to="/">
          <IconButton>
            <img src={homeIcon} alt="" />
          </IconButton>
        </Link>
        <Link to="/new-candidate">
          <IconButton>
            <img src={addIcon} alt="" />
          </IconButton>
        </Link>
      </StyledNavBar>
    </>
  );
}
