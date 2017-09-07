import React from 'react';
import HeroCard from './components/HeroCard';
import { Image } from "semantic-ui-react";


const staticRoot = window.django.urls.staticRoot;
const hero_portrait_paths = {
	"Abaddon": `${staticRoot}dota2assets/webm/heroes/abaddon.webm`, 
    "Underlord": `${staticRoot}dota2assets/webm/heroes/abyssal_underlord.webm`,
    "Alchemist": `${staticRoot}dota2assets/webm/heroes/alchemist.webm`,
    "Ancient Apparition": `${staticRoot}dota2assets/webm/heroes/ancient_apparition.webm`,
    "Anti-Mage": `${staticRoot}dota2assets/webm/heroes/antimage.webm`,
    "Arc Warden": `${staticRoot}dota2assets/webm/heroes/arc_warden.webm`,
    "Axe": `${staticRoot}dota2assets/webm/heroes/axe.webm`,
    "Bane": `${staticRoot}dota2assets/webm/heroes/bane.webm`,
    "Batrider": `${staticRoot}dota2assets/webm/heroes/batrider.webm`,
    "Beastmaster": `${staticRoot}dota2assets/webm/heroes/beastmaster.webm`,
    "Bloodseeker": `${staticRoot}dota2assets/webm/heroes/bloodseeker.webm`,
    "Bounty Hunter": `${staticRoot}dota2assets/webm/heroes/bounty_hunter.webm`,
    "Brewmaster": `${staticRoot}dota2assets/webm/heroes/brewmaster.webm`,
    "Bristleback": `${staticRoot}dota2assets/webm/heroes/bristleback.webm`,
    "Broodmother": `${staticRoot}dota2assets/webm/heroes/broodmother.webm`,
    "Centaur": `${staticRoot}dota2assets/webm/heroes/centaur.webm`,
    "Chaos Knight": `${staticRoot}dota2assets/webm/heroes/chaos_knight.webm`,
    "Chen": `${staticRoot}dota2assets/webm/heroes/chen.webm`,
    "Clinkz": `${staticRoot}dota2assets/webm/heroes/clinkz.webm`,
    "Crystal Maiden": `${staticRoot}dota2assets/webm/heroes/crystal_maiden.webm`,
    "Dark Seer": `${staticRoot}dota2assets/webm/heroes/dark_seer.webm`,
    "Dazzle": `${staticRoot}dota2assets/webm/heroes/dazzle.webm`,
    "Death Prophet": `${staticRoot}dota2assets/webm/heroes/death_prophet.webm`,
    "Disruptor": `${staticRoot}dota2assets/webm/heroes/disruptor.webm`,
    "Doom Bringer": `${staticRoot}dota2assets/webm/heroes/doom_bringer.webm`,
    "Dragon Knight": `${staticRoot}dota2assets/webm/heroes/dragon_knight.webm`,
    "Drow Ranger": `${staticRoot}dota2assets/webm/heroes/drow_ranger.webm`,
    "Earth Shaker": `${staticRoot}dota2assets/webm/heroes/earthshaker.webm`,
    "Earth Spirit": `${staticRoot}dota2assets/webm/heroes/earth_spirit.webm`,
    "Elder Titan": `${staticRoot}dota2assets/webm/heroes/elder_titan.webm`,
    "Ember Sprit": `${staticRoot}dota2assets/webm/heroes/ember_spirit.webm`,
    "Enchantress": `${staticRoot}dota2assets/webm/heroes/enchantress.webm`,
    "Enigma": `${staticRoot}dota2assets/webm/heroes/enigma.webm`,
    "Faceless Void": `${staticRoot}dota2assets/webm/heroes/faceless_void.webm`,
    "Furion": `${staticRoot}dota2assets/webm/heroes/furion.webm`,
    "Gyrocopter": `${staticRoot}dota2assets/webm/heroes/gyrocopter.webm`,
    "Huskar": `${staticRoot}dota2assets/webm/heroes/huskar.webm`,
    "Invoker": `${staticRoot}dota2assets/webm/heroes/invoker.webm`,
    "Jakiro": `${staticRoot}dota2assets/webm/heroes/jakiro.webm`,
    "Juggernaut": `${staticRoot}dota2assets/webm/heroes/juggernaut.webm`,
    "Keeper of the light": `${staticRoot}dota2assets/webm/heroes/keeper_of_the_light.webm`,
    "Kunkka": `${staticRoot}dota2assets/webm/heroes/kunkka.webm`,
    "Legion Commander": `${staticRoot}dota2assets/webm/heroes/legion_commander.webm`,
    "Leshrac": `${staticRoot}dota2assets/webm/heroes/leshrac.webm`,
    "Lich": `${staticRoot}dota2assets/webm/heroes/lich.webm`,
    "Lifestealer": `${staticRoot}dota2assets/webm/heroes/life_stealer.webm`,
    "Lina": `${staticRoot}dota2assets/webm/heroes/lina.webm`,
    "Lion": `${staticRoot}dota2assets/webm/heroes/lion.webm`,
    "Lone Druid": `${staticRoot}dota2assets/webm/heroes/lone_druid.webm`,
    "Luna": `${staticRoot}dota2assets/webm/heroes/luna.webm`,
    "Lycan": `${staticRoot}dota2assets/webm/heroes/lycan.webm`,
    "Magnus": `${staticRoot}dota2assets/webm/heroes/magnataur.webm`,
    "Medusa": `${staticRoot}dota2assets/webm/heroes/medusa.webm`,
    "Meepo": `${staticRoot}dota2assets/webm/heroes/meepo.webm`,
    "Mirana": `${staticRoot}dota2assets/webm/heroes/mirana.webm`,
    "Monkey King": `${staticRoot}dota2assets/webm/heroes/monkey_king.webm`,
    "Morphling": `${staticRoot}dota2assets/webm/heroes/morphling.webm`,
    "Naga Siren": `${staticRoot}dota2assets/webm/heroes/naga_siren.webm`,
    "Necrolyte": `${staticRoot}dota2assets/webm/heroes/necrolyte.webm`,
    "Nevermore": `${staticRoot}dota2assets/webm/heroes/nevermore.webm`,
    "Night Stalker": `${staticRoot}dota2assets/webm/heroes/night_stalker.webm`,
    "Nyx Assassin": `${staticRoot}dota2assets/webm/heroes/nyx_assassin.webm`,
    "Outworld Devourer": `${staticRoot}dota2assets/webm/heroes/obsidian_destroyer.webm`,
    "Ogre Magi": `${staticRoot}dota2assets/webm/heroes/ogre_magi.webm`,
    "Omniknight": `${staticRoot}dota2assets/webm/heroes/omniknight.webm`,
    "Oracle": `${staticRoot}dota2assets/webm/heroes/oracle.webm`,
    "Phantom Assassin": `${staticRoot}dota2assets/webm/heroes/phantom_assassin.webm`,
    "Phantom Lancer": `${staticRoot}dota2assets/webm/heroes/phantom_lancer.webm`,
    "Phoenix": `${staticRoot}dota2assets/webm/heroes/phoenix.webm`,
    "Puck": `${staticRoot}dota2assets/webm/heroes/puck.webm`,
    "Pudge": `${staticRoot}dota2assets/webm/heroes/pudge.webm`,
    "Pugna": `${staticRoot}dota2assets/webm/heroes/pugna.webm`,
    "Queen of Pain": `${staticRoot}dota2assets/webm/heroes/queenofpain.webm`,
    "Clockwerk": `${staticRoot}dota2assets/webm/heroes/rattletrap.webm`,
    "Razor": `${staticRoot}dota2assets/webm/heroes/razor.webm`,
    "Riki": `${staticRoot}dota2assets/webm/heroes/riki.webm`,
    "Rubick": `${staticRoot}dota2assets/webm/heroes/rubick.webm`,
    "Sandking": `${staticRoot}dota2assets/webm/heroes/sand_king.webm`,
    "Shadow Demon": `${staticRoot}dota2assets/webm/heroes/shadow_demon.webm`,
    "Shadow Shaman": `${staticRoot}dota2assets/webm/heroes/shadow_shaman.webm`,
    "Timbersaw": `${staticRoot}dota2assets/webm/heroes/shredder.webm`,
    "Silencer": `${staticRoot}dota2assets/webm/heroes/silencer.webm`,
    "Wraith King": `${staticRoot}dota2assets/webm/heroes/skeleton_king.webm`,
    "Skywrath Mage": `${staticRoot}dota2assets/webm/heroes/skywrath_mage.webm`,
    "Slardar": `${staticRoot}dota2assets/webm/heroes/slardar.webm`,
    "Slark": `${staticRoot}dota2assets/webm/heroes/slark.webm`,
    "Sniper": `${staticRoot}dota2assets/webm/heroes/sniper.webm`,
    "Spectre": `${staticRoot}dota2assets/webm/heroes/spectre.webm`,
    "Spirit Breaker": `${staticRoot}dota2assets/webm/heroes/spirit_breaker.webm`,
    "Storm Spirit": `${staticRoot}dota2assets/webm/heroes/storm_spirit.webm`,
    "Sven": `${staticRoot}dota2assets/webm/heroes/sven.webm`,
    "Techies": `${staticRoot}dota2assets/webm/heroes/techies.webm`,
    "Templar Assassin": `${staticRoot}dota2assets/webm/heroes/templar_assassin.webm`,
    "Terrorblade": `${staticRoot}dota2assets/webm/heroes/terrorblade.webm`,
    "Tidehunter": `${staticRoot}dota2assets/webm/heroes/tidehunter.webm`,
    "Tinker": `${staticRoot}dota2assets/webm/heroes/tinker.webm`,
    "Tiny": `${staticRoot}dota2assets/webm/heroes/tiny.webm`,
    "Treant": `${staticRoot}dota2assets/webm/heroes/treant.webm`,
    "Troll Warlord": `${staticRoot}dota2assets/webm/heroes/troll_warlord.webm`,
    "Tusk": `${staticRoot}dota2assets/webm/heroes/tusk.webm`,
    "Undying": `${staticRoot}dota2assets/webm/heroes/undying.webm`,
    "Ursa": `${staticRoot}dota2assets/webm/heroes/ursa.webm`,
    "Vengeful Spirit": `${staticRoot}dota2assets/webm/heroes/vengefulspirit.webm`,
    "Venomancer": `${staticRoot}dota2assets/webm/heroes/venomancer.webm`,
    "Viper": `${staticRoot}dota2assets/webm/heroes/viper.webm`,
    "Visage": `${staticRoot}dota2assets/webm/heroes/visage.webm`,
    "Warlock": `${staticRoot}dota2assets/webm/heroes/warlock.webm`,
    "Weaver": `${staticRoot}dota2assets/webm/heroes/weaver.webm`,
    "Windrunner": `${staticRoot}dota2assets/webm/heroes/windrunner.webm`,
    "Winter Wyvern": `${staticRoot}dota2assets/webm/heroes/winter_wyvern.webm`,
    "Io": `${staticRoot}dota2assets/webm/heroes/wisp.webm`,
    "Witch Doctor": `${staticRoot}dota2assets/webm/heroes/witch_doctor.webm`,
    "Zeus": `${staticRoot}dota2assets/webm/heroes/zuus.webm`
};

