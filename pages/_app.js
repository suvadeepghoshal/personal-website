import Main from '../components/layout/main';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
  return (
    <Main router={router}>
      <Component
        {...pageProps}
        key={router.route}
      />
    </Main>
  );
}

export default MyApp;
