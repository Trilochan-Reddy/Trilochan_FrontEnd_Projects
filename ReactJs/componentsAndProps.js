const Welcome=(props)=>{
    console.log(props);
    const {name,greeting,className}=props;
    console.log(name);
    console.log(greeting);
    console.log(className);
    return <h1 className={className}>{greeting} {name} Using component and passing props</h1>
}

const Greetings=()=>{
    return (
        <div>
            <Welcome name="Trilochan Reddy" greeting="hello" className="greetings-trilochan"/>
            <Welcome name="Sravani Jakkula" greeting="Hi" className="greetings-sravani"/>
            <Welcome name="Dinesh Reddy" greeting="Wssup" className="greetings-dinesh"/>
        </div>
    );
};


ReactDOM.render(
    (
        <div>
            <Greetings/>
        </div>
    ),document.getElementById("root"));