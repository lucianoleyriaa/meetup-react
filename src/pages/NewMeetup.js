import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage(props) {
   // function createMeetup(meetupInfo) {
   // fetch(
   //    "https://react-http-tests-bba86-default-rtdb.firebaseio.com/meetups.json",
   //    {
   //       method: "POST",
   //       body: JSON.stringify(meetupInfo),
   //       headers: {
   //          "Content-type": "application/json",
   //       },
   //    }
   // )
   //    .then((res) => res.json())
   //    .then((res) => {});
   // }

   return (
      <div>
         <h1>New meetup page</h1>
         <NewMeetupForm createMeetup={props.newMeetup} />
      </div>
   );
}

export default NewMeetupsPage;
