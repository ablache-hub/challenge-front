import React, {useState, useEffect} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import ShowVillage from './ShowVillage'

const SelectVillages = () => {

    const [dataList, setDataList] = useState([]);
    const [dataVillage, setDataVillage] = useState([]);

    useEffect(() => {

        async function fetchData() {

            const url1 = await axios('http://localhost:8080/Village');
            setDataList(url1.data)
        }

        fetchData();
    }, []);


    return (
        <div>
            <label htmlFor="village-select">Choisissez un village: </label>

            <select name="village" id="village-select">

                {dataList.map((current) => (

                    <option key={current.id} value={current.id} onClick = {() => setDataVillage(current)}>{current.name}</option>

                ))}
            </select>

            <ShowVillage village = {dataVillage} />

            {/*  {dataVillage.map((current) => (
            <dd className=" card-text" key={current.id}>{current.id} - {current.name}&nbsp;{current.postCode}</dd>
        ))}*/}
        </div>
    )


}

export  default SelectVillages;