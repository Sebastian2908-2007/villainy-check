import Link from "next/link";

export default function Cta() {
    return(
        <div className="p-4 lg:p-8 xl:p-12">
        <button className="
        w-full 
        md:w-auto 
        bg-[#fde1e2]
        text-[#999595] 
        rounded-md 
        py-2 px-4 
        m-2 
        md:m-0 
        md:mr-4 
        hover:bg-[#999595] 
        hover:text-[#fde1e2] 
        focus:outline-none 
        focus:ring-2 
        focus:ring-[#fde1e2]
        ">
          <Link href='/quiz/public/quizzes'>
          Free Quiz
          </Link>
        </button>
        <button className="
        w-full 
        md:w-auto 
        bg-[#999595] 
        text-[#fde1e2] 
        rounded-md 
        py-2 
        px-4 
        m-2 
        md:m-0 
        hover:bg-[#fde1e2] 
        hover:text-[#999595] 
        focus:outline-none 
        focus:ring-2 
        focus:ring-[#999595]
        ">
          <Link href="/products">
          Quiz Others
          </Link>
        </button>
      </div>
    );
};