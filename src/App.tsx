import React from "react";
import HeaderContainer from "./headerContainer";
import AllPodcasts from "./AllPodcasts";
import Person from "./Person/Person";
import people from "./Person/info";

const App: React.FC = () => {
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <HeaderContainer />
      <AllPodcasts />
      {people.map((person, i) => {
        return (
          <Person
            key={i}
            name={person.name}
            age={person.age}
            imgUrl={person.imgUrl}
            info={person.info}
            cookingPercentage={person.cookingPercentage}
            codStats={person.codStats}
            hobbies={person.hobbies}
          />
        );
      })}
    </div>
  );
};

export default App;
