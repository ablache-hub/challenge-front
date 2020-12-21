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
        <form action="" method="get" className="ajout-village">
            <div className="form-example">
                <label htmlFor="name">Entrez le nom: </label>
                <input type="text" name="name" id="name" required />
            </div>
            <div className="form-example">
                <label htmlFor="email">Enter your email: </label>
                <input type="email" name="email" id="email" required />
            </div>
            <div className="form-example">
                <input type="submit" value="Subscribe!" />
            </div>
        </form>

        </>
    )


}

export  default NewVillage;