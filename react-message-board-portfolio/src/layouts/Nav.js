import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <div>
            <h1>Bookkeeper</h1>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem"
                }}
            >
                <NavLink to="/signup">SignUp</NavLink>
                <NavLink to="/signin">SignIn</NavLink>
                <NavLink to="/">Board</NavLink>
            </nav>
        </div>
    );
}