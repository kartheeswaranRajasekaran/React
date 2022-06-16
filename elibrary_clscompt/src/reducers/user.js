const initialState = {
    status:false,
    fullName:'noname',
    list:[]
};

function users(state = initialState, action){

 switch(action.type){
     case 'success' : 
               return {
                   ...state,
                   list:action.payload,
                   fullName:"salman",
                   status:true
               }
   case 'failure':
       return{
           ...state,
           fullName:"noname",
           status:false
       }
       
       default:          
       return state;   
 }

}

export default users;