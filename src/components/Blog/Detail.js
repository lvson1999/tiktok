import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

function BlogDetail(props) {
    let params = useParams();
    const [data, setData] = useState("");
    const [idRely, setIdRely] = useState("")


    useEffect(() => {
      axios.get("http://localhost/laravel/laravel/public/api/blog/detail/" + params.id)
      .then(response => {
        setData(response.data.data)
      })
      .catch(function(error) {
        console.log(error)
      })

    },[])

    function fetchData() {
      if(Object.keys(data).length > 0) {
        
          return (
            <div>
              <div className="single-blog-post">
              <h3>{data.title}</h3>
                <div className="post-meta">
                  <ul>
                    <li><i className="fa fa-user" /> Mac Doe</li>
                    <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                    <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                  </ul>
                  {/* <span>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star-half-o"></i>
                    </span> */}
                </div>
                <a href>
                  <img src={"http://localhost/laravel/laravel/public/upload/Blog/image/" + data.image} alt="" />
                </a>
                <p>
                  {data.description}</p> <br />
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p> <br />
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p> <br />
                <p>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                </p>
                <div className="pager-area">
                  <ul className="pager pull-right">
                    <li><a href="#">Pre</a></li>
                    <li><a href="#">Next</a></li>
                  </ul>
                </div>
              </div>
            </div>
          )
        
      }
    }

    return (
        <div className="col-sm-9">
        <div className="blog-post-area">
          <h2 className="title text-center">Latest From our Blog</h2>
          {fetchData()}
        </div>{/*/blog-post-area*/}
        <div className="rating-area">
          <ul className="ratings">
            <li className="rate-this">Rate this item:</li>
            <li>
              <i className="fa fa-star color" />
              <i className="fa fa-star color" />
              <i className="fa fa-star color" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </li>
            <li className="color">(6 votes)</li>
          </ul>
          <ul className="tag">
            <li>TAG:</li>
            <li><a className="color" href>Pink <span>/</span></a></li>
            <li><a className="color" href>T-Shirt <span>/</span></a></li>
            <li><a className="color" href>Girls</a></li>
          </ul>
        </div>{/*/rating-area*/}
        <div className="socials-share">
          <a href><img src="images/blog/socials.png" alt="" /></a>
        </div>{/*/socials-share*/}
        
        <div className="response-area">
          <h2>3 RESPONSES</h2>
          <ul className="media-list">
            <li className="media">
              <a className="pull-left" href="#">
                <img className="media-object" src="images/blog/man-two.jpg" alt="" />
              </a>
              <div className="media-body">
                <ul className="sinlge-post-meta">
                  <li><i className="fa fa-user" />Janis Gallagher</li>
                  <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                  <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <a className="btn btn-primary" href><i className="fa fa-reply" />Replay</a>
              </div>
            </li>
            <li className="media second-media">
              <a className="pull-left" href="#">
                <img className="media-object" src="images/blog/man-three.jpg" alt="" />
              </a>
              <div className="media-body">
                <ul className="sinlge-post-meta">
                  <li><i className="fa fa-user" />Janis Gallagher</li>
                  <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                  <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <a className="btn btn-primary" href><i className="fa fa-reply" />Replay</a>
              </div>
            </li>
            <li className="media second-media">
              <a className="pull-left" href="#">
                <img className="media-object" src="images/blog/man-three.jpg" alt="" />
              </a>
              <div className="media-body">
                <ul className="sinlge-post-meta">
                  <li><i className="fa fa-user" />Janis Gallagher</li>
                  <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                  <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <a className="btn btn-primary" href><i className="fa fa-reply" />Replay</a>
              </div>
            </li>
            <li className="media second-media">
              <a className="pull-left" href="#">
                <img className="media-object" src="images/blog/man-three.jpg" alt="" />
              </a>
              <div className="media-body">
                <ul className="sinlge-post-meta">
                  <li><i className="fa fa-user" />Janis Gallagher</li>
                  <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                  <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <a className="btn btn-primary" href><i className="fa fa-reply" />Replay</a>
              </div>
            </li>
            <li className="media">
              <a className="pull-left" href="#">
                <img className="media-object" src="images/blog/man-four.jpg" alt="" />
              </a>
              <div className="media-body">
                <ul className="sinlge-post-meta">
                  <li><i className="fa fa-user" />Janis Gallagher</li>
                  <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                  <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <a className="btn btn-primary" href><i className="fa fa-reply" />Replay</a>
              </div>
            </li>
            <li className="media second-media">
              <a className="pull-left" href="#">
                <img className="media-object" src="images/blog/man-three.jpg" alt="" />
              </a>
              <div className="media-body">
                <ul className="sinlge-post-meta">
                  <li><i className="fa fa-user" />Janis Gallagher</li>
                  <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                  <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <a className="btn btn-primary" href><i className="fa fa-reply" />Replay</a>
              </div>
            </li>
            <li className="media second-media">
              <a className="pull-left" href="#">
                <img className="media-object" src="images/blog/man-three.jpg" alt="" />
              </a>
              <div className="media-body">
                <ul className="sinlge-post-meta">
                  <li><i className="fa fa-user" />Janis Gallagher</li>
                  <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                  <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <a className="btn btn-primary" href><i className="fa fa-reply" />Replay</a>
              </div>
            </li>
            <li className="media second-media">
              <a className="pull-left" href="#">
                <img className="media-object" src="images/blog/man-three.jpg" alt="" />
              </a>
              <div className="media-body">
                <ul className="sinlge-post-meta">
                  <li><i className="fa fa-user" />Janis Gallagher</li>
                  <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                  <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <a className="btn btn-primary" href><i className="fa fa-reply" />Replay</a>
              </div>
            </li>
          </ul>					
        </div>{/*/Response-area*/}
        <div className="replay-box">
          <div className="row">
            <div className="col-sm-12">
              <h2>Leave a replay</h2>
              <div className="text-area">
                <div className="blank-arrow">
                  <label>Your Name</label>
                </div>
                <span>*</span>
                <textarea name="message" rows={11} defaultValue={""} />
                <a className="btn btn-primary" href>post comment</a>
              </div>
            </div>
          </div>
        </div>{/*/Repaly Box*/}
      </div>
    )
}
export default BlogDetail