import React from 'react';
import Image from 'next/image';
const Bio = () => {
  return (
    <section className="bg-[#999595] p-6">
      <div className="container mx-auto flex flex-col items-center">
        <div>
        <h1 className="text-4xl text-center font-bold mb-4 text-[#fde1e2]"><span className='text-white'>Meet:</span>  Kelly Offield</h1>
        <h2 className="text-4xl text-center font-bold mb-4 text-[#fde1e2]"><span className='text-white'>Founder Of:</span> The Arka Journal</h2>
        <section className="
            w-[100%] 
            h-[45vh] 
            min-[540px]:h-[50vh] 
            min-[1024px]:h-[65vh]
            mb-8
            relative
            "
            >
                <Image
                className='
                rounded
               
                '
               fill={true}
                src='/bio-4-500.jpg'
                alt="Kelly Chase Offield Author Arka Journal"
                />
            </section>
            
       </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#fde1e2]">📚 Author & Journalist</h2>
            <p className="text-xl mb-4  bg-gray-100 text-center p-2 rounded">
              As the founder and curator of "The Arka Journal," I'm a passionate physicist, a dedicated kickboxer, an accomplished author, and an independent journalist. My journey through these diverse disciplines has cultivated a unique perspective on the modern age and the control of information.
            </p>
           
            <p className="text-xl mb-4 bg-gray-100 text-center p-2 rounded">
              I authored a&nbsp;<a className='text-[#849b9f] underline' href='https://www.amazon.com/dp/B0BYBH7FXS?ltclid=04a6b65d-3d6b-42e0-8da4-536e43fb3756' target='_blank'>&nbsp;thought-provoking piece</a> that delve's deep into the intricate fabric of our world, unraveling the threads of censorship, both governmental and within the realm of private enterprise. My writings are a testament to the power of the written word in the fight for knowledge and truth.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#fde1e2]">🥋 Kickboxer</h2>
            <p className="text-xl mb-4 bg-gray-100 text-center p-2 rounded">
              When I'm not exploring the intricate realm of information control, you can find me in the gym, mastering the art of kickboxing. My discipline in the ring mirrors my dedication to uncovering the unvarnished truth.
            </p>
            <h2 className="text-2xl font-bold mb-4 text-[#fde1e2]">🔬 Passionate Physicist</h2>
            <p className="text-xl mb-4 bg-gray-100 text-center p-2 rounded">
              With a background in physics, I bring a scientific eye to my journalistic endeavors. I view the world through a lens of reason and logic, dissecting complex topics and presenting them in a way that's accessible to all.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold my-4 text-[#fde1e2]">🌐 About "The Arka Journal"</h2>
        <p className="text-xl mb-4 bg-gray-100 text-center p-2 rounded">
        &nbsp;<a className='text-[#849b9f] underline' href='https://advocate-for-rights-and-knowledge-of-americans-arka.ghost.io/' target='_blank'>&nbsp; "The Arka Journal"</a> is more than just a blog; it's a platform for truth-seekers and those who refuse to be passive consumers of information. Here, we explore the depths of censorship, the implications of control in the digital age, and the ongoing battle for free expression. Join me on this intellectual journey as we uncover the hidden truths that shape our world.
        </p>
        <p className="text-xl my-4 bg-gray-100 text-center p-2 rounded">
          For those who value knowledge, embrace diversity, and yearn for a deeper understanding of the world we inhabit, "The Arka Journal" is your sanctuary. Welcome aboard.
        </p>

        <h2 className="text-2xl font-bold my-4 text-[#fde1e2]">📬 Contact</h2>
        <div className="my-4">
          <p className="text-xl bg-gray-100 text-center p-2 rounded">
            Feel free to reach out at
          &nbsp;<a href="mailto:arka.kellyoffield@protonmail.com"
           className="text-[#849b9f] hover:underline">
            arka.kellyoffield@protonmail.com
            </a>&nbsp;
 for inquiries, collaborations, or to join the ongoing conversation. Together, we'll unveil the untold stories of our time.</p>
        </div>
      </div>
    </section>
  );
};

export default Bio;


