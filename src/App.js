import './App.css';
import { Provider } from "./components/ui/provider";
import Header from './views/layout/Header';

function App() {
  return (
    <Provider>
      <Header />
    </Provider>
  );
}

export default App;
 