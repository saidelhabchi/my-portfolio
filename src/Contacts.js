const Contacts = (props) => {
    return ( 
        <div className="footer container">
            <div className="text-center">
                <h1 className={props.mode}>Contacts</h1>
            </div>
            <div className="row align-items-center">
            <div className="col">
            <h3 className={props.mode}>Social Media</h3>
            <ul className="d-decoration">
                <li><a className={props.mode} href="https://www.instagram.com/saidelhabchii/">Instagram</a></li>
                <li><a className={props.mode} href="https://www.linkedin.com/in/said-elhabchi-7a3a53234/">LinkedIn</a></li>
                <li><a className={props.mode} href="https://github.com/saidelhabchi">Github</a></li>
            </ul>
            </div>
            <div className="col">
            <h3 className={props.mode}>Freelance platformes</h3>
            <ul className="d-decoration">
                <li><a className={props.mode} href="https://www.upwork.com/freelancers/~011e05e472f0250ddb?viewMode=1">UpWork</a></li>
                <li><a className={props.mode} href="https://www.freelancer.com/u/saidelhabchi31">Freelancer</a></li>
            </ul>
            </div>
            
            </div>
            
        </div>
     );
}
 
export default Contacts;