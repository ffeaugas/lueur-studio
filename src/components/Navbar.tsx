import { Button } from './ui/button';
import { Link, useLocation } from 'react-router-dom';

const links = [
  {
    label: 'ACCUEIL',
    href: '/',
  },
  {
    label: 'QUI SOMMES-NOUS ?',
    href: '#infos',
    sublinks: [
      {
        label: 'NOTRE HISTOIRE',
        href: '/our-story',
      },
      {
        label: 'NOTRE APPROCHE',
        href: '/our-concept',
      },
    ],
  },
  {
    label: 'NOS ÉVÈNEMENTS',
    href: '/events',
  },
  {
    label: 'NOS OFFRES',
    href: '/offers',
  },
];

const Navbar = () => {
  const location = useLocation();
  const isCurrentPage = (href: string, isSublink: boolean = false) => {
    if (href === '/') {
      return location.pathname === '/';
    }

    if (isSublink) {
      return location.pathname === href;
    }

    const link = links.find(link => link.href === href);
    if (link?.sublinks) {
      return link.sublinks.some(sublink => sublink.href === location.pathname);
    }

    return location.pathname === href;
  };

  return (
    <div className="text-creme px-8 py-4 w-full fixed top-0 left-0 z-100 bg-dark h-[136px] flex flex-row justify-between items-end text-[15px]">
      <Link to="/">
        <img
          src="logo-navbar.png"
          alt="Logo lueur studio"
          className="w-[57px] h-[104px]"
        />
      </Link>
      <div className="flex flex-row gap-5">
        <ul className="flex flex-row gap-1 py-5">
          {links.map(link => (
            <li
              className="flex flex-row items-center gap-2 relative group px-2 cursor-pointer"
              key={link.label}
            >
              {link.sublinks ? (
                <>
                  <span
                    className={`flex items-center gap-1 ${
                      isCurrentPage(link.href)
                        ? 'font-helvetica-italic tracking-[.9px]'
                        : 'font-helvetica-regular'
                    }`}
                  >
                    {link.label}
                  </span>
                  <img
                    src="svg/arrow.svg"
                    className="w-[12px] h-[6px] rotate-180 group-hover:rotate-0 transition-transform duration-300"
                  />
                  <div className="absolute left-0 top-full pt-6 w-full bg-dark text-creme rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-50">
                    <ul className="flex flex-col py-2">
                      {link.sublinks.map(sublink => (
                        <li
                          key={sublink.label}
                          className="hover:bg-gray-800 cursor-pointer"
                        >
                          <Link
                            to={sublink.href}
                            className={`px-4 py-2 flex items-center gap-1 ${
                              isCurrentPage(sublink.href, true)
                                ? 'font-helvetica-italic tracking-[.9px]'
                                : 'font-helvetica-regular'
                            }`}
                          >
                            {sublink.label}
                            <span
                              className="text-creme"
                              style={{
                                opacity: isCurrentPage(sublink.href, true)
                                  ? '1'
                                  : '0',
                              }}
                            >
                              •
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <Link
                  to={link.href}
                  className={`flex items-center gap-1 ${
                    isCurrentPage(link.href)
                      ? 'font-helvetica-italic tracking-[.9px]'
                      : 'font-helvetica-regular'
                  }`}
                >
                  {link.label}
                  <span
                    className="text-creme"
                    style={{
                      opacity: isCurrentPage(link.href) ? '1' : '0',
                    }}
                  >
                    •
                  </span>
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div className="flex flex-row gap-5 items-center">
          <Button variant="purple">
            <Link to="/contact">NOUS CONTACTER</Link>
          </Button>
          <Link to="https://www.instagram.com/lueursstudio/" target="_blank">
            <img
              src="svg/logo-insta-purple.svg"
              alt="instagram"
              className="w-8 h-8"
            />
          </Link>
          <Link
            to="https://www.linkedin.com/company/lueurs-studio/about/"
            target="_blank"
          >
            <img
              src="svg/logo-linkedin-purple.svg"
              alt="linkedin"
              className="w-8 h-8"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
