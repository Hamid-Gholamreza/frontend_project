import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Map from "../components/Map";
import PhoneIcon from '@mui/icons-material/Phone';
import DescriptionIcon from '@mui/icons-material/Description';
import ChatIcon from '@mui/icons-material/Chat';
import Header from "../components/Header";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ShareIcon from '@mui/icons-material/Share';


type HouseType = "V" | "A";




function HouseAdPage() {

    const [location, setLocation] = useState('');
    const [phone, setPhone] = useState('');
    const [title, setTitle] = useState('');
    const [urgent, setUrgent] = useState(false);
    const [type, setType] = useState<HouseType>();
    const [description, setDescription] = useState('');
    const [numOfRooms, setNumOfRooms] = useState(0);
    const [size, setSize] = useState(0);
    const [yearBuilt, setYearBuilt] = useState(0);
    const { id } = useParams<string>();
    


    const fetchData = async () => {

        try {
            const response = await axios.get(`http://localhost:8000/ads/${id}`);
            console.log(response.data);
            setPhone(response.data.phone);
            setUrgent(response.data.urgent);
            setTitle(response.data.title);
            setLocation(response.data.location);
            setType(response.data.type);
            setDescription(response.data.description);
            setNumOfRooms(response.data.numOfRooms);
            setSize(response.data.size);
            setYearBuilt(response.data.yearBuilt);
        }
        catch(error) {
            console.error('Error fetching data:' , error);
        }
    }

    fetchData();

    return (
        <div>
            <div className="w-full h-[50px] mb-10">
                <Header />
            </div>
            <div className="w-full h-[97vh] flex flex-row-reverse justify-between items-start p-10">
                <div className="w-1/2 flex flex-col justify-center items-end gap-5">
                    <h1 className="text-3xl mb-10">{title}</h1>
                    <div className="flex gap-3">
                        <p>{phone}</p>
                        <PhoneIcon />
                    </div>
                    <div>
                        <span>نوع: &nbsp;&nbsp;&nbsp;</span>
                        <span>{type === 'A' ? "آپارتمان" : "ویلا"}</span>
                    </div>
                    <hr className="w-full" />
                    <div className="flex flex-row-reverse justify-center items-center gap-10">
                        <div className="h-full">
                            <button className="bg-red-500 w-[100px] px-2 py-1 flex justify-center items-center gap-2 rounded-lg
                            hover:bg-red-800">
                                <p className="text-center text-white">چت</p>
                                <ChatIcon className="text-white" />
                            </button>
                        </div>
                        <div className="flex gap-3 h-full">
                            <button className="w-fit h-fit rounded-full p-2 hover:bg-slate-300">
                                <ShareIcon />
                            </button>
                            <button className="w-fit h-fit rounded-full p-2 hover:bg-slate-300">
                                <BookmarkBorderIcon />
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-10">
                        <div className="border-r-2 border-gray-500 pr-3">
                            <p className="text-center">اتاق</p>
                            <p className="text-center">{numOfRooms}</p>
                        </div>
                        <div className="border-r-2 border-gray-500 pr-3">
                            <p className="text-center">ساخت</p>
                            <p className="text-center">{yearBuilt}</p>
                        </div>
                        <div className="pr-3">
                            <p className="text-center">متراژ</p>
                            <p className="text-center">{size}</p>
                        </div>
                    </div>
                    <hr className="w-full" />
                    <div className="mt-4">
                        <div className="text-right mb-4">
                            <span className="pr-2">:توضیحات</span>
                            <DescriptionIcon className="text-blue-600" />
                        </div>
                        <div>
                            <p className="text-right">{description}</p>
                        </div>
                    </div>
                </div>
                <div className="w-[450px] h-[300px] rounded-lg">
                    <Map />
                </div>
            </div>
        </div>
    )
}

export default HouseAdPage;