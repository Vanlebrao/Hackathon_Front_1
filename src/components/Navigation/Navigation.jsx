import * as S from "./styles";

import { NavMenuItem } from "./components/NavMenuItem/NavMenuItem";

import {
  FaRegCalendarAlt,
  FaHome,
  FaBook,
  FaRegCalendarCheck,
  FaOutdent,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useBearStore from "../../state/state";

export function Navigation() {
  const navigate = useNavigate();

  const setIsUserValid = useBearStore((state) => state.setIsUserValid);

  function signOut() {
    localStorage.removeItem("token");
    setIsUserValid(false);
    navigate("/login");
  }

  return (
    <S.NavigationContainer>
      <S.NavigationWrapper>
        <S.NavigationWrapperMenu>
          <S.NavigationMenu>
            <NavMenuItem icon={<FaHome />} text={"Home"} link={"/home"} />
            <NavMenuItem
              icon={<FaRegCalendarAlt />}
              text={"Calendario"}
              link={"/calendar"}
            />
            <NavMenuItem icon={<FaBook />} text={"Estudos"} link={"/estudos"} />
            <NavMenuItem
              icon={<FaRegCalendarCheck />}
              text={"Habitos"}
              link={"/habitos"}
            />
          </S.NavigationMenu>
        </S.NavigationWrapperMenu>
        <span onClick={signOut}>
          <FaOutdent />
        </span>
      </S.NavigationWrapper>
    </S.NavigationContainer>
  );
}
