import data from '../../artigos.json'

function Home() {
    return ( 

        <div className='grid grid-cols-3'>
        
        {data.map(
                (filme, index) => (
                    <div className="card m-5" key={index}>
                        <h1 className="p-2">{filme.title}</h1>
                        <img className='mb-4' src={filme.image}/>
                        <div className='tags'>
                            {
                                filme.tags.map( tag => (
                                    <span className='bg-pink-800 text-white p-1 m-1 ' 
                                    key={tag}>{tag}</span>
                                    )
                                )
                            }
                        </div>

                        <div className='text'>
                            {
                                filme.text.map( text => (
                                    <p key={text}>{text}</p>
                                ))
                            }
                        </div>

                    </div>
                )
            )    
        }   
        </div>
     );
}

export default Home;