import Link from "next/link";

export default function Cta() {
    return(
        <div className="
        p-4
        lg:p-8
        xl:p-12
        flex
        flex-col
        items-center
        w-[100%]
        min-[768px]:flex-row
        min-[768px]:w-auto
        ">
     
         {/* <Link className="
          min-[768px]:text-2xl
          w-full 
        md:w-auto 
        bg-[#fde1e2]
        text-[#999595] 
        rounded-md 
        py-8
        px-8 
        min-[768px]:py-12
        min-[768px]:px-12
        m-2
        text-center 
        md:m-0 
        md:mr-4 
        hover:bg-[#999595] 
        hover:text-[#fde1e2] 
        focus:outline-none 
        focus:ring-2 
        focus:ring-[#fde1e2]
          " href='/quiz/public/quizzes'>
          Quiz the self
          </Link>*/}
      
        
          <Link className="min-[768px]:text-2xl
          w-full 
          md:w-auto 
          bg-[#fde1e2]
        text-[#999595] 
          rounded-md 
          py-8 
          px-8 
          min-[768px]:py-12
          min-[768px]:px-12
          m-2 
          text-center
          md:m-0 
          hover:bg-[#fde1e2] 
          hover:text-[#999595] 
          focus:outline-none 
          focus:ring-2 
          focus:ring-[#999595]
          " href="/products">
          Quiz Your Team
          </Link>
       
      </div>
    );
};