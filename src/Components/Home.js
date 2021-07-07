import "./Home.css"
import { useHistory } from "react-router-dom";


function Home(){
    const history = useHistory();

   //  function to push to next page
    function category(categoryName){
        history.push(`/category/${categoryName}`)

    }
    return(


        <div>
           {/* heading */}
           <div>
              <h1 className="mt-5 bg-dark text-light p-1">Books By Category</h1>
           </div>
     
                    {/* html card */}
                                 <div class="row main-row mt-3 mb-3 m-1">
                                 <div class="column">
                                 <div class="card main-card">
                                    <img className="img" src="https://pixelmechanics.com.sg/wp-content/uploads/2019/06/html5-logo-for-web-development.png" alt="img"></img>
                                    <h1 className="main-h1" onClick={()=>category("HTML,CSS & RWD")}>HTML,CSS & RWD</h1>
                                    </div>
                                       </div>
                            {/* js card */}
                                 <div class="column">
                                 <div class="card main-card">
                                 <img className="img" src="https://vegibit.com/wp-content/uploads/2014/04/Javascript-JS.png" alt="img"></img>
                                 <h1 className="main-h1" onClick={()=>category("Modern JavaScript")}>Modern JavaScript</h1>
                                       </div>
                                       </div>
                                       {/* react card */}
                                          <div class="column">
                                             <div class="card main-card">
                                             <img className="img" src="https://easybase.io/assets/images/posts_images/5-great-react-libraries-1.png" alt="img"></img>
                                             <h1 className="main-h1" onClick={()=>category("React JS")}>React JS</h1>
                                                </div>
                                             </div>

                                             {/* node card */}
               
                                       <div class="column">
                                          <div class="card main-card">
                                          <img className="img" src="https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/262176/0508-HiringGuides-NodeJS_Dan_Social-cb33f70c56b0eb4df466056462ea3932.png" alt="img"></img>
                                          <h1 className="main-h1" onClick={()=>category("Node JS")}>Node JS</h1>
                                          </div>
                                       </div>

                                               {/* db card */}
                                          <div class="column mt-3">
                                             <div class="card main-card">
                                             <img className="img" src="https://lh3.googleusercontent.com/proxy/7_cjSGS_x6sFeQKft-fbtbDbSjXYFUfw8eCbyDgiJHVsNk-bsnRlCkuI121H2uCmehNa1TRk7fp6rrxCy5BRWtg9LwVUclM9400K8OIvAqbz4KQ50sLCjNgKFB4Btb9iOFt-l5nZJTIJxe3M78JifYe5vOJcS-aIYNp9Ina6VlRF3RaukA" alt="img"></img>
                                             <h1 className="main-h1" onClick={()=>category("Mongo DB")}>Mongo DB</h1>
                                             </div>
                                          </div>


                                              {/* full stac card */}
                                          <div class="column mt-3">
                                             <div class="card main-card">
                                             <img className="img" src="https://www.mindinventory.com/blog/wp-content/uploads/2018/07/full-stack1200.png" alt="img"></img>
                                          <h1 className="main-h1" onClick={()=>category("Full Stack Developer")}> Full Stack Developer</h1>
                                             </div>
                                          </div>
                                          </div>

                                 </div>
                              )
                           }

export default Home;