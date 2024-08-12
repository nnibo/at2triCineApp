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

        emailjs.send('service_46oyt8a','template_gmi57ac',templateParams, '01V-CFd2eYAYMckOM')
        .then((response) =>{
            console.log('Email enviado com sucesso', respose.status, response.text);
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
        <div className="flex justify-center bg-black w-[600px] h-[400px] mt-10 rounded-3xl">

        <form className="flex flex-col items-center justify-center" onSubmit={enviarEmail}>

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