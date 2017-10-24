import React from 'react';
import { Link, Route } from "react-router-dom";
import "./index.css"

const Category = ({match}) => {
  return (
      <div>
        <ul className="u-ul">
          <li>
            <Link to={`${match.url}/shoes`}>shoes</Link>
          </li>
          <li>
            <Link to={`${match.url}/boots`}>boots</Link>
          </li>
          <li>
            <Link to={`${match.url}/footwear`}>footwear</Link>
          </li>
        </ul>
        
        <Route
            path={`${match.path}/:name`}
            render={({match}) => (
                <div>
                  <h3>{match.params.name}</h3>
                </div>
            )}
        />
      </div>
  )
}

export default Category;
