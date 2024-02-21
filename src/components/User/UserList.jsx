import "./User.css";
//import users from "./MocUsers.js";
import User from "./User.jsx";


export default function UserList(props){
      return(
        <ul className="users-list">
            {props.Users.map(user => {
                return (
                    <User
                        Id = {user["Object Id"]} 
                        UserName = {user["Display name"]} 
                        Title = {user.Title}
                        Picture = {user.Picture}
                    />
                );
            })}
            
        </ul>
        
    );
}