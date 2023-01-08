import screen1 from './screen1.png';
import blog from './blog.PNG';
const Projects = (props) => {

    const androidStyle = {
        width : 400,
    };

    const imgStyle = {
        width : 800,
    };

    return ( 
        <div className="section container">
            <div className="text-center">
                <h1 className={props.mode}>Projects</h1>
            </div>
            <p className={'fs-3 '+ props.mode}>Here is some of my personal projects :</p>
            <div className='text-center'>
            <ul className='d-decoration py-4'>
                <li className='mb-5'>
                    <div className='border-bottom'>
                        <img src={screen1} alt="screen app android" style={androidStyle}/>
                        <p className={'mt-4 '+ props.mode}>Mobile application : Note application using Android Studio with JAVA programming language</p>
                    </div>
                </li>
                <li className='mb-5'>
                    <div className='border-bottom'>
                        <img src={blog} alt="screen app laravel" className='img-fluid rounded' style={imgStyle}/>
                        <p className={'mt-4 '+ props.mode}>Web application : Blog using Laravel PHP framework and Tailwindcss</p>                    
                    </div>
                </li>
            </ul>
            </div>
            
            {/**
             * <div className="d-flex">
                
                
            </div>
             */}
        </div>
     );
}
 
export default Projects;