import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const schedule = ['Ir ao banco', 'Ir ao correio', 'Estudar', 'Escrever projetos', 'Encontrar o possível segundo amor da minha vida'];

function App() {
  return (
    <div>
      {schedule.map((compromise) => Task(compromise))}
    </div>
  );
}

export default App;
