import { Button } from './ui/button';

const links = [
  {
    label: 'ACCUEIL',
    href: '/',
  },
  {
    label: 'QUI SOMMES-NOUS ?',
    href: '/',
    sublinks: [
      {
        label: 'NOTRE HISTOIRE',
        href: '/',
      },
      {
        label: 'NOTRE APPROCHE',
        href: '/',
      },
    ],
  },
  {
    label: 'NOS ÉVÈNEMENTS',
    href: '/',
  },
  {
    label: 'NOS OFFRES',
    href: '/',
  },
];

const Navbar = () => {
  return (
    <div className="text-creme font-helvetica-regular px-8 py-4 w-full fixed top-0 left-0 z-100 bg-dark h-[136px] flex flex-row justify-between items-end text-[15px]">
      <img
        src="logo-navbar.png"
        alt="Logo lueur studio"
        className="w-[57px] h-[104px]"
      />
      <div className="flex flex-row gap-5">
        <ul className="flex flex-row gap-1 py-5">
          {links.map(link => (
            <li
              className={`flex flex-row items-center gap-2 relative group px-2 cursor-pointer`}
              key={link.label}
            >
              {link.label}
              {link.sublinks && (
                <>
                  <img
                    src="svg/arrow.svg"
                    className="w-[12px] h-[6px] rotate-180 group-hover:rotate-0 transition-transform duration-300"
                  />
                  <div className="absolute left-0 top-full pt-8 w-full bg-dark text-creme rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-50">
                    <ul className="flex flex-col py-2">
                      {link.sublinks.map(sublink => (
                        <li
                          key={sublink.label}
                          className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
                        >
                          {sublink.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
        <div className="flex flex-row gap-5 items-center">
          <Button variant="purple">NOUS CONTACTER</Button>
          <Button variant="socials">
            <img src="logo-instagram.png" alt="instagram" className="w-8 h-8" />
          </Button>
          <Button variant="socials">
            <img src="logo-linkedin.png" alt="linkedin" className="w-8 h-8" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
