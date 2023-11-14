const Footer = () => {
  return (
    <div className="flex items-center justify-between sticky top-[100vh] pt-8 pb-4 lg:pt-24">
      <div>
        <h1 className="font-semibold text-md">Made with love by</h1>
      </div>
      <div>
        <a
          className="font-semibold text-md"
          href="https://javaid-khan.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Javaid Khan
        </a>
      </div>
    </div>
  );
};

export default Footer;
