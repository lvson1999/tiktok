import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Blog () {

    const [getItem, setItem] = useState("");
    useEffect(() => {
      axios.get("http://localhost/laravel/laravel/public/api/blog")
      .then(response => {
        setItem(response.data.blog.data)
        console.log(response)
      })

      .catch(function(error) {
        console.log(error)
      })
    }, [])

    const handlePageChange = (pageNumber) =>{

    }

    function fetchData () {
      if(getItem.length > 0) {
        console.log(getItem)
        return getItem.map((value, key) => {
          
          return (
              <div key={key}>
                <div className="single-blog-post"  >
                <h3>{value.title}</h3>
                <div className="post-meta">
                  <ul>
                    <li><i className="fa fa-user" /> Mac Doe</li>
                    <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                    <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                  </ul>
                  <span>
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-half-o" />
                  </span>
                </div>
                <a href>
                  <img src={"http://localhost/laravel/laravel/public/upload/Blog/image/" + value.image} alt="" />
                </a>
                <p>{value.description}</p>
                <Link className="btn btn-primary" to={"/blog/detail/" + value.id}>Read More</Link>
              </div>
              </div>
          )
        })
      }
    }

    return (
        <div className="col-sm-9">
        <div className="blog-post-area">
          <h2 className="title text-center">Latest From our Blog</h2>
          
          <div className="single-blog-post">
            <h3>Girls Pink T Shirt arrived in store</h3>
            <div className="post-meta">
              <ul>
                <li><i className="fa fa-user" /> Mac Doe</li>
                <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
              </ul>
              <span>
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star-half-o" />
              </span>
            </div>
            <a href>
              <img src="images/blog/blog-one.jpg" alt="" />
            </a>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <a className="btn btn-primary" href>Read More</a>
          </div>

          {fetchData()}
          
        </div>
      </div>
    )
}
export default Blog;