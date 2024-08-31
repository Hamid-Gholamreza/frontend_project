import React from "react";
import { Link } from "react-router-dom";
import ApartmentIcon from '@mui/icons-material/Apartment';
import HouseIcon from '@mui/icons-material/House';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';


interface Advert {
    id: number,
    location: string,
    phone: string,
    description: string,
    urgent: boolean,
    type: string
}

interface HouseAdCardProps {
    ad: Advert;
}

const HouseAdCard: React.FC<HouseAdCardProps> = ({ad}) => {
    
    return(
        <div className="w-full h-[60px] border-2 border-gray-300 rounded-lg box-border mb-2 hover:border-blue-400 ease-out">
            <Link to={`/ad/${ad.id}`} className="flex flex-row-reverse justify-start items-center w-full h-full">
                <div className="pr-4">
                    {
                        ad.type === 'A' ? <ApartmentIcon /> : <HolidayVillageIcon />
                    }
                </div>
                {
                    ad.urgent ? 
                <div className="mr-4 bg-red-200 rounded-lg flex flex-row-reverse justify-center items-center px-1">
                    <p className="text-red-600 text-xs">فوری</p>
                    <PriorityHighIcon className="text-red-600" />
                </div>
                     : null
                }
                <div className="pr-4">
                    <p className="text-center">{ad.description}</p>
                </div>
            </Link>
        </div>
    )
}

export default HouseAdCard;