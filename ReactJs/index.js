const rootElement=document.getElementById("root");

const className="greetings";
        // const element=<h1 className={className}>Hello {name} using JSX and embeding variables using {}. </h1>
const fullName=(user)=>{
    return user.firstName+" "+user.lastName;
}
const user={
    firstName:"Trilochan Reddy",
    lastName:"Sama"
}
        // to use nested jsx elements need to use () with in () need to create elements
const element=(
    <div>
        <h1 className={className}>Hello {fullName(user)} using function call embeded using flower brackets</h1>
        <p className={className}>how are you</p>
    </div>
);

ReactDOM.render(element,rootElement);