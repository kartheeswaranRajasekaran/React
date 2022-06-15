import './Search.css';
import { Link } from 'react-router-dom';
function Search(){
    return(<div>
        <div><h2>Search Book</h2></div>
        <br/>
        <label className="classlabel">Book Title: &nbsp;&nbsp;&nbsp;<input type="text" id="title"/></label><br/>
        <button type="button" className="btn btn-primary">Search</button>
        <br/><br/>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Position</th>
              <th scope="col">Office</th>
              <th scope="col">Age</th>
              <th scope="col">Start Date</th>
              <th scope="col">Salary</th>
              <th scope="col">Purchase</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ani Sethu</td>
              <td>Accountant</td>
              <td>Tokyo</td>
              <td>33</td>
              <td>2008/11/28</td>
              <td>$162.700</td>
              <td>
                <Link to="#">Purchase</Link>
              </td>      
            </tr>
            <tr>
              <td>Angelina Ramos</td>
              <td>CEO</td>
              <td>London</td>
              <td>47</td>
              <td>2009/10/09</td>
              <td>$1,200.700</td>
              <td>
                <Link to="#">Purchase</Link>
              </td>  
            </tr>
            <tr>
              <td>Ashton Cox</td>
              <td>Junior Technical Author</td>
              <td>San Francisco</td>
              <td>66</td>
              <td>2009/01/12</td>
              <td>$86.000</td>
              <td>
                <Link to="#">Purchase</Link>
              </td>  
            </tr>
            <tr>
              <td>Bradley Greer</td>
              <td>Software Engineer</td>
              <td>London</td>
              <td>41</td>
              <td>2012/10/13</td>
              <td>$132.000</td>
              <td>
                <Link to="#">Purchase</Link>
              </td>  
            </tr>
            <tr>
              <td>Brandon Whiter</td>
              <td>Software Engineer</td>
              <td>San Francisco</td>
              <td>28</td>
              <td>2011/06/02</td>
              <td>$206.550</td>
              <td>
                <Link to="#">Purchase</Link>
              </td>  
            </tr>
            <tr>
              <td>Braile Williamson</td>
              <td>Intergration Specialist</td>
              <td>New York</td>
              <td>41</td>
              <td>2012/12/02</td>
              <td>$372.000</td>
              <td>
                <Link to="#">Purchase</Link>
              </td>  
            </tr>
            <tr>
              <td>Bruno Nash</td>
              <td>Software Engineer</td>
              <td>London</td>
              <td>38</td>
              <td>2011/05/03</td>
              <td>$163.500</td>
              <td>
                <Link to="#">Purchase</Link>
              </td>  
            </tr>
            <tr>
              <td>Caesar Venice</td>
              <td>Pre-Sales Support</td>
              <td>New York</td>
              <td>21</td>
              <td>2011/12/12</td>
              <td>$106.450</td>
              <td>
                <Link to="#">Purchase</Link>
              </td>  
            </tr>
            <tr>
              <td>Cara Stevens</td>
              <td>Senior Assistant</td>
              <td>New York</td>
              <td>46</td>
              <td>2011/12/06</td>
              <td>$145.600</td>
              <td>
                <Link to="#">Purchase</Link>
              </td>  
            </tr>
            <tr>
              <td>Cedric Kelly</td>
              <td>Senior Javascript Developer</td>
              <td>Edinburgh</td>
              <td>22</td>
              <td>2012/03/29</td>
              <td>$433.000</td>
              <td>
                <Link to="#">Purchase</Link>
              </td>
            </tr>
          </tbody>
        </table>
    </div>);
}
export default Search;