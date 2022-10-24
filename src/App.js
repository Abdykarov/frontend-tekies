import logo from './logo.svg';
import ParentsTable from "./components/ParentsTable";
function App() {
    const parents = [
        {
            id: "ID_01",
            firstName: "Karel",
            lastName: "Novák"
        },
        {
            id: "ID_02",
            firstName: "Jakub",
            lastName: "Svoboda"
        },
        {
            id: "ID_03",
            firstName: "Anna",
            lastName: "Veselá"
        },
        {
            id: "ID_04",
            firstName: "Karel",
            lastName: "Nový"
        }

    ];
    return (
    <div className="App">
      <ParentsTable parents={parents} />
    </div>
  );
}

export default App;
