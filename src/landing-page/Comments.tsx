import { useRef, useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';

const items = [
  {
    id: 1,
    title: 'Alex, La Nuit de la Rose #2',
    content:
      "“Les ambiances sonores étaient vraiment géniales ! Chaque scène avait son identité sonore et cela nous permettait d'être directement dans l'ambiance.”",
  },
  {
    id: 2,
    title: 'Hugo, La Nuit de la Rose #1',
    content: `“Très chouette vos fabrications d’objets, leur réalisme et leur quantité.”`,
  },
  {
    id: 3,
    title: 'Julie, La Nuit de la Rose #2',
    content: `“Tout était smart un peu comme un escape game, j’ai trop aimé !”`,
  },
  {
    id: 4,
    title: 'Pierre, La Nuit de la Rose #1',
    content: `“Un très bel événement unique et original que je recommande désormais sans hésitation!”`,
  },
  {
    id: 5,
    title: 'Marie, La Nuit de la Rose #1',
    content:
      '“J&apos;attendais de rencontrer des nouvelles personnes en partageant une expérience différente et originale. S&apos;extraire un peu de la réalité, mission réussie !”',
  },
  {
    id: 6,
    title: 'Francis, La Nuit de la Rose #1',
    content: `“Une expérience mémorable en plusieurs actes tous très réussis !”`,
  },
  {
    id: 7,
    title: 'Martine, La Nuit de la Rose #2',
    content: `“Moi et ma fille avons adoré !"`,
  },
  {
    id: 8,
    title: 'Romuald, La Nuit de la Rose #1',
    content: `“Merci pour toutes ces surprises !"`,
  },
  {
    id: 9,
    title: 'JB, La Nuit de la Rose #1',
    content:
      '“Lieu hyper impressionnant et immersion au top tout au long de la soirée, bravo à vous et aux acteurs !!”',
  },
  {
    id: 10,
    title: 'Janette, La Nuit de la Rose #1',
    content: `“Que de frayeurs et de plaisir pour moi qui ne soit habituellement pas adepte des escapes games !”`,
  },
];

const Comments = () => {
  const [api, setApi] = useState<CarouselApi>();
  const carouselWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!api || !carouselWrapperRef.current) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        if (e.deltaY > 0) {
          api.scrollNext();
        } else {
          api.scrollPrev();
        }
      } else {
        if (e.deltaX > 0) {
          api.scrollNext();
        } else {
          api.scrollPrev();
        }
      }
    };

    const carouselElement = carouselWrapperRef.current;
    carouselElement.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      carouselElement.removeEventListener('wheel', handleWheel);
    };
  }, [api]);

  return (
    <div className="bg-dark h-screen w-full flex flex-col items-center justify-center gap-16 text-creme">
      <h2 className="font-helvetica-regular text-[22px] z-1">
        Nos visiteurs en parlent mieux que nous
      </h2>
      <div className="flex justify-center w-full z-1">
        <div
          ref={carouselWrapperRef}
          className="w-[90%] max-w-[1400px] mx-auto"
        >
          <Carousel
            className="w-full cursor-grabbing"
            setApi={setApi}
            opts={{
              loop: true,
              dragFree: true,
              slidesToScroll: 1,
              containScroll: 'trimSnaps',
            }}
          >
            <CarouselContent>
              {items.map((item, index) => (
                <CarouselItem
                  key={item.id}
                  className="basis-1/5 flex mx-8 select-none bg-dark rounded-lg"
                >
                  <div className="flex flex-col gap-4 px-6 py-4">
                    <h3 className="font-helvetica-bold text-[15px]">
                      {items[index].title}
                    </h3>
                    <p className="font-helvetica-light text-[12px] text-creme">
                      {items[index].content}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="h-full bg-[#F5F5DC55] border-none" />
            <CarouselNext className="h-full bg-[#F5F5DC55] border-none" />
            <div className="pointer-events-none absolute top-0 left-[-15px] h-full w-[120px] z-20 mask-to-left backdrop-blur-sm" />
            <div className="pointer-events-none absolute top-0 right-[-15px] h-full w-[120px] z-20 mask-to-right backdrop-blur-sm" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Comments;
