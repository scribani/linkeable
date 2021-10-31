import styled from "@emotion/styled";
import notFound from "../assets/no-found.gif";

export default function NotFound() {
  return (
    <NotF>
      <div className="words word-1">
        <span>N</span>
        <span>
          <img src={notFound} alt="not found" />
        </span>
        <span>T</span>
      </div>

      <div className="words word-2">
        <span>F</span>
        <span>
          <img src={notFound} alt="not found" />
        </span>
        <span>U</span>
        <span>N</span>
        <span>D</span>
      </div>

      <div className="words word-3">
        <span>4</span>
        <span>
          <img src={notFound} alt="not found" />
        </span>
        <span>4</span>
      </div>
    </NotF>
  );
}

const NotF = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap");

  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;

  img {
    width: 5rem;
    height: auto;
  }
  @supports (object-fit: cover) {
    .box img {
      height: 100%;
      object-fit: cover;
      object-position: center center;
    }
  }

  .words {
    color: var(--gray-2);
    font-weight: 400;
    font-size: 0;
    line-height: 1;
  }

  .words span {
    font-family: "Archivo Black", sans-serif;
    font-size: 5rem;
    display: inline-block;
    animation: move 4s ease-in-out infinite;
  }

  @keyframes move {
    0% {
      transform: translate(-30%, 0);
    }
    50% {
      text-shadow: 0 25px 50px rgba(0, 0, 0, 0.75);
    }
    100% {
      transform: translate(30%, 0);
    }
  }

  .words span:nth-child(2) {
    animation-delay: 0.5s;
  }

  .words span:nth-child(3) {
    animation-delay: 1s;
  }

  .words span:nth-child(4) {
    animation-delay: 1.5s;
  }

  .words span:nth-child(5) {
    animation-delay: 2s;
  }

  .words span:nth-child(6) {
    animation-delay: 2.5s;
  }

  .words span:nth-child(7) {
    animation-delay: 3s;
  }
`;
