import {userContext} from './App';

const ComponentB =()=>{
    return(<div>
        <userContext.Consumer>
           {
               user=>{
                return(
                    <div>componentB - {user}</div>
                )
               }
           }
        </userContext.Consumer>
  
    </div>)
}

export default ComponentB;