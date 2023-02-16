import { lastBooks } from '../last_books/info_last_books'
import styled from 'styled-components'
import { Title } from '../title'
import Card from '../cards'
import bookRecomended from '../../assets/images/livro2.png'
const LastBooksSection = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const LastBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function LastBooks() {
    return (
        <LastBooksSection>
            <Title
                color="#EB9B00"
                fontSize="36px"
                align="center">
                Últimos lançamentos
            </Title>
            <LastBooksContainer>
                {lastBooks.map(lastBook => (
                    <img src={lastBook.src} alt='livro' />
                ))}
            </LastBooksContainer>
            <Card
                title="Talvez você se interesse por"
                subtilte="Angular 11"
                description="Construa uma aplicação integrada com Google"
                image={bookRecomended}>

            </Card>
            <Card
                title="Talvez você se interesse por"
                subtilte="Angular 11"
                description="Construa uma aplicação integrada com Google"
                image={bookRecomended}>

            </Card>
        </LastBooksSection>
    )
}
export default LastBooks