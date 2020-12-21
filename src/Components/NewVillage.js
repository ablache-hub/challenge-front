import React, {useState, useEffect} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

const NewVillage =() => {

    const [formData, updateFormData] = React.useState([]);

    const handleChange = (event) => {
        updateFormData({
            ...formData,

            // Trimming any whitespace
            [event.target.name]: event.target.value.trim()
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:8080/Village', formData)
    };

    const handleUpdate = (event) => {
        event.preventDefault()
        axios.put('http://localhost:8080/Village', formData)
    };

    const handleDelete = (event) => {
        event.preventDefault()
        axios.delete('http://localhost:8080/Village/'+ formData.id)
    };

 /*   useEffect(() => {
        const village = { name: 'Village POST REACT',
            postCode: 44300};
        axios.post('http://localhost:8080/Village', village)
        // .then(response => setArticleId(response.data.id));
    }, []);*/

    return (<>

            <label>
                Id (uniquement pour UPDATE/DELETE)
                <input name="id" onChange={handleChange} />
            </label>
            <label>
                Village
                <input name="name" onChange={handleChange} />
            </label>
            <br />
            <label>
                Code Postal
                <input name="postCode" type ="number" onChange={handleChange} />
            </label>
            <br />
            <button onClick={handleSubmit}>Ajouter</button>
            <button onClick={handleUpdate}>Update</button>
            <button onClick={handleDelete}>Delete</button>


        </>
    )


}

export  default NewVillage;