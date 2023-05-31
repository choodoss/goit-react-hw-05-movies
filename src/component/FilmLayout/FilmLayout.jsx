import { Outlet } from 'react-router-dom';
import { Container, Header, LinkList, LinkItem, LinkPage } from './FilmLayout.styled'
import { Audio } from 'react-loader-spinner'

<Audio
    height="80"
    width="80"
    radius="9"
    color='green'
    ariaLabel='three-dots-loading'
    wrapperStyle
    wrapperClass
/>

const FilmLayout = () => {
    const filmLayout =
        <>
            <Header>
                <Container>
                    <nav>
                        <LinkList>
                            <LinkItem><LinkPage to='/' end>HOME</LinkPage></LinkItem>
                            <LinkItem><LinkPage to='/move'>MOVE</LinkPage></LinkItem>
                        </LinkList>
                    </nav>
                </Container>
            </Header>
            <main>
                <Outlet />
            </main>

        </>
    return filmLayout
};

export default FilmLayout;

