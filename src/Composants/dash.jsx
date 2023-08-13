import React, {Component} from 'react';
import { Link } from 'react-router';

class HomePage extends Component {
  render() {
    const dispatch = this.props.dispath;
    const { loggedIn } = this.props.data;

    return (
      <article>
        <div>
          <section>
            <h1>BienVenue </h1>
               <div>
                 <Link to="/">Accueil</Link>
               </div>
               <div>
                 <Link to="/login">s'inscrire</Link>
                 <Link to="/register">se connecter</Link>
               </div>
          </section>
        </div>
      </article>
    );
  }
}


export default HomePage;