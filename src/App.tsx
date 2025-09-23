import Navbar from './components/Navbar';
import ScrollButton from './components/ScrollButton';
import Background from './landing-page/Background';
import Experiences from './landing-page/Experiences';
import FoundersWord from './landing-page/FoundersWord';
import Main from './landing-page/Main';
import Questions from './landing-page/Questions';
import { smoothScrollTo } from './utils/animations';
import Comments from './landing-page/Comments';

function App() {
  return (
    <div className="h-screen relative">
      <Navbar />

      <Main />
      <Background />
      <ScrollButton scrollDown={smoothScrollTo} />
      <Experiences />
      <FoundersWord />
      <Comments />
      <Questions />
    </div>
  );
}

export default App;
