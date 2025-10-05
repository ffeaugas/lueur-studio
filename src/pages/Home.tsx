import ScrollButton from '../components/ScrollButton';
import Experiences from '../landing-page/Experiences';
import FoundersWord from '../landing-page/FoundersWord';
import Main from '../landing-page/Main';
import Questions from '../landing-page/Questions';
import { smoothScrollTo } from '../utils/animations';
import Comments from '../landing-page/Comments';
import Footer from '../components/Footer';
import ScrollBackgroundTransition from '../components/background/ScrollBackgroundTransition';

function Home() {
  return (
    <div className="h-screen relative bg-background">
      <Main />
      <ScrollBackgroundTransition />
      <ScrollButton scrollDown={smoothScrollTo} />
      <div className="bg-dark h-screen w-full" />
      <Experiences />
      <FoundersWord />
      <Comments />
      <Questions />
      <Footer />
    </div>
  );
}

export default Home;
