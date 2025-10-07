const cards = [
  {
    title: 'Scénario',
    text: 'Nous créons LE scénario qui mettra le plus en valeur votre lieu sans dénaturer son histoire',
    image: 'experience-1.png',
    alt: 'Scénario image',
  },
  {
    title: 'Artistes',
    text: 'Nous faisons intervenir notre réseau d’artistes et de comédiens pour donner vie au scénario',
    image: 'experience-2.png',
    alt: 'Artistes image',
  },
  {
    title: 'Ambiance',
    text: 'Nous mettons notre touche Lueurs : décors, lumières, sons. Tout est créé et personnalisé pour votre lieu.',
    image: 'experience-3.png',
    alt: 'Ambiance image',
  },
];

const Experiences = ({ hidden }: { hidden?: boolean }) => {
  return (
    <div className="bg-dark h-screen w-full flex flex-col items-center justify-center gap-8">
      <h2
        className={`font-helvetica-regular text-[23px] text-creme z-1 ${hidden ? 'opacity-0' : 'opacity-100'}`}
      >
        Une expérience sur-mesure
      </h2>
      <div
        className={`flex flex-row gap-22 items-center justify-center z-1 ${hidden ? 'opacity-0' : 'opacity-100'}`}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col w-[320px] h-[232px] gap-4 py-4 px-8 rounded-lg card-shadow items-center justify-center bg-dark hover:card-shadow-hover hover:scale-110 transition-all duration-500"
          >
            <img src={card.image} alt={card.title} className="w-auto h-[50%]" />
            <h3 className="font-helvetica-bold text-[1rem] text-creme">
              {card.title}
            </h3>
            <p className="font-helvetica-regular text-[1rem] text-creme text-center">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
