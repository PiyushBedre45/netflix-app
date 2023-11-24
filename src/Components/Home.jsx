import React, { useEffect, useState } from "react";

import { FaPlay } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

import axios, { Axios } from "axios";
import { useNavigate } from "react-router-dom";

const apiKey = "2bc8155d3449ba06896d47dec59f3dbe";
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original";
const movies = "movie";
const tvShows = "tv";
const allContain = "all";

const Card = ({ img, MovieName }) => {
  const navigate = useNavigate();
  const handleOnclick = () => {
    const MovieAndSeries = MovieName;
    // console.log(MovieAndSeries);
    navigate("/video", {
      state: {
        MovieAndSeries,
      },
    });
  };

  return (
    <>
      <img
        className="w-[200px] h-[250px] cursor-pointer hover:scale-105 transition ease-in-out duration-150"
        src={img}
        alt="load"
        onClick={handleOnclick}
      />
    </>
  );
};

const Row = ({ title, arr = [] }) => {
  return (
    <>
      <div className=" w-[98%]  mx-auto ">
        <h2 className="font-bold text-2xl mt-4 mb-4">{title}</h2>
        <div className="flex overflow-x-auto overflow-y-hidden gap-[10px] scroll-smooth scrollbar-hide">
          {arr.map((item, index) => (
            <Card
              key={index}
              img={`${imgUrl}/${item.poster_path}`}
              MovieName={item.title || item.name}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const Image = ({ photo }) => {
  return (
    <>
      <div>
        <img
          className="w-[100%] mx-auto h-[700px] relative object-cover"
          src={photo}
          alt="load"
        />
      </div>
    </>
  );
};
const Heading = ({ Title }) => {
  return (
    <>
      <div>
        <h1 className="font-bold text-5xl ">{Title}</h1>
      </div>
    </>
  );
};
const Discription = ({ dis }) => {
  return (
    <>
      <div>
        <p className="font-semibold text-md ">{dis}</p>
      </div>
    </>
  );
};

const Home = () => {
  const [movie, setMovie] = useState([]);
  const [tv, setTv] = useState();
  const [all, setAll] = useState();
  const randNum = movie[Math.floor(Math.random() * 15)];

  useEffect(() => {
    const fetchMovie = async () => {
      const {
        data: { results },
      } = await axios.get(
        `${url}/trending/${movies}/day?language=en-US' &api_key=${apiKey}`
      );
      setMovie(results);
    };

    const fetchTv = async () => {
      const {
        data: { results },
      } = await axios.get(
        `${url}/trending/${tvShows}/day?language=en-US' &api_key=${apiKey}`
      );
      setTv(results);
    };
    const fetchAll = async () => {
      const {
        data: { results },
      } = await axios.get(
        `${url}/trending/${allContain}/day?language=en-US' &api_key=${apiKey}`
      );
      setAll(results);
    };
    fetchMovie();
    fetchTv();
    fetchAll();
  }, []);

  return (
    <>
      <div className="bg-black w-[100%] h-[700px] relative">
        <div>
          <Image photo={`${imgUrl}/${randNum?.backdrop_path}`} />
        </div>

        <div className="w-[80%] mx-auto h-full flex items-center justify-between absolute top-5 left-5">
          <div className="w-60%  h-full  flex flex-col  justify-center gap-4 ml-[60px]">
            <Heading Title={randNum?.title} />
            {/* <h1 className="font-bold text-5xl ">Money Hiest</h1> */}
            <Discription dis={randNum?.overview} />
            {/* <p className="font-semibold text-md  ">
              Eight thieves take hostages and lock themselves in the Royal Mint
              of Spain as a criminal mastermind manipulates the police to carry
              out his plan.
            </p> */}
            <div className="flex font-bold text-xl gap-[20px]  ">
              <button className="bg-gray-400 rounded-md w-[100px] h-[40px] hover:bg-white hover:text-black flex items-center justify-center gap-1">
                <FaPlay className="text-sm " />
                Play
              </button>
              <button className="bg-gray-400 rounded-md w-[100px] h-[40px] hover:bg-white hover:text-black flex items-center justify-center gap-1">
                <FaPlus className="text-sm " />
                MyList
              </button>
            </div>
          </div>
          <div className="w-full h-full  flex items-center justify-center"></div>
        </div>
      </div>
      <Row title={"Popular movies on netflix"} arr={movie} />
      <Row title={"Popular shows on netflix"} arr={tv} />
      <Row title={"Popular "} arr={all} />
    </>
  );
};

export default Home;

// UseContext