class HeroPage extends React.Component {

	constructor(props) {
        super(props);
        this.hero_name = this.props.match.params.hero;
        this.portrait_path = hero_portrait_paths[this.hero_name];
	}
	
  	render() {
		const staticRoot = window.django.urls.staticRoot;
    	return (

			<div style={{paddingTop: '40px'}}>
				<div className="HeroPage-header">
					<div style={{textAlign: 'center'}}>
						<h1>{this.hero_name}</h1>
						<video autoPlay loop preload>
		  					<source src={this.portrait_path} type="video/webm"/>
						</video>
						<div style={{paddingTop: '10px'}}>
							<div className="HeroPage-health_bar">
								<h5>200</h5>
							</div>
							<div className="HeroPage-mana_bar">
								<h5>200</h5>
							</div>
							<div style={{width: '234px', margin: '0 auto'}}>
								<Image src={`${staticRoot}dota2assets/img/strength.png`} size="mini"/>
								<Image src={`${staticRoot}dota2assets/img/agility.png`} size="mini"/>
								<Image src={`${staticRoot}dota2assets/img/intelligence.png`} size="mini"/>
							</div>
						</div>
					</div>
				</div>
				<div className="HeroPage-strip_agi"/>					
				<h1> LMAO </h1>
			</div>
            
    	);
  	}
}

export default HeroPage;


{/*<video src={`${staticRoot}dota2assets/npc_dota_hero_queenofpain.webm`} autoplay loop/>*/}

{/*<video autoplay loop>
  					<source src={`${staticRoot}dota2assets/npc_dota_hero_queenofpain.webm`} type="video/webm"/>
				</video>*/}



{/*<Embed
    				url={`${staticRoot}dota2assets/npc_dota_hero_queenofpain.webm`}
  				/>*/}