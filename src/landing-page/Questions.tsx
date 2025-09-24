import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const questionsContent = [
  {
    id: 1,
    title: <>Qui êtes-vous et que propose Lueurs Studio ?</>,
    content: (
      <>
        Nous sommes un collectif artistique et associatif qui imagine des
        évènements immersifs, sensibles et sensoriels. Notre objectif : faire
        revivre l'histoire de lieux par l'expérience et la poésie.
      </>
    ),
  },
  {
    id: 2,
    title: <>Pourquoi "Lueurs" ?</>,
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li>
          Parce que nous pensons chaque évènement comme une étincelle : un
          moment suspendu qui déclenche des émotions.
        </li>
        <li>
          Parce que nous faisons la lumière sur de vieilles histoires et
          légendes, même les moins connues.
        </li>
      </ul>
    ),
  },
  {
    id: 3,
    title: <>Où se déroulent vos évènements ?</>,
    content: (
      <>
        Pour le moment, nos évènements se déplacent selon les opportunités. Nous
        sommes actuellement en recherche d&apos;un lieu permanent ou d&apos;un
        partenariat pérenne en IdF
      </>
    ),
  },
  {
    id: 4,
    title: <>Quelles genre d&apos;expériences proposez-vous ?</>,
    content: (
      <>
        Nos formats varient : installations immersives, performances
        collaboratives, expériences multisensorielles. (à challenger) Chaque
        édition est unique et co-construite autour d&apos;un thème.
      </>
    ),
  },
  {
    id: 5,
    title: <>Vos évènements sont-ils accessible à tous.tes ?</>,
    content: (
      <>
        Nous faisons au mieux pour garantir une accessibilité maximale. Des
        précisions sont données à chaque évènement.
      </>
    ),
  },
  {
    id: 6,
    title: <>Peut-on privatiser une expérience Lueurs Studio ?</>,
    content: (
      <>
        Oui, nos formats sont modulables. Nous pouvons proposer des formats
        adaptés pour des évènements privés. Ecrivez-nous pour en discuter !
      </>
    ),
  },
  {
    id: 7,
    title: <>Recherchez-vous des partenaires ou des lieux ?</>,
    content: (
      <>
        Oui ! Si vous avez un lieu culturel, insolite, patrimonial ou simplement
        atypique et que vous souhaitiez l&apos;ouvrir à de nouvelles
        expériences, contactez-nous via le formulaire dédié ou par mail !
      </>
    ),
  },
  {
    id: 8,
    title: <>Puis-je devenir bénévole ou membre de l&apos;équipe ?</>,
    content: (
      <>
        Oui, Lueurs Studio fonctionne en grande partie grâce à l&apos;nergie de
        ses bénévoles. Que tu sois dans la com, la logistique, créatif,
        bricoleur, ou juste curieux, on a sûrement besoin de toi.
      </>
    ),
  },
  {
    id: 9,
    title: <>Je suis artiste, puis-je vous proposer une collaboration ?</>,
    content: (
      <>
        Bien sûr, nous sommes toujours ouverts à agrandir notre réseau ! Tu peux
        remplir un formulaire ou nous écrire par mail.
      </>
    ),
  },
];

const Questions = () => {
  return (
    <div className="flex flex-row w-full pl-[15%] pr-[25%] bg-dark h-screen">
      <div className="flex flex-col gap-22 flex-1 z-1">
        <div className="flex flex-col gap-4">
          <h2 className="text-[23px] font-helvetica-regular text-creme">
            Nous répondons à toutes vos
            <br />
            questions
          </h2>
          <div className="flex flex-row gap-2 items-center">
            <h3 className="text-[11px] font-helvetica-regular underline text-creme">
              Nos réponses
            </h3>
            <img
              src="svg/long-arrow.svg"
              alt="flèche vers la droite"
              className="w-[12px] h-[12px]"
            />
          </div>
        </div>
        <img
          src="candle.png"
          alt="bougie"
          className="w-[456px] h-[456px] z-1"
        />
      </div>
      <QuestionsAccordion />
    </div>
  );
};

export default Questions;

const QuestionsAccordion = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="w-full gap-8 flex flex-col flex-1 z-1">
      {questionsContent.map(question => {
        const isOpen = openItem === question.id;

        return (
          <div
            key={question.id}
            className="text-creme font-helvetica-regular border-b border-creme pb-4"
          >
            <motion.button
              onClick={() => toggleItem(question.id)}
              className="text-[15px] flex flex-row justify-between w-full hover:opacity-80 transition-opacity duration-200 cursor-pointer"
              whileHover={{
                letterSpacing: ['0px', '-.2px', '0px'],
                transition: {
                  repeat: Infinity,
                  duration: 2,
                  ease: 'easeInOut',
                },
              }}
            >
              {question.title}
              <motion.img
                src="svg/gray-arrow.svg"
                alt="flèche vers la droite"
                className="w-[24px] h-[24px]"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              />
            </motion.button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="overflow-hidden"
                >
                  <motion.div
                    className="flex flex-col gap-4 text-balance text-[13px] font-helvetica-regular pt-4"
                    initial={{ y: -10 }}
                    animate={{ y: 0 }}
                    exit={{ y: -10 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {question.content}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
