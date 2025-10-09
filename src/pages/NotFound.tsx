import BlurredBackground from '@/components/background/BlurredBackground';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const comingSoonText: Record<string, string> = {
  '/offers': 'nos offres',
  '/events': 'nos évènements',
};

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isComingSoon = ['/offers', '/events'].includes(location.pathname);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isComingSoon) {
        navigate('/', { replace: true });
      }
    }, 3500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 w-full h-[100vh] z-0 bg-dark">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 blur-[80px] overflow-hidden pointer-events-none">
          <BlurredBackground />
        </div>
      </div>
      <div className="text-center z-10 flex flex-col items-center gap-4">
        {isComingSoon ? (
          <>
            <img
              src="logo.png"
              alt="Logo lueurs studio"
              className="w-[100px] h-[100px]"
            />
            <p className="text-xl text-gray-300 mb-8 font-helvetica-regular">
              Cette page n'est pas encore disponible.
              <br />
              Contactez-nous pour en savoir plus sur{' '}
              {comingSoonText[location.pathname]}
            </p>
            <div className="flex flex-row gap-4">
              <Button onClick={() => navigate('/')}>RETOUR À L'ACCUEIL</Button>
              <Button onClick={() => navigate('/contact')}>
                NOUS CONTACTER
              </Button>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-6xl font-bold text-white mb-4">404</h1>
            <p className="text-xl text-gray-300 mb-8 font-helvetica-regular">
              Page non trouvée. Redirection vers l'accueil...
            </p>
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
          </>
        )}
      </div>
    </div>
  );
};

export default NotFound;
