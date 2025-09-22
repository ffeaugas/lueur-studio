import Navbar from './components/Navbar';
import ScrollButton from './components/ScrollButton';
import Background from './landing-page/Background';
import Experiences from './landing-page/Experiences';
import Main from './landing-page/Main';
import { smoothScrollTo } from './utils/animations';

function App() {
  return (
    <div className="h-screen relative">
      <Navbar />

      <Main />
      <Background />
      <ScrollButton scrollDown={smoothScrollTo} />
      <Experiences />
    </div>
  );
}

export default App;
