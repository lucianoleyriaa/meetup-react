import { useRef } from "react";
import classes from "./NewMeetupForm.module.css";
import Card from "../ui/Card";
import { useHistory } from "react-router-dom";

function NewMeetupForm(props) {
   // useRef retorna un objeto que me permite acceder al valor del input referenciado
   const titleInputRef = useRef();
   const imageInputRef = useRef();
   const addressInputRef = useRef();
   const descriptionInputRef = useRef();
   const history = useHistory();

   function submitHandler(e) {
      e.preventDefault();

      // Obtener datos del formulario
      const formValues = {
         id: Math.random(),
         title: titleInputRef.current.value,
         image: imageInputRef.current.value,
         address: addressInputRef.current.value,
         description: descriptionInputRef.current.value,
      };

      // Enviar solicitud http
      props.createMeetup(formValues);

      history.push("/");
   }

   return (
      <Card>
         <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
               <label htmlFor="title">Meetup title</label>
               <input
                  type="text"
                  required
                  id="title"
                  autoComplete="off"
                  ref={titleInputRef}
               />
            </div>
            <div className={classes.control}>
               <label htmlFor="image">Meetup image</label>
               <input type="url" required id="image" ref={imageInputRef} />
            </div>
            <div className={classes.control}>
               <label htmlFor="address">Address</label>
               <input type="text" required id="address" ref={addressInputRef} />
            </div>
            <div className={classes.control}>
               <label htmlFor="description">Description</label>
               <textarea
                  required
                  id="description"
                  rows="5"
                  ref={descriptionInputRef}
               ></textarea>
            </div>
            <div className={classes.actions}>
               <button>Add Meetup</button>
            </div>
         </form>
      </Card>
   );
}

export default NewMeetupForm;
