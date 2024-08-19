import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

function Filmes() {
    const [filmesA, setFilmesA] = useState([]);
    const [filmesB, setFilmesB] = useState([]);
    const [search, setSearch] = useState('')
    const [artigos, setArtigos] = useState(filmesA)
    console.log(search)

    function handleInput(e) {
        const pesquisa = e.target.value;
        setSearch(pesquisa);

        const resultados = filmesA.filter(filme =>(
            filme.title.toLowerCase().includes(pesquisa.toLowerCase())
        ))
        console.log(resultados)
        setArtigos(resultados)
    }

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e')
            .then(response => response.json())
            .then(data => {
                //const metade = Math.ceil(data.results.length / 2);
                setFilmesA(data.results);
                setFilmesB(data.results);
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

    const bannerSliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    return (
        <>
            <div className="w-full h-[800px] mb-[120px]">
                <Slider {...bannerSliderSettings}>
                    <div>
                        <img
                            className="w-full h-[800px] object-cover"
                            src="/banner1.jpg"
                            alt="Banner 1"
                        />
                    </div>
                    <div>
                        <img
                            className="w-full h-[800px] object-cover"
                            src="/banner2.jpg"
                            alt="Banner 2"
                        />
                    </div>
                    <div>
                        <img
                            className="w-full h-[800px] object-cover"
                            src="/banner3.jpg"
                            alt="Banner 3"
                        />
                    </div>
                </Slider>
            </div>

            <div className="flex justify-center">
                <input 
                    type="search" 
                    className="w-[500px] h-[30px] p-4 rounded-3xl" 
                    placeholder="Pesquisa..."
                    value={search} 
                    onChange={handleInput} />
            </div>

            <div className="mb-8 mt-[100px]">
                <h1 className="text-4xl font-bold text-center text-white mt-3 mb-[40px]">Mais Assistidos</h1>
                <Slider {...sliderSettings}>

                    { artigos.length >0 ?
                    artigos.map(filme => (
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
                    ))
                :
                <p> Carregando</p>
                }
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