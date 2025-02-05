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
                    <NavLink to={"/"}>
                        <GrHomeRounded />
                        <span>Home</span>
                    </NavLink>
                    <NavLink to={"/projects"}>
                        <FaRegFolder />
                        <span>Projects</span>
                    </NavLink>
                    <NavLink to={"/experience"}>
                        <FaRegFileAlt />
                        <span>Experience</span>
                    </NavLink>
                    <NavLink to={"/tools"}>
                        <FiSettings />
                        <span>Tools</span>
                    </NavLink>
                    <NavLink to={"/contact"}>
                        <LuPencilLine />
                        <span>Contact</span>
                    </NavLink>
                </nav>
            </StyledNavContainer>
        </>
    );
};

export default NavBar;
