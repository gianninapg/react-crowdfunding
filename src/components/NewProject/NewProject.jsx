import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

// function NewProject() {
//     // const [credentials, setCredentials] = useState({
//     //     username: "",
//     //     password: "",
//     // });

//     // const history = useHistory();

//     // const handleChange = (e) => {
//     //     const {id, value } = e.target;
//     //     setCredentials((prevCredentials) => ({
//     //         ...prevCredentials,
//     //         [id]: value,
//     //     }));
//     // };


//     // const postData = async () => {
//     //     const response = await fetch(
//     //     `${process.env.REACT_APP_API_URL}/api-token-auth/`, 
//     //     {
//     //     method: "post",
//     //     headers:{
//     //         "Content-Type": "application/json",
//     //     },
//     //     body: JSON.stringify(credentials),    
//     //     }
//     //     );};

//     // const handleSubmit = (e) => {
//     //     e.preventDefault();
//     //     if (credentials.username && credentials.password){
//     //     postData().then((response) => {
//     //     window.localStorage.setItem("token", response.token);
//     //     history.push("/");
//     //     });    
//     //     }
//     // };

//     return (
//         <form>
//         <div>
//         <label htmlFor="username">Username:</label>
//         <input
//             type="text"
//             id="username"
//             placeholder="Enter username"
//             onChange={handleChange}
//         />
//         </div>
//         <div>
//         <label htmlFor="password">Pasword:</label>
//         <input
//             type="password"
//             id="password"
//             placeholder="Password"
//             onChange={handleChange}
//         />
//         </div>
//         <button type="submit" onClick={handleSubmit}>Login</button>
//         </form>
//     );
// }

// export default NewProject;



function NewProject(props){
    const {addTodo} = props;
    const [value, setValue] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!value){
            return;
        }
        NewProject(value);
        setValue("");
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Add Todo.." onChange={(event) => setValue(event.target.value)}/>
        </form>
        <Link to="/new-project">
        </Link>
        </div>
    );
}

export default NewProject;