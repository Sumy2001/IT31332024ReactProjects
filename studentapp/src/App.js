import './App.css';
import {students} from './data/StudentsDb';
import StudentTable from './components/StudentTable';

function App() {
  return (
    <div className="App">
     <h1> Students Information Portal </h1>
     <hr/>
     <table>
      <tbody>
        <tr>
          <td>
            <StudentTable students={students}/>
          </td>
        </tr>
      </tbody>
     </table>
    </div>
  );
}

export default App;
