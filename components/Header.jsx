import Image from 'next/image';
import Link from 'next/link';
import Dropdown from './Dropdown';
const Header = () => {
  return (
    <header className="bg-[#999595]">
      <div className="container mx-auto flex justify-between items-center">
        <div className='
        relative 
        h-[15vh] 
        w-[40%] 
        min-[360px]:w-[30%] 
        min-[540px]:w-[20%] 
        min-[1024px]:w-[10%]

        '>
          <Link href="/">
        <Image
        fill={true}
         src='/newest-logo-two.png'
         alt='company logo looks like compass star'
         />
         </Link>
        </div>
      <Dropdown/>
       
        
      </div>
    </header>
  );
};

export default Header;