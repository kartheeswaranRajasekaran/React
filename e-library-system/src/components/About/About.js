import './About.css';
import Libraryimage from '../../images/LibraryImage1.png';
function About(){
    return(<div>
        <div className="container"><img src={Libraryimage} className="image2"></img>
        <div className="centered">Welcome to Library Management System</div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="classdiv2">Online library management project in spring and hibernate is complete solution for all the manual problem that we face during the library management. Mainly there are 2 main actor of the application that going to operate the application <b>1.Admin/Librarian & 2.User/Students</b>.
        <br/>
        <br/>
        Book or Digital books is the main module of the library management system. Book are assets that we are storing in the database with some details like name, author name and version and a PDF format. So admin can perform crud operation and issued the booked to users.<br/>
        </div>
    </div>);
}
export default About;