import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleService from "../services/ArticleService";
import Loading from "../Components/Loading";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Video from "../Components/Video";



const Details = () => {
    const {id} = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const showData = async () => {
            try {
                const data = await ArticleService.getById(id)
                setItem(data)
            } catch (error) {
                console.error('Error Fetching data: ', error);
            }
        }

        showData()
    }, [id])

    if (!item) {
        return <div className="flex items-center h-screen"><Loading /></div>;
    }

    return (
        <>
        <Navbar />
        <div className="min-h-screen">
            <div className="container mx-auto mt-2">
                <Video />
            </div>
        </div>
        <Footer />
        </>
    );
}


export default Details