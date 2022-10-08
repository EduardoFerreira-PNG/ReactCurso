import {useState} from 'react'

function Condicional(){

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        
    }
    function limparEmail(e){
        e.preventDefault()
        setUserEmail('')
        
    }

    return (
        <div>
            <h2>Cadastre o seu e-mail.</h2>
            <form>
                <input type="email" placeholder='Digite o seu e-mail...' onChange={(e) => setEmail(e.target.value)}/>
                <button onClick={enviarEmail}>Enviar E-mail</button>
                {userEmail && ( //como se fosse um if =  se for verdade executa a div
                    <div>
                        <p>o e-mail do usuario é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar e-mail</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Condicional