const Education = (props) => {
    return ( 
        <div className="section">
            <div className="text-center">
                <h1 className={props.mode}>Education</h1>
            </div>            
            <p className={props.mode}>I am a 4th year Software Engineering student at ENSAO.</p>
            <p className={props.mode}>Throughout my time at ENSAO i have gained I have gained a solid foundation in computer science concepts such as data structures, algorithms, and programming languages</p>
            <p className={props.mode}>I have also had the opportunity to participate in various software engineering projects, including the development of a mobile applications and web applications.</p>
            <p className={props.mode}>Moreover, i have also been envolved in some extracurricular activities related to computer science and software engineering. These include internships at tech companies, involvement in coding clubs and many more activities</p>
            <p className={props.mode}>These experiences have allowed me to apply my knowledge to real-world projects and have given me valuable hands-on experience in the field.</p>
        </div>
     );
}
 
export default Education;