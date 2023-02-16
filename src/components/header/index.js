
import Logo from '../logo'
import OpcoesHeader from '../opcoes_header'
import OpcoesIcon from '../opcoes_icon'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`
function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <OpcoesHeader />
            <OpcoesIcon />
        </HeaderContainer>
    )
}
export default Header