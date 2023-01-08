import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
const About = (props) => {
    return ( 
        <div className="about text-center">
            <h1 className={props.mode}>Said Elhabchi</h1>
            
                <p className={"fs-5 pb-3 " + props.mode}>Junior Mobile/Fullstack developer & Future Software Engineer</p>
                <p className={"text-secondary "}>I am currently studying at National School of Applied Sciences Oujda (ENSAO) computer science principles<br/> and software development.
                In addition to studies i am also a beginner graphic designer</p>
                <p className={"text-secondary "}>and here is my socials</p>
                <div className="fs-3 px-5 d-flex justify-content-center gap-3">
                    <a href="https://www.instagram.com/saidelhabchii/" className={props.mode}><BsInstagram /></a>
                    <a href="https://www.linkedin.com/in/said-elhabchi-7a3a53234/" className={props.mode}><BsLinkedin /></a>
                    <a href="https://github.com/saidelhabchi" className={props.mode}><BsGithub /></a>
                </div>
            
            
        </div>
     );
}
 
export default About;