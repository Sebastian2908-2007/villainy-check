const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
      <footer className="bg-[#849b9f] p-4 text-center">
        <div className="container mx-auto">
          <p className="text-[#fde1e2]">
            &copy; {currentYear} VillainyTest
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  