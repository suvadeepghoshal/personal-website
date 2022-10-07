import { IDGenerator } from '../../util/idGenerator';

const NavItemApi = (req, res) => {
  if (req.method === 'GET') {
    res.status(200).send([
      { id: IDGenerator(), title: 'HomePage', href: '/' },
      { id: IDGenerator(), title: 'Portfolio', href: '/portfolio' },
      { id: IDGenerator(), title: 'Works', href: '/works' },
      {
        id: IDGenerator(),
        title: 'Source',
        href: 'https://github.com/suvadeepghoshal/personal-website/'
      }
    ]);
  } else {
    res.status(500).send({
      errorCode: 500,
      errorMessage: 'Not a valid method for the API'
    });
  }
};

export default NavItemApi;
