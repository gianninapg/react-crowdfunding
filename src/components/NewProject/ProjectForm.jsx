import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function ProjectForm() {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const history = useHistory();

    const handleChange = (e) => {
        const {id, value } = e.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
    };

    const postData = async () => {
        const response = await fetch(
        `${process.env.REACT_APP_API_URL}/new-project/`, 
        {
        method: "post",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),    
        }
        );};

    const handleSubmit = (e) => {
        e.preventDefault();
        if (credentials.username && credentials.password){
        postData().then((response) => {
        // window.localStorage.setItem("token", response.token);
        history.push("/");
        });    
        }
    };

    return (
        <form>
        <div>
        <label htmlFor="username">Title:</label>
        <input
            type="text"
            id="username"
            placeholder="Enter username"
            onChange={handleChange}
        />
        </div>
        <div>
        <label htmlFor="password">Description:</label>
        <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
        />
        </div>
        <button type="submit" onClick={handleSubmit}>Create</button>
        </form>
    );
}

export default ProjectForm;
