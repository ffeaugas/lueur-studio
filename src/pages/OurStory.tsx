import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import BlurredBackground from '@/components/background/BlurredBackground';
import Inner from '@/Inner';
import StarsBackground from '@/components/background/StarsBackground';

const OurStory = () => {
  return (
    <Inner>
      <div className="h-screen relative bg-background">
        <div className="fixed inset-0 w-full h-full z-0 bg-dark">
          <div className="absolute inset-0 w-full h-full blur-[80px]">
            <BlurredBackground />
          </div>
          <div className="absolute inset-0 w-full h-full z-2 pointer-events-none">
            <StarsBackground amount={15} />
          </div>
        </div>
        <div className="absolute w-full h-full flex flex-col gap-20 items-center font-sprat-regular text-creme z-1 mt-[200px]">
          <h1 className="text-[80px] text-center p-4">
            PARTEZ À LA RENCONTRE
            <br />
            DES MEMBRES
            <br />
            DE LUEURS STUDIO
          </h1>

          <div className="flex flex-row gap-28">
            <img
              src="our-story.png"
              alt="Photo de l'équipe Lueurs Studio"
              className="w-[390px] h-[390px]"
            />
            <div className="flex flex-col w-[420px] gap-4">
              <img
                src="svg/our-story-stars.svg"
                alt="Petites étoiles"
                className="w-[80px] h-[55px] self-center"
              />
              <p className="font-helvetica-regular text-[16px]">
                Lueurs Studio est une association créée par 5 passionnés
                d&apos;histoire. Le but ? Réveiller l&apos;histoire oubliée de
                lieux pour préserver et mettre en lumière le patrimoine
                français.
                <br />
                <br />
                Notre mission ? Faire découvrir des lieux historiques à 2h de
                Paris pour en raconter l&apos;histoire au travers d&apos;un
                scénario d&apos;aventure.
                <br />
                <br />
                Forte de 2 expériences réussies au Château de Bellefille,
                l&apos;association Lueurs Studio s&apos;investit depuis plus
                d&apos;un an pour proposer des visites immersive aux passionnés
                comme aux plus novices.
              </p>
              <div className="mt-4">
                <Button>NOS OFFRES</Button>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-28 mb-[200px]">
            <div className="flex flex-col w-[350px] gap-8">
              <h2 className="text-[24px]">
                UNE EXPÉRIENCE
                <br />
                IMMERSIVE ÉPHÉMÈRE
                <br />
                DIFFÉRENCIANTE POUR
                <br />
                RÉVÉLER VOTRE LIEU ET
                <br />
                SON HISTOIRE
              </h2>
              <p className="font-helvetica-regular text-[16px]">
                Lueurs promet une visite augmentée par rapport à une visite
                classique, grâce à l&apos;immersion dans une ambiance
                différente.
                <br />
                <br />
                Un moyen unique de donner de la visibilité au lieu et de
                bénéficier d&apos;une expérience clé en main et personnalisée.
              </p>
              <div>
                <Button>NOS EXPÉRIENCES</Button>
              </div>
            </div>
            <img
              src="our-story-2.png"
              alt="Photo de l'équipe Lueurs Studio dans la pénombre"
              className="w-[586px] h-[442px]"
            />
          </div>
          <Footer />
        </div>
      </div>
    </Inner>
  );
};

export default OurStory;
