import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function PledgeForm() {
    // const addProject = (text) =>
    // {
    //     const newpledgeData = [ {text}];
    //     setValue(newProjectCard);
    // }
    const [pledgeData, setPledge] = useState({
        amount: "",
        comment:"",
        anonymous: "",
        project_id:""

    });

    const history = useHistory();

    const handleChange = (e) => {
        const {id, value } = e.target;
        setPledge((prevPledgeData) => ({
            ...prevPledgeData,
            [id]: value,
        }));
    };

    const postData = async () => {
        const response = await fetch(
        `${process.env.REACT_APP_API_URL}/pledges/`, 
        {
        method: "post",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(pledgeData),    
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
        if (pledgeData.aumount && pledgeData.comment){
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
        <label htmlFor="amount">Amount:</label>
        <input
            type="number"
            id="amount"
            placeholder="amount"
            onChange={handleChange}
        />
        </div>
        <div>
        <label htmlFor="comment">comment:</label>
        <input
            type="text"
            id="comment"
            placeholder="comment"
            onChange={handleChange}
        />
        </div>
        <div>
        <label htmlFor="anonymous">Yes</label>
        <input
            type="checkbox"
            id="false"
            placeholder="false"
            onChange={handleChange}
        />
        <label htmlFor="anonymous">No</label>
        <input
            type="checkbox"
            id="true"
            placeholder="true"
            onChange={handleChange}
        />
        </div>
        <div>
        <label htmlFor="project_id">Project ID:</label>
        <input
            type="number"
            id="project_id"
            placeholder="project_id"
            onChange={handleChange}
        />
        </div>
        <button type="submit" onClick={handleSubmit}>Create</button>
        </form>
    );
}

export default PledgeForm;
