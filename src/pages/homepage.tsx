import React from "react";
import axios from "axios";
import HouseAdCard from "../components/HouseAdsCard";


function homepage() {

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8000/ads');
            console.log(response.data);
        }
        catch(error) {
            console.error('Error fetching data ', error)
        }
    }

    fetchData();

    return(
        <div className="w-full h-[100vh] flex flex-col justify-center items-center">
            <div className="w-1/2">
                <HouseAdCard />
                <HouseAdCard />
                <HouseAdCard />
                <HouseAdCard />
                <HouseAdCard />
            </div>
        </div>
    )
}

export default homepage;