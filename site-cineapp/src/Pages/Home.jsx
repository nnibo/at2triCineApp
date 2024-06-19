import data from '../../artigos.json'

function Home() {
    return ( 

        <div className='grid grid-cols-4 m-5'>

        
        {data.map(
                (filme, index) => (
                    <div className="max-w-xs  bg-white bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5 " key={index}>

                        <img className="rounded-t-lg w-80 h-60" src={filme.image}/>

                        <h1 className="text-2xl font-bold mb-2 m-3 tracking-tight text-gray-900 dark:text-white">{filme.title}</h1>

                        <div className='text m-3 mb-3 font-normal text-gray-700 dark:text-gray-400'>
                            {
                                filme.text.map( text => (
                                    <p key={text}>{text}</p>
                                ))
                            }
                        </div>

                        <div className='tags'>
                            {
                                filme.tags.map( tag => (
                                    <span className=' text-white p-1 ml-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-800 rounded-lg' 
                                    key={tag}>{tag}</span>
                                    )
                                )
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


