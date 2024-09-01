import React, {useState, useEffect} from "react";
import axios from "axios";
import HouseAdCard from "../components/HouseAdsCard";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


interface advert {
    id: number,
    location: string,
    phone: string,
    title: string,
    urgent: boolean,
    type: string
}



function Homepage({}) {

    const [items, setItems] = useState<JSX.Element[]>([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/ads?_page=${page}&_per_page=7`);
            setTotalPages(response.data.pages);
            const list = response.data.data.map((item: advert, index: number) => {
                return (
                    <HouseAdCard key={index} ad={item} />
                );
            });
            setItems(list);
        }
        catch(error) {
            console.error('Error fetching data ', error)
        }
    }

    useEffect(() => {
        fetchData();

    }, [page]);

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
      };

    return(
        <div className="w-full h-[100vh] flex flex-col justify-center items-center">
            <div className="w-1/2">
                {items}

            </div>                
            <div className="w-1/2">
                    <Stack spacing={2} className="w-full flex justify-center items-center" dir="rtl">
                        <Pagination count={totalPages} shape="rounded" page={page} onChange={handlePageChange}
                            renderItem={(item) => (
                            <PaginationItem components={{ previous: ArrowForwardIcon, next: ArrowBackIcon }} {...item} /> )} />
                    </Stack>
            </div>
        </div>
    )
}

export default Homepage;