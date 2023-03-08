import {Component} from "react";
import BrowserHistory from "./components/browserHistory";
import "./index.css";


const initialhistoryList=[
  {
    id:1,
    timeAccessed: "07:45 PM",
    logoUrl:"https://res.cloudinary.com/dpny4vmnc/image/upload/v1678311237/instagram_ui4xrk.png",
    title:"Instagram",
    domainUrl:"https://www.instagram.com/"
  },
  {
    id:2,
    timeAccessed: "07:45 PM",
    logoUrl:"https://res.cloudinary.com/dpny4vmnc/image/upload/v1678311237/instagram_ui4xrk.png",
    title:"facebook",
    domainUrl:"https://www.instagram.com/"
  }
]
class App extends Component{

  state={
    searchInput:"",
    historylist:initialhistoryList
  }

  onChangeSearchinput=(event)=>{
    this.setState({
      searchInput:event.target.value
    })
  }


  onDeleteHistory=(id)=>{
    const {searchInput,historylist}=this.state
    const updatedList=historylist.filter(eachItem=>eachItem.id !==id);
    this.setState({
      historylist:updatedList
    })

  }

  render(){
    const {searchInput,historylist}=this.state
    console.log(searchInput);
    const searchedResultsList=historylist.filter(eachItem=>eachItem.title.includes(searchInput));
    return (
      <div>
        <div className="browser-history-header">
          <img src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png" alt ="historylogo "/>
          <div className="search-input-container">
            
              <button type="button" className="search-img-container">
                <img src="https://assets.ccbp.in/frontend/react-js/search-img.png" alt="search logo" />
              </button>
            
            <input type="search"  placeholder="search history" className="search-elemet" onChange={this.onChangeSearchinput}/>
          </div>
        </div>
        <div className="div-container-for-unordered-list">
          <ul className="unordered-list-container" >
          {
            searchedResultsList.map((eachitem) =><BrowserHistory key={eachitem.id} onDeleteHistory={this.onDeleteHistory}eachitem={eachitem}/>)
          }
          </ul>
        </div>
      
      
      </div>
      
        
      
      
      
    )
  }
}

export default App;
