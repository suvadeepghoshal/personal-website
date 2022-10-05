const Section = ({ children, title }) => {
  const currentTitle = `${title} - Suvadeep Ghoshal`;
  return (
    <>
      {title && (
        <Head>
          <title>{currentTitle}</title>
        </Head>
      )}
      {children}
    </>
  );
};

export default Section;
