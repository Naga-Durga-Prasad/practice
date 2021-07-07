import { useEffect,useState } from "react"

function UserProfile(){
    let [user,setUser]=useState("")


    useEffect(()=>{

        let userobj=JSON.parse( localStorage.getItem("user"));

         setUser({...userobj})
    },[])
    return(
        <div>
            <img src={user.profilePic}></img>
            <h1>{user.email}</h1>
        </div>
    )
}

export default UserProfile;