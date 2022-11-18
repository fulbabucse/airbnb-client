import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExperiencesCard from "../../../Components/Cards/ExperiencesCard";
import HomesCard from "../../../Components/Cards/HomesCard";
import SearchForm from "../../../Components/Form/SearchForm";
const Home = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetch("experiences.json")
      .then((res) => res.json())
      .then((data) => setExperiences(data));
  }, []);

  return (
    <div className="md:flex justify-center gap-2 px-4 md:px-8 lg:px-16">
      <div>
        <SearchForm></SearchForm>
      </div>
      <div className="flex-1 my-4">
        <div>
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-primaryColor mb-2">
              Homes
            </h1>
            <Link
              to="/coming-exp"
              className="hover:text-primaryColor transition-all duration-100"
            >
              See All
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {[...Array(20)].map((experience, idx) => (
              <HomesCard key={idx} experience={experience}></HomesCard>
            ))}
          </div>
        </div>

        <div className="my-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-primaryColor mb-2">
              Events
            </h1>
            <Link
              to="/coming-exp"
              className="hover:text-primaryColor transition-all duration-100"
            >
              See All
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {experiences.map((experience, idx) => (
              <ExperiencesCard
                key={idx}
                experience={experience}
              ></ExperiencesCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
