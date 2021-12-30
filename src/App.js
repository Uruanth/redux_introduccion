import './App.css';
import { Provider, connect } from 'react-redux';
import { store } from './config/store'
import CounterAction from './actions/counter'



const CounterComponent = ({counter, incrementarContador, decrementarContador }) => (
  <header className="App-header">
    <div>{counter.count}</div>
    <button onClick={()=>incrementarContador()}>Incrementar</button>
    <button onClick={()=>decrementarContador()}>Decrementar</button>
</header>
)


const mapStateToProps = ({counter}) => ({counter})

const mapDispatchToProps = () =>({
  ...CounterAction,
})

const ConnectedCounterComponent = connect(mapStateToProps, mapDispatchToProps())(CounterComponent);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
       <ConnectedCounterComponent />
      </div>
    </Provider>
  );
}

export default App;
