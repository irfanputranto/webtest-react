import { useState, useEffect } from "react";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Loading from "../Components/Loading";
import Navbar from "../Components/Navbar";
import ArticleService from "../services/ArticleService";

const Main = ({filterParam}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await ArticleService.getData(filterParam);
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

 

  return (
    <section className="min-h-screen">
      <div className="container mt-5 ml-2 lg:mx-auto">
        <div className="flex flex-wrap justify-center">

          {loading ? (
            <div className="flex mt=5">
                <Loading />
          </div>
          ) : (
            <>
                {data.map((item) => (
                    <Card key={item.id} item={item} link={`/details/${item.id}`} />
                ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  const [filterParam, setFilterParam] = useState('');


  return (
    <>
      <Navbar />
      <Hero setFilterParam={setFilterParam} />
      <Main filterParam={filterParam} />
      <Footer />
    </>
  );
};

export default Home;
