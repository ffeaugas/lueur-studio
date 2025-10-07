import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FoundersWord = () => {
  return (
    <div className="flex flex-row items-center justify-center w-full font-helvetica-regular text-creme h-screen bg-dark pl-[15%] pr-[25%] gap-22.5">
      <div className="flex flex-col items-start justify-center w-auto gap-4 z-1">
        <p className="text-[23px]">
          Que vous soyez curieux·se,
          <br />
          rêveur·se ou partenaire en
          <br />
          devenir, vous êtes au bon endroit.
        </p>
        <Button variant="rounded">
          <Link to="/contact">NOUS CONTACTER</Link>
        </Button>
      </div>

      <div className="flex flex-col items-start justify-between gap-20 px-5 py-10 z-1">
        <h2 className="text-[23px]">Le mot de Julia, fondatrice</h2>
        <p className="text-[15px] relative w-[440px]">
          Lueurs Studio est né d&apos;une conviction partagée : le design
          n&apos;est pas réservé aux objets ou aux écrans — il peut aussi
          façonner des émotions, des atmosphères, des souvenirs. Chez nous, il
          s&apos;invite partout, jusque dans l&apos;imaginaire.
          <br />
          <br />
          Ce qui nous unit au sein de l&apos;association, c&apos;est la passion
          commune pour les univers immersifs, enveloppants, parfois un peu
          étranges, toujours profondément sensibles. Cette envie de faire vivre
          des expériences uniques, hors du quotidien, a allumé la toute première
          étincelle de Lueurs en 2022.
          <br />
          <br />
          Ce que nous faisons, nous le faisons avec passion et sincérité. Si
          vous êtes ici, c&apos;est peut-être que vous portez aussi en vous
          cette petite lueur.
          <img
            src="svg/quote.svg"
            alt="ouvrez les guillemets"
            className="absolute top-[-40px] left-[-30px] w-[30px] h-[30px]"
          />
          <img
            src="svg/quote.svg"
            alt="ouvrez les guillemets"
            className="absolute bottom-[-40px] right-[-30px] w-[30px] h-[30px] rotate-180"
          />
        </p>
      </div>
    </div>
  );
};

export default FoundersWord;
