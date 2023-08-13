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
            <h1>Bienvenido a Invbox </h1>
               <div>
                 <Link to="/">Home</Link>
               </div>
               <div>
                 <Link to="/login">Ingresar</Link>
                 <Link to="/register">Registrate</Link>
               </div>
          </section>
        </div>
      </article>
    );
  }
}


export default HomePage;