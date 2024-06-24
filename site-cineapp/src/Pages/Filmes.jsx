import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

function Filmes() {
    const [filmesA, setFilmesA] = useState([]);
    const [filmesB, setFilmesB] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e')
            .then(response => response.json())
            .then(data => {
                const metade = Math.ceil(data.results.length / 2);
                setFilmesA(data.results.slice(0, metade));
                setFilmesB(data.results.slice(metade));
            })
            .catch(error => console.log(error));
    }, []);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "60px",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className="w-full h-[800px] mb-[100px]">
                <img className="w-full h-full object-cover" src="banner.jpg" alt="Banner" />
            </div>

            <div className="mb-8 mt-[100px]">
                <h1 className="text-4xl font-bold text-center text-white mt-8 mb-[40px]">Mais Assistidos</h1>
                <Slider {...sliderSettings}>
                    {filmesA.map(filme => (
                        <div className="px-6 py-4" key={filme.id}>
                            <div className="max-w-sm rounded-lg">
                                <img
                                    className="h-auto rounded-lg"
                                    src={`https://image.tmdb.org/t/p/w342/${filme.poster_path}`}
                                    alt={filme.title}
                                />
                                <h1 className="text-2xl font-medium text-white m-1 mt-[10px]">
                                    {filme.title}
                                </h1>
                                <Link to={`${filme.id}`} className="text-white text-lg hover:text-gray-500 m-1">
                                    Saiba Mais
                                </Link>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="mb-8 mt-[100px]">
                <h1 className="text-4xl font-bold text-center text-white mt-8 mb-[40px]">Filmes de Sucesso</h1>
                <Slider {...sliderSettings}>
                    {filmesB.map(filme => (
                        <div className="px-6 py-4" key={filme.id}>
                            <div className="max-w-sm rounded-lg">
                                <img
                                    className="h-auto rounded-lg"
                                    src={`https://image.tmdb.org/t/p/w342/${filme.poster_path}`}
                                    alt={filme.title}
                                />
                                <h1 className="text-2xl font-medium text-white m-1 mt-[10px]">
                                    {filme.title}
                                </h1>
                                <Link to={`${filme.id}`} className="text-white text-lg hover:text-gray-500 m-1">
                                    Saiba Mais
                                </Link>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="mb-8 mt-[100px]">
                <h1 className="text-4xl font-bold text-center text-white mt-8 mb-[40px]">Favoritos da Galera</h1>
                <Slider {...sliderSettings}>
                    {filmesB.map(filme => (
                        <div className="px-6 py-4" key={filme.id}>
                            <div className="max-w-sm rounded-lg">
                                <img
                                    className="h-auto rounded-lg"
                                    src={`https://image.tmdb.org/t/p/w342/${filme.poster_path}`}
                                    alt={filme.title}
                                />
                                <h1 className="text-2xl font-medium text-white m-1 mt-[10px]">
                                    {filme.title}
                                </h1>
                                <Link to={`${filme.id}`} className="text-white text-lg hover:text-gray-500 m-1">
                                    Saiba Mais
                                </Link>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}

export default Filmes;
