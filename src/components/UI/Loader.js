import styled from "@emotion/styled";

const Loader = () => {
  return (
    <div>
      <Loading>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="words word-1">
          <span>L</span>
          <span>o</span>
          <span>a</span>
          <span>d</span>
          <span>i</span>
          <span>n</span>
          <span>g</span>
        </div>
      </Loading>
    </div>
  );
};

export default Loader;

const Loading = styled.div`
  width: 200px;
  height: 60px;
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%);
  .circle {
    width: 20px;
    height: 20px;
    position: absolute;
    border-radius: 50%;
    background-color: var(--gray-2);
    left: 15%;
    transform-origin: 50%;
    animation: circle 0.5s alternate infinite ease;
  }

  @keyframes circle {
    0% {
      top: 60px;
      height: 5px;
      border-radius: 50px 50px 25px 25px;
      transform: scaleX(1.7);
    }
    40% {
      height: 20px;
      border-radius: 50%;
      transform: scaleX(1);
    }
    100% {
      top: 0%;
    }
  }
  .circle:nth-child(2) {
    left: 45%;
    animation-delay: 0.2s;
  }
  .circle:nth-child(3) {
    left: auto;
    right: 15%;
    animation-delay: 0.3s;
  }
  .shadow {
    width: 20px;
    height: 4px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 62px;
    transform-origin: 50%;
    z-index: -1;
    left: 15%;
    filter: blur(1px);
    animation: shadow 0.5s alternate infinite ease;
  }

  @keyframes shadow {
    0% {
      transform: scaleX(1.5);
    }
    40% {
      transform: scaleX(1);
      opacity: 0.7;
    }
    100% {
      transform: scaleX(0.2);
      opacity: 0.4;
    }
  }
  .shadow:nth-child(4) {
    left: 45%;
    animation-delay: 0.2s;
  }
  .shadow:nth-child(5) {
    left: auto;
    right: 15%;
    animation-delay: 0.3s;
  }
  .words {
    color: var(--gray-4);
    font-size: 0;
    line-height: 1.5;
  }

  .words span {
    position: relative;
    top: 90px;
    left: 72.5px;
    font-size: 1rem;
    display: inline-block;
    animation: move 3s ease-in-out infinite;
  }

  @keyframes move {
    0% {
      transform: translate(-30%, 0);
    }
    50% {
      text-shadow: 0px 5px 20px rgba(0, 0, 0, 0.72);
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
