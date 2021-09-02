import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetup";
import FavoritesMeetupsPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

const DUMMY_DATA = [
   {
      id: "m1",
      title: "This is a first meetup",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
      address: "Meetupstreet 5, 12345 Meetup City",
      description:
         "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
   },
   {
      id: "m2",
      title: "This is a second meetup",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
      address: "Meetupstreet 5, 12345 Meetup City",
      description:
         "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
   },
];

function App() {
   const [meetups, setNewMeetup] = useState(DUMMY_DATA);

   const addMeetup = (newMeetup) => {
      setNewMeetup((lastState) => {
         return [newMeetup, ...lastState];
      });
   };

   return (
      <Layout>
         <Switch>
            <Route path="/" exact>
               <AllMeetupsPage meetupList={meetups} />
            </Route>
            <Route path="/new-meetup">
               <NewMeetupsPage newMeetup={addMeetup} />
            </Route>
            <Route path="/favorites">
               <FavoritesMeetupsPage />
            </Route>
         </Switch>
      </Layout>
   );
}

export default App;
