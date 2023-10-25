import Bio from "@/components/Bio";
import Image from "next/image";
import Cta from "@/components/Cta";
import Link from "next/link";
export default function About() {
    return(
        <>
            <section className="
            w-[100%] 
            h-[30vh] 
            min-[540px]:h-[45vh] 
            min-[1024px]:h-[95vh]
            relative
            "
            >
                <Image
               fill={true}
                src='/quiz-2.jpg'
                alt="A moon representing hidden knowledge"
                />
            </section>
            <Cta/>
            <section className="w-[100%]">
            <div className="bg-[#849b9f] py-12 lg:py-24">
  <div className="container mx-auto px-4">
    <div className="text-center">
      <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#fde1e2]">
        Unlock the Secrets Within - Dive into Our Villainy Quizzes!
      </h1>
      <div className="text-xl lg:text-2xl mt-8 text-gray-700">
        Are you ready to embark on an extraordinary journey of self-discovery?
         At "The Arka Journal," we've invested countless hours in meticulous research,
          peeling back the layers of people through the use of our quizzes in order 
          to uncover the hidden truths that 
          can transform your perspective on the way you and others think. <span className="font-bold">Are you a villain?</span>
      </div>
    </div>
  </div>
</div>

<div className="bg-[#999595] py-16 lg:py-32">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap -mx-4">
      <div className="w-full lg:w-1/2 px-4">
        <h2 className="text-3xl xl:text-4xl font-bold text-[#fde1e2] text-center">Unearth the Unseen</h2>
        <p className="text-xl lg:text-2xl mt-4 text-gray-700 dark:text-gray-400 text-center">
          Our Villainy Quizzes are more than just fun games; they're a key to hidden chambers within your soul. We've delved deep into every question, every scenario, and every possible outcome to reveal the truth about your character.
        </p>
      </div>
      <div className="w-full lg:w-1/2 px-4 mt-8 lg:mt-0">
        <h2 className="text-3xl xl:text-4xl font-bold text-[#fde1e2] text-center">Explore the Shadows</h2>
        <p className="text-xl lg:text-2xl mt-4 text-gray-700 dark:text-gray-400 text-center">
          The modern age is riddled with secrets, and we're here to help you decode them. Our quizzes are carefully designed to unveil the dark corners of your personality and provide you with an entirely new perspective on the world's complexities.
        </p>
      </div>
    </div>
    <div className="flex flex-wrap -mx-4 mt-12">
      <div className="w-full lg:w-1/2 px-4">
        <h2 className="text-3xl xl:text-4xl font-bold text-[#fde1e2] text-center">Discover the Power of Knowledge</h2>
        <p className="text-xl lg:text-2xl mt-4 text-gray-700 dark:text-gray-400 text-center">
          What's more enticing than the thrill of knowing? As you journey through our quizzes,
           you'll acquire insights that will empower you to make informed decisions in your 
           daily life, whether it's in relationships,&nbsp;<Link className='text-[#fde1e2] underline' href="/products">career choices</Link>&nbsp;, or understanding the 
           motives of those around you.
        </p>
      </div>
      <div className="w-full lg:w-1/2 px-4 mt-8 lg:mt-0">
        <h2 className="text-3xl xl:text-4xl font-bold text-[#fde1e2] text-center">Start Your Quest</h2>
        <p className="text-xl lg:text-2xl mt-4 text-gray-700 dark:text-gray-400 text-center">
          The time is now. Are you ready to embark on a voyage that could change your life forever?
           Take our Villainy Quizzes and uncover what's hidden beneath the surface.
            The adventure of a lifetime awaits you, and
           &nbsp;<Link className='text-[#fde1e2] underline' href="quiz/public/quizzes">"Our Quizzes"</Link>&nbsp;are your guide to a world of knowledge.
        </p>
      </div>
    </div>
  </div>
</div>

<div className="container mx-auto bg-[#849b9f] px-4 py-12 lg:py-24">
  <div className="text-center">
    <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#fde1e2]">
      So, why wait? Start your journey today and embrace the power of knowing. The hidden truths of your character and the world are just a few clicks away. Your transformation begins now! 
    </h1>
  </div>
</div>

            </section>
            <Bio/>
        </>
    )
};