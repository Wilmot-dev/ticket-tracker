import './App.scss';
import Card from './components/Card';
import employees from './data/team';

const App = () => {
  const cardJSX = employees.map(employee => {
    return <Card name={employee.name} role={employee.role} key={employee.id}/>
  });

  return (
    <div className="app">
      <h1>Ticket Tracker</h1>
      <section>
        {cardJSX}
      </section>
    </div>
  );
}

export default App;
