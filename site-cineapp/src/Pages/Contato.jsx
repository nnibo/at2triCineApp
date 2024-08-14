import { useState } from "react";
import emailjs from '@emailjs/browser'

function Contato() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')

    function enviarEmail(enviar){
        enviar.preventDefault();

        if(name === '' || email ==='' || mensagem === ''){
            alert('Preencha todos os campos corretamente');
            return;
        }

        const templateParams = {
            name : name,
            email : email,
            message : mensagem
        }

        emailjs.send('service_9vjvuyw','template_gmi57ac',templateParams, '01V-CFd2eYAYMckOM')
        .then((response) =>{
            console.log('Email enviado com sucesso', response.text);
            setName('')
            setEmail('')
            setMensagem('')
        }, (error) =>  {
            console.log('Erro: ', error)
        })
    }

    return ( 
        <>
        <div className="flex justify-center mt-10">
            <h1 className="text-4xl font-bold text-center text-white">CONTATO</h1>
        </div>

        <div id="container" className="w-full flex justify-center">
        <div className="flex justify-center bg-black w-[1200px] h-[700px] mt-10 rounded-3xl">

    <div className="flex flex-wrap justify-center items-center p-24 w-[550px]">
        <div className=" flex flex-row ">
            <div className="bg-white w-[180px] h-[220px] mr-10 rounded-xl flex items-center" >
                <div className="flex flex-col items-center">
                    <img className="w-10" src="../../public/localizacao.png" alt="" />
                    <h2 className="text-center">Localizacao</h2>
                    <h4 className="text-center">A nossa empresa se localiza no ajdkajdl</h4>
                </div>
            </div>

            <div className="bg-purple-800 w-[180px] h-[220px] rounded-xl flex items-center" >
            <div className="flex flex-col items-center">
                    <img className="w-10" src="../../public/telefone.png" alt="" />
                    <h2 className="text-center text-white">Localizacao</h2>
                    <h4 className="text-center text-white">A nossa empresa se localiza no ajdkajdl</h4>
                </div>
            </div>
        </div>

        <div className="flex flex-row">
        <div className="bg-purple-800 w-[180px] h-[220px] rounded-xl flex items-center mr-10" >
            <div className="flex flex-col items-center">
                    <img className="w-10" src="../../public/telefone.png" alt="" />
                    <h2 className="text-center text-white">Localizacao</h2>
                    <h4 className="text-center text-white">A nossa empresa se localiza no ajdkajdl</h4>
                </div>
            </div>
            <div className="bg-white w-[180px] h-[220px] rounded-xl flex items-center" >
                <div className="flex flex-col items-center">
                    <img className="w-10" src="../../public/localizacao.png" alt="" />
                    <h2 className="text-center">Localizacao</h2>
                    <h4 className="text-center">A nossa empresa se localiza no ajdkajdl</h4>
                </div>
            </div>
        </div>
    </div>
        <form className="flex flex-col items-center justify-center" onSubmit={enviarEmail}>
        <div className="mb-10">
            <h1 className="text-3xl font-light text-center text-white">Nos envie suas duvidas!</h1>
        </div>
            <input type="text" className="p-5 mb-5 rounded-xl w-[500px] h-12" placeholder="Digite seu nome" onChange={(enviar) => setName(enviar.target.value)} value={name}/>
          
            <input type="text" className="p-5 mb-5 rounded-xl w-[500px] h-12" placeholder="Digite seu email" onChange={(enviar) => setEmail(enviar.target.value)} value={email}/>

            <textarea type="text" className="p-5 mb-5 rounded-xl w-[500px] h-32" placeholder="Digite seu digite seu texto" onChange={(enviar) => setMensagem(enviar.target.value)} value={mensagem}/>

            <button className="bg-purple-800 text-white rounded-xl w-60 mt-5 h-10">Enviar Mensagem</button>
           
        </form>
        </div>
        </div>

        </>
     );
}

export default Contato;