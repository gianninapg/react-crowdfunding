import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function ProjectForm() {
    // const addProject = (text) =>
    // {
    //     const newProjectCard = [ {text}];
    //     setValue(newProjectCard);
    // }
    const [projectCard, setProjectCard] = useState({
        title: "",
        description: "",
        goal:"",
        image: "",
        is_open: "",
        date_created:""

    });

    const history = useHistory();

    const handleChange = (e) => {
        const {id, value } = e.target;
        setProjectCard((prevProjectCard) => ({
            ...prevProjectCard,
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
        body: JSON.stringify(projectCard),    
        }
        )
        // .then ((response) => response.json())
        // .then ((result) => setProjectCard(result.rows))
        // .catch((error) => console.log('error'))
        return response.json()    
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (!value){
    //         return;
    //     }
    //     addProject(value);
    //     setValue("");   
    //     };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (projectCard.title && projectCard.description){
        postData().then((response) => {
            console.log(response)
            window.localStorage.setItem("token", response.token);
            history.push("/");
        });    
        }
    };

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
            type="number"
            id="goal"
            placeholder="goal"
            onChange={handleChange}
        />
        </div>
        <div>
        <label htmlFor="image">Image</label>
        <input
            type="url"
            id="Image"
            placeholder="Image"
            onChange={handleChange}
        />
        </div>
        <div>
        <label htmlFor="is_open">Make it Public</label>
        <input
            type="checkbox"
            id="is_open"
            placeholder="is_open"
            onChange={handleChange}
        />
        <label htmlFor="is_open">Hide</label>
        <input
            type="checkbox"
            id="is_open2"
            placeholder="is_open2"
            onChange={handleChange}
        />
        </div>
        <div>
        <label htmlFor="date_created">Date created</label>
        <input
            type="url"
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
