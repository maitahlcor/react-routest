import {NavLink} from 'react-router-dom'

function Header () {
    return(
        <div className='container'>
            <nav>
                <ul className='container__url'>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/pricing">Pricing</NavLink></li>
                </ul>
            </nav>
        </div>
    )

}

export default Header