import "./NavBar.js";
import { GrHomeRounded } from "react-icons/gr";
import { FaRegFolder } from "react-icons/fa6";
import { FaRegFileAlt } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { LuPencilLine } from "react-icons/lu";
import { StyledNavContainer } from "./NavBar";
import { NavLink } from "react-router";

const NavBar = () => {
    return (
        <>
            <StyledNavContainer>
                <nav>
                    <NavLink>
                        <GrHomeRounded />
                    </NavLink>
                    <NavLink>
                        <FaRegFolder />
                    </NavLink>
                    <NavLink>
                        <FaRegFileAlt />
                    </NavLink>
                    <NavLink>
                        <FiSettings />
                    </NavLink>
                    <NavLink>
                        <LuPencilLine />
                    </NavLink>
                </nav>
            </StyledNavContainer>
        </>
    );
};

export default NavBar;
