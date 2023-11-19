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
        "We test for harmful, unproductive, and self-sabotaging behavior"
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
          The Theoretical Foundation
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
            <h3 className="
        text-xl 
        text-center
        font-semibold 
        mb-4
        p-2
        text-[#fde1e2]
        bg-[#999595]
        ">The Dilemma of Human Morality
      </h3>
      <h4 className="
        text-xl 
        text-center
        font-semibold 
        mb-4
        p-2
        text-[#fde1e2]
        bg-[#999595]
        ">
         The Self 
        </h4>

        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        The morality of the individual is the morality of the Good Life; the morality of excellence; the morality of the fullest realization of human powers. The morality of the individual begins at the top of humanity. It tells us that the actions that lead us to some higher state are good and actions that lead us further from that higher state are bad.
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        This urge simply tells us to be better, which is an inherent instinct of any cognizant creature to begin with. When one person urges another to eat healthy, he is appealing to the morality of the individual. When one person picks up a difficult book to read, he does so out of a desire to improve his circumstances. 
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        A lack of aspiration is to be considered a failure, not a wrongdoing. A person can fail to realize his potential but should not be criminalized for that failure. There is no law that can compel a man to live up to his full potential after all. The morality of the individual applied to law can only exclude from a man's life the more obvious of pure chance.
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        It cannot enforce the Good Life upon him but can protect him from some negative circumstances not within his power, like his tree falling on top of his neighbor’s expensive Corvette.
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        This morality must come from a top-down approach; it must be assumed that there is a Good Life and that certain action will result in a step closer to it while other action will result in straying further from it. To study this morality is to acknowledge that some actions produce good results and other actions do not.
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        There is an inherent limitation within the top-down morality of the individual. It simply tells people to be better and pursue their interests, but it cannot tell them what their interests or the Good Life is. That must be discovered individually.
        </p>
        <h3 className="text-xl text-white p-2 font-semibold mb-4 bg-[#849b9f] min-[540px]:p-4">So Where Does It Go Wrong?</h3>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        In summary, all intelligent creatures want to improve their situation. The patterns or guidelines required to do that can be studied so that we can more effectively improve. The study of those patterns or guidelines is the individual component of morality.
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
        >The Collective</h2>
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
        Where the morality of the individual begins at the top of human action, the morality of the collective begins at the bottom. The morality of the collective emphasizes the basic requirements of social living. Where the individual deals with that which should be achieved, the collective deals with that which should be condemned.
            
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        Duties, or obligations, obey the principle of reciprocity. Duties are an exchange between people (but not always an explicit exchange). One man has a duty to not steal another man’s property despite never having explicitly come to an agreement with each other that they would not steal from one another. 
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        Humans act in the world to achieve their ends and have to work with other humans in order to do so. As such, those actions require the implicit and explicit principle of reciprocity so that a human can achieve his potential while not sabotaging another's aspirations to do the same, because undue obligations can become stifling
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        Obligations that are essential for living among other social beings can have real consequences. As such, these minimum obligations certainly can be studied and comprehended. The critic of this morality places himself in a precarious predicament because he must assume that social living does not logically imply social obligations which reduces down to the nonsensical belief that mankind is not a social being.  
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        Even non-human animals obey certain principles of reciprocity as evidenced by most male species engaging in combat for mates; which is a form of combat that often (but not always) follows certain hidden rules of play where combatants do not fatally harm one another.
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        To be immoral in terms of the morality of the collective is to either (1) fail to obey the principle of reciprocity, or the other extreme, which is to (2) impose obligations where they ought to not belong.
        </p>
        </section>
        <section>
        <h2 className="text-xl text-white p-2 font-semibold mb-4 bg-[#849b9f] min-[540px]:p-4">
        The Collective vs The Individual
        </h2>

    
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        Morality is the component of psychology that one has control over. It is reflected in the psychology of shame. How we respond to shame is itself a dichotomy. It exists on a scale with under-socialized on one end and over-socialized on the other, or those of whom are insulated from the effects of shame and those of whom are hyper-sensitive to shame. 
        </p>

        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        In summary, the two moralities are the way in which a person can improve himself (the morality of the individual) and the basic requirements to live socially (the morality of the collective). In the former, a person must exhibit some resiliency to shame in order to not be stifled by the collective. In the latter, a person must exhibit some sensitivity or responsiveness to shame in order to live among others. The sensible debate is not whether or not they exist, but where the line is drawn between the two.   
        </p>

        <p className="italic mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        If the morality of duty reaches upward beyond its proper sphere
         the iron hand of imposed obligation may stifle experiment, inspiration, and spontaneity.
          If the morality of aspiration invades the province of duty, men may begin to weigh and
           qualify their obligations by standards of their own and we may end with the poet tossing
            his wife into the river in the belief – perhaps quite justified – that he will be able
             to write better poetry in her absence.<strong className="text-lg">Fuller's Morality of Law p. 27-28</strong>     
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        The Puritans attempted to draw the line higher in an attempt to force more obligation than necessary on humanity. Psychologically (shame), the over-socialized acts similarly by attempting to impose the social consequences of shame where it ought to not belong.
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        The other extreme is that of the compulsive narcissist who relieves himself of obligations when it is not in his interest, perpetually taking advantage of those around him. Psychologically, this is represented as one who is insulated from the consequences (shame) of incorrectly living socially, or the under-socialized. 
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        Interestingly, perfectly healthy behavior that is not under-socialized can be characterized as such by the over-socialized. For instance, the statist slanders those of whom that do not wish to grant the state sector more powers (and, as a result, relinquish their own property and freedoms to the state) as “selfish”.
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        A loser is someone who fails in terms of the morality of aspiration, like the homeless. This is a failure to aspire, whereas the two previous examples are villainy. Villainy occurs when one morality encroaches upon the territory of the other; when the line is drawn too low or too high.  
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        The first of the two categories of villains are people that draw the line of morality too low, in which case, the individual component of morality (aspiration) encroaches upon the territory of the collective (duty/reciprocity) component. This can be referred to as the villain-who-neglects since this person neglects legitimate obligations towards others, such as the obligation to not steal or to not deceive.
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        Note that while deception can be necessary when dealing with enemies, such acts often occur after one party already neglected obligations towards the other. Villainy, particularly the villain-who-neglects is often a matter of who neglected obligations first.
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        This is captured quite well with a rephrasing of The Golden Rule into the language of caution or hostile trade: If you have no intention of treating me as you yourself would wish to be treated, then I shall consider myself as relieved from the obligation to treat you as I would wish to be treated.
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        As such, where the Puritan may claim that deception is unilaterally evil, the truth of the matter is that what is evil depends upon which obligations are legitimate; which are illegitimate; and if legitimate obligations were neglected by one party, and thus freeing the other party from following those very obligations.
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        The second category of villain is the person that draws the line of morality too high, in which case the collective component of morality (duty/reciprocity) stifles the individual. This can be referred to as the villain-who-imposes. This villainy often takes the form of entitlement (to the property of others) and privileges (the control of others' property).     
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        This villain feels as though others must exchange with him/her (in relationships or in economics) on his/her own terms, that others must contract exclusively with him/her (in relationships or in economics) rather than freely contract, or that others must submit to the same masters that he/she has chosen to submit to. He forces obligations where obligations ought to not belong.
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        If a reader is not convinced that (1) these moralities [ought to] exist, try imagining what it would mean if they didn't. If the morality of the individual (aspiration) didn't exist, then that would be equivalent to claiming that people should not try to improve; that a person does not act purposefully. If the morality of the collective didn't exist, then that would be the equivalent of claiming that humanity is not social and should not honor obligations.
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        If a reader is not convinced that (2) these moralities form a fundamental dichotomy, try imagining all possible criticisms or praises of a person. We posit that every criticism of a person ever made can be categorized as a failure to aspire (aspiration), a failure to fulfil an obligation (duty), or a tyrannical and misplaced use of obligation (duty). We posit that every evil action in society is in terms of one or the other. Until a critic succeeds, the theory is good.
        </p>
        <h3 className="
        text-xl 
        text-center
        font-semibold 
        mb-4
        p-2
        text-[#fde1e2]
        bg-[#999595]
        ">Let us examine an example.</h3>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        Tribes are just beginning to organize into a coherent society. Tribe A, who lives downstream, is at odds with Tribe B, who lives upstream and is dumping their waste into the river. The Council of Tribes come together to discuss this issue, and quickly come to the conclusion that this issue is larger than the dispute between two tribes; that it will determine how broader society - all tribes - should behave in regard to the dumping of waste in rivers.
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        This is a clear example where people have to devise a collective rule - an obligation - because we cannot allow others to dump their waste upstream of us, which infringes upon the property or damages the property of others (a form of theft). This is not merely an example of a choice between duty or aspiration, but of villainy. Tribe B is the villain-who-neglects by treating Tribe A in a way in which Tribe B would not want to be treated. One tribe is neglecting its duty to the other by drawing the line of morality too low.
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        Imagine another scenario where Tribe C is offended by the way in which Tribe D honors their dead. Tribe C calls the Council of Tribes together, hoping to enforce their own way of honoring the dead onto other tribes. In this scenario, Tribe C's petty need to control others is the true issue. Such is the tactic of the villain-who-imposes by attempting to impose social obligations where obligations ought to not belong.
        </p>
        <h2 className="text-xl text-white p-2 font-semibold mb-4 bg-[#849b9f] min-[540px]:p-4">
        The Collective & Economics  
        </h2>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        Let us examine the relationships between morality and economics. This will highlight if our moral framework (ought-to and ought-not-to) is sound by comparing it to the field of economics (what we actually do)
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        Economics is (i) the study of the relationships of exchange, or the way in which individuals pursuing their interests will benefit other individual's interests when engaging in trade; and (ii) the study of the principle of marginal utility, or the principle by which we make the most efficient use of the resources at our command in order to achieve whatever ends we have set for ourselves.
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        Economics is (i) the study of the relationships of exchange, or the way in which individuals pursuing their interests will benefit other individual's interests when engaging in trade; and (ii) the study of the principle of marginal utility, or the principle by which we make the most efficient use of the resources at our command in order to achieve whatever ends we have set for ourselves.
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        Consider the case of the voter and his duty to vote. If it is in fact his duty to do so, then the negligent voter may be scolded by saying something along the lines of "how would you feel if everyone behaved the way that you did?" In this case, he who reprimands the voter appeals to the principle of reciprocity to argue his point.
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        The voter can be negligent for not voting or for not informing himself properly on the issues prior to voting, and indeed, the public often complains that significant portions of society are negligent voters – they don't vote or do not inform themselves properly beforehand.
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        Some may even argue that the act of political voting is inherently based on a forced, non-voluntary choice and that government is the sole winner in the affair; and these arguments can be used to further scold the political voter for their belief in political action and ignorance of voluntarism.
        Regardless of the political or anti-political stance, these arguments are based on the principle of reciprocity
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        Such arguments can also be based on an appeal to self-interest as some philosophers have attempted to argue across the centuries, but they must broaden their definition of “self-interest” until it becomes and empty shell of a term, in which case, we arrive at the same moral framework we are talking about now, only under different terminology.
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        Let us examine an example free of the self-interest appeal.magine a scenario where two men agree to give the same amount of money to a charity of their choosing. The appeal to self-interest does not hold but that of reciprocity does. If one man chooses not to live up to his bargain, then the other man is relieved of his obligation to give his sum to a charity. Calling this "self-interest" only works if the term is broadened to encompass almost all of Human Action, rendering it an empty shell of a term.
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        Despite neither man explicitly bargaining that one is relieved of his duty if the other neglects his own, it was implied in the agreement. As such, the criticism of this moral framework by labeling all of Human Action as “self-interest” only works by altering the definition of “self-interest” until we arrive at the same moral framework but with different terms.
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        Even the Golden Rule is a statement based on the principle of reciprocity, whether in the language of goodwill
        </p>
        <p className="italic mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        Judge not, that ye be not judged. For with what judgement ye judge, ye shall be judged; and with what measure ye mete, it shall be measured to you again... Therefore all things whatsoever ye would that men should do to you, do ye even so to them
        </p>
        <h3 className="
        text-xl 
        text-center
        font-semibold 
        mb-4
        p-2
        text-[#fde1e2]
        bg-[#999595]
        ">or into the language of caution or hostile trade </h3>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        So soon as it becomes perfectly clear that you have no intention whatever of treating me as you yourself would wish to be treated, then I shall consider myself as relieved from the obligation to treat you as I would wish to be treated.<strong className="text-lg">Fuller, p.21</strong>
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        The Golden Rule is more than a statement about explicit bargains, but of a code of reciprocity that exists throughout society, not merely just that of explicit bargains. There is no bargain between the voter and the rest of society, yet the argument of reciprocity is used regardless. The man who does not vote cannot convince others to vote because he has not upheld his end of the bargain.  
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        The man who does vote can scold those of whom do not.  Likewise, the man who has informed himself, praxeologically of how government action works and has thus abandoned the concept of political voting altogether can scold the political voter for not being as informed as he.
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        Since reciprocity is a two-way street, an angered man is justified when he is incorrectly scolded. Ideally, he only feels entitled to scolding others when he himself has first upheld his end of the bargain and when others have failed to reciprocate. The obligation is not absolute but depends on the expectations of others to do the same. 
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        As an example, the vote that is not counted due to corruption is still a valid action in determining that corruption exists and needs to be uprooted. It is only in the most desperate of scenarios, that of utter oppression, that certain actions are pointless, but that is only because the principle of reciprocity has been eliminated entirely (the economic definition of oppression is the lack of reciprocity between two groups,namely government and citizen).    
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        Yet it can be argued that political voting is the only type of voting that is oppressive as it is not reciprocal in the least. Political voting is a scenario that the voter is forced to be a part of regardless of his involvement; takes from him by force rather than mutual agreement; and results in a false choice scenario that he cannot negotiate the built-in terms of.
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        The notion of reciprocity is implied in the very notion of an obligation which is simply an expectation that social beings have of each other if they intend to live among one another. In this way, the morality of the collective is simply a description of human nature based on ought statements.
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        As for ethics versus economics, the morality of the collective is broader than the economics of exchange. For example, in an emergency scenario such as a company of men making a last stand against an encircling enemy, no one cares in this scenario to measure the contributions of each man, but simply that each gives his personal best effort regardless of the measurable impact of each man's output.
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        The morality of duty is simply the social living of Human Nature. It is reciprocity between individuals. Since duty has been intrinsically linked to reciprocity, three rules are established that optimize and define what a duty is: 
        </p>
        
        <ul className="list-disc bg-white ml-8 mb-4 min-[1024px]:mb-8 p-2">
          <li className="mb-2  font-bold">
          A duty is created. It is the voluntary agreement between parties affected. Otherwise, it is tyranny or criminal.  
          </li>
          <li className="mb-2  font-bold">
          It is equal (otherwise, it can't be reciprocal). That which is being reciprocated from each party must be [reasonably and subjectively] equal in value. Clearly, subjective valuation is critical here, since it is pointless to only consider an exchange of a book for another book when most reciprocal exchanges require entirely different services or goods (such as the exchange of money for food).The bond of reciprocity does not unite men in spite of their differences, but because of their differences. The idea of equal reciprocity requires a measurement of sorts between fundamentally different things.
          </li>
          <li className="mb-2  font-bold">
          A duty must be reversible. The same duty that you owe me today, I may owe you tomorrow. Otherwise, why would a man attempt to act as if he is another man (empathize) when he is not the other man? The reversibleness of a duty is also a check that it is truly reciprocal. A laborer works for a timber framing company. He is selling his labor in exchange for money. The timber framing company is selling something (a money) in exchange for the labor's time. Consider the template where either party can be inserted into either role: A ___ is selling ___ to ___ in exchange for ___.
          </li>
        </ul>
        
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        A fascinating conclusion can be drawn from these deductions. The conditions by which these criteria are best met is a society of economic traders!
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        By definition, members of this society meet the first criterion. As for equality, it is only something like a free market that valuation of disparate goods can exist, because the state sector (or socialism, or Marxism, or whatever new term is being used) cannot calculate costs. In fact, socialist countries use the freer markets of other nations to determine prices!
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        The third principle is met in a society of economic traders since the process of consumption and production is an individual process – people tend to do both, often in the span of a single day. Clearly, the "duties" that they find themselves bound to are reversible in market exchanges.
        </p>
        <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
        The startling conclusion is that only under free-market exchange can the morality of the collective reach its full development. The relationships of exchange in a free society are the result of Human Nature, namely the morality of duty or principle of reciprocity.
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
        >The Individual & Economics
      </h2>
      <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
      The principle of marginal utility is the economic parallel of the morality of the individual
      </p>
      <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
      The morality of the individual is our efforts to make the most of our lives – the most of ourselves in limited time. The economics of utility is how people make the most of their limited means (resources). The former is that which we should do and the other is that which we actually do.  
      </p>
      <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
      The goals of each are to make the most out of our situation, but they are also alike in the way in which they are limited. The morality of the individual necessarily begins with the highest good of man though it fails to tell us what this target is (we have to discover the "Good Life" individually).   
      </p>
      <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
      The principle of marginal utility describes the way in which we use our means to achieve our desired ends but fails to tell us what our ends should be (we have to discover our ends; our own individual targets).
      </p>
      <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
      Economists cover their ignorance of this target with the overarching term, "utility," but this word is vague to the extent that it is an encompassing shell for almost all Human Action, not unlike the morality critic’s “self-interest” shell. 
      </p>
      <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
      The morality of aspiration has also had such terms come and go, like Bentham's "pleasure," but for it to explain the morality of aspiration it has to be broadened to the point that we arrive at the initial limited description of the morality of aspiration – that it is simply the strive for human excellence. 
      </p>
      <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
      Both the morality of the individual and marginal utility are defined by some greatness (one in aspiration and the other in economic ends). Both are limited in that they cannot tell us what that specific greatness or goal is, but the morality of the individual can be studied so that we can arrive at our own individual targets while the principle of marginal utility can be used to describe human behavior.
      </p>
      <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
      If studied, both tell us how we achieve those goals. Neither of them holds anything to be sacred. In economics, the principle of marginal utility is derived from the disutility of labor and the fact that no means (a person’s time, his resources, etc) is more sacred than another means. At any given moment, we organize our resources in such a way to maximize their utility. The same observation holds for the morality of aspiration. No resource or means is sacred if they can be reorganized and re-prioritized at a moment's notice. 
      </p>
      <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
      This is in stark contrast to the collective component of morality and of economics. On one end of the extreme, reciprocity, or property and freedom to contract, is not respected. On the other end of the extreme, individualism and autonomy is stifled by the over-socialized who wish to impose order, conformity, or benefit from privileges at the expense of others
      </p>
      <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
      The individual holds no thing to be sacred while the collective does. The dilemma is where to draw the line. What we have done here is discover an inverse relationship between two features of humanity. A moral judgement, on the other hand, is when we claim where the line ought to be drawn.
      </p>
      <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
      Consider once again the relationship between the morality of the individual and the morality of the collective: 
      </p>
      <p className="italic mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
      If the morality of duty reaches upward beyond its proper sphere the iron hand of imposed obligation may stifle experiment, inspiration, and spontaneity. If the morality of aspiration invades the province of duty, men may begin to weigh and qualify their obligations by standards of their own and we may end with the poet tossing his wife into the river in the belief – perhaps quite justified – that he will be able to write better poetry in her absence 
      <strong className="text-lg">Fuller, p. 27-28 </strong>
      </p>
      <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
      but instead of a relationship in ethics, let us examine it in economics. An identical relationship between the principle of marginal utility and the relationship of exchange exists. 
      </p>
      <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
      Marginal utility is the way in which we best use our means – time, labor, land, Capital goods, etc. Nothing is sacred in this principle. We prioritize means in a flexible way, depending on the circumstances.
      <span className="italic mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
      "All existing arrangements are subject to being reordered in the interest of increased economic return." <strong className="text-lg">Fuller, p. 28 </strong>
      </span>
      </p>
      <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
      The economics of exchange is in stark contrast. It is based on two rigid assumptions: property and contract. How else would we engage in exchange if we are not certain that we have property to exchange? How else would we engage in exchange if we are not certain that the other party has the right to give to us his property? Furthermore, we have to be able to freely decline or freely accept an exchange in order for us to pursue our interests – we have to be able to contract.
      </p>
      <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
      Collectively, we have to hold sacred (or fixed) the freedom to contract and the right to property.
      </p>
      <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
      If marginal utility expands to include the economics of exchange, then property and contract become subjective and whimsical constructs. We could not have property rights. Nor could we have the right to agree to or decline a contract.
      <span className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8 text-2xl">
      This is the identical scenario as when the morality of aspiration overrides the morality of duty, or the villain-who-neglects. 
      </span>
      </p>
      <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
      If the reverse is the case and the economics of exchange expands to include marginal utility, then the sanctity of property and contract are not held in their proper place. As a result, efforts to direct resources to their most efficient use (marginal utility) is frustrated by interests of (1) those claiming property illegitimately; or by (2) those imposing contractual obligations; or by (3) those limiting contractual arrangements.
      <span className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8 text-2xl">This is the identical scenario as when the morality of duty encroaches upon the territory of the morality of aspiration, or the villain-who-imposes. </span>
      </p>
      <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
      Societies with [more] free markets tend to have legal systems that reflect their economic systems. The economic organization of free society is determined by reciprocal exchange where the citizen is the economic trader engaging other economic traders in reciprocal exchanges.
      </p>
      <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
      The legal institutions of this society are also determined by reciprocal exchange. In criminal law, we organize a list of crimes with specific punishments of each, or a "kind of price list for misbehavior." [Fuller] In private law we have the legal subject (the legal counterpart to the economic trader) who "owes duties, possesses rights, and is granted the legal power to settle his disputes with others by agreement." [Fuller]
      </p>
      <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
      While this is a morality test, we cannot fully talk about morality without talking about the individual and the collective or society. Likewise, we cannot talk about instances where the individual fails, where the individual invades the province of the collective by neglecting obligations, and where the collective invades the province of the individual by imposing obligations where obligations ought to not belong. Precisely what constitutes a legitimate obligation from an illegitimate obligation is possibly a never-ending task of fine-tuning and likely a significant amount of conflict.
      </p>
      <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
      It should also be noted that there is a possibility of a person being both villains simultaneously. This is a particularly difficult villain to deal with because it is inherently <span className="italic">paradoxical villainy</span>. A villain can be internally consistent, though unjust in his/her actions. For instance, the villain-who-imposes may go about attempting to impose obligations on others where obligations ought to not belong, and advocate for others to do the same.
      </p>
      <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8">
      This villain is not necessarily logically inconsistent and the same goes for the villain-who-neglects, who may go about stealing from others and expect others to do the same. However, the person that exhibits both traits is simultaneously attempting to impose obligations while also attempting to neglect obligations; this person is the epiphany of the phrase: <span className="italic">the ends justify the means</span>.
      </p>
      <p className="mb-4 min-[1024px]:mb-8 bg-white p-2 text-center min-[540px]:p-8 text-2xl">
      The solution to the villain-who-imposes is to have some resiliency to shame; to clearly state that you are under no obligation to follow his beliefs and that your property and body and freedom to contract are not his to control. The solution to the villain-who-neglects is to impose shame unto him and to clearly state that your property and body and freedom to contract are not his to take. As for the paradoxical villain, who does not believe in logical consistency and truth (reality), no known solutions have ever been discovered for dealing with his ilk. 
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