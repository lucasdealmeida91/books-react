import logo from '../../assets/images/logo.svg'
import styled from 'styled-components'

const HeaderLogo = styled.div`
    display: flex;
    font-size: 30px;
`

const LogoImg = styled.img`
    margin-right: 10px;
`

function Logo() {
    return (
        <HeaderLogo>
            <LogoImg
                 src={logo} 
                 alt="logo do site">
            </LogoImg>
            <p><strong>My</strong>Books</p>
        </HeaderLogo>
    )
  
}

export default Logo;