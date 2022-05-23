import React from 'react'
import YoutubeEmbed from '../../components/embed/YoutubeEmbed'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="base-box">
      <div className="flex flex-col flex-grow h-full w-full">
        <YoutubeEmbed embedId={'9YkrojbbwiA'} />
        <div className="text-justify">
          <div className="font-mono text-2xl sm:text-4xl py-5 text-gray-800 font-medium">Zoo Y Giant Panda Project</div>
          <div className="space-y-4 text-gray-800">
            <p>
              As few as 1,864 giant pandas live in their native habitat, while another 600 pandas live in zoos and
              breeding centers around the world. The largest threat to giant panda survival is habitat destruction.
              People in need of food and income have cleared forests for agriculture and timber. This logging has
              fragmented a once continuous habitat, leaving small groups of pandas isolated from each other.
              When populations become small, they are extremely susceptible to extinction due to environmental or
              genetic influences, such as drought or inbreeding. Small populations cannot rebound the same way large
              populations do; as groups of pandas become more isolated, it is more likely that reproduction, disease
              resistance and population stability will be threatened.
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
                  Meet the Giant Panda
                </h3>
                <p>
                  Depending mainly on a diet of bamboo, giant pandas live in western China. They eat dozens of pounds of
                  bamboo per day over about 12 hours of feeding, which accounts for their incredible growth from less
                  than a pound at birth to over 200 pounds at the age of maturity.
                  Pandas play an important role in the forest ecosystem where they live. Seeds and plant matter collects
                  on their fur, which is then deposited as they move throughout their habitat. They also climb trees and
                  swim, which further helps disperse the seeds.
                  Pandas are solitary creatures, but when females are ready to mate—starting at about eight years
                  old—they use calls and scent to attract males. Pandas typically give birth to two cubs at a time, but
                  usually, only one cub will survive. Birth rates for pandas are very low, which combined with habitat
                  loss and poaching, make the species a special focus of conservationists.

                </p>
              </div>
              <img
                className="object-cover rounded-lg"
                src="https://firebasestorage.googleapis.com/v0/b/zooy-b8f18.appspot.com/o/avatar%2Fpanda.jpeg?alt=media&token=f5404ece-3668-48d2-a47d-064fd2a226f7"
                alt=""
              />
            </div>

            <h3 className="font-mono text-2xl text-gray-800 font-medium">
              Giant Panda Facts
            </h3>
            <p className="">
              <li>
                Even though Giant pandas have a carnivore's digestive system, they've evolved to eat bamboo.
              </li>
              <li>
                Giant pandas have "thumbs" - enlongated wrist bones that help them grip bamboo.
              </li>
              <li>
                Giant pandas weigh only a few ounces at birth and grow to be more than 200 pounds.
              </li>
              <li>
                Forests depend on Giant pandas for seed dispersal.
              </li>
              <li>
                Giant panda numbers are increasing, suggesting that conservation measures are working.
              </li>
            </p>
          </div>
        </div>

        <div className="font-medium font-serif text-lg pt-2">References:</div>
        <li>
          <a href="https://www.nature.org/en-us/get-involved/how-to-help/animals-we-protect/giant-panda/">
            The Nature Conservancy, 2022, viewed 4 May.
          </a>
        </li>

        <div className="pt-5 py-2 font-medium font-serif text-gray-700">Updated April 13, 2022 By Juntao Lu</div>
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
