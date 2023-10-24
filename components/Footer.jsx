import Link from "next/link";
const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
      <footer className="bg-[#849b9f] p-2 text-center w-[100%]">
        <div className="container mx-auto w-[100%]">
          <div className="flex flex-row justify-evenly mb-2">
            <Link
            href="/tos" 
            className="block px-4 py-2 text-[.7em] text-white hover:bg-gray-100 min-[540px]:text-[1.2em] underline" 
            >Terms of Service</Link>
            <Link
            href="/products" 
            className="block px-4 py-2 text-[.7em] text-white hover:bg-gray-100 min-[540px]:text-[1.2em] underline" 
            >Products</Link>
            <a
             className="block px-4 py-2 text-[.7em] text-white hover:bg-gray-100 min-[540px]:text-[1.2em] underline" 
             target="_blank"
              href="https://advocate-for-rights-and-knowledge-of-americans-arka.ghost.io">
                Blog
              </a>
          </div>
          <div className="flex flex-col justify-between items-center w-full min-[540px]:flex-row">
          <p className="text-[#fde1e2] text-[.6em] ">
            &copy; {currentYear} VillainyTest
          </p>
          <p className="text-[#fde1e2] text-[.7em]">Built with ✊ by&nbsp;<a
          className="text-[#fee084]"
           href="https://topdev.tech/" 
           target="_blank">TopDev_Tech
           </a>
          </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  