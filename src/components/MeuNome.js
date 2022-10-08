function MeuNome({setNome}){
    return (
        <div>
            <p>Digite seu Nome</p>
            <input type="text" name="nome" id="nome" placeholder="Qual é o seu nome?" onChange={(e) => setNome(e.target.value)}/>
        </div>
    )
}   

export default MeuNome