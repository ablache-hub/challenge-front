/*import React, {useState, useEffect} from 'react'
import axios from 'axios'*/
import 'bootstrap/dist/css/bootstrap.min.css'

const ShowVillage =({village}) => {

    return (<div className="card mt-3 mb-3" style={{width:'18rem'}}>
            <dl className="list-group list-group-flush">
                <dd class="list-group-item">{village.id}</dd>
                <dd class="list-group-item">{village.name}</dd>
                <dd class="list-group-item">{village.postCode}</dd>
            </dl>
        </div>
    )


}

export  default ShowVillage;