import styled from "@emotion/styled";
import { useState } from "react";

const Collapse = ({ collapsed, children, button }) => {
  const [isCollapsed, setIsCollapsed] = useState(collapsed);

  return (
    <Collapsed>
      <button
        className="collapse-button text-format"
        onClick={() => setIsCollapsed(!isCollapsed)}
        style={{ margin: "16px 0 12px" }}
      >{button}</button>
      <div
        className={`collapse-content ${isCollapsed ? "expanded" : "collapsed"}`}
        aria-expanded={isCollapsed}
      >
        {children}
      </div>
    </Collapsed>
  );
};

export default Collapse;

const Collapsed = styled.div`
  .collapse-button {
    cursor: pointer;
    display: block;
    width: 296px;
    background-color: transparent;
    border: none;
    background-image: linear-gradient(45deg, transparent 50%, var(--gray-3) 50%),
      linear-gradient(135deg, var(--gray-3) 50%, transparent 50%),
      linear-gradient(to right, #ccc, #ccc);
    background-position: calc(31% - 14.7px) calc(0.5em + 0.1px),
      calc(31% - 10px) calc(0.5em + 0.1px), calc(32% - 2.5em) 10em;
    background-size: 5px 5px, 5px 5px, 1px 1.5em;
    background-repeat: no-repeat;
  }

  .collapse-content.collapsed {
    display: none;
    width: 296px;
  }

  .collapsed-content.expanded {
    display: contents;
    width: 296px;
  }

  .text-format {
    text-align: left;
    font-size: 14px;
    line-height: 17px;
    color: var(--gray-3);
  }
`;
