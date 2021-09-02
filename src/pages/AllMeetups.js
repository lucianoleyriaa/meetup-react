import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage(props) {
   return (
      <section>
         <h1>All meetups</h1>

         <div>
            <MeetupList meetups={props.meetupList} />
         </div>
      </section>
   );
}

export default AllMeetupsPage;
