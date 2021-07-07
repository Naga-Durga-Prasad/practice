import "./Admin.css"
import {  useHistory } from "react-router-dom";


function Admin(){

    const history = useHistory();


    function handleProduct(){
        history.push("/addProduct")
    }
    function handleUpdateAndEdit(){
        history.push("/")
    }


    return(
        <div className="main">
            
           <p className="m-5 text-dark h3">Hey,Cheif how's the day</p>
           

           <div className='row row-cols-sm-2'>
           <div className="container mb-5 col">
                <img className="img" src="https://cdn.business2community.com/wp-content/uploads/2014/09/product-600x290.jpg"></img>
                <button onClick={handleProduct} className="admin-button">Create Product</button>
            </div>

            <div className="container mb-5 col">
                <img className="img" src="https://blog.gale.com/wp-content/uploads/2017/05/updates.jpg"></img>
                <button onClick={handleUpdateAndEdit} className="admin-button">Update or Delete Product</button>
            </div>

  

            </div>
        </div>
    )
}

export default Admin;