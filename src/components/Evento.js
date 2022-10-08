import Button from "./evento/Button"

function Evento(){

    function meuEvento(){
        console.log("opa fui ativado")
    }

    function segundoEvento(){
        console.log("ativando o segundo evento")
    }

    return(
        <div>
            <p>Clique para disparar um evento!</p>
            <Button event={meuEvento} text="Primeiro Evento" />
            <Button event={segundoEvento} text="segundo Evento" />
        </div>
    )
}

export default Evento