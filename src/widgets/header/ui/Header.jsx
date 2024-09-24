import Logo from 'shared/ui/Logo'
// import MiniProfile from 'entities/miniProfile'
import MiniProfileButton from 'features/MiniProfileButton'

import './Header.css'

const Header = () => {
    return (
        <header className='interface-component'>
            <Logo/>
            <MiniProfileButton 
                name='Иван'
                surname='Иванов'
            />
        </header>
    )
}

export default Header