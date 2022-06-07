import './Homepage.css';
import Libraryimage from '../../images/LibraryImage1.png';
function Home(){
    return(<div>
        <div className="classdiv">Welcome to Library Management System<img src={Libraryimage} className="image1"></img></div>
    </div>);
}
export default Home;