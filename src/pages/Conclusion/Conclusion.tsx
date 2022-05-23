import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import YoutubeEmbed from '../../components/embed/YoutubeEmbed'

export default function Conclusion() {
  const navigate = useNavigate()

  return (
    <div className="base-box items-start">
      <YoutubeEmbed embedId={'dqT-UlYlg1s'} />
      <div className="font-mono text-2xl sm:text-4xl py-5 text-gray-800 font-medium">Conclusion about Giant Pandas</div>

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

      <h3 className="font-mono text-2xl text-gray-800 font-medium py-2">
        Evaluate the animal’s welfare response to captivity
      </h3>
      <p>
        According to Dearie(2017), pandas can develop significant—if temporary and highly conditional—relationships with
        humans. But every keeper or expert I spoke with held that those relationships have everything to do with simple
        sustenance. “They’re adaptable, and they know who brings them the food every day. The fondness is for whoever’s
        with them,” MacCorkle says. In other words, even if it’s tempting to coo at a panda, the panda is far more
        interested in who’s bringing dinner. Whatever the reason, the connections that pandas form with humans don’t
        last long. Driven as they are by their appetites, they’re drawn to those who are close.
      </p>

      <h3 className="font-mono text-2xl text-gray-800 font-medium py-2">
        ZOOS SOUTH AUSTRALIA
      </h3>

      <p>The Giant Panda lives in a few mountain ranges in central China, mainly in Sichuan Province. Because of China’s
        dense and growing human population, many panda populations are isolated in narrow belts of bamboo no more than
        1.2km wide. Despite some conservation successes in the rehabilitation of panda habitat in recent years, the
        pressing threat from habitat loss and fragmentation persist. Zoos SA is supporting conservation activities in
        the Sichuan Province including habitat protection and rehabilitation, education and community engagement. While
        the Giant Panda is the focus of this work, other species reliant on this habitat also benefit. Zoos SA has
        coordinated several exchanges with conservation workers and researchers from China to learn about conservation
        developments and techniques in Australia that could be extended to other places.</p>

      <h3 className="font-mono text-2xl text-gray-800 font-medium py-2">
        Identify conservation trends and decisions
      </h3>

      <p>
        Giant panda numbers are slowly increasing, but the rare bear is not out of the woods yet. Traditional threats to
        pandas such as poaching appear to be declining, but large-scale disturbances including mining, hydro-power,
        tourism and infrastructure construction are becoming more severe. WWF's 2015-2025 giant panda conservation
        strategy sets the course for panda protection efforts over the next decade and will focus on improving panda
        habitat in a manner that balances conservation with local sustainable development. WWF will cooperate with the
        government as well as working with partners and the public to protect key habitats and ensure a sustainable wild
        giant panda population, and benefit local communities. These conservation efforts will also benefit many other
        rare species of animals and plants that live side-by-side with the pandas, including the endangered takin,
        golden monkey, red panda, and crested ibis.
      </p>

      <h3 className="font-mono text-2xl text-gray-800 font-medium py-2">
        The Sixth Mass Extinction body of knowledge
      </h3>
      <p>
        Periodically, in the vast spans of time that have preceded us, our planet’s living beings have been purged by
        planetary catastrophes so extreme they make your typical Ice Age look like the geological equivalent of a stroll
        in the park. Scientists count just five mass extinctions in an unimaginably long expanse of 450 million years,
        but they warn we may well be entering a sixth.
      </p>
      <div className="font-medium font-serif text-lg pt-2">References:</div>
      <div className="pl-8">
        <li>
          <a
            href="https://www.smithsonianmag.com/smithsonian-institution/its-easy-fall-love-panda-do-they-love-us-back-180962106/">
            Brogan, J., 2017, 'It’s Easy to Fall in Love With a Panda. But Do They Love Us Back?', viewed 5 May.
          </a>
        </li>
        <li>
          <a
            href="https://www.theguardian.com/environment/radical-conservation/2015/oct/20/the-four-horsemen-of-the-sixth-mass-extinction">
            Hance, J., 2015, How humans are driving the sixth mass extinction',viewed 5 May.
          </a>
        </li>
        <li>
          <a
            href="https://wwf.panda.org/discover/knowledge_hub/endangered_species/giant_panda/future/">
            WWF, 2015, 'The future of panda conservation', viewed 5 May.
          </a>
        </li>
        <li>
          <a href="https://www.zoossa.com.au/conservation-programs/giant-panda/">
            ZOOS SOUTH AUSTRALIA, 2022, 'Giant Panda', viewed 5 May.
          </a>
        </li>
      </div>

      <div className="py-2 font-medium font-serif text-gray-700">Updated April 15, 2022 By Runtian Zhang & Luo Li</div>

      <div>
        <li
          className="btn-link underline"
          onClick={() => {
            navigate('/')
          }}>
          Link to homepage
        </li>
        <li
          className="btn-link underline"
          onClick={() => {
            navigate('/characteristic')
          }}>
          Read more about pandas' characteristic
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
