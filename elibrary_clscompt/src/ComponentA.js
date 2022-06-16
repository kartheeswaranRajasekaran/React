import {useSelector,useDispatch } from 'react-redux';
import Users from './services/users';

const ComponentA =()=>{

    const dispatch = useDispatch();
    const usersInfo = useSelector((state) => state.users);

    const onSubmitHandler=()=>{
         alert("submit");
         Users.loadUsers(dispatch);
    }

    return(<div>
        ComponentA my name is  {usersInfo.fullName}
        <br/>
        <button onClick={onSubmitHandler}>click here</button>
    </div>)
}

export default ComponentA;