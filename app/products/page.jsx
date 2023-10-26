import dynamic from "next/dynamic";
const ProductList = dynamic(() =>import( '@/components/ProductList'),{ssr: false});
import Image from "next/image";
export default function Products(){
    return(
        <div>
            <section className="
            w-full 
            h-[35vh] 
            min-[540px]:h-[50vh] 
            min-[1024px]:h-[80vh]
            relative
            "
            >
                <Image
               fill={true}
                src='/products-hero.jpg'
                alt="a lighthouse illuminating the darkness with a ship barely visible coming in the background"
                />
            </section>
            <div className="bg-[#849b9f] py-8 px-4 sm:py-12 sm:px-8">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-white mb-4 sm:text-4xl">
      Unlock Insights with Our State-of-the-Art Quiz
    </h2>
    <p className="text-white text-lg mb-8 sm:text-xl min-[1024px]:p-8">
      Discover an individual's hidden tendencies towards the two types of villainy with our cutting-edge quiz. 
      Gain valuable insights to help you make informed decisions about the people you interact with.
    </p>
    <div>
      <a
      className="
      px-4 
      py-2 
      bg-[#999595] 
      text-[#fde1e2] 
      rounded
      "
       href="#products">
        Get Started
        </a>
    </div>
  </div>
         </div>

            <div className="bg-[#849b9f] py-8 px-4 sm:py-12 sm:px-8 mt-24">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-white mb-4 sm:text-4xl">
    "Make Smarter Hiring Choices"
    </h2>
    <div className="w-full h-[30vh] min-[540px]:h-[45vh] relative">
                <Image
               fill={true}
                src='/megaphone.jpg'
                alt="A megaphone that says hiring on it"
                />
            </div>
    <p className="
    text-white 
    text-lg 
    mb-8 
    sm:text-xl 
    mt-[5%]
    min-[1024px]:p-8
    "
    >
    In the world of hiring, making the right choice is crucial. Our innovative quiz goes 
    beyond the traditional interview process, offering a unique perspective on candidates. 
    By uncovering their tendencies toward certain types of villainy, we provide valuable insights 
    that help you make informed hiring decisions. 
    </p>
    <p className="
    text-white 
    text-lg 
    mb-8 
    sm:text-xl
    min-[1024px]:p-8
    "
    >
    With our tool, you can identify potential red 
    flags, assess compatibility with your team, and ensure a safer, more harmonious work environment. 
    Elevate your hiring process and choose the best-fit candidates with confidence.
    </p>
  </div>
         </div>
            <div id="products">
            <ProductList/>
            </div>
            
        </div>
    );
};