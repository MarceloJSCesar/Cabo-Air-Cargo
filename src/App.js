import './App.css';
import { Provider } from "./components/ui/provider";
import Header from './views/layout/Header';
import ContactUs from './components/ContactUs';

import HowItWorks from './pages/HowItWorks/HowItWorks';

function App() {
  return (
    <Provider>
      <Header />
     
      
      <HowItWorks />

      <ContactUs />
    </Provider>
  );
}

export default App;
 