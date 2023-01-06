import { FiMenu } from "react-icons/fi";
import { BsFillMoonStarsFill } from "react-icons/bs"
const Navbar = () => {
    return ( 
        <div className="navbar">
            {/**
             * <div><img src="./../public/logo192.png" alt="logo"/></div>
             */}
            
            <h3>logo</h3>
            <div className="d-flex justify-content-between fs-3 mt-5">
                <div><BsFillMoonStarsFill /></div>
                <a href="Said Elhabchi CV.pdf"
                download={"Said Elhabchi CV.pdf"}>
                    <button type="button" class="btn btn-dark mx-4">Resume</button>
                </a>                
            </div>
        </div>
     );
}
 
export default Navbar;