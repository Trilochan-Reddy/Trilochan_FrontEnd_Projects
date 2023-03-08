import "./index.css"
const UserProfile=(props)=>{
    const {userDetails,deleteUser}=props;
    const {imageUrl,name,role,uniqueNo}=userDetails;

    const onDelete=()=>{
        deleteUser(uniqueNo);
    }
    return (
        <li className="user-card-container">
            <img alt="avatar" src={imageUrl} className="avatar"/>
            <div className="user-details-container">
                <h1 className="user-name">{name}</h1>
                <p className="user-designation">{role}</p>
            </div>
            <button type="button" className="delete-button" onClick={onDelete}>
                <img src="https://res.cloudinary.com/dpny4vmnc/image/upload/v1678306304/crossPNG_ocnp2t.png" 
                alt="cross" className="delete-img" />
            </button>
        </li>
    );
    }
;

export default UserProfile;