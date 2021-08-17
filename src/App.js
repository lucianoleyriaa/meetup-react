import {Route, Switch} from 'react-router-dom'
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupsPage from './pages/NewMeetup';
import FavoritesMeetupsPage from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
  return <Layout>
     
     <Switch> {/* Le indica a react que solo uno de los componentes tiene que ser renderizado */}
      <Route path='/' exact>
         <AllMeetupsPage />
      </Route>
      <Route path='/new-meetup'>
            <NewMeetupsPage />
      </Route>
      <route path='/favorites'>
            <FavoritesMeetupsPage />
      </route>
     </Switch>

  </Layout>;
}

export default App;
