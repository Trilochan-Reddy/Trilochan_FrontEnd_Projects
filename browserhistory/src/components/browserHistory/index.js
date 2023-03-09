import "./index.css";

const BrowserHistory =(props)=>{
    const {eachitem,onDeleteHistory}=props;
    const {id,timeAccessed,logoUrl,title,domainUrl}=eachitem;

    const deleteHistryitem=()=>{
        onDeleteHistory(id)
    }
return (
    <li className="container">
        <h1 className="time-accessed">{timeAccessed}</h1>
        <div className="title-url-conatainer">
            <img src={logoUrl} alt="domain logo" className="image-logo"/>
            <h1 className="title">{title}</h1>
            <a href={domainUrl} target="_blank" rel="noreferrer" className="domain-url">{domainUrl}</a>
        </div>
        <button type="button" onClick={deleteHistryitem} className="button">
        <img src="https://assets.ccbp.in/frontend/react-js/delete-img.png" 
            alt="delete" className="delete-button"/>
        </button>
    </li>
)
}

export default BrowserHistory;