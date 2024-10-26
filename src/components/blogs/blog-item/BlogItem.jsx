import "./BlogItem.css"

//props: blogURL, imageURL, category, blogDate, title, blogDesc
function BlogItem(props) {
    return (
    <li className="blog-post-item">
        <a href={props.blogURL}>

          <figure className="blog-banner-box">
            <img src={props.imageURL} loading="lazy"/>
          </figure>

          <div className="blog-content">

            <div className="blog-meta">
              <p className="blog-category">{props.category}</p>

              <span className="dot"></span>

              <time dateTime="2022-02-23">{props.blogDate}</time>
            </div>

            <h3 className="h3 blog-item-title">{props.title}</h3>

            <p className="blog-text">
              {props.blogDesc}
            </p>

          </div>

        </a>
      </li>
    )
}

export default BlogItem;