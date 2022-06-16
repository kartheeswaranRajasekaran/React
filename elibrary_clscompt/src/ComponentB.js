import {userContext} from './App';
import {useSelector } from 'react-redux';

const ComponentB =()=>{
    const usersInfo = useSelector((state) => state.users);


    return(<div>
     ComponentB my name is  {usersInfo.fullName}
  
    </div>)
}

export default ComponentB;