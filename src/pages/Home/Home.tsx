import React from 'react'
import YoutubeEmbed from '../../components/embed/YoutubeEmbed'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="base-box">
      <div className="flex flex-col flex-grow h-full w-full">
        <YoutubeEmbed embedId={'E8qbnEUa1oA'} />
        <div className="text-justify">
          <div className="font-mono text-4xl py-5 text-gray-800 font-medium">Why Are Pandas Endangered Animals?</div>
          <div className="space-y-4 text-gray-800">
            <p>
              Pandas are one of the most easily recognized animals on Earth, thanks to their bold black and white
              coloration. Since almost all other bears have just one solid coat color, pandas are highly
              unusual-looking.
              They are also unique in other ways. For example, the diets of most bears are comprised of plant material,
              such as berries, and other animals, such as fish or insects. Pandas exclusively eat bamboo.
              Unfortunately, these fascinating bears are highly endangered due to habitat loss and other issues.
            </p>
            <div className="bg-blue-100 p-2 rounded-lg">
              <p>
                Pandas are endangered mainly due to habitat loss. Humans have cleared much of the bamboo forests that
                pandas need to survive. Because pandas eat only bamboo, they cannot adapt to live outside of those
                forests
                the way other animals do, unless the pandas are provided with bamboo. Pandas also have difficulty
                reproducing, even in captivity, due to their extreme choosiness about their mates, their low-nutrient
                milk
                and the fact that they usually only have one viable cub at a time. Poaching is also an issue for pandas,
                since panda skins and pelts are valuable on the black market.
              </p>
            </div>
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
        </div>

        <div className="py-2 font-medium font-serif text-gray-700">Updated April 22, 2022 By Juntao Lu</div>
        <div>
          <li
            className="btn-link underline"
            onClick={() => {
              navigate('/characteristic')
            }}>
            Read more about pandas' characteristic
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
    </div>
  )
}
