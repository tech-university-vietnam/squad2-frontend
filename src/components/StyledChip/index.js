import styled from "@emotion/styled";
import { ThemeColor } from "../../config/constants";

const StyledChip = styled.div`
  padding: 8px 12px;
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
  width: 80px;

  color: ${ThemeColor.primary};
  border: 1px solid ${ThemeColor.primary};
  transition: 0.3s;

  ${(props) =>
    props.selected &&
    `
    color: white;
    background-color: ${ThemeColor.primary};
    svg {
      color: white;
    }
  `}

  svg {
    color: 1px solid ${ThemeColor.primary};
  }

  &:hover {
    color: white;
    background-color: ${ThemeColor.primary};
    svg {
      color: white;
    }
  }
`;

export default StyledChip;
