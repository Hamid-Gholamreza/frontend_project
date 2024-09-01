import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Map from "../components/Map";
import PhoneIcon from '@mui/icons-material/Phone';




type HouseType = "V" | "A";




function HouseAdPage() {

    const [location, setLocation] = useState('');
    const [phone, setPhone] = useState('');
    const [title, setTitle] = useState('');
    const [urgent, setUrgent] = useState(false);
    const [type, setType] = useState<HouseType>();
    const { id } = useParams<string>();
    


    const fetchData = async () => {

        try {
            const response = await axios.get(`http://localhost:8000/ads/${id}`);
            setPhone(response.data.phone);
            setUrgent(response.data.urgent);
            setTitle(response.data.title);
            setLocation(response.data.location);
            setType(response.data.type);
        }
        catch(error) {
            console.error('Error fetching data: ' , error);
        }
    }

    fetchData();

    return (
        <div className="w-full h-[100vh] flex flex-row-reverse justify-between items-start p-10">
            <div className="flex flex-col justify-center items-end gap-5">
                <h1 className="text-3xl mb-10">{title}</h1>
                <div className="flex gap-3">
                    <p>{phone}</p>
                    <PhoneIcon />
                </div>
                <div>
                    <span>نوع: &nbsp;&nbsp;&nbsp;</span>
                    <span>{type === 'A' ? "آپارتمان" : "ویلا"}</span>
                </div>
            </div>
            <div className="w-[450px] h-[300px] rounded-lg">
                <Map />
            </div>
        </div>
    )
    // return (
    //     <div className="w-full h-[100vh]">
    //         <Map />
    //     </div>
    // )

}

export default HouseAdPage;