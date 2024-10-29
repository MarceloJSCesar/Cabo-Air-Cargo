import './App.css';
import { Provider } from "./components/ui/provider";
import Header from './views/layout/Header';
import HowItWorks from './views/sections/HowItWorks/HowItWorks';

function App() {
  return (
    <Provider>
      <Header />
      <HowItWorks />
    </Provider>
  );
}

export default App;
 