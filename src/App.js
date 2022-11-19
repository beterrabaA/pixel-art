import './App.css';
import MyProvider from './context/MyProvider';
import Header from './components/Header';
import Pallete from './components/Pallete';
import Table from './components/Table';
import Options from './components/Options';

function App() {
  return (
    <MyProvider>
      <Header />
      <Pallete />
      <Options />
      <Table />
    </MyProvider>
  );
}

export default App;
