import './Header.css'
import logoCircle from '../img/logoHimatif.png'
const Header = () => {
    return (
        <div className="header" id='home'>
            <div className="titlee">
                <p className='titleHead'>HIMATIF UMG</p>
                <p className='text ' style={{marginBottom: 20}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore facilis qui ea quibusdam ut ipsam accusamus minima, cupiditate voluptate beatae? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore facilis qui ea quibusdam ut ipsam accusamus minima, cupiditate voluptate beatae?</p>
                <a href="#about" className='navLink active'>Tentang Kami \/</a>
            </div>
            <img src={logoCircle} alt="" width={600} height={400} id='homeLogo'/>
            <div className="undertow"></div>
        </div>
    );
}
 
export default Header;