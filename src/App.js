import { useEffect, useState } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([monsters]);
  console.log("render");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const searchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };
  useEffect(() => {
    const tempfilteredMonsters = monsters.filter((monst) => {
      return monst.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(tempfilteredMonsters);
  }, [monsters, searchField]);

  return (
    <div className="App">
      <h1 className="title">Monsters Library</h1>
      <SearchBox
        className={"search-box"}
        onChangeHandler={searchChange}
        placeholder={"search monsters"}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }
//   searchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };
//   render() {
//     const { monsters, searchField } = this.state;
//     const { searchChange } = this;
//     const filteredMonsters = monsters.filter((monst) => {
//       return monst.name.toLowerCase().includes(searchField);
//     });
//     return (
//       <div className="App">
//         <h1 className="title">Monsters Library</h1>
//         <SearchBox
//           className={"search-box"}
//           onChangeHandler={searchChange}
//           placeholder={"search monsters"}
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

// export default App;
