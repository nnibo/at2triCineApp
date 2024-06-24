import data from '../../artigos.json'

function Home() {
    return (

        <div className='mt-20'>
            <div className='flex flex-col lg:flex-row items-center space-y-5 lg:space-y-0 lg:space-x-[50px] lg:m-[100px]'>
                <img className='w-[800px] rounded' src="robo.jpg" alt=""/>

                <div className='flex flex-col'>

                    <div className="text-3xl font-bold mb-2 tracking-tight text-gray-900 text-white">
                        <h1>Lorem Ipsum is simply dummy text of the printing.</h1>
                    </div>

                    <div className='mt-5 "'>
                        <p className="text mb-3 text-gray-300">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                            the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>

                </div>
            </div>
            


        <div className='mt-[80px]'>

            <h1 className='text-4xl font-bold text-center text-white mb-[55px]'>Notícias dos Filmes</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 m-10'>
                {data.map((filme, index) => (
                    <div className="flex max-w-full rounded-lg shadow bg-purple-950" key={index}>
                        
                        <img className="rounded-l-lg w-[300px] h-[300px] object-cover" src={filme.image}/>

                        <div className="p-5 flex flex-col">

                            <h1 className="text-2xl font-bold mb-2 tracking-tight text-gray-900 text-white">{filme.title}</h1>

                            <div className='text mb-3 text-gray-400'>
                                {filme.text.map((text, i) => (
                                    <p key={i}>{text}</p>
                                ))}
                            </div>

                            <div className='tags'>
                                {filme.tags.map((tag, i) => (
                                    <span className=' bg-purple-800 text-white text-sm font-medium mr-2 px-1 py-1 rounded' key={i}>{tag}</span>
                                ))}
                            </div>

                        </div>

                    </div>

                ))}
            </div>
        </div>
    </div>
    );
}

export default Home;

