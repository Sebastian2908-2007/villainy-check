import Cta from "@/components/Cta";
import Image from "next/image";
import React from 'react';
import Link from "next/link";

export default function Page() {
  return (
    <>
     <section className="
            w-full 
            h-[35vh] 
            min-[540px]:h-[55vh] 
            min-[1024px]:h-[75vh]
            relative
            "
            >
                <Image
               fill={true}
                src='/new-home-hero.jpg'
                alt="A formidable lighthouse representing truth in darkness"
                />
            </section>
  <Cta/>
    <div className="mx-4 md:mx-16 lg:mx-24 xl:mx-52 2xl:mx-96">
      <h1 className="
      text-4xl 
      font-semibold 
      p-2 
      mt-4 
      mb-8 
      md:mt-8 
      text-center 
      text-[#fde1e2]
      bg-[#849b9f]
      "
      >
        "When Morality Becomes Toxic, We're Here to Point It Out. We test for villainy"
      </h1>

      <section className="mb-12">
        <h2 className="
        text-2xl 
        text-center
        font-semibold 
        mb-4
        p-2
        text-[#fde1e2]
        bg-[#999595]
        ">
          Individualism: The Morality of Aspiration
        </h2>
        <div className="
        w-full
        h-[30vh]
        min-[540px]:h-[45vh]
        min-[1024px]:h-[60vh] 
        min-[1366px]:h-[65vh] 
        relative 
        mb-8">
                <Image
               fill={true}
                src='/aspiration.jpg'
                alt="A guy looking at a high peak while the sun rise"
                />
            </div>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
          This aspect of morality focuses on personal aspiration. It's based on the idea that
          individuals naturally seek to improve their circumstances. 
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        In this view, any action 
          that leads to better circumstances is considered "good," while actions moving away from
          improvement are labeled as "bad." 
          It's all about pursuing the Good Life, excellence, and realizing one's full potential.
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
          The morality of aspiration starts with the idea that humans should strive for their best.
          For instance, when someone encourages another to eat healthily or when
          someone takes on a challenging book, they are driven by a desire for self-improvement.
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
          Not aspiring to be better is seen as a personal shortcoming, not a moral failing.
          Failing to achieve one's potential isn't a crime, as no law can force someone to
          reach their full potential. The morality of aspiration encourages people to better
          themselves and follow their interests but doesn't dictate
          what the "Good Life" means  that's a journey of individual discovery.
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
          From a psychological standpoint, this morality teaches us to resist excessive shame. 
          Shame, as a social tool, helps guide acceptable behavior among social animals. 
          It's a way to learn how to coexist with others. 
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        A well-rounded person must show both 
          resilience to shame "individualism" and some sensitivity to it "collectivism". The interplay between 
          these aspects of shame becomes more important when discussing ethical extremes.
        </p>
        <h3 className="text-xl text-white p-2 font-semibold mb-4 bg-[#849b9f] min-[540px]:p-4">So Where Does It Go Wrong?</h3>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
          Simply put, some folks are too resistant to shame, to the extent that they may easily
           infringe on others to succeed. &nbsp;
          <span className="font-semibold"><Link className='text-[#849b9f] underline' href="quiz/public/quizzes">We can identify individuals with this type of villainy.</Link></span>
        </p>
      </section>

      <section>
        <h2 className="
        text-2xl
        text-center 
        font-semibold 
        mb-4
        p-2
        text-[#fde1e2]
        bg-[#999595]
        "
        >Collectivism: The Morality of Duty</h2>
        <div className="
        w-full 
        h-[30vh] 
        min-[540px]:h-[45vh] 
        min-[1024px]:h-[60vh] 
        min-[1366px]:h-[65vh] 
        relative 
        mb-8
        ">
                <Image
               fill={true}
                src='/duty.jpg'
                alt="A millatary guy to represent duty"
                />
            </div>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
          The morality of duty starts with what should be condemned,
           focusing on the basic requirements of social living and our obligations to each other.
            
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        This morality is based on reciprocity, where there's an implicit agreement not to harm
             each other, like the way male antelope don't severely injure each other when competing
              for a mate.
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
          Acts of honesty are seen as duties, and those who lie are criticized for failing in their unspoken agreement. Failing in terms of the morality of duty means neglecting your responsibilities or unfairly imposing obligations on others.
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
          Psychologically, the morality of duty encourages sensitivity to shame, reminding us to consider how our actions affect others.
        </p>
        <h3 className="text-xl text-white p-2 font-semibold mb-4 bg-[#849b9f] min-[540px]:p-4">So Where Does It Go Wrong?</h3>
        <ul className="list-disc ml-8 mb-4 min-[1024px]:mb-8 p-2">
          <li className="mb-2 text-[#fde1e2] font-bold">Being negligent in one's duties.</li>
          <li className="mb-2 text-[#fde1e2] font-bold">Or to impose obligations where obligations ought not to be imposed.</li>
        </ul>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        While the first type of villainy has always been present at a high level, 
          some of the most damage caused in the 21st century comes directly from this type
           of villainy.
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
           In fact, on an individual level, this type of villainy is ever-present.
            We can identify it&nbsp;<Link className='text-[#849b9f] underline' href="/products">so that you can make informed decisions</Link>&nbsp;when it comes to the people 
            you interact with.
        </p>
      </section>
    </div>
    </>
  );
}

///quiz/6529d0abc0f6782d99937954/user/652d5522914114746615d8ac w-[1155px] 81%






/**figma large not responsive */
{/*

     <div className="overflow-hidden bg-[#849b9f] flex flex-row w-full items-start">
        <div className="flex flex-col mt-0 w-[1220px]">
          <div className="bg-[#f0e7e7] flex flex-col justify-center pr-8 h-16 shrink-0 items-end">
            <div className="bg-[#849b9f] flex flex-col items-center pt-px pb-1 px-16">
              <div className="text-xl font-['Inter'] font-bold text-white mr-px">
                The Human Risk Project
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start">
            <div className="bg-[#dbd5d5] w-16 shrink-0 h-[732px]" />
            <div className="bg-[#bbb6b6] self-end flex flex-col justify-center w-[1155px] h-24 items-center">
              <div className="bg-[#849b9f] flex flex-col items-start pb-1 px-8">
                <div className="text-xl font-['Inter'] font-bold text-[#fde1e2] mr-1">
                  submit
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#999595] w-20 shrink-0 h-[789px]" />
      </div>

*/}

/*****FIGMA android quiz slide??? */
{/*

     <div
        id="AndroidLargeRoot"
        className=" bg-white relative flex flex-col w-full items-center pt-16 pb-20 px-16"
      >
        <div className="w-[360px] h-[716px] absolute top-0 left-0 flex flex-row items-start">
          <div className="bg-[#f0e7e7] flex flex-col justify-center w-[283px] h-16 px-3">
            <div className="bg-[#849b9f] flex flex-col ml-px items-start pb-px px-3">
              <div className="text-xl font-['Inter'] font-bold text-white">
                The Human Risk Project
              </div>
            </div>
          </div>
          <div className="bg-[#999595] w-20 shrink-0 h-[716px]" />
        </div>
        <div className="w-16 h-[741px] bg-[#dbd5d5] absolute top-16 left-0" />
        <div className="bg-[#849b9f] relative flex flex-col gap-5 w-full h-[657px] shrink-0 items-center pl-8 py-16">
          <div className="text-3xl font-['Inter'] font-bold text-white self-start ml-2">
            Question
          </div>
          <div className="text-3xl font-['Inter'] font-bold text-white">Answer</div>
        </div>
        <div className="w-[291px] h-20 bg-[#bbb6b6] absolute top-[716px] left-16 flex flex-col justify-center pr-3 items-end">
          <div className="bg-[#849b9f] flex flex-col w-1/2 items-start pt-px pb-1 px-8">
            <div className="text-xl font-['Inter'] font-bold text-[#fde1e2]">
              submit
            </div>
          </div>
        </div>
      </div>


*/}
















/***figma test comp  */
   {/*} <div className="flex flex-col w-full">
        <div className="bg-[#3d6098] flex flex-col gap-4 h-[390px] shrink-0 items-end p-16 rounded-[26px]">
          <div className="text-4xl font-['Inter'] font-bold text-[#fffdfd] mr-16">
            Web development with a twist
          </div>
          <div className="self-stretch flex flex-row ml-4 gap-20 items-start">
            <img
              src="https://file.rendit.io/n/jOpZ8tvtJoALFJZVwAzc.svg"
              id="Discussspx"
            />
            <div className="flex flex-row gap-20 w-[444px] items-start">
              <img
                src="https://file.rendit.io/n/ZYqjQI386ZWCdKEWyDvd.svg"
                id="Billspx"
              />
              <img
                src="https://file.rendit.io/n/j9uqv1mKt2imX9hUVcCw.svg"
                id="Starspx"
                className="mt-1"
              />
            </div>
          </div>
        </div>
      </div>*/}