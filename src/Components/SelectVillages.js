import React, {useState, useEffect} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import ShowVillage from './ShowVillage'
import CrudVillage from "./CrudVillage";

const SelectVillages = () => {


    const [dataListe, setDataListe] = useState([]);
    const [dataVillage, setDataVillage] = useState([]);


    // Fetch des données village
    useEffect(() => {

        async function fetchData() {

            const url = await axios('http://localhost:8080/Village');
            setDataListe(url.data)
        }

        fetchData();
    }, []);


    return (

        //Creation d'une liste, les données récupérées y sont injectées avec un mapping du hook/state
        <div align="center">
            <label htmlFor="village-select mb-5">Choisissez un village: </label>

            <select name="village" id="village-select">

                {dataListe.map((current) => (

                    <option key={current.id} value={current.name}
                            //Au clique, le state est transmis à "ShowVillage"
                            onClick = {() => setDataVillage(current)}>{current.name}
                    </option>

                ))}
            </select>

            {/*Les compo NewVillage et ShowVillage sont appelés avec le hook/state en props du village selectionné*/}
            <CrudVillage village = {dataVillage} />

            <ShowVillage village = {dataVillage} />



            {/*   {dataVillage.map((current) => (
            <dd className=" card-text" key={current.id}>{current.id} - {current.name}&nbsp;{current.postCode}</dd>
        ))}*/}
        </div>
    )


}

export  default SelectVillages;