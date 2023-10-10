const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
      <footer className="bg-blue-200 p-4 text-center">
        <div className="container mx-auto">
          <p className="text-blue-800">
            &copy; {currentYear} VillainyTest
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  