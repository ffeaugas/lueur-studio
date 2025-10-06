import { Button } from '@/components/ui/button';
import BlurredBackground from '@/components/background/BlurredBackground';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import Footer from '@/components/Footer';
import Inner from '@/Inner';
import StarsBackground from '@/components/background/StarsBackground';

interface ConceptCardProps {
  card: {
    title: string;
    description: string;
  };
}

const conceptCards = [
  {
    title: 'Créer',
    description: 'Nous créons des évênements sur mesure',
  },
  {
    title: 'Valoriser',
    description: "une expérience insolite pour s'évader",
  },
  {
    title: 'Partager',
    description: 'Une expérience qui rapproche',
  },
];

interface RevealCardProps {
  name: string;
  src: string;
  alt: string;
  description: React.ReactNode;
}

const revealCards: RevealCardProps[] = [
  {
    name: 'Livio',
    src: 'livio.png',
    alt: 'Photo de Livio',
    description: (
      <>
        Livio est un comédien passionné par l&apos;immersion et
        l&apos;interaction directe avec le public. Il a beaucoup travaillé dans
        des expériences mêlant jeu de rôle grandeur nature, escape game et
        improvisation, avec parfois une dimension pédagogique. Il a également
        incarné des personnages historiques dans “Le trésors des Templiers”,
        “Apaches de Paris” ou encore “Sleepy Hallow” de Sculpteurs de Rêves.
        <br />
        <br />
        Au château de Blandy-les-Tours, par exemple, son rôle consistait à faire
        revivre des temps forts de la Guerre de Cent Ans a des participants
        plongés dans une faille spatio-temporelle.
      </>
    ),
  },
  {
    name: 'Claire',
    src: 'claire.png',
    alt: 'Photo de Claire',
    description: (
      <>
        Claire travaille dans le Théâtre immersif depuis plusieurs années,
        mettant à profit ses qualités d&apos;improvisatrice et de conteuse dans
        des créations historiques telles que “Résistants”, “Apaches de Paris” ou
        “Mission 1328” au Château de Blandy-les-Tours.
        <br />
        <br />
        Elle fait aussi du cinéma (« La Commanderie »), de la comédie musicale
        (« Bonne Nuit les Petits ») et du doublage (Dan Da Dan, Starfield)
      </>
    ),
  },
];

const OurConcept = () => {
  return (
    <Inner>
      <div className="min-h-screen relative bg-background">
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
            UNE EXPÉRIENCE PENSÉE
            <br />
            POUR VOUS
          </h1>
          <div className="flex flex-col justify-between w-full">
            <div className="flex flex-row gap-40 justify-center w-full">
              <FloatingCard card={conceptCards[0]} />
              <FloatingCard card={conceptCards[2]} />
            </div>
            <div className="flex flex-row justify-center w-full mt-10">
              <FloatingCard card={conceptCards[1]} />
            </div>
          </div>
          <VideoTextCarousel />
          <img
            src="svg/our-story-stars.svg"
            alt="Étoiles"
            className="w-[80px] h-[55px]"
          />
          <RevealCardSection />
          <Footer />
        </div>
      </div>
    </Inner>
  );
};

export default OurConcept;

const FloatingCard = ({ card }: ConceptCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="mx-40">
      <motion.div
        className={`
          p-5 rounded-md flex flex-col gap-3
          bg-transparent cursor-pointer text-center w-100
          `}
        initial={{
          backgroundColor: 'rgba(255, 255, 255, 0)',
          // borderColor: 'transparent',
        }}
        whileHover={{
          backgroundColor: 'rgba(255, 255, 255, 0.10)',
          // borderColor: '#fffbd7',
          boxShadow:
            '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        }}
        transition={{
          backgroundColor: { duration: 0.5, delay: 0.5, ease: 'easeInOut' },
          boxShadow: { duration: 0.5, ease: 'easeInOut' },
          // borderColor: { duration: 0.5, delay: 0.5, ease: 'easeInOut' },
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.h2
          className="font-sprat-light"
          style={{
            lineHeight: '93px',
            letterSpacing: '-0.06em',
            fontSize: '32px',
          }}
          animate={isHovered ? { scale: 3 } : { scale: 1 }}
          transition={{
            duration: 0.7,
            ease: 'easeOut',
          }}
        >
          {card.title}
        </motion.h2>

        <motion.p
          className="text-center text-[14px] font-helvetica-italic"
          initial={{ opacity: 0 }}
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            duration: 0.6,
            delay: isHovered ? 0.5 : 0,
            ease: 'easeOut',
          }}
        >
          {card.description}
        </motion.p>
      </motion.div>
    </div>
  );
};

const VideoTextCarousel = () => {
  return (
    <div className="flex flex-col gap-16 justify-center items-center">
      <img
        src="svg/our-story-moon.svg"
        alt="Lune"
        className="w-[45px] h-[40px]"
      />
      <h2 className="font-sprat-regular text-[24px]">
        UNE MÉTHODOLOGIE SUR MESURE
      </h2>
      <span className="relative flex">
        <span className="w-[869px] h-[338px] bg-black z-1 rounded-md" />
        <div className="absolute inset-0 h-[338px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[200px] bg-dark-purple z-0" />
      </span>
      <div className="flex flex-col gap-8 font-helvetica-regular w-full text-center">
        <p className="text-[24px]">
          Nous réalisons un premier entretien individuel pour
          <br />
          prendre connaissance du lieu et de son histoire.
        </p>
        <p className="text-[16px] opacity-50">
          Nous faisons des recherches
          <br />
          approfondies dans les livres et autres
          <br />
          documents mis à disposition.
        </p>
      </div>
      <Button>NOS OFFRES</Button>
    </div>
  );
};

const RevealCardSection = () => {
  return (
    <div className="flex flex-col gap-20 text-center mb-[200px]">
      <h2 className="font-sprat-regular text-[24px]">
        DES COMÉDIENS QUI N&apos;ATTENDENT
        <br />
        PLUS QUE VOTRE HISTOIRE
      </h2>
      <div className="flex flex-row gap-20">
        {revealCards.map(card => (
          <RevealCard key={card.name} {...card} />
        ))}
      </div>
    </div>
  );
};

const RevealCard = ({ name, src, alt, description }: RevealCardProps) => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="relative">
      <img src={src} alt={alt} className="w-[474px] h-[511px]" />
      <motion.div
        className="absolute bottom-[10%] left-1/2 -translate-x-1/2 flex justify-center w-full"
        animate={isRevealed ? { opacity: 0 } : { opacity: 1 }}
        transition={{
          duration: 0.7,
          delay: 0.5,
          ease: 'easeInOut',
        }}
      >
        <Button variant="discover" onClick={() => setIsRevealed(true)}>
          <p>DÉCOUVREZ {name.toUpperCase()}</p>
          <img
            src="svg/left-arrow-circle.svg"
            alt="Arrow right"
            className="w-[16px] h-[16px]"
          />
        </Button>
      </motion.div>
      <AnimatePresence>
        {isRevealed && (
          <>
            <motion.div
              className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md w-[80%] h-[80%] z-10 pointer-events-none bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.4,
                ease: 'easeInOut',
              }}
              style={{
                backdropFilter: 'blur(2px)',
                WebkitBackdropFilter: 'blur(2px)',
                background: 'rgba(0,0,0,0.28)',
              }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center font-helvetica-regular text-[14px] text-white p-15 rounded-md w-[80%] h-[80%] z-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{
                duration: 0.6,
                ease: 'easeInOut',
                delay: 0.3,
              }}
            >
              <p>{description}</p>
              <br />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
