import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className="flex flex-col gap-40 absolute top-0 left-0 w-full h-screen px-15 z-10 pt-[15%]">
      <div className="flex flex-col gap-4 w-full items-end">
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
        <Button variant="rounded" className="self-end">
          <Link to="/offers">DÉCOUVRIR NOS OFFRES</Link>
        </Button>
      </div>

      <div className="flex flex-col gap-2 w-full items-center">
        <h2 className="font-sprat-light text-[40px] text-creme">
          ET SI NOUS SURPRENIONS VOS VISITEURS ?
        </h2>
        <img
          src="icon-castle.png"
          alt="chateau"
          className="w-[114px] h-[114px]"
        />
      </div>
    </div>
  );
};

export default Main;
