function OutraLista({itens}){
    return(
        <>

        <h3>Lista de coisas boas</h3>
        { itens.lenght > 0 ? ( // if e else ternario do react nessa linha temos o if
            itens.map((item, index) => ( 
                <p key={index}>{item}</p>
            ))) : ( // : = else com parenteses e o que há dentro é o que quero que seja dado ao usuario
                <p>Não há itens na lista</p>
            )}
        </>
    )
}

export default OutraLista