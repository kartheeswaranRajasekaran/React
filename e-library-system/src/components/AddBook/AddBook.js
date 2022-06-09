import './AddBook.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
function AddBook(){
    const navigate=useNavigate();
    const [getBook, setBook]=useState({
        title:'',
        desc:'',
        author:'',
        avail:''
    })
    const onChangeHandler=(event)=>{
        setBook({
            ...getBook,[event.target.name]:event.target.value
        })
    }
    const onAddHandler=(event)=>{
        event.preventDefault();
        if(getBook.title&&getBook.desc&&getBook.author&&getBook.avail){
            axios.post('http://localhost:3000/AddBook',{
            title:getBook.title,
            desc:getBook.desc,
            author:getBook.author,
            avail:getBook.avail
          }).then(()=>{
            navigate('/adminSearch');
          }).catch(()=>{
             alert("error");
          })
    }

    else{

      alert("Please add some data");

    }

  }
      
    return(<div>
        <form className="classform1">
            <br/>
            <div><h3>Add Book</h3></div><br/>
            <table>
                <tbody>
                <tr>
                    <td>
                    <div className="form-group">
                        <label>Book Title:</label>
                    </div>
                    </td>
                    <td><input type="text" value={getBook.title} onChange={onChangeHandler} id="title" className="classlabel" name="title"/></td>
                </tr>
                <tr>
                    <td>
                    <div className="form-group">
                        <label>Book Details:</label>
                    </div>
                    </td>
                    <td><input type="text" value={getBook.desc} onChange={onChangeHandler} id="desc" className="classlabel" name="desc"/></td>
                </tr>
                <tr>
                    <td>
                    <div className="form-group">
                        <label>Author Name:</label>
                    </div>
                    </td>
                    <td><input type="text" value={getBook.author} onChange={onChangeHandler} id="name" className="classlabel" name="author"/></td>
                </tr>
                <tr>
                    <td>
                    <div className="form-group">
                        <label>Number of <br/>Book Available:</label>
                    </div>
                    </td>
                    <td><input type="number" value={getBook.avail} onChange={onChangeHandler} id="number" className="classlabel" name="avail"/></td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                    <button type="submit" className="btn btn-success1" onClick={onAddHandler}>Add Book</button>
                    &nbsp;&nbsp;&nbsp;
                    <button className="btn btn-success1"><Link to="/adminSearch ">Back</Link></button>
                    </td>
                </tr>
                </tbody>
            </table>
        </form>
    </div>);
}
export default AddBook;