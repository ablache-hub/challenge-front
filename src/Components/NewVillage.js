import React, {useState, useEffect} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

const NewVillage =({village}) => {

    //Hooks states pour le formulaire et la fonction show/hide
    const [formData, updateFormData] = React.useState([]);
    const [showingState, setShowingState] = React.useState();


    //Sauvegarde des données du formulaire
    const handleChange = (event) => {
        updateFormData({
            ...formData,

            [event.target.name]: event.target.value.trim()
        });
    };

    //Fonctions CRUD
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
        axios.delete('http://localhost:8080/Village/' + village.id)
    };

    /*   useEffect(() => {
           const village = { name: 'Village POST REACT',
               postCode: 44300};
           axios.post('http://localhost:8080/Village', village)
           // .then(response => setArticleId(response.data.id));
       }, []);*/

    return (
        <div>

            {/*Boutons RADIO pour l'affichage/masquage des forms/boutons*/}
            <div>
                <input id='toggle add' name='choix' type='radio' value='toggle add' checked onClick={() => setShowingState("add")}/>
                <label htmlFor="toggle add ">
                    Add
                </label>
                <input id='toggle update' name='choix' type='radio' value='toggle update'
                       onClick={() => setShowingState("update")}/>
                <label htmlFor="toggle add ">
                    Update
                </label>
                <input id='toggle delete' name='choix' type='radio' value='toggle delete'
                       onClick={() => setShowingState("delete")}/>
                <label htmlFor="toggle delete ">
                    delete
                </label>
            </div>


            {/*Les actions sur forms sont gérées par "onChange" qui appelle la fonction "handleChange()"*/}
            {showingState === "delete" || showingState === "add" ? null :
                <label>
                    Id (uniquement pour UPDATE/DELETE)
                    <input name="id" onChange={handleChange}/>
                </label>
            }

            {showingState === "delete" ? null :
                <label>
                    Village
                    <input name="name" onChange={handleChange}/>
                </label>
            }

            <br/>

            {showingState === "delete" ? null :
                <label>
                    Code Postal
                    <input name="postCode" type="number" onChange={handleChange}/>
                </label>
            }

            <br/>


            {/*Boutons qui lancent les fonctions CRUD au clique*/}
            {showingState === "delete" || showingState === "update" ? null :
                <button onClick={handleSubmit}>Ajouter</button>
            }

            {showingState === "delete" ||showingState === "add" ? null :
                <button onClick={handleUpdate}>Update</button>
            }

            {showingState === "update" || showingState === "add" ? null :

                <button onClick={handleDelete}>Delete</button>
            }

        </div>
    )

}

export  default NewVillage;