/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */

import { Link } from "react-router-dom"

const Navigations = ({playerID}) => {
    
    
    return (
        <nav>
            <Link to='/'>Puppy List</Link>
            {
                playerID ? (
                    <span>
                        {/* <Link to="/player/:id">Single Player</Link> */}
                    </span>
                
                ) : (
                    
                    <span>
                        {/* <Link to="/player/:id">Single Player</Link> */}
                    </span>
                )
            }
        </nav>
    )
}

export default Navigations