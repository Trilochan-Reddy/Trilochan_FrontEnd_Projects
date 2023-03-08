import "./index.css";

const BrowserHistory =(props)=>{
    const {eachitem,onDeleteHistory}=props;
    const {id,timeAccessed,logoUrl,title,domainUrl}=eachitem;

    const deleteHistryitem=()=>{
        onDeleteHistory(id)
    }
return (
    <li className="container">
        <h1>{timeAccessed}</h1>
        <img src={logoUrl} alt="domain logo" className="image-logo"/>
        <h1>{title}</h1>
        <h1>{domainUrl}</h1>
        <button type="button" onClick={deleteHistryitem}>
            <img src="https://assets.ccbp.in/frontend/react-js/delete-img.png" 
            alt="delete button" />
        </button>
    </li>
)
}

export default BrowserHistory;