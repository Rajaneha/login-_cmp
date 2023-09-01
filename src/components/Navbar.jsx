import { Link } from "react-router-dom";
import { auth } from "../config/firebase.tsx";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import "./Navbar.css"

export const Navbar = () => {
  const [user] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
  };
  return (
    <div className="navbar">
      <div className="links">
      <Link to="/products"> Products </Link>
      <Link to="/about"> About Us </Link>
      <Link to="/contact"> Contact Us </Link>
      </div>
      <div className="user">
        {user && (
          <>
            <p> {user?.displayName} </p>
            <img src={user?.photoURL || ""} width="20" height="20" />
            <button onClick={signUserOut}> Log Out</button>
          </>
        )}
      </div>
    </div>
  );
};