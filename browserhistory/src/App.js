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
    timeAccessed: "06:45 PM",
    logoUrl:"https://res.cloudinary.com/dpny4vmnc/image/upload/v1678388454/facebook_bw32rk.png",
    title:"Facebook- login or signup",
    domainUrl:"https://www.facebook.com/"
  },
  {
    id:3,
    timeAccessed: "05:45 PM",
    logoUrl:"https://res.cloudinary.com/dpny4vmnc/image/upload/v1678388424/twitter_a8nt8r.png",
    title:"Twitter",
    domainUrl:"https://twitter.com/"
  },
  {
    id:4,
    timeAccessed: "04:00 PM",
    logoUrl:"https://res.cloudinary.com/dpny4vmnc/image/upload/v1678388467/github_dek0ek.png",
    title:"github",
    domainUrl:"https://github.com/"
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
    const {historylist}=this.state
    const updatedList=historylist.filter(eachItem=>eachItem.id !==id);
    this.setState({
      historylist:updatedList
    })

  }

  render(){
    const {searchInput,historylist}=this.state
    console.log(searchInput);
    const searchedResultsList=historylist.filter(eachItem=>eachItem.title.toLowerCase().includes(searchInput.toLowerCase()));
    return (
      <div>
        <div className="browser-history-header">
          <img src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png" alt ="app logo "/>
          <div className="search-input-container">
            
              <button type="button" className="search-img-container">
                <img src="https://assets.ccbp.in/frontend/react-js/search-img.png" alt="search" />
              </button>
            
            <input type="search"  placeholder="search history" className="search-elemet" onChange={this.onChangeSearchinput}/>
          </div>
        </div>
        <div className="div-container-for-unordered-list">
          <ul className="unordered-list-container" >
          {searchedResultsList.length !==0?
            searchedResultsList.map((eachitem) =><BrowserHistory key={eachitem.id} onDeleteHistory={this.onDeleteHistory} eachitem={eachitem}/>)
          : (<div className="nohistory-container">
            <h1> There is no history to view</h1>
            </div>)}
          </ul>
        </div>
      
      
      </div>
      
        
      
      
      
    )
  }
}

export default App;
