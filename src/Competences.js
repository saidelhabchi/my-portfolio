const Competences = (props) => {
    return ( 
        <div className="section">
            <div className="text-center">
                <h1 className={props.mode}>Competences</h1>
            </div>
            <ul className={props.mode}>
                <li>Programming languages : I am good at using JAVA, Python and C#</li>
                <li>Web Development : 
                    <ul>
                        <li>front-end development : HTML, CSS mentioning Bootstrap and tailwindcss , JavaScript and i am a beginner reactjs developer</li>
                        <li>back-end development : PHP basics plus Laravel framwork</li>
                    </ul>
                </li>
                <li>Database : Relational Databases such as MySQL and SQL Server, and Non-Relational Databases (NoSql) MongoDB, Firebase</li>
                <li>Version control : Git and Github</li>
                <li>Agile methodologies : familiar with agile principles and practices such as SCRUM, Extreme Programming and Kanban</li>
            </ul>
        </div>
     );
}
 
export default Competences;