import React from "react";
import {Grid, Image, Label} from "semantic-ui-react";
import {NavLink} from "react-router-dom";

{/*import axios from "axios";
const API_HOST = "http://cdn.dota2.com";
const staticRoot2 = window.django.urls.staticRoot;
var jsonres;
axios.get(`${staticRoot2}dota2assets/heroes.json`).then(result=>{console.log(result.data[1]);});
console.log("HELLO");
console.log(jsonres[1]);*/}


const staticRoot = window.django.urls.staticRoot;
const hero_icon_paths = [
    {key: "Abaddon", value: `${staticRoot}dota2assets/img/heroes/abaddon.png`},
    {key: "Underlord", value: `${staticRoot}dota2assets/img/heroes/abyssal_underlord.png`},
    {key: "Alchemist", value: `${staticRoot}dota2assets/img/heroes/alchemist.png`},
    {key: "Ancient Apparition", value: `${staticRoot}dota2assets/img/heroes/ancient_apparition.png`},
    {key: "Anti-Mage", value: `${staticRoot}dota2assets/img/heroes/antimage.png`},
    {key: "Arc Warden", value: `${staticRoot}dota2assets/img/heroes/arc_warden.png`},
    {key: "Axe", value: `${staticRoot}dota2assets/img/heroes/axe.png`},
    {key: "Bane", value: `${staticRoot}dota2assets/img/heroes/bane.png`},
    {key: "Batrider", value: `${staticRoot}dota2assets/img/heroes/batrider.png`},
    {key: "Beastmaster", value: `${staticRoot}dota2assets/img/heroes/beastmaster.png`},
    {key: "Bloodseeker", value: `${staticRoot}dota2assets/img/heroes/bloodseeker.png`},
    {key: "Bounty Hunter", value: `${staticRoot}dota2assets/img/heroes/bounty_hunter.png`},
    {key: "Brewmaster", value: `${staticRoot}dota2assets/img/heroes/brewmaster.png`},
    {key: "Bristleback", value: `${staticRoot}dota2assets/img/heroes/bristleback.png`},
    {key: "Broodmother", value: `${staticRoot}dota2assets/img/heroes/broodmother.png`},
    {key: "Centaur", value: `${staticRoot}dota2assets/img/heroes/centaur.png`},
    {key: "Chaos Knight", value: `${staticRoot}dota2assets/img/heroes/chaos_knight.png`},
    {key: "Chen", value: `${staticRoot}dota2assets/img/heroes/chen.png`},
    {key: "Clinkz", value: `${staticRoot}dota2assets/img/heroes/clinkz.png`},
    {key: "Crystal Maiden", value: `${staticRoot}dota2assets/img/heroes/crystal_maiden.png`},
    {key: "Dark Seer", value: `${staticRoot}dota2assets/img/heroes/dark_seer.png`},
    {key: "Dazzle", value: `${staticRoot}dota2assets/img/heroes/dazzle.png`},
    {key: "Death Prophet", value: `${staticRoot}dota2assets/img/heroes/death_prophet.png`},
    {key: "Disruptor", value: `${staticRoot}dota2assets/img/heroes/disruptor.png`},
    {key: "Doom Bringer", value: `${staticRoot}dota2assets/img/heroes/doom_bringer.png`},
    {key: "Dragon Knight", value: `${staticRoot}dota2assets/img/heroes/dragon_knight.png`},
    {key: "Drow Ranger", value: `${staticRoot}dota2assets/img/heroes/drow_ranger.png`},
    {key: "Earth Shaker", value: `${staticRoot}dota2assets/img/heroes/earthshaker.png`},
    {key: "Earth Spirit", value: `${staticRoot}dota2assets/img/heroes/earth_spirit.png`},
    {key: "Elder Titan", value: `${staticRoot}dota2assets/img/heroes/elder_titan.png`},
    {key: "Ember Sprit", value: `${staticRoot}dota2assets/img/heroes/ember_spirit.png`},
    {key: "Enchantress", value: `${staticRoot}dota2assets/img/heroes/enchantress.png`},
    {key: "Enigma", value: `${staticRoot}dota2assets/img/heroes/enigma.png`},
    {key: "Faceless Void", value: `${staticRoot}dota2assets/img/heroes/faceless_void.png`},
    {key: "Furion", value: `${staticRoot}dota2assets/img/heroes/furion.png`},
    {key: "Gyrocopter", value: `${staticRoot}dota2assets/img/heroes/gyrocopter.png`},
    {key: "Huskar", value: `${staticRoot}dota2assets/img/heroes/huskar.png`},
    {key: "Invoker", value: `${staticRoot}dota2assets/img/heroes/invoker.png`},
    {key: "Jakiro", value: `${staticRoot}dota2assets/img/heroes/jakiro.png`},
    {key: "Juggernaut", value: `${staticRoot}dota2assets/img/heroes/juggernaut.png`},
    {key: "Keeper of the light", value: `${staticRoot}dota2assets/img/heroes/keeper_of_the_light.png`},
    {key: "Kunkka", value: `${staticRoot}dota2assets/img/heroes/kunkka.png`},
    {key: "Legion Commander", value: `${staticRoot}dota2assets/img/heroes/legion_commander.png`},
    {key: "Leshrac", value: `${staticRoot}dota2assets/img/heroes/leshrac.png`},
    {key: "Lich", value: `${staticRoot}dota2assets/img/heroes/lich.png`},
    {key: "Lifestealer", value: `${staticRoot}dota2assets/img/heroes/life_stealer.png`},
    {key: "Lina", value: `${staticRoot}dota2assets/img/heroes/lina.png`},
    {key: "Lion", value: `${staticRoot}dota2assets/img/heroes/lion.png`},
    {key: "Lone Druid", value: `${staticRoot}dota2assets/img/heroes/lone_druid.png`},
    {key: "Luna", value: `${staticRoot}dota2assets/img/heroes/luna.png`},
    {key: "Lycan", value: `${staticRoot}dota2assets/img/heroes/lycan.png`},
    {key: "Magnus", value: `${staticRoot}dota2assets/img/heroes/magnataur.png`},
    {key: "Medusa", value: `${staticRoot}dota2assets/img/heroes/medusa.png`},
    {key: "Meepo", value: `${staticRoot}dota2assets/img/heroes/meepo.png`},
    {key: "Mirana", value: `${staticRoot}dota2assets/img/heroes/mirana.png`},
    {key: "Monkey King", value: `${staticRoot}dota2assets/img/heroes/monkey_king.png`},
    {key: "Morphling", value: `${staticRoot}dota2assets/img/heroes/morphling.png`},
    {key: "Naga Siren", value: `${staticRoot}dota2assets/img/heroes/naga_siren.png`},
    {key: "Necrolyte", value: `${staticRoot}dota2assets/img/heroes/necrolyte.png`},
    {key: "Nevermore", value: `${staticRoot}dota2assets/img/heroes/nevermore.png`},
    {key: "Night Stalker", value: `${staticRoot}dota2assets/img/heroes/night_stalker.png`},
    {key: "Nyx Assassin", value: `${staticRoot}dota2assets/img/heroes/nyx_assassin.png`},
    {key: "Outworld Devourer", value: `${staticRoot}dota2assets/img/heroes/obsidian_destroyer.png`},
    {key: "Ogre Magi", value: `${staticRoot}dota2assets/img/heroes/ogre_magi.png`},
    {key: "Omniknight", value: `${staticRoot}dota2assets/img/heroes/omniknight.png`},
    {key: "Oracle", value: `${staticRoot}dota2assets/img/heroes/oracle.png`},
    {key: "Phantom Assassin", value: `${staticRoot}dota2assets/img/heroes/phantom_assassin.png`},
    {key: "Phantom Lancer", value: `${staticRoot}dota2assets/img/heroes/phantom_lancer.png`},
    {key: "Phoenix", value: `${staticRoot}dota2assets/img/heroes/phoenix.png`},
    {key: "Puck", value: `${staticRoot}dota2assets/img/heroes/puck.png`},
    {key: "Pudge", value: `${staticRoot}dota2assets/img/heroes/pudge.png`},
    {key: "Pugna", value: `${staticRoot}dota2assets/img/heroes/pugna.png`},
    {key: "Queen of Pain", value: `${staticRoot}dota2assets/img/heroes/queenofpain.png`},
    {key: "Clockwerk", value: `${staticRoot}dota2assets/img/heroes/rattletrap.png`},
    {key: "Razor", value: `${staticRoot}dota2assets/img/heroes/razor.png`},
    {key: "Riki", value: `${staticRoot}dota2assets/img/heroes/riki.png`},
    {key: "Rubick", value: `${staticRoot}dota2assets/img/heroes/rubick.png`},
    {key: "Sandking", value: `${staticRoot}dota2assets/img/heroes/sand_king.png`},
    {key: "Shadow Demon", value: `${staticRoot}dota2assets/img/heroes/shadow_demon.png`},
    {key: "Shadow Shaman", value: `${staticRoot}dota2assets/img/heroes/shadow_shaman.png`},
    {key: "Timbersaw", value: `${staticRoot}dota2assets/img/heroes/shredder.png`},
    {key: "Silencer", value: `${staticRoot}dota2assets/img/heroes/silencer.png`},
    {key: "Wraith King", value: `${staticRoot}dota2assets/img/heroes/skeleton_king.png`},
    {key: "Skywrath Mage", value: `${staticRoot}dota2assets/img/heroes/skywrath_mage.png`},
    {key: "Slardar", value: `${staticRoot}dota2assets/img/heroes/slardar.png`},
    {key: "Slark", value: `${staticRoot}dota2assets/img/heroes/slark.png`},
    {key: "Sniper", value: `${staticRoot}dota2assets/img/heroes/sniper.png`},
    {key: "Spectre", value: `${staticRoot}dota2assets/img/heroes/spectre.png`},
    {key: "Spirit Breaker", value: `${staticRoot}dota2assets/img/heroes/spirit_breaker.png`},
    {key: "Storm Spirit", value: `${staticRoot}dota2assets/img/heroes/storm_spirit.png`},
    {key: "Sven", value: `${staticRoot}dota2assets/img/heroes/sven.png`},
    {key: "Techies", value: `${staticRoot}dota2assets/img/heroes/techies.png`},
    {key: "Templar Assassin", value: `${staticRoot}dota2assets/img/heroes/templar_assassin.png`},
    {key: "Terrorblade", value: `${staticRoot}dota2assets/img/heroes/terrorblade.png`},
    {key: "Tidehunter", value: `${staticRoot}dota2assets/img/heroes/tidehunter.png`},
    {key: "Tinker", value: `${staticRoot}dota2assets/img/heroes/tinker.png`},
    {key: "Tiny", value: `${staticRoot}dota2assets/img/heroes/tiny.png`},
    {key: "Treant", value: `${staticRoot}dota2assets/img/heroes/treant.png`},
    {key: "Troll Warlord", value: `${staticRoot}dota2assets/img/heroes/troll_warlord.png`},
    {key: "Tusk", value: `${staticRoot}dota2assets/img/heroes/tusk.png`},
    {key: "Undying", value: `${staticRoot}dota2assets/img/heroes/undying.png`},
    {key: "Ursa", value: `${staticRoot}dota2assets/img/heroes/ursa.png`},
    {key: "Vengeful Spirit", value: `${staticRoot}dota2assets/img/heroes/vengefulspirit.png`},
    {key: "Venomancer", value: `${staticRoot}dota2assets/img/heroes/venomancer.png`},
    {key: "Viper", value: `${staticRoot}dota2assets/img/heroes/viper.png`},
    {key: "Visage", value: `${staticRoot}dota2assets/img/heroes/visage.png`},
    {key: "Warlock", value: `${staticRoot}dota2assets/img/heroes/warlock.png`},
    {key: "Weaver", value: `${staticRoot}dota2assets/img/heroes/weaver.png`},
    {key: "Windrunner", value: `${staticRoot}dota2assets/img/heroes/windrunner.png`},
    {key: "Winter Wyvern", value: `${staticRoot}dota2assets/img/heroes/winter_wyvern.png`},
    {key: "Io", value: `${staticRoot}dota2assets/img/heroes/wisp.png`},
    {key: "Witch Doctor", value: `${staticRoot}dota2assets/img/heroes/witch_doctor.png`},
    {key: "Zeus", value: `${staticRoot}dota2assets/img/heroes/zuus.png`}
];





class HeroGrid extends React.Component {
    constructor(props) {
        super(props);
        this.rows = [];
    }

    componentWillMount() { 
        var row = [];
        var row_list = [];
        var j = 0;
        for (var i = 0; i < hero_icon_paths.length; i++){
            if (j > 14){
                row_list.push(row);
                row = [];
                j = 0;
            }       
            row.push(
                <Grid.Column key={hero_icon_paths[i].key}>
                    <div className="HeroGrid-wrapper">
                        <div className="HeroGrid-name">
                            <h5>{hero_icon_paths[i].key}</h5>
                        </div>
                        <div className="HeroGrid-hero">
                            <Image src={hero_icon_paths[i].value} as={NavLink} to={"/app/"+hero_icon_paths[i].key}/>
                        </div>
                    </div>
                </Grid.Column>
            );
            j++;
        }
        row_list.push(row);

        for (var i = 0; i < row_list.length; i++){
            this.rows.push(
                <Grid.Row columns={15} key={i.toString()} centered>
                    {row_list[i]}
                </Grid.Row>
            );
        }
    }


	render() {		
    	return (
			<Grid>
		  		{this.rows}
			</Grid>
    	);
  	}
}
 
export default HeroGrid;

