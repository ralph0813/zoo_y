import * as React from 'react'
import YoutubeEmbed from '../../components/embed/YoutubeEmbed'
import { useNavigate } from 'react-router-dom'

export default function Characteristic() {
  const navigate = useNavigate()

  return (
    <div className="base-box items-start text-justify">
      <YoutubeEmbed embedId={'E8qbnEUa1oA'} />

      {/* <div className="font-mono text-xl sm:text-4xl py-5 text-gray-800 font-medium"> Giant pandas' characteristic</div> */}

      <div className="font-mono text-2xl py-2 text-gray-800 font-medium">Why Are Pandas Endangered Animals?</div>
      <div className="space-y-4 text-gray-800">
        <p>
          Pandas are one of the most easily recognized animals on Earth, thanks to their bold black and white
          coloration. Since almost all other bears have just one solid coat color, pandas are highly
          unusual-looking.
          They are also unique in other ways. For example, the diets of most bears are comprised of plant material,
          such as berries, and other animals, such as fish or insects. Pandas exclusively eat bamboo.
          Unfortunately, these fascinating bears are highly endangered due to habitat loss and other issues.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-4 sm:gap-3 items-center">
          <div className="col-span-3 pb-3">
            <h3 className="font-mono text-2xl text-gray-800 font-medium pb-2">
              Habitat Loss
            </h3>
            <p>
              Pandas are endangered mainly due to habitat loss. Humans have cleared much of the bamboo forests that
              pandas need to survive. Because pandas eat only bamboo, they cannot adapt to live outside of those
              forests the way other animals do, unless the pandas are provided with bamboo. Pandas also have
              difficulty reproducing, even in captivity, due to their extreme choosiness about their mates, their
              low-nutrient milk and the fact that they usually only have one viable cub at a time. Poaching is also
              an issue for pandas, since panda skins and pelts are valuable on the black market.
            </p>
          </div>
          <img
            className="object-cover rounded-lg"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Panda.jpg"
            alt=""
          />
        </div>

        <h3 className="font-mono text-2xl text-gray-800 font-medium">
          Difficulties Adapting
        </h3>
        <p className="">
          Some animals have found ways to adapt to human activity in areas that were once wild. For example,
          raccoons
          once lived primarily in forests but now inhabit many cities and towns, eating discarded food left behind
          by
          people. Raccoons are able to adapt in this way because of their physical attributes, such as their
          digestive
          systems, which can digest nearly any kind of food, and their small size, which allows them to hide easily.
          There are other animals, such as pigeons and rats, that have adapted in similar ways to live alongside
          humans.

          Pandas have no such adaptations. They cannot simply move into cities and towns when their forests are
          destroyed, mainly because they are so specifically adapted to a life of eating bamboo. Pandas' digestive
          systems can't properly digest anything else. Because bamboo shoots and leaves don't contain many
          nutrients,
          pandas also must consume vast quantities of it – around 20 to 40 pounds a day. Even if pandas could eat
          something other than bamboo, pandas could never blend in safely in cities or towns, due to their large
          size.
          For pandas, the environment they originally adapted to is the only environment where they can thrive.
        </p>
        <h3 className="font-mono text-2xl text-gray-800 font-medium">
          Difficulties Reproducing
        </h3>
        <p>
          Even in captivity, breeding pandas is notoriously difficult. Pandas are extremely selective about choosing
          their mates, which means that even if a male and female panda are kept in the same enclosure for years,
          there is no guarantee the pair will mate. If pandas do mate in captivity, the cubs often need to be
          hand-raised by people, since captivity seems to throw off the maternal instincts of many panda mothers,
          causing them to abandon or even harm their cubs. Because of these issues, conservation programs that
          release
          pandas into the wild, in order to increase their numbers, are simply not possible, as they are for animals
          such as: lions ,wolves.
        </p>
        <h3 className="font-mono text-2xl text-gray-800 font-medium">
          Poaching of Wild Pandas
        </h3>
        <p>
          It may seem unthinkable that anyone would knowingly kill an endangered animal, but it does happen via
          illegal poaching. Panda skins and pelts can fetch poachers hefty sums of money on the black market. China
          has strict penalties for anyone caught poaching pandas, but some poachers persist, in spite of the risks.
          With wild panda numbers as low as they are, even a single panda killed by poachers is a devastating loss.
        </p>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-10 sm:gap-8 items-center  w-full">

        <div className="col-span-7">
          <h3 className="font-mono text-2xl text-gray-800 font-medium pb-2">
            Diet & Feeding
          </h3>
          <div className="text-base font-sans font-normal">
            <li>More than 99% of diet is bamboo</li>
            <li>Consume 25 species of bamboo</li>
            <li>Protein in leaves, branches, and stems</li>
            <li>Pandas change their foraging behavior to take advantage of key nutrients</li>
            <li>Most bears consume high amounts of plant matter</li>
          </div>
        </div>

        <div className="col-span-3">
          <YoutubeEmbed embedId={'dqT-UlYlg1s'} className="h-32 sm:h-48 md:h-56" />
        </div>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-10 sm:gap-8 items-center">
        <div className="col-span-7 ">
          <h3 className="font-mono text-2xl text-gray-800 font-medium pb-2">
            Why Are Giant Pandas Solitary Animals?
          </h3>
          <p>
            While living in the wild, giant pandas spend most of their time in a very large environment. By this, they
            rarely come in contact with one another, which contributes to their solitary nature. It’s only natural for
            animals and even humans not to enjoy the company of others, if they rarely come in contact with them.
            If you want to confirm this, keep a cat or dog pet in the cage for a month or two and make it comfortable.
            Release the pet afterwards and observe its behavior. There’s a chance that it will not leave the cage to
            play with others.
            <br />
            The same applies to giant pandas. Comfort zones are convenient. Usually, giant pandas are fragile and
            helpless when they are young.
            <br />
            Unlike other animals, the mother panda focuses on taking care of one cub at a time, even if she gave birth
            to two. Due to their weakness, the young pandas spend most of their time on trees as a means of survival,
            which is normal.
            <br />
            I think you are now aware of why these cute creatures love being by themselves rather than playing with
            their mates. It’s understandable, right?
          </p>
        </div>
        <div className="col-span-3">
          <YoutubeEmbed embedId={'cGD6deLS9rU'} className="h-32 sm:h-48 md:h-56" />
        </div>
      </div>

      <h3 className="font-mono text-2xl text-gray-800 font-medium">
        Do Pandas Like Being Alone?
      </h3>
      <p>
        Yes, pandas love to be alone. They can be classified as loners. With or without other animals, they are
        satisfied with themselves.
        <br />
        Surprisingly, they have a strong sense of smell that informs them that another panda is around. Once they get
        the clue, the pandas go into hiding, whether into a shallow tree or on top of the tree.
        <br />
        Don’t be deceived by their large appearance, pandas are perfect at climbing trees. With their hands and
        fingernails, they usually maintain a firm hold on tree branches and trunks. So, once they perceive the smell of
        another panda, climbing the nearby tree is the next step to take.
        <br />
        Let’s just say pandas are shy animals that don’t like any form of disturbance. Keep in mind that the only time
        they socialize is during the mating season, which is between March to May.
        <br />
        Even during this season, the female panda will only go with the male she is familiar with. And the only way the
        males locate the females is through their sense of smell.
        <br />
        One other amazing thing about these chubby creatures is that after mating, the male and female panda separates.
        Furthermore, the mother panda will take care of its cub alone for over a year after giving birth.
      </p>

      <h3 className="font-mono text-2xl text-gray-800 font-medium">
        When Do Giant Pandas Live In Groups?
      </h3>
      <p>
        Like I’ve stated earlier, giant pandas do not live in groups except during their mating period. Due to their
        solitary behavior, they can become violent when another panda comes near them. Note that a panda will do
        everything to keep another panda away.
        <br />
        Once it senses another panda is nearby, it climbs the tree as soon as possible to prevent any form of
        attachment. With these preventive measures, if another giant panda succeeds in coming in contact with it, there
        may be a problem. They’ll both bite, and make funny noises at each other until one gets tired and leaves.
        <br />
        Even though I’ve made it clear that giant pandas do not live in groups, there is an exception; mating. Isn’t it
        amazing that the only time these shy animals seek one another is during the mating season? Here is how it works.
        <br />
        With their powerful smelling ability, the males find the females whenever they are ready to mate. Unfortunately,
        the female pandas can only give birth to their young ones every two to three years, which is causing a decrease
        in their population yearly.
        <br />
        Female pandas give birth to one or two very tiny babies between 100 to 189 days of pregnancy. If the cubs are
        two at birth, only one will survive because the mother panda prefers to give attention to just one of them.
      </p>

      <div className="font-medium font-serif text-lg pt-2">References:</div>
      <li>
        <a href="https://ielc.libguides.com/sdzg/factsheets/giantpanda/diet">
          TSan Diego Zoo Wildlife Alliance
        </a>
      </li>


      <div className="py-2 font-medium font-serif text-gray-700">Updated April 12, 2022 By Juntao Lu</div>
      <div>
        <li
          className="btn-link underline"
          onClick={() => {
            navigate('/')
          }}>
          Link to homepage
        </li>
        <li
          className="btn-link underline" onClick={() => {
          navigate('/conclusion')
        }}>
          View summary
        </li>
        <li
          className="btn-link underline" onClick={() => {
          navigate('/posts')
        }}>
          Join the discussion
        </li>
      </div>
    </div>
  )
}
