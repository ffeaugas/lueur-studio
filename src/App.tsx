import { Button } from './components/ui/button';
import Background from './landing-page/Background';

function App() {
  return (
    <div className="h-screen relative">
      <div className="flex flex-col gap-4 absolute top-0 left-0 w-full h-full px-15 z-50">
        <h1
          className="font-sprat-light text-[82px] leading-[78px] tracking-[-0.625em] text-creme text-right align-middle pr-[5px]"
          style={{
            letterSpacing: '-10px',
          }}
        >
          RAVIVEUR
          <br />
          D'HISTOIRES
        </h1>
        <Button variant="rounded">DÉCOUVRIR NOS OFFRES</Button>
      </div>

      <Background />
    </div>
  );
}

export default App;
