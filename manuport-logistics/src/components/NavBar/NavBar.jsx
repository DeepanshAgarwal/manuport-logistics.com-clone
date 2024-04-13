import "./NavBar.css";
import { IoMenu } from "react-icons/io5";
import mainLogo from "../../assets/main-logo.png";

export default function NavBar() {
    return (
        <div className="NavBar">
            <div className="navbar-secondary">
                <div className="nav-sec-elem">T&C</div>
                <div className="nav-sec-elem">BLOG</div>
                <div className="nav-sec-elem">LOG IN</div>
            </div>
            <div className="navbar-primary">
                <img className="main-logo" src={mainLogo} alt="main-logo" />
                <div className="nav-prim-elem">Home</div>
                <div className="nav-prim-elem">Services</div>
                <div className="nav-prim-elem">Commodities</div>
                <div className="nav-prim-elem">Digital</div>
                <div className="nav-prim-elem">Careers</div>
                <div className="nav-prim-elem">About</div>
                <div className="nav-prim-elem">EGS</div>
                <div className="nav-prim-elem">Contact</div>
                <div className="menu-icon">
                    <IoMenu />
                </div>
            </div>
        </div>
    );
}
