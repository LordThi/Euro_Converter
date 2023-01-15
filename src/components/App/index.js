// == Import
import Header from '../Header';
import Currencies from '../Currencies';

import './styles.css';
import Result from '../Result';

// == Composant
const App = () => (
    <div className="app">
      <Header />
      <Currencies />
      <Result />
    </div>

);

// == Export
export default App;
