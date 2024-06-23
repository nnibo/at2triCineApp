import { useState, useEffect } from "react"
import {Link} from 'react-router-dom'

function Filmes() {

    const [filmes, setFilmes]= useState([])

    useEffect(() =>{

        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e')
        .then(response => response.json())
        .then(response => setFilmes(response.results))
        .catch(error => console.log(error))

    },[])

    return ( 
        <>

        <div className="w-full h-[800px] mb-[100px]">  
            <img className="w-full h-full object-cover" src="banner.jpg"/>
        </div>

        <h1 className="text-4xl font-bold text-center text-white mt-[50px]" >Filmes Disponíveis</h1>
        <div className="grid grid-cols-5 m-[100px] mt-[35px]">
            {
                filmes.map(
                    filme => (
                        <div className="px-6 py-4"> 
                            <div className=" max-w-sm rounded-lg " key={filmes.id}>

                                <img className="w-[300px] h-[350px] rounded-lg" src={`https://image.tmdb.org/t/p/w92/${filme.poster_path}`} />

                                <h1 className="text-lg font-medium tracking-tight text-white font-bold m-1 ">{filme.title}</h1>

                                <Link to={`${filme.id}`} className="text-gray-400 m-1">Saiba Mais</Link>
                            </div>
                        </div>
                    )
                )
            }
        </div>
            
        </>

     );
}

export default Filmes;