
import "./Header.css"

import {Link} from "react-router-dom"
import {  useHistory } from "react-router-dom";


function Header(){
  const history = useHistory();



function handleLogin(){
  history.push('/login')

}

function handleSignout(){
  alert("sign out successfully")
  localStorage.clear();
  history.push('/')


}

    return(

    // main header
     <>
     <div className="header w-100 ">

         
         {/* Amazon logo */}

       <Link  to="/">
         <div className="header-logo ">
        <img
          className="header-logo-image"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Logo"/>
          </div>
      </Link>



      {/* account login or signup */}
      <Link className="header-account ms-3 dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
      <span>Hello,{localStorage.getItem("loginStatus")==="login success"?<span className="name"> {localStorage.getItem("name")}</span> : "Sign in"}</span><br></br>
      <span className="h6 ms-1">Accounts & Lists </span>
      </Link>
      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
        
        <div className="text-center">
          { localStorage.getItem("loginStatus")==="login success"?
             <button onClick={handleSignout} className="sign bg-warning">Sign out</button>
            :
            <div>
          <button onClick={handleLogin} className="sign bg-warning">Sign in</button>
          <p>New Customer? <span><a href="/register" className="link">Start here</a></span></p>
          </div>
          }
         
         {/* drop down */}
        </div>
        <hr className="border border-2 border-dark"></hr>
        <div className="row row-cols-sm-2">
          <div className="col border-end border-dark">
            {/* list */}
          <h6 className="ms-3">Your Lists</h6>
          <li ><a className="dropdown-item" href="/">Create Wish List</a></li>
            <li><a className="dropdown-item" href="/">Find Wish List</a></li>
            <li><a className="dropdown-item" href="/">Explore  </a></li>
            <li><a className="dropdown-item" href="/">Wish from any website </a></li>
          </div>
          
          <div className="col">
          <h6 className="ms-3">Your Account</h6>
          <li><a className="dropdown-item" href={ localStorage.getItem("loginStatus")==="login success"? localStorage.getItem("name")==="admin-1"?"/admin": `/userprofile/${localStorage.getItem("name")} `: "/login" }>Your Account</a></li>
          <li><a className="dropdown-item" href="/">Your Wishlist</a></li>
            <li><a className="dropdown-item" href="/">Your Prime Account</a></li>
            <li><a className="dropdown-item" href="/"> Your Devices</a></li>
          </div>

        </div>
           
          </ul>


       

        
        {/* search bar  */}
         <div className="header-search ms-3" >
        <input className="header-searchInput" type="text" />
        <button className="header-button  bg-warning">
        <i className="header-searchIcon fas fa-search fa-lg"></i>  </button>
      </div>
      

      
     

           {/* address section 
           <Link className="header-address ms-3 ">
             
               <span className=" ms-3 ">Hello</span><br></br>
               <span><i className="fas fa-map-marker-alt"></i></span>
               <span className="h6 ms-1">Select your address </span>
            </Link> */}

       {/* returns & orders */}
      <Link className="header-returns ms-3">
      <span>Returns</span><br></br>
      <span className="h6 ms-1"> & Orders </span>
      </Link>

      <Link className="header-cart ms-3 me-3">
      <span className="h4"><i className="fas fa-shopping-cart fa-lg"></i></span>
      <span className="h4 ms-2">Cart</span>
      <span className="h4 ms-2">0</span>

      </Link>
  
</div>

       {/* second header
         <div className="header-2 d-flex">
           
         </div> */}





</>
    )
}

export default Header;