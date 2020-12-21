import React, {useState, useEffect} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

const ShowVillage =({village}) => {

    return (<>
            <dd>{village.id}</dd>
            <dd>{village.name}</dd>
            <dd>{village.postCode}</dd>
        </>
    )


}

export  default ShowVillage;