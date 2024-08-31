import React, {useState, useEffect} from "react";
import axios from "axios";
import HouseAdCard from "../components/HouseAdsCard";
import PaginationRounded from "../components/PaginationRounded";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface advert {
    location: string,
    phone: string,
    description: string,
    urgent: boolean
}


function Homepage({}) {

    const [items, setItems] = useState<JSX.Element[]>([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/ads?_page=${page}&_per_page=3`);
            setTotalPages(response.data.pages)
            console.log(response.data.pages)
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
                <Stack spacing={2}>
                    <Pagination count={totalPages} shape="rounded" page={page} onChange={handlePageChange}  />
                </Stack>
            </div>
        </div>
    )
}

export default Homepage;