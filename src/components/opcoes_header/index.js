
import styled from 'styled-components'


const OpcoesHeaderStyle = styled.ul`
    display: flex;
`
const ItemHeaderStyle = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`
const textoOpcoes = ['Categorias', 'Minha estante', 'Favoritos']


function OpcoesHeader(){
     return (
         <OpcoesHeaderStyle>
          {
            textoOpcoes.map((texto) => (<ItemHeaderStyle><p>{texto}</p></ItemHeaderStyle>))
          }
        </OpcoesHeaderStyle>
    )
}
export default OpcoesHeader
   
