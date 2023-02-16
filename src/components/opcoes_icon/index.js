
import perfil from  '../../assets/images/perfil.svg'
import sacola from '../../assets/images/sacola.svg'
import styled from 'styled-components'

const Icones = styled.ul`
    display: flex;
    align-items: center;
`

const IconesItem = styled.li`
    margin-right: 40px;
    width: 25px;
    align-items: center;
    justify-content: center;
`
const icones = [perfil, sacola]

function OpcoesIcon(){
    return(
        <Icones>
          {
            icones.map((icone) => (<IconesItem><img src={icone} alt='logo'></img></IconesItem>))
          }
        </Icones>
    )
}
export default OpcoesIcon