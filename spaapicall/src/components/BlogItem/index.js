import "./index.css"
import {Link} from "react-router-dom";
const BlogItem =(props)=>{
    const {eachItem}=props;
    const {id,title,imageUrl,avatarUrl,author,topic}=eachItem;
    return (
<Link to={`/blogs/${id}`} className="eachitem-link">
        <div className="blog-item-container">
            <img className="topic-image" src={imageUrl} alt="topic-img-logo" />
            <div className="topic-author-container">
                <h1 className="topic-title">{title}</h1>
                <h1 className="topic-description">{topic}</h1>
                <div className="author-container">
                <div>
                    <img className= "avatar-img" src={avatarUrl} alt="avatar-logo" />
                    </div>
                    <h1 className="author-name">{author}</h1>
                </div>
            </div>
        </div>
        </Link>
    )
}

export default BlogItem;