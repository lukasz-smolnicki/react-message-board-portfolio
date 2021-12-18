import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <NavLink to="/signup">SignUp</NavLink>
            <NavLink to="/signin">SignIn</NavLink>
            <NavLink to="/">Board</NavLink>
        </nav>
    )
}

