import './Search.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Search(){
  const [getList, setList] = useState([]);
  const [getIndex, setIndex] = useState(-1);
  const [getSearch, setSearch] = useState('');
  useEffect(() => {
  
      if (JSON.parse(sessionStorage.getItem('bookDetails')) && JSON.parse(sessionStorage.getItem('bookDetails')).length > 0) {
          setList(JSON.parse(sessionStorage.getItem('bookDetails')))
      }
  }, [])
  const onDeleteHandler = (index) => {
      let bookDetails = [...getList];
      bookDetails.splice(index, 1);
      setList(bookDetails);
      sessionStorage.setItem('bookDetails', JSON.stringify(bookDetails));
  }
  const [getBook, setBook] = useState({
      title: '',
      desc: '',
      author: '',
      avail: ''
  })
  const onChangeHandler = (event) => {
      setBook({
          ...getBook, [event.target.name]: event.target.value
      })
  }
  const onChangeSearchHandler = (event) => {
      setSearch(event.target.value);
  }
  const onEditHandler = (index) => {
      setBook({
          title: getList[index].title,
          desc: getList[index].desc,
          author: getList[index].author,
          avail: getList[index].avail
      })
      setIndex(index);
  }
  const onEditSubmitHandler = (event) => {
      event.preventDefault();
      let bookDetails = [...getList];
      bookDetails[getIndex].title = getBook.title;
      bookDetails[getIndex].desc = getBook.desc;
      bookDetails[getIndex].author = getBook.author;
      bookDetails[getIndex].avail = getBook.avail;
      setList(bookDetails);
      sessionStorage.setItem('bookDetails', JSON.stringify(bookDetails));
  }
  const searchFilter = (event) => {
      event.preventDefault();
      let details = getList.filter((obj) => {
          return obj.title === getSearch;
      })
      setList(details);
  }
  const resetFilter = (event) => {
      event.preventDefault();
      setSearch('');
      if (JSON.parse(sessionStorage.getItem('bookDetails')) && JSON.parse(sessionStorage.getItem('bookDetails')).length > 0) {
          setList(JSON.parse(sessionStorage.getItem('bookDetails')))
      }
  }

    return(<div>
      <div className="container-fluid">
          <div className="row">
              <div className="col-3">
                  <form>
                      <div><h2><center>Search Book</center></h2></div>
                      <br />
                      <label className="classlabel">Book Title: <input type="text" value={getSearch} onChange={onChangeSearchHandler} id="bookName" name="searchbookName" /></label>
                      <br />
                      <button onClick={searchFilter} type="submit" className="btn btn-success2">Search</button>
                      <button onClick={resetFilter} type="submit" className="btn btn-success3">Reset</button>
                      <br /><br />
                  </form>
              </div>
          </div>
          <table className="table">
              <thead>
                  <tr>
                      <th scope="col">Book ID</th>
                      <th scope="col">Book Title</th>
                      <th scope="col">Book Details</th>
                      <th scope="col">Author Name</th>
                      <th scope="col">No.Of Book Available</th>
                      <th scope="col">Edit</th>
                      <th scope="col">Delete</th>
                  </tr>
              </thead>
              <tbody>
                  {getList.map((obj, index) => {
                      return (
                          <tr key={index}>
                              <th scope="row">{index}</th>
                              <td>{obj.title}</td>
                              <td>{obj.desc}</td>
                              <td>{obj.author}</td>
                              <td>{obj.avail}</td>
                              <td><i onClick={() => onEditHandler(index)} data-toggle="modal" className="fa fa-pencil" aria-hidden="true" data-target="#edit"></i>
                              </td>
                              <td><i onClick={() => onDeleteHandler(index)} data-toggle="modal" className="fa fa-trash" aria-hidden="true" data-target="#delete"></i>
                                  <div className="container-fluid">

                                  </div>
                              </td>
                          </tr>
                      )
                  })}
              </tbody>
          </table>
      </div>
      <div className="modal" id="edit" role="dialog">
          <div className="modal-dialog" role="document">
              <div className="modal-content">
                  <div className="modal-header">
                      <h5 className="modal-title">Edit details</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                      </button>
                  </div>
                  <div className="modal-body">
                      <form className="classform1">
                          <br />
                          <table>
                              <tbody>
                                  <tr>
                                      <td>
                                          <div className="form-group">
                                              <label>Book Title:</label>
                                          </div>
                                      </td>
                                      <td><input type="text" value={getBook.title} onChange={onChangeHandler} id="title" className="classlabel" name="title" /></td>
                                  </tr>
                                  <tr>
                                      <td>
                                          <div className="form-group">
                                              <label>Book Details:</label>
                                          </div>
                                      </td>
                                      <td><input type="text" value={getBook.desc} onChange={onChangeHandler} id="desc" className="classlabel" name="desc" /></td>
                                  </tr>
                                  <tr>
                                      <td>
                                          <div className="form-group">
                                              <label>Author Name:</label>
                                          </div>
                                      </td>
                                      <td><input type="text" value={getBook.author} onChange={onChangeHandler} id="name" className="classlabel" name="author" /></td>
                                  </tr>
                                  <tr>
                                      <td>
                                          <div className="form-group">
                                              <label>Number of <br />Book Available:</label>
                                          </div>
                                      </td>
                                      <td><input type="number" value={getBook.avail} onChange={onChangeHandler} id="number" className="classlabel" name="avail" /></td>
                                  </tr>
                                  <tr>
                                      <td></td>
                                  </tr>
                              </tbody>
                          </table>
                      </form>
                  </div>
                  <div className="modal-footer">
                      <button type="button" onClick={onEditSubmitHandler} data-dismiss="modal" className="btn btn-success">Save changes</button>
                  </div>
              </div>
          </div>
      </div>
      <div className="modal" id="delete" role="dialog">
          <div className="modal-dialog" role="document">
              <div className="modal-content">
                  <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Confirmation</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                      </button>
                  </div>
                  <div className="modal-body">
                      Book details deleted successfully
                  </div>
                  <div className="modal-footer">
                      <button type="button" className="btn btn-success1" data-dismiss="modal">Ok</button>
                  </div>
              </div>
          </div>
      </div>
      
  </div>);
}
export default Search;