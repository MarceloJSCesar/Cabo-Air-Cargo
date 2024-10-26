import './App.css';
import { Provider } from "./components/ui/provider";
import Header from './views/layout/Header';
import ContactUs from './components/ContactUs';


function App() {
  return (
    <Provider>
      <Header />
      <ContactUs />
    </Provider>
  );
}

export default App;
 