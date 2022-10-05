import Footer from '../Footer/footer';

const { default: Head } = require('next/head');
const { default: Navbar } = require('../Navbar/navbar');

const Main = ({ children, router }) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta
          name="description"
          content="Suvadeep's homepage"
        />
        <meta
          name="author"
          content="Suvadeep Ghoshal"
        />
        <meta
          name="author"
          content="iamsg"
        />
        <link
          rel="apple-touch-icon"
          href="apple-touch-icon.png"
        />
        <link
          rel="shortcut icon"
          href="/favicon.ico"
          type="image/x-icon"
        />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          property="og:site_name"
          content="Suvadeep Ghoshal"
        />
        <meta
          name="og:title"
          content="Suvadeep Ghoshal"
        />
        <meta
          property="og:type"
          content="website"
        />
        {/* <meta
      property="og:image"
      content="https://www.craftz.dog/card.png"
    /> */}
        <title>Homepage - Suvadeep Ghoshal</title>
      </Head>
      <Navbar path={router.asPath} />
      <div>
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Main;
