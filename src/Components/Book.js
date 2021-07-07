
import { useEffect,useState } from "react"
import {useParams} from "react-router-dom"
import axios from "axios"

function Book(){

    let paramsObj=useParams();
    let [product,setProduct]=useState()


    useEffect(()=>{
        axios.get(`/product/getbook/${paramsObj.bookname}`)
        .then(res=>{
            let productObj=res.data.message 
            setProduct(productObj)
            
         })
        })
    return(<div>
        { product &&
        <div>
        <h1>{product.bookname}</h1> 

        {/* <div className="row row-cols-lg-3 row-col-sm-1 row-col-mg-2 m-5 border border-dark">

            <div className="col">

                <img className="w-100" src={product.profilePic} alt="img"></img>

            </div>
            <div className="col">
                <p className="w-100">sjahdkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>

            </div>

            <div className="col">
                <p>hhhhhhhhhhhhhhh</p>
            </div>

        </div> */}


                    <div class="container-book">
                        
                        <div class="row ">
                            <div class="col-md-2">
                                <div class="card card-body h-100 justify-content-center">
                                    I have a lot of content that wraps on multiple lines..
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card card-body h-100 justify-content-center">
                                I have a line of content.<br></br>
                                And another line here..
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card card-body h-100 justify-content-center">
                                    I have a little bit.
                                </div>
                            </div>
                        </div>
                    </div>

        </div>
       }
    </div>)
}

export default Book;