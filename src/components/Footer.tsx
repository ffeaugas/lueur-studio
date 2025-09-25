const Footer = () => {
  return (
    <div className="w-full bg-black text-creme flex flex-col gap-16 py-16 px-37.5 relative z-10">
      <div className="flex flex-row gap-16">
        <div className="flex flex-col gap-3 text-[15px]">
          <h4 className="font-helvetica-bold text-[15px]">À propos</h4>
          <ul className="flex flex-col gap-2 font-helvetica-regular underline">
            <li>Qui sommes-nous ?</li>
            <li>Nos évènements</li>
            <li>Nos offres</li>
          </ul>
        </div>

        <div className="flex flex-col gap-3 text-[15px]">
          <h4 className="font-helvetica-bold text-[15px]">Nous contacter</h4>
          <ul className="flex flex-col gap-2 font-helvetica-regular">
            <li>lueurs.studio@gmail.com</li>
            <li>0673667975</li>
          </ul>
        </div>

        <div className="flex flex-col gap-3 text-[15px]">
          <h4 className="font-helvetica-bold text-[15px]">
            Suivez nos aventures
          </h4>
          <p>
            Découvrez en exclusivité nos
            <br />
            prochaines créations.
          </p>
          <div className="flex flex-row gap-6 p-1.5">
            <img
              src="svg/logo-linkedin.svg"
              alt="linkedin"
              className="w-[36px] h-[36px]"
            />
            <img
              src="svg/logo-insta.svg"
              alt="instagram"
              className="w-[36px] h-[36px]"
            />
          </div>
        </div>
      </div>

      <p className="text-center font-helvetica-light text-[12px]">
        © 2025 Tous droits réservés
        <br />
        Design par Lueurs Studio
      </p>
    </div>
  );
};

export default Footer;
