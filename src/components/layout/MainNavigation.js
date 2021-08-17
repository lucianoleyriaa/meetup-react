import {Link} from 'react-router-dom'

// classes en un objeto en donde se encuentran todas las clases e id definidos unicamente para este componente 
import classes from './MainNavigation.module.css'

function MainNavigation() {
   return (
      <header className={classes.header} >
         <div className={classes.logo}>React Meetups</div>
         <nav>
            <ul>
               <li><Link to='/'>Home</Link></li>
               <li><Link to='/new-meetup'>New Meetup</Link></li>
               <li><Link to='/favorites'>Favorites</Link></li>
            </ul>
         </nav>
      </header>
   )
}

export default MainNavigation;