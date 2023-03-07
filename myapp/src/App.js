import UserProfile from "./components/UserProfile";
import "./App.css";

const userDetailsList=[
  {
    uniqueNo:1,
    imageUrl:"https://res.cloudinary.com/dpny4vmnc/image/upload/v1626781770/IMG_20210411_133329_d3iqn2.jpg",
    name:"Trilochan Reddy Sama",
    role:"FrontEnd Developer"
  },
  {
    uniqueNo:2,
    imageUrl:"https://res.cloudinary.com/dpny4vmnc/image/upload/v1676054955/322287683_684873873380719_5373374178165585266_n_kgss2y.jpg",
    name:"Sravani Jakkula",
    role:"BackEnd Developer"
  },
  {
    uniqueNo:3,
    imageUrl:"https://res.cloudinary.com/dpny4vmnc/image/upload/v1676055082/trinadh_dk0wtw.jpg",
    name:"Trinadh Chowdary Gutta",
    role:"FrontEnd Developer"
  },
  {
    uniqueNo:4,
    imageUrl:"https://res.cloudinary.com/dpny4vmnc/image/upload/v1676055074/sasank_sc4pgn.jpg",
    name:"Sasank Srinivas",
    role:"BackEnd Developer"
  },
];



const App =()=>(
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      {
        userDetailsList.map((eachItem)=>(
          <UserProfile userDetails={eachItem} key={eachItem.uniqueNo}/>
          ))}
      {/*<UserProfile userDetails={userDetailsList[0]}/>
      <UserProfile userDetails={userDetailsList[1]}/>
      <UserProfile userDetails={userDetailsList[2]}/>
<UserProfile userDetails={userDetailsList[3]}/>*/}
    </ul>
  </div>
)
// import logo from './logo.svg';


// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.Hello world
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
