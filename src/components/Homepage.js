import { NavLink } from 'react-router-dom';

const Homepage = () => {
    return (
    <div>
          <ul>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/specialization">Specialization</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
    </div>
    );
};

export default Homepage;
