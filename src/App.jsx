import logo from "./logo.svg";
import "./App.css";
import { init, AuthType } from "@thoughtspot/visual-embed-sdk";
import { Search } from "./Search";
import { Liveboard } from "./Liveboard";

init({
  thoughtSpotHost: "https://try.thoughtspot.cloud",
  authType: AuthType.None,
});

export default function App() {
  return (
    <div className="App">
      <h1> Search </h1>
      <p>movie database</p>
      {/* <h1> Liveboards </h1> */}
      {/* <p>for movie database</p> */}
      <Search />
      {/* <Liveboard /> */}
    </div>
  );
}