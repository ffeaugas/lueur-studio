const Background = () => {
  return (
    <div className="w-full h-full">
      <img
        src="/home-bg-1.png"
        alt="Manoir hanté"
        className="absolute inset-0 w-full h-full object-cover z-[2]"
        style={{ opacity: 1, mixBlendMode: 'multiply' }}
      />
      <img
        src="/home-bg-2.png"
        alt="Manoir hanté"
        className="absolute inset-0 w-full h-full object-cover z-[2]"
        style={{ opacity: 1, mixBlendMode: 'multiply' }}
      />
      <img
        src="/home-bg-3.png"
        alt="Manoir hanté"
        className="absolute inset-0 w-full h-full object-cover z-[2]"
        style={{ opacity: 1, mixBlendMode: 'multiply' }}
      />
      <div
        className="absolute inset-0 w-full h-full pointer-events-none z-[3]"
        aria-hidden="true"
        style={{
          background: `linear-gradient(1deg,rgba(87, 78, 89, .2), rgba(140, 38, 157, .4))`,
        }}
      />
      <div
        className="absolute inset-0 w-full h-full pointer-events-none bg-[#3B253B] opacity-10 z-[4]"
        aria-hidden="true"
      />
    </div>
  );
};

export default Background;
