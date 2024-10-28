import './App.css';
import { Provider } from "./components/ui/provider";
import Header from './views/layout/Header';
import HowItWorks from './views/sections/HowItWorks/HowItWorks';
import ContactUs from './components/ContactUs'; // Keep the import from feat-CU-8696a0258

function App() {
  return (
    <Provider>
      <Header />
      <HowItWorks />
      <ContactUs /> {/* Keep the ContactUs component from feat-CU-8696a0258 */}
    </Provider>
  );
}

export default App;
