import { Header } from "./components/header/header.component";
import { Main } from "./components/main/main.component";
import { Template } from "./components/template/template.component";
import { GoalsAndTasks } from "./components/texts/goalsAndTasks.component";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Template title={`Цели и задачи, научные партнёры`}>
        <GoalsAndTasks />
      </Template>
    </div>
  );
}

export default App;
