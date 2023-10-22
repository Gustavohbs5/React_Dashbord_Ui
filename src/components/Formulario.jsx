import {useState} from 'react'


export default function Formulario(){

    function ConsoleLog(e){
        e.preventDefault()
        console.log(`Usuário: ${name} foi cadastrado com a senha: ${password}`)
    }
    const [name, setName ] = useState() 
    const [password, setPassword ] = useState() 
    
    return(
        <>
            <form 
            className="bg-neutral-800 text-white m-4 p-4 rounded-lg flex flex-col"
            onSubmit={ConsoleLog}
            >
                <h2 className="pb-4">Faça login Para Continuar!</h2>
                <label>Digite Seu nome</label>
                <input
                className="bg-neutral-700 rounded-lg border-teal-500 m-1 border-[1px]"
                type="text"
                id='name'
                name='name'
                onChange={(e) => setName(e.target.value)}
                 />
                <label>Digite Sua idade</label>
                <input 
                className="bg-neutral-700 rounded-lg border-teal-500 m-1 border-[1px]"
                type="password"
                id='password'
                name='password'
                onChange={(e) => setPassword(e.target.value)}
                />
                <input 
                className="bg-neutral-700 hover:bg-teal-500/40 hover:text-neutral-100 cursor-pointer transition-colors text-teal-500 rounded-lg m-2"
                type="submit" 
                value="Registrar" />
            </form>
        </>
    )
}