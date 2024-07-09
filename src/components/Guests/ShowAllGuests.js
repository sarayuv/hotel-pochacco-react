import React from "react";
import { Link } from "react-router-dom";
import Guest from "./Guest";

const ShowAllGuests = ({ guests, setGuests }) => {
  return (
    <div>
      <h3>Show All Guests</h3>
      {/* display rooms list*/}

      <ul>
        <li className="guest-menu-button">
          <Link to={"../guests"}>Back to Guest Menu</Link>
        </li>
      </ul>
    </div>
  );
};

export default ShowAllGuests;
