import React, {useEffect} from "react";
import { useParams } from "react-router-dom";




function HouseAdPage() {

    const { id } = useParams<string>();


    return (
        <div>
            <h2>User ID is : {id}</h2>
        </div>
    )
}

export default HouseAdPage;