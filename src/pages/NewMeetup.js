import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage() {
   function createMeetup(meetupInfo) {
      fetch('https://react-http-tests-bba86-default-rtdb.firebaseio.com/meetups.json', {
         method: 'POST',
         body: JSON.stringify(meetupInfo),
         headers: {
            'Content-type': 'application/json'
         }
      }).then(res => res.json()).then(res => console.log(res))
   }

   return (
      <div>
         <h1>New meetup page</h1>
         <NewMeetupForm createMeetup={createMeetup}/>
      </div>
   )
}

export default NewMeetupsPage;