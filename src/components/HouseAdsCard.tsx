import React from "react";
import { Link } from "react-router-dom";
import ApartmentIcon from '@mui/icons-material/Apartment';
import HouseIcon from '@mui/icons-material/House';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

interface Advert {
    location: string,
    phone: string,
    description: string,
    urgent: boolean
}

interface HouseAdCardProps {
    ad: Advert;
}

const HouseAdCard: React.FC<HouseAdCardProps> = ({ad}) => {
    
    return(
        <div className="w-full h-[60px] border-2 border-gray-300 rounded-lg box-border mb-2 hover:border-blue-400 ease-out">
            <Link to={'/home'} className="flex flex-row-reverse justify-start items-center w-full h-full">
                <div className="pr-4">
                    <ApartmentIcon />
                </div>
                {
                    ad.urgent ? 
                <div className="mr-4 bg-red-200 rounded-lg p-1">
                    <p className="block w-full h-full text-red-600 text-center text-sm">فوری</p>
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