import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function ProjectForm() {
    const addProject = (text) =>
    {
        const newProjectCard = [ {text}];
        setValue(newProjectCard);
    }
    const [value, setValue] = useState({
        title: "",
        description: "",
        goal:"",
        image:"",
        is_open: "",
        date_created:""

    });

    const history = useHistory();

    const handleChange = (e) => {
        const {id, value } = e.target;
        setValue((prevValue) => ({
            ...prevValue,
            [id]: value,
        }));
    };

    const postData = async () => {
        const response = await fetch(
        `${process.env.REACT_APP_API_URL}/projects/`, 
        {
        method: "post",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(value),    
        }
        )
        // .then ((response) => response.json())
        // .then ((result) => setValue(result.rows))
        // .catch((error) => console.log('error'))
        return response.json()    
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value){
            return;
        }
        addProject(value);
        setValue("");   
        };


        // const handleSubmit = (e) => {
        //     e.preventDefault();
        //     if (value.title && value.description){
        //     postData().then((response) => {
        //         // console.log(response)
        //         // window.localStorage.setItem("rows", response.rows);
        //         history.push("/");
        //     });    
        //     }
        // };

    return (
        <form>
        <div>
        <label htmlFor="title">Title:</label>
        <input
            type="text"
            id="title"
            placeholder="Enter title"
            onChange={handleChange}
        />
        </div>
        <div>
        <label htmlFor="description">Description:</label>
        <input
            type="text"
            id="description"
            placeholder="description"
            onChange={handleChange}
        />
        </div>
        <div>
        <label htmlFor="goal">Goal</label>
        <input
            type="text"
            id="goal"
            placeholder="goal"
            onChange={handleChange}
        />
        </div>
        <div>
        <label htmlFor="image">Image</label>
        <input
            type="text"
            id="Image"
            placeholder="Image"
            onChange={handleChange}
        />
        </div>
        <div>
        <label htmlFor="is_open">Make it Public?</label>
        <input
            type="text"
            id="is_open"
            placeholder="is_open"
            onChange={handleChange}
        />
        </div>
        <div>
        <label htmlFor="date_created">Date created</label>
        <input
            type="text"
            id="date_created"
            placeholder="date_created"
            onChange={handleChange}
        />
        </div>
        <button type="submit" onClick={handleSubmit}>Create</button>
        </form>
    );
}

export default ProjectForm;
