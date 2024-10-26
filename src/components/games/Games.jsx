import "./Games.css"

import GamesItem from "./games-item/GamesItem";

function Games() {
    return (
    <article data-page="games">

        <header>
          <h2 className="h2 article-title">Game Recs.</h2>
        </header>

        <section className="projects">

          <ul className="game-list">

            <GamesItem category="Rougelike" title="Hades Franchise" 
            postURL="https://www.supergiantgames.com/games/hades/" imageURL="images/games/hades.jpeg" />

            <GamesItem category="SIM/Rougelike" title="Cult of the Lamb" 
            postURL="https://www.cultofthelamb.com/" imageURL="images/games/cult-of-lamb.png" />

            <GamesItem category="RPG" title="Octopath Traveler Franchise" 
            postURL="https://en.wikipedia.org/wiki/Octopath_Traveler" imageURL="images/games/octopath.webp" />

            <GamesItem category="Action" title="Risk of Rain 2" 
            postURL="https://www.riskofrain.com/" imageURL="images/games/ror2.jpg" />

            <GamesItem category="Survival/Strategy" title="Sheltered" 
            postURL="https://store.steampowered.com/app/356040/Sheltered/" 
            imageURL="images/games/sheltered.png" />

            <GamesItem category="Simulation/Strategy" title="Do Not Feed the Monkeys" 
            postURL="https://store.steampowered.com/app/658850/Do_Not_Feed_the_Monkeys/" 
            imageURL="images/games/dnftm.jpeg" />
            
            <GamesItem category="RPG/OpenWorld" title="The Witcher 3: Wild Hunt" 
            postURL="https://www.thewitcher.com/us/en/witcher3" imageURL="images/games/witcher3.png" />

            <GamesItem category="FPS/SIM" title="Sime Rancher Franchise" 
            postURL="https://www.slimerancher.com/" imageURL="images/games/slimerancher.webp" />

            <GamesItem category="Action/RPG" title="Magicite" 
            postURL="https://store.steampowered.com/app/268750/Magicite/" 
            imageURL="images/games/magicite.png" />
          </ul>

        </section>

    </article>
    )
}

export default Games;