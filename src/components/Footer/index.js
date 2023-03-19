import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer_page'>
            <div>
                <img src='/images/fb.png' alt='Logo Facebook' className='fb'></img>
                <img src='/images/tw.png' alt='Logo Twitter' className='tw'></img>
                <img src='/images/ig.png' alt='Logo Instagram' className='ig'></img>
            </div>
            <img src='/images/logo.png' alt='Logo App' className='logo'></img>
            <p className='texto'>Desenvolvido por Alura.</p>
        </footer>
    )
}

export default Footer