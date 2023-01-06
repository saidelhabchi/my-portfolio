import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs"
const About = () => {
    return ( 
        <div className="about text-center">
            <h1>Said Elhabchi</h1>
            <p className="fs-5 pb-3">Junior Mobile/Fullstack developer & Future Software Engineer</p>
            <p className="text-secondary">I am currently studying at National School of Applied Sciences Oujda (ENSAO) computer science principles<br/> and software development.
            In addition to studies i am also a beginner graphic designer</p>
            <p className="text-secondary">and here is my socials</p>
            <div className="fs-3 px-5 d-flex justify-content-center gap-3">
                <BsInstagram />
                <BsLinkedin />
                <BsGithub />
            </div>
        </div>
     );
}
 
export default About;