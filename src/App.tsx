import React from "react";
import HeaderContainer from "./headerContainer";
import AllPodcasts from "./AllPodcasts";
const App: React.FC = () => {
  return (
    <div className="App">
      <HeaderContainer />
      <AllPodcasts />
    </div>
  );
};

export default App;
