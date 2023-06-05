import logo from "../../assets/NuKenzie.svg";
import { StyledHeader } from "./styles";

export const Header = () => {
  return (
    <StyledHeader>
      <div className="flexBox">
        <img src={logo} alt="" />
      </div>
    </StyledHeader>
  );
};
