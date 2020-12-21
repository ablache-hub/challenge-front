import React, {useState, useEffect} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

const NewVillage =() => {


    useEffect(() => {
        // POST request using axios inside useEffect React hook
        const village = { name: 'Village POST REACT',
            postCode: 44300};
        axios.post('http://localhost:8080/Village', village)
            // .then(response => setArticleId(response.data.id));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (<>

        </>
    )


}

export  default NewVillage;