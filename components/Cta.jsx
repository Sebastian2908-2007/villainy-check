import Link from "next/link";

export default function Cta() {
    return(
        <div className="
        p-4
        lg:p-8
        xl:p-12
        ">
        <button className="
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
        md:m-0 
        md:mr-4 
        hover:bg-[#999595] 
        hover:text-[#fde1e2] 
        focus:outline-none 
        focus:ring-2 
        focus:ring-[#fde1e2]
        ">
          <Link className="min-[768px]:text-2xl" href='/quiz/public/quizzes'>
          Quiz the self
          </Link>
        </button>
        <button className="
        w-full 
        md:w-auto 
        bg-[#999595] 
        text-[#fde1e2] 
        rounded-md 
        py-8 
        px-8 
        min-[768px]:py-12
        min-[768px]:px-12
        m-2 
        md:m-0 
        hover:bg-[#fde1e2] 
        hover:text-[#999595] 
        focus:outline-none 
        focus:ring-2 
        focus:ring-[#999595]
        ">
          <Link className="min-[768px]:text-2xl" href="/products">
          Quiz Others
          </Link>
        </button>
      </div>
    );
};