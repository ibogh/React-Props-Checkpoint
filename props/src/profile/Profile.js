import React from "react";
import PropTypes from "prop-types";
function Profile({
  name = "Name Here",
  age = "Age Here",
  pro = "Profession Here",
  alrt,
}) {
  const styleObject = {
    textAlign: "center",
    fontSize: "60px",
    background: "gray",
    color: "cyan",
    paddingTop: "0px",
  };
  return (
    <div style={styleObject}>
      <p>
        Hey there!!! My name is {name}, a {age} years old, and i'm a {pro} .
      </p>
      {alrt(name)}
      <div>
        <img
          src="https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-9/151461667_1732530363594826_4841572813358065331_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=KKDQy1IDEWUAX8bWl5d&tn=RdSxy1agTGWcfabv&_nc_ht=scontent.ftun1-2.fna&oh=dd5bbbf33458789834e1604b029ccd7d&oe=60F57B48"
          alt="image"
        />
      </div>
    </div>
  );
}
Profile.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  pro: PropTypes.string,
};
export default Profile;
