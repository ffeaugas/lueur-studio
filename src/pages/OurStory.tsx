import BlurredBackground from '@/landing-page/BlurredBackground';

const OurStory = () => {
  return (
    <>
      <div className="h-screen relative bg-background">
        <div className="fixed inset-0 w-full h-full z-0 bg-[#121117]">
          <div className="absolute inset-0 w-full h-full blur-[80px]">
            <BlurredBackground />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-20 items-center font-sprat-regular text-creme z-10">
        <h1 className="text-[40px]">
          partez à la rencontre
          <br />
          des membres
          <br />
          de lueurs studio
        </h1>
      </div>
    </>
  );
};

export default OurStory;
