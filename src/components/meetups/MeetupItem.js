import Card from '../ui/Card'
import classes from './MeetupItem.module.css'

function MeetupItem(props) {
   return (
      <li className={classes.item}>
         <Card>
            <div className={classes.image}>
               <img src={props.image} alt='' ></img>
            </div>
            <div className={classes.content}>
               <h3>{props.title}</h3>
               <address>{props.address}</address>
               <p>{props.description}</p>
            </div>
            <div>
               <button>To Favorite</button>
            </div>
         </Card>
      </li>
   )
}

export default MeetupItem