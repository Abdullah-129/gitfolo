import config from '../src/gitprofile.config';
import GitProfile from './Components/GitProfile';

function App() {
  return <GitProfile config={config} />;
}

export default App;
