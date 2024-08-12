function Contato() {
    return ( 
        <>
        <div className="flex justify-center mt-10">
            <h1 className="text-4xl font-bold text-center text-white">CONTATO</h1>
        </div>

        <div id="container" className="w-full flex justify-center">
        <div className="flex justify-center bg-black w-[600px] h-[400px] mt-10 rounded-3xl">

        <form className="flex flex-col items-center justify-center">

            <label className="text-white">Nome</label>
            <input type="text" className="text-center mb-5 rounded-xl w-[500px] h-12" placeholder="Fulano da silva"/>

            <label></label>
            <input type="text" className="text-center mb-5 rounded-xl w-[500px] h-12" placeholder="Digite seu email"/>

            <textarea type="text" className="text-center mb-5 rounded-xl w-[500px] h-32" placeholder="Digite seu digite seu texto"/>

            <button className="bg-purple-800 text-white rounded-xl w-60 h-10">Enviar Mensagem</button>
           
        </form>
        </div>
        </div>

        </>
     );
}

export default Contato;