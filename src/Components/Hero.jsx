import { useState } from 'react';
import Button from "./Button";

const Hero = ({setFilterParam }) => {

  const [filter, setFilter] = useState('');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const applyFilter = (e) => {
    e.preventDefault();
    
    setFilterParam(filter);
  };

    return (
      <>
        <div className="hero min-[50px]-screen bg-hero">
          <div className="hero-overlay bg-opacity-60">
            <div className="hero-content mx-auto my-56">
              <div className="flex flex-col">
                <div className="text-white font-mono text-2xl text-center">
                  <span className="animate-typing text-4xl lg:text-6xl">
                    Yelp Business
                  </span>
                </div>
                <div className="mt-14">
                <section>
              <div className="card bg-base-100 shadow-xl">
                  <div className="card-body">
                      <form>
  
                          <div className="flex flex-col lg:flex-row relative">
                              <input type="text" value={filter} onChange={handleFilterChange} className="input input-bordered w-full lg:w-[120%] max-w-xs mb-2 mr-2" placeholder="Enter Search"/>
                              <Button text={'Search'} className="btn btn-success text-white" onClick={applyFilter} />
                          </div>
  
                      </form>
                  </div>
              </div>
          </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }


export default Hero