import React from "react";
import { Link } from "react-router-dom";

function HouseAdCard():JSX.Element {
    
    return(
        <div className="w-full h-[60px] border-2 border-gray-300 rounded-lg box-border mb-2">
            <Link to={'/home'} className="block w-full h-full">
                <p className="w-full text-center">آپارتمان در شهرک غرب</p>
            </Link>
        </div>
    )
}

export default HouseAdCard;