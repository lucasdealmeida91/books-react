import Input from '../input'
import styled from 'styled-components'
import { useState } from 'react'
import { books } from '../search/itemSearch'
const SearchItem = styled.section`
        background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: 270px;
        width: 100%;
`
const Title = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`

const SubTitle = styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`

const Result = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`
function Search() {
    const [searchText, setSearchText] = useState([])

    return (
        <SearchItem>
            <Title>Ja sabe por onde começar ?</Title>
            <SubTitle>Econtre seu livro em nossa estante.</SubTitle>
            <Input placeholder="Escreva sua proxima leitura" onBlur={event => {
                const inputText = event.target.value
                const result = books.filter(item => item.nome.includes(inputText))
                setSearchText(result)
            }}
            />
            {searchText.map(livro => (
                <Result>
                    <img src={livro.src} alt='livro' />
                    <p>{livro.nome}</p>


                </Result>
            ))
            }

        </SearchItem>

    )
}

export default Search