import PropTypes from 'prop-types'
function List({marca, lancamento}){
    return(
        <>
            <h1>Ola</h1>
            <ul>
                <li>{marca} - {lancamento}</li>
            </ul>
        </>
    )
}

List.propTypes = {
    marca: PropTypes.string.isRequired,
    lancamento: PropTypes.number
}

List.defaultProps = {
    marca: "faltou a marca",
    lancamento: 0
}
export default List