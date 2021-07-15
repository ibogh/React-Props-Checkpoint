import "./App.css";
import Profile from "./profile/Profile";

function App() {
  let fullName = "Ghliss Ibrahim";
  let bio = 29;
  let profession = "Junior Developer";

  let handleName = (name) => {
    alert(name);
  };

  return (
    <div>
      <Profile name={fullName} age={bio} pro={profession} alrt={handleName} />
    </div>
  );
}

export default App;
