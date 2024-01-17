import Nav from './Nav';
import logoKasa from '../assets/logoKasa.svg';

export default function Header() {
    return <>
        <header className='headerBand'>
            <figure>
                <img src={logoKasa} alt="logo de l'agence immobilière Kasa" />
            </figure>
            <Nav />
        </header>
    </>
}
