
import { useEffect,useState } from "react";
import './fetch.css'

function Fetch(){
    const [state,setState]=useState([])


    useEffect(()=>{
      fetch("https://dummyjson.com/users")
             .then(res => res.json())
              .then(data => setState(data.users))
            //    console.log(data))

               
            .catch(error=>console.error(error))
    },[])

    return(
        <>
       <ul>
        {state.map(users=>(<li key={users.id}>{users.firstName}  {users.lastName}
            {users.maidenName}  {users.age}
        </li>))}
       </ul>
        </>
    );

}
export default Fetch