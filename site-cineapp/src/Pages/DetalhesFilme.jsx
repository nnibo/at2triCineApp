import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetalhesFilmes() {

    const {id} = useParams()
    const [filme, setFilmes] = useState({})

    useEffect(() =>{

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-BR`)
        .then(response => response.json())
        .then(response => setFilmes(response))
        .catch(error => console.log(error))
    },[])

    return (
        <>
        <div className="flex flex-col lg:flex-row items-center m-[20px] lg:m-[100px]">
            <img className="w-[800px] ml-[100px] rounded-lg" src={`https://image.tmdb.org/t/p/w1280/${filme.backdrop_path}`} />

            <div className="flex flex-col ml-[40px]">
                <h1 className="text-4xl font-bold text-start text-white mb-[20px]">Detalhes do Filme:</h1>

                <div className="text-lg text-start text-white">
                    <p>{filme.title}</p>
                    <p>Avaliação {filme.vote_average}</p>
                </div>

                <p className="text-gray-300 mt-5 mr-[100px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a
                          galley of type and scrambled it to make a type specimen book. </p>
            </div>
        </div>
        </> 
     );
}

export default DetalhesFilmes;