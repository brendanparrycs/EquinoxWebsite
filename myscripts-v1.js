"use strict";

const infoArray = [
  // races
  {
    id: "vulpera",
    name: "Vulpera",
    description:
      "Vulpera is the best race you could choose on the Horde. They offer strong damage reducton, along with a single target/group heal <a class='orange' href='https://www.wowhead.com/spell=312411/bag-of-tricks' target='blank'>(Bag of Tricks)</a>.",
  },
  {
    id: "tauren",
    name: "Tauren",
    description:
      "Tauren is the next best option for Horde. They offer an extra aoe CC <a class='orange' href='https://www.wowhead.com/spell=20549/war-stomp' target='_blank'>(War Stomp)</a>, as well as strong passives such as 2% critical strike and a big chunk of stamina.",
  },
  {
    id: "highmountain-tauren",
    name: "Highmountain Tauren",
    description:
      "Highmountain Tauren is almost just as good as Tauren. They, too, offer an aoe CC <a class='orange' href='https://www.wowhead.com/spell=255654/bull-rush' target='_blank'>(Bull Rush)</a>. Additionally, they offer an additional 1% versatility and a flat damage reduction to all sources.",
  },
  {
    id: "belf",
    name: "Blood Elf",
    description:
      "Depending on your group composition, Blood Elves can be your strongest race due to its AOE purge ability <a class='orange' href='https://www.wowhead.com/spell=28730/arcane-torrent' target='_blank'>(Arcane Torrent)</a>. They also give you a flat 1% critical strike increase; I highly recommend picking this race if you want to help your group.",
  },

  {
    id: "dwarf",
    name: "Dwarf",
    description:
      "Dwarf is the strongest defensive race you can choose in the game. Dwarf's racial <a class='orange' href='https://www.wowhead.com/spell=20594/stoneform' target='_blank'>(Stoneform)</a> allows you to remove a multitude of debuffs on yourself, along with a 10% damage reduction for 8 seconds (more covered in the <a href='advanced.html'>advanced section</a> of the guide).",
  },
  {
    id: "darkiron-dwarf",
    name: "Dark Iron Dwarf",
    description:
      "Dark Iron Dwarf is a more offensive version of Dwarf. Similar to Dwarf, Dark Iron Dwarf can dispell themselves through the use of their racial <a class='orange' href='https://www.wowhead.com/spell=265221/fireblood' target='_blank'>(Fireblood)</a>.",
  },
  {
    id: "kultiran",
    name: "Kul Tiran",
    description:
      "Similar to Vulpera, Kul Tirans offer a flat damage reduction. Their racial ability <a class='orange' href='https://www.wowhead.com/spell=287712/haymaker' target='_blank'>(Haymaker)</a> gives you an additional single target stun that also knocks them back.",
  },

  // passives
  {
    id: "stagger",
    name: "<a href='https://www.wowhead.com/spell=124255/stagger' target='_blank'>Stagger</a>",
    description:
      "This passive is what makes Brewmaster unique. It causes you to take all damage over a delayed period of time based off of your agility (more covered in <a href='talents.html'>talents</a>).",
  },
  {
    id: "gotox",
    name: "<a href='https://www.wowhead.com/spell=124502/gift-of-the-ox' target='_blank'>Gift of the Ox</a>",
    description:
      "This passive is your top healing ability. When you take damage, you have a chance to summon an orb that can be absorbed to heal you. Some abilities also have a chance of spawning an orb (more covered in <a href='talents.html' target='_blank'>talents</a>).",
  },
  {
    id: "cf",
    name: "<a href='https://www.wowhead.com/spell=216519/celestial-fortune' target='_blank'>Celestial Fortune</a>",
    description:
      "This passive gives you a chance equal to your critical strike to heal for an additional 80% of the amount healed. It is very strong with healers who can do constant tank healing.",
  },

  // defensives
  {
    id: "eh",
    name: "<a href='https://www.wowhead.com/spell=115072/expel-harm' target='_blank'>Expel Harm</a>",
    description:
      "This ability is one of your primary ways to pull in all of your <a class='orange' href='https://www.wowhead.com/spell=124502/gift-of-the-ox' target='_blank'>Gift of the Ox</a> orbs. If you have enough critical strike, it can also be a strong heal with no <a class='orange' href='https://www.wowhead.com/spell=124502/gift-of-the-ox' target='_blank'>Gift of the Ox</a> orbs (more covered in <a href='talents.html'>talents</a>).",
  },
  {
    id: "purifying-brew",
    name: "<a href='https://www.wowhead.com/spell=119582/purifying-brew' target='_blank'>Purifying Brew</a>",
    description:
      "This ability clears 50% of your total stagger, reducing the amount of damage you take. Anytime you are below max health and have high stagger, you want to use this ability. It can also be used when low on stagger during bosses to buff your <a class='orange' href='https://www.wowhead.com/spell=322507/celestial-brew' target='_blank'>Celestial Brew</a> (more covered in <a href='talents.html'>talents</a>).",
  },
  {
    id: "fort-brew",
    name: "<a href='https://www.wowhead.com/spell=243435/fortifying-brew' target='blank'>Fortifying Brew</a>",
    description:
      "This is your primary defensive. It is most effective for tank busters or on pull to take less damage while gathering mobs.",
  },
  {
    id: "celestial-brew",
    name: "<a href='https://www.wowhead.com/spell=322507/celestial-brew' target='_blank'>Celestial Brew</a>",
    description:
      "This is a nice defensive option when you want to absorb a big hit or have no other defensives available (more covered in <a href='talents.html'>talents</a> and the <a href='advanced.html'>advanced section</a> of the guide.",
  },

  // offensives
  {
    id: "rsk",
    name: "<a href='https://www.wowhead.com/spell=107428/rising-sun-kick' target='_blank'>Rising Sun Kick</a>",
    description:
      "This is your highest single target damage ability and a good filler option in AoE when you don't want to spend energy on a global cooldown.",
  },
  {
    id: "keg-smash",
    name: "<a href='https://www.wowhead.com/spell=121253/keg-smash' target='_blank'>Keg Smash</a>",
    description:
      "This is your most important damaging ability. You want to use it off cooldown to generate AoE threat and reduce your brews' cooldowns. It is also one of your highest damaging abilities in AoE.",
  },
  {
    id: "bok",
    name: "<a href='https://www.wowhead.com/spell=100784/blackout-kick' target='_blank'>Blackout Kick</a>",
    description:
      "This ability procs your mastery and gives you shuffle; use it off cooldown. It also buffs your <a class='orange' href='https://www.wowhead.com/spell=121253/keg-smash' target='_blank'>Keg Smash</a>, <a class='orange' href='https://www.wowhead.com/spell=100780/tiger-palm' target='_blank'>Tiger Palm, and <a class='orange' href='https://www.wowhead.com/spell=115181/breath-of-fire' target='_blank'>Breath of FIre</a>.",
  },
  {
    id: "sck",
    name: "<a href='https://www.wowhead.com/spell=101546/spinning-crane-kick' target='_blank'>Spinning Crane Kick</a>",
    description:
      "This is one of the core components to your rotation in AoE. It does good damage and is a great way to absorb <a class='orange' href='https://www.wowhead.com/spell=124502/gift-of-the-ox' target='_blank'>Gift of the Ox</a> orbs.",
  },
  {
    id: "tp",
    name: "<a href='https://www.wowhead.com/spell=100780/tiger-palm' target='_blank'>Tiger Palm</a>",
    description:
      "This spell was very important in Shadowlands for light cooldown reduction on your brews, but with the way our class works now in Dragonflight, you only use this in single target when you don't need to absorb <a class='orange' href='https://www.wowhead.com/spell=124502/gift-of-the-ox' target='_blank'>Gift of the Ox</a> orbs via <a class='orange' href='https://www.wowhead.com/spell=101546/spinning-crane-kick' target='_blank'>Spinning Crane Kick</a>.",
  },
  {
    id: "bof",
    name: "<a href='https://www.wowhead.com/spell=115181/breath-of-fire' target='_blank'>Breath of Fire</a>",
    description:
      "This ability does a decent amount of damage and makes all enemies that are hit deal 5% reduced damage to you (more covered in <a href='talents.html'>talents</a>).",
  },

  // class talents
  {
    id: "soothing-mist",
    name: "<a href='https://www.wowhead.com/spell=115175/soothing-mist' target='_blank'>Soothing Mist</a>",
    description:
      "Unfortunately, we are required to take this in order to access several important talents later in the tree. This ability will never be used.",
    value: "Required",
  },
  {
    id: "rsk-talent",
    name: "<a href='https://www.wowhead.com/spell=107428/rising-sun-kick' target='_blank'>Rising Sun Kick</a>",
    description:
      "This is your highest single target damage ability and a good filler option in AoE when you don't want to spend energy on a global cooldown.",
    value: "Required",
  },
  {
    id: "tigers-lust",
    name: "<a href='https://www.wowhead.com/spell=116841/tigers-lust' target='_blank'>Tiger's Lust</a>",
    description:
      "A very nice movement ability that also removes snares and roots. You can use it on yourself or allies depending on the situation.",
    value: "Required",
  },

  {
    id: "improved-roll",
    name: "<a href='https://www.wowhead.com/spell=328669/improved-roll' target='_blank'>Improved Roll</a>",
    description:
      "A nice talent that can occasionally be taken for an extra movement ability. If you take this talent with <a href='https://www.wowhead.com/spell=115173/celerity' target='_blank' class='orange'>Celerity</a>, you gain three charges of <a href='https://www.wowhead.com/spell=109132/roll' target='_blank' class='orange'>Roll</a>. If you take this talent with <a href='https://www.wowhead.com/spell=115008/chi-torpedo' target='_blank' class='orange'>Chi Torpedo</a>, you gain two charges of <a href='https://www.wowhead.com/spell=115008/chi-torpedo' target='_blank' class='orange'>Chi Torpedo</a>.",
    value: "Optional",
  },
  {
    id: "calming-presence",
    name: "<a href='https://www.wowhead.com/spell=388664/calming-presence' target='_blank'>Calming Presence</a>",
    description: "Gives us a 3% damage reduction to all sources.",
    value: "Required",
  },
  {
    id: "disable",
    name: "<a href='https://www.wowhead.com/spell=116095/disable' target='_blank'>Disable</a>",
    description:
      "A single target snare which is practically useless due to <a href='https://www.wowhead.com/spell=121253/keg-smash' target='_blank' class='orange'>Keg Smash</a> already snaring enemies.",
    value: "Never",
  },

  {
    id: "tiger-tail-sweep",
    name: "<a href='https://www.wowhead.com/spell=264348/tiger-tail-sweep' target='_blank'>Tiger Tail Sweep</a>",
    description:
      "This talent reduces the cooldown and range of <a href='https://www.wowhead.com/spell=119381/leg-sweep' target='_blank' class='orange'>Leg Sweep</a>, which could be useful at times, but, unfortunately, we don't have enough points to grab this along with the better talents in our tree.",
    value: "Never",
  },
  {
    id: "vigorous-expulsion",
    name: "<a href='https://www.wowhead.com/spell=392900/vigorous-expulsion' target='_blank'>Vigorous Expulsion</a>",
    description:
      "This talent is really good. It increases our <a href='https://www.wowhead.com/spell=115072/expel-harm' target='_blank' class='orange'>Expel Harm's</a> healing and critical strike chance, making it also really effective with no <a href='https://www.wowhead.com/spell=124502/gift-of-the-ox' target='_blank' class='orange'>Gift of the Ox</a> orbs.",
    value: "Required",
  },
  {
    id: "improved-vivify",
    name: "<a href='https://www.wowhead.com/spell=231602/improved-vivify' target='_blank'>Improved Vivify</a>",
    description:
      "While this talent makes <a href='https://www.wowhead.com/spell=116670/vivify' target='_blank' class='orange'>Vivify</a> do a lot more healing, it is not worth taking as we can't dodge enemy's attacks when casting.",
    value: "Never",
  },
  {
    id: "detox",
    name: "<a href='https://www.wowhead.com/spell=218164/detox' target='_blank'>Detox</a>",
    description:
      "This talent is a dispel that can cleanse poison and disease effects. We take this talent whenever there are debuffs that we can dispel off of ourselves or allies.",
    value: "Situational",
  },
  {
    id: "paralysis",
    name: "<a href='https://www.wowhead.com/spell=115078/paralysis' target='_blank'>Paralysis</a>",
    description:
      "This is a cc which can be used in many different ways. We can use it to interrupt mobs, cc ads, or do certain skips (more covered in the <a href='advanced.html'>advanced section</a> of the guide).",
    value: "Required",
  },

  {
    id: "grace-of-the-crane",
    name: "<a href='https://www.wowhead.com/spell=388811/grace-of-the-crane' target='_blank'>Grace of the Crane</a>",
    description:
      "This increases all healing we receive by 8%, making us much more survivable.",
    value: "Required",
  },
  {
    id: "vivacious-vivification",
    name: "<a href='https://www.wowhead.com/spell=388812/vivacious-vivification' target='_blank'>Vivacious Vivification</a>",
    description:
      "This talent makes our vivify instant cast every 10 seconds. There are much better healing talents that we can take instead of the vivify talents, so we skip over this, too.",
    value: "Never",
  },
  {
    id: "ferocity-of-xuen",
    name: "<a href='https://www.wowhead.com/spell=388674/ferocity-of-xuen' target='_blank'>Ferocity of Xuen</a>",
    description:
      "This talent increases all damage we deal by 4%, which is very good.",
    value: "Required",
  },
  {
    id: "improved-paralysis",
    name: "<a href='https://www.wowhead.com/spell=344359/improved-paralysis' target='_blank'>Improved Paralysis</a>",
    description:
      "This talent allows us to use <a href='https://www.wowhead.com/spell=115078/paralysis' target='_blank' class='orange'>Paralysis</a> more frequently while also branching into important talents such as <a href='https://www.wowhead.com/spell=243435/fortifying-brew' target='_blank' class='orange'>Fortifying Brew</a>.",
    value: "Required",
  },

  {
    id: "elusive-mists",
    name: "<a href='https://www.wowhead.com/spell=388681/elusive-mists' target='_blank'>Elusive Mists</a>",
    description:
      "This talent gives us 6% damage reduction while channeling <a href='https://www.wowhead.com/spell=115175/soothing-mist' target='_blank' class='orange'>Soothing Mist</a>, which is really bad considering we never channel <a href='https://www.wowhead.com/spell=115175/soothing-mist' target='_blank' class='orange'>Soothing Mist</a>.",
    value: "Never",
  },
  {
    id: "transcendence",
    name: "<a href='https://www.wowhead.com/spell=101643/transcendence' target='_blank'>Transcendence</a>",
    description:
      "This talent allows us to place a spirit of ourselves down, which we can then teleport back to whenever we want, so long as we are in range. This can be used as an additional movement ability when kiting mobs, losing packs, or dodging mechanics.",
    value: "Required",
  },
  {
    id: "spear-hand-strike",
    name: "<a href='https://www.wowhead.com/spell=116705/spear-hand-strike' target='_blank'>Spear Hand Strike</a>",
    description:
      "This is our interrupt which is a must take whenever there is something that is interruptible.",
    value: "Situational",
  },
  {
    id: "fort-brew-talent",
    name: "<a href='https://www.wowhead.com/spell=243435/fortifying-brew' target='_blank'>Fortifying Brew</a>",
    description:
      "This is your primary defensive. It is most effective for tank busters or on pull to take less damage while gathering mobs.",
    value: "Required",
  },

  {
    id: "chi-wave-burst",
    name: "<a href='https://www.wowhead.com/spell=115098/chi-wave' target='_blank'>Chi Wave</a> <span class='white'>/</span> <a href='https://www.wowhead.com/spell=123986/chi-burst' target='_blank'>Chi Burst</a>",
    description:
      "Both of these talents aren't the most useful, but they allow us to branch to some very important healing talents. <a href='https://www.wowhead.com/spell=115098/chi-wave' target='_blank' class='orange'>Chi Wave</a> provides more single target damage and healing, along with the ability to pull packs from ranged, while <a href='https://www.wowhead.com/spell=123986/chi-burst' target='_blank' class='orange'>Chi Burst</a> does more damage on AoE. You can use one of these abilities whenever you don't want to spend energy on a global cooldown.",
    value: "Required",
  },
  {
    id: "hasty-provocation",
    name: "<a href='https://www.wowhead.com/spell=328670/hasty-provocation' target='_blank'>Hasty Provocation</a>",
    description:
      "This talent makes our taunt, <a href='https://www.wowhead.com/spell=115546/provoke' target='_blank' class='orange'>Provoke</a>, increase how fast the target runs at us. It can be very nice when we need to taunt bosses on high movement fights.",
    value: "Optional",
  },
  {
    id: "ring-song",
    name: "<a href='https://www.wowhead.com/spell=116844/ring-of-peace' target='_blank'>Ring of Peace</a> <span class='white'>/</span> <a href='https://www.wowhead.com/spell=198898/song-of-chi-ji' target='_blank'>Song of Chi-Ji</a>",
    description:
      "<a href='https://www.wowhead.com/spell=116844/ring-of-peace' target='_blank' class='orange'>Ring of Peace</a> is a million times better than <a href='https://www.wowhead.com/spell=198898/song-of-chi-ji' target='_blank' class='orange'>Song of Chi-Ji</a>. <a href='https://www.wowhead.com/spell=116844/ring-of-peace' target='_blank' class='orange'>Ring of Peace</a> gives us an option to AoE knock mobs, which can be used as an interrupt, cc, or a tool for kiting. <a href='https://www.wowhead.com/spell=198898/song-of-chi-ji' target='_blank' class='orange'>Song of Chi-Ji</a> gives us an AoE cc, with the downside of us having to cast it, where we can be left vulnerable to attacks.",
    value: "Situational",
  },
  {
    id: "fast-feet",
    name: "<a href='https://www.wowhead.com/spell=388809/fast-feet' target='_blank'>Fast Feet</a>",
    description:
      "This talent is amazing. It gives a big damage boost to our highest damaging single target ability, <a href='https://www.wowhead.com/spell=107428/rising-sun-kick' target='_blank' class='orange'>Rising Sun Kick</a>, along with increasing <a href='https://www.wowhead.com/spell=101546/spinning-crane-kick' target='_blank' class='orange'>Spinning Crane Kick's</a> damage, too.",
    value: "Required",
  },
  {
    id: "celerity-torpedo",
    name: "<a href='https://www.wowhead.com/spell=115173/celerity' target='_blank'>Celerity</a> <span class='white'>/</span> <a href='https://www.wowhead.com/spell=115008/chi-torpedo' target='_blank'>Chi Torpedo</a>",
    description:
      "<a href='https://www.wowhead.com/spell=115173/celerity' target='_blank' class='orange'>Celerity</a> is just a better version of <a href='https://www.wowhead.com/spell=328669/improved-roll' target='_blank' class='orange'>Improved Roll</a>. Not only does it give us an additional charge of <a href='https://www.wowhead.com/spell=109132/roll' target='_blank' class='orange'>Roll</a>, but it also reduces its cooldown. <a href='https://www.wowhead.com/spell=115008/chi-torpedo' target='_blank' class='orange'>Chi Torpedo</a> can be taken over <a href='https://www.wowhead.com/spell=115173/celerity' target='_blank' class='orange'>Celerity</a> if you prefer it, but it is recommended that you take <a href='https://www.wowhead.com/spell=328669/improved-roll' target='_blank' class='orange'>Improved Roll</a> along with it, or else you will only have one charge.",
    value: "Optional",
  },
  {
    id: "ironshell-expeditious",
    name: "<a href='https://www.wowhead.com/spell=388814/ironshell-brew' target='_blank'>Ironshell Brew <span class='white'>/</span> <a href='https://www.wowhead.com/spell=388813/expeditious-fortification' target='_blank'>Expeditious Fortification</a>",
    description:
      "Both of these talents are very good. <a href='https://www.wowhead.com/spell=388814/ironshell-brew' target='_blank' class='orange'>Ironshell Brew</a> can be taken whenever you want your <a href='https://www.wowhead.com/spell=243435/fortifying-brew' target='_blank' class='orange'>Fortifying Brew</a> to be a stronger defensive and <a href='https://www.wowhead.com/spell=388813/expeditious-fortification' target='_blank' class='orange'>Expeditious Fortification</a> is taken otherwise to reduce its cooldown. In the current season, <a href='https://www.wowhead.com/spell=388813/expeditious-fortification' target='_blank' class='orange'>Expeditious Fortification</a> comes out on top in almost all situations.",
    value: "Required",
  },

  {
    id: "profound-rebuttal",
    name: "<a href='https://www.wowhead.com/spell=392910/profound-rebuttal' target-'_blank'>Profound Rebuttal</a>",
    description:
      "This talent increases the critical healing of <a href='https://www.wowhead.com/spell=115072/expel-harm' target='_blank' class='orange'>Expel Harm</a>, further making it an extremely strong self heal.",
    value: "Required",
  },
  {
    id: "yulon-diffuse",
    name: "<a href='https://www.wowhead.com/spell=414131/yulons-grace' target='_blank'>Yu'lon's Grace</a> <span class='white'>/</span> <a href='https://www.wowhead.com/spell=122783/diffuse-magic' target='_blank'>Diffuse Magic</a>",
    description:
      "This talent node swaps based on the situation. When there are hard hitting magic attacks that you need a defensive to survive, or there is a strong magic debuff that you can dispel off of yourself, you take <a href='https://www.wowhead.com/spell=122783/diffuse-magic' target='_blank' class='orange'>Diffuse Magic</a>. Otherwise, if you just want a flat magic damage reduction, you take <a href='https://www.wowhead.com/spell=414131/yulons-grace' target='_blank' class='orange'>Yu'lon's Grace</a>.",
    value: "Required",
  },
  {
    id: "eye-of-the-tiger",
    name: "<a href='https://www.wowhead.com/spell=196607/eye-of-the-tiger' target='_blank'>Eye of the Tiger</a>",
    description:
      "This talent gives a very small damage increase to your tiger palm. If you are trying to parse in raid on single target fights, you can take this talent.",
    value: "Optional",
  },
  {
    id: "dance-wind-dampen",
    name: "<a href='https://www.wowhead.com/spell=414132/dance-of-the-wind' target='_blank'>Dance of the Wind <span class='white'>/</span> <a href='https://www.wowhead.com/spell=122278/dampen-harm' target='_blank'>Dampen Harm</a>",
    description:
      "Your choice with this node depends on your current needs. If you want a base dodge increase, you take <a href='https://www.wowhead.com/spell=414132/dance-of-the-wind' target='_blank' class='orange'>Dance of the Wind</a>. If you are expecting very large hits, you take <a href='https://www.wowhead.com/spell=122278/dampen-harm' target='_blank' class='orange'>Dampen Harm</a>. In a mythic+ environment, you typically only run <a href='https://www.wowhead.com/spell=414132/dance-of-the-wind' target='_blank' class='orange'>Dance of the Wind</a>. Occasionally, in raid, you may want to run <a href='https://www.wowhead.com/spell=122278/dampen-harm' target='_blank' class='orange'>Dampen Harm</a>.",
    value: "Required",
  },
  {
    id: "improved-tod",
    name: "<a href='https://www.wowhead.com/spell=322113/improved-touch-of-death' target='_blank'>Improved Touch of Death</a>",
    description:
      "This talent serves no purpose in mythic+ as we always want to ensure that we kill the mob with <a href='https://www.wowhead.com/spell=115080/touch-of-death' target='_blank' class='orange'>Touch of Death</a>. In raid, however, this talent can be taken for parsing on pure single target bosses.",
    value: "Optional",
  },
  {
    id: "strength-of-spirit",
    name: "<a href='https://www.wowhead.com/spell=387276/strength-of-spirit' target='_blank'>Strength of Spirit</a>",
    description:
      "This talent is what makes <a href='https://www.wowhead.com/spell=115072/expel-harm' target='_blank' class='orange'>Expel Harm's</a> base healing so powerful. It will do increased healing based on 100% of your missing health.",
    value: "Required",
  },

  {
    id: "close-to-heart",
    name: "<a href='https://www.wowhead.com/spell=389574/close-to-heart' target='_blank'>Close to Heart</a>",
    description:
      "This talent is extremely strong and is one of Monk's group buffs. Not only does it increase all healing that you receive by 8%, but it increases the healing that your allies receive, too.",
    value: "Optional",
  },
  {
    id: "escape-from-reality",
    name: "<a href='https://www.wowhead.com/spell=394110/escape-from-reality' target='_blank'>Escape from Reality</a>",
    description:
      "This talent allows you to use <a href='https://www.wowhead.com/spell=101643/transcendence' target='_blank' class='orange'>Transcendence</a> again within 10 seconds of your first use. This can be really helpful on certain raid fights where you have to run a tank mechanic out and then come back in.",
    value: "Situational",
  },
  {
    id: "windwalking",
    name: "<a href='https://www.wowhead.com/spell=157411/windwalking' target='_blank'>Windwalking</a>",
    description:
      "This talent grants you and your allies a 4% speed increase, which could be really nice on high movement fights, but it requires a lot of points to get, making it not worth it.",
    value: "Never",
  },
  {
    id: "fatal-touch",
    name: "<a href='https://www.wowhead.com/spell=394123/fatal-touch' target='_blank'>Fatal Touch</a>",
    description:
      "This talent reduces <a href='https://www.wowhead.com/spell=115080/touch-of-death' target='_blank' class='orange'>Touch of Death's</a> cooldown by 90 seconds, which is really good because it allows us to have an instant finisher for really tough mobs more frequently.",
    value: "Required",
  },
  {
    id: "generous-pour",
    name: "<a href='https://www.wowhead.com/spell=389575/generous-pour' target='_blank'>Generous Pour</a>",
    description:
      "This talent can be taken to give you and your allies a 4% damage reduction to AoE attacks, which should be run on any progression raid fights. If you want to run this in mythic+, you may have to sacrifice a little bit of damage or utility which typically isn't worth it.",
    value: "Optional",
  },

  {
    id: "save-them-all",
    name: "<a href='https://www.wowhead.com/spell=389579/save-them-all' target='_blank'>Save them All</a>",
    description:
      "This talent may sound strong, but we have no reliant way of healing our allies, so it's not worth putting points into.",
    value: "Never",
  },
  {
    id: "resonant-fists",
    name: "<a href='https://www.wowhead.com/spell=389578/resonant-fists' target='_blank'>Resonant Fists</a>",
    description:
      "This talent is amazing. It gives all of our attacks a chance to radiate AoE damage, and is one of our top damaging abilities on large AoE packs.",
    value: "Required",
  },
  {
    id: "bounce-back",
    name: "<a href='https://www.wowhead.com/spell=389577/bounce-back' target='_blank'>Bounce Back</a>",
    description:
      "This talent would be good, but due to our health being very jumpy, especially on pull, it tends to proc when just gathering mobs. The only time you will run it is when you want to run <a href='https://www.wowhead.com/spell=115315/summon-black-ox-statue' target='_blank' class='orange'>Summon Black Ox Statue</a> in Atal'dazar.",
    value: "Situational",
  },

  {
    id: "serpent-statue",
    name: "<a href='https://www.wowhead.com/spell=115313/summon-jade-serpent-statue' target='_blank'>Summon Jade Serpent Statue</a>",
    description:
      "This talent requires a lot of points to get to and doesn't do enough healing to make it worth taking. Having to reapply <a href='https://www.wowhead.com/spell=115175/soothing-mist' target='_blank' class='orange'>Soothing Mist</a> to yourself would be really annoying, too.",
    value: "Never",
  },
  {
    id: "tiger-statue",
    name: "<a href='https://www.wowhead.com/spell=388686/summon-white-tiger-statue' target='_blank'>Summon White Tiger Statue</a>",
    description:
      "This talent does a lot of damage. On high AoE packs, if you ramp properly (more discussed in the <a href='playstyle.html'>playstyle & rotation</a> section), it can be one of your top damaging abilities. On single target, it is a nice passive damage buff to just quickly place down.",
    value: "Required",
  },
  {
    id: "ox-statue",
    name: "<a href='https://www.wowhead.com/spell=115315/summon-black-ox-statue' target='_blank'>Summon Black Ox Statue</a>",
    description:
      "This talent pulls aggro onto mobs. You can also taunt the statue to AoE taunt all mobs onto you. Due to Brewmaster easily generating threat, however, this talent is not usually required. There is, however, one situation where you want to run it this season: Atal'dazar. In Atal'dazar, if you place it far out from your group and everyone stacks in melee, the Dazar'ai Juggernauts will charge out to the statue instead of your ranged. This can be extremely beneficial in high keys.",
    value: "Situational",
  },

  // spec talents
  {
    id: "keg-smash-talent",
    name: "<a href='https://www.wowhead.com/spell=121253/keg-smash' target='_blank'>Keg Smash</a>",
    description:
      "This is your most important damaging ability. You want to use it off cooldown to generate AoE threat and reduce your brews' cooldowns. It is also one of your highest damaging abilities in AoE.",
    value: "Required",
  },

  {
    id: "purifying-brew-talent",
    name: "<a href='https://www.wowhead.com/spell=119582/purifying-brew' target='_blank'>Purifying Brew</a>",
    description:
      "This ability clears 50% of your total stagger, reducing the amount of damage you take. Anytime you are below max health and have high stagger, you want to use this ability. It can also be used when low on stagger during bosses to buff your <a class='orange' href='https://www.wowhead.com/spell=322507/celestial-brew' target='_blank'>Celestial Brew</a>.",
    value: "Required",
  },
  {
    id: "shuffle-talent",
    name: "<a href='https://www.wowhead.com/spell=322120/shuffle' target='_blank'>Shuffle</a>",
    description: "This talent just makes our stagger work.",
    value: "Required",
  },

  {
    id: "staggering-strikes",
    name: "<a href='https://www.wowhead.com/spell=387625/staggering-strikes' target='_blank'>Staggering Strikes</a>",
    description:
      "This talent causes our <a href='https://www.wowhead.com/spell=100784/blackout-kick' target='_blank' class='orange'>Blackout Kick</a> to decrease our stagger by a small amount. Unfortunately, the stagger reduction is so small that we do not ever run this talent.",
    value: "Never",
  },
  {
    id: "gotox-talent",
    name: "<a href='https://www.wowhead.com/spell=124502/gift-of-the-ox' target='_blank'>Gift of the Ox</a>",
    description:
      "This passive is your top healing ability. When you take damage, you have a chance to summon an orb that can be absorbed to heal you.",
    value: "Required",
  },
  {
    id: "spirit-of-the-ox",
    name: "<a href='https://www.wowhead.com/spell=400629/spirit-of-the-ox' target='_blank'>Spirit of the Ox</a>",
    description:
      "This talent gives <a href='https://www.wowhead.com/spell=100784/blackout-kick' target='_blank' class='orange'>Blackout Kick</a> and <a href='https://www.wowhead.com/spell=107428/rising-sun-kick' target='_blank' class='orange'>Rising Sun Kick</a> a chance to spawn a <a href='https://www.wowhead.com/spell=124502/gift-of-the-ox' target='_blank' class='orange'>Gift of the Ox</a> orb, allowing us to heal more frequently.",
    value: "Required",
  },
  {
    id: "quick-sip",
    name: "<a href='https://www.wowhead.com/spell=388505/quick-sip' target='_blank'>Quick Sip</a>",
    description:
      "This talent is just a nice way to decrease the amount of stagger we have at all times.",
    value: "Required",
  },

  {
    id: "hit-scheme",
    name: "<a href='hhttps://www.wowhead.com/spell=383695/hit-scheme' target='_blank'>Hit Scheme</a>",
    description:
      "This talent is a massive damage increase. It makes our <a href='https://www.wowhead.com/spell=100784/blackout-kick' target='_blank' class='orange'>Blackout Kick</a> increase the damage of our next <a href='https://www.wowhead.com/spell=121253/keg-smash' target='_blank' class='orange'>Keg Smash</a> by 10%, stacking up to 4 times.",
    value: "Required",
  },
  {
    id: "healing-elixir",
    name: "<a href='https://www.wowhead.com/spell=122281/healing-elixir' target='_blank'>Healing Elixir</a>",
    description:
      "This talent does way too little healing for a 30 second cooldown; we have many different talent options.",
    value: "Never",
  },
  {
    id: "delivery-rushing",
    name: "<a href='https://www.wowhead.com/spell=196730/special-delivery' target='_blank'>Special Delivery</a> <span class='white'>/</span> <a href='https://www.wowhead.com/spell=116847/rushing-jade-wind' target='_blank'>Rushing Jade Wind</a>",
    description:
      "Both of these talents do very good damage. <a href='https://www.wowhead.com/spell=196730/special-delivery' target='_blank' class='orange'>Special Delivery</a> makes us drop a keg from the air whenever we purify our stagger, while <a href='https://www.wowhead.com/spell=116847/rushing-jade-wind' target='_blank' class='orange'>Rushing Jade Wind</a> radiates damage around us and is a buff that we have to upkeep. While <a href='https://www.wowhead.com/spell=116847/rushing-jade-wind' target='_blank' class='orange'>Rushing Jade Wind</a> does more damage, <a href='https://www.wowhead.com/spell=196730/special-delivery' target='_blank' class='orange'>Special Delivery</a> is not horrible, so it can be chosen if you want less keybinds to worry about.",
    value: "Required",
  },

  {
    id: "celestial-flames",
    name: "<a href='https://www.wowhead.com/spell=325190/celestial-flames' target='_blank'>Celestial Flames</a>",
    description:
      "This talent applies our <a href='https://www.wowhead.com/spell=115181/breath-of-fire' target='_blank' class='orange'>Breath of Fire</a> to all targets that are hit by our <a href='https://www.wowhead.com/spell=101546/spinning-crane-kick' target='_blank' class='orange'>Spinning Crane Kick</a>, which serves absolutely no purpose as you can keep <a href='https://www.wowhead.com/spell=115181/breath-of-fire' target='_blank' class='orange'>Breath of Fire</a> up on enemies 100% of the time without it. The extra 5% damage reduction is heavily outweighed by other talents, too.",
    value: "Never",
  },
  {
    id: "celestial-brew-talent",
    name: "<a href='https://www.wowhead.com/spell=322507/celestial-brew' target='_blank'>Celestial Brew</a>",
    description:
      "This is a nice defensive option when you want to absorb a big hit or have no other defensives available.",
    value: "Required",
  },
  {
    id: "graceful-exit",
    name: "<a href='https://www.wowhead.com/spell=387256/graceful-exit' target='_blank'>Graceful Exit</a>",
    description:
      "Whenever you dodge an enemies attack, this talent increases your movement speed by 10% for 3 seconds stacking up to 3 times. Although this talent is fun because you move around really fast, it serves no purpose as we are already very mobile.",
    value: "Never",
  },
  {
    id: "zen-meditation",
    name: "<a href='https://www.wowhead.com/spell=115176/zen-meditation' target='_blank'>Zen Meditation</a>",
    description:
      "A 60% defensive to all sources that is canceled as soon as we are hit by a melee attack. While it may not sound very useful, it can be utilized in pure magic damage situations and for tank busters (more discussed in the <a href='advanced.html'>advanced section</a> of the guide).",
    value: "Required",
  },
  {
    id: "clash",
    name: "<a href='https://www.wowhead.com/spell=324312/clash' target='_blank'>Clash</a>",
    description:
      "This talent allows us to charge with an enemy, meeting at the halfway point and rooting every other enemy. Unfortunately, there are better talents and we don't have enough talent points to pick it up.",
    value: "Never",
  },

  {
    id: "bof-talent",
    name: "<a href='https://www.wowhead.com/spell=115181/breath-of-fire' target='_blank'>Breath of Fire</a>",
    description:
      "This ability does a decent amount of damage and makes all enemies that are hit deal 5% reduced damage to you.",
    value: "Required",
  },
  {
    id: "improved-celestial-brew",
    name: "<a href='https://www.wowhead.com/spell=322510/improved-celestial-brew' target='_blank'>Improved Celestial Brew</a>",
    description:
      "This talent makes our <a href='https://www.wowhead.com/spell=119582/purifying-brew' target='_blank' class='orange'>Purifying Brew</a> increase the absorb shield of our next <a href='https://www.wowhead.com/spell=322507/celestial-brew' target='_blank' class='orange'>Celestial Brew</a> by up to 200% of our stagger purified, making it a much stronger defensive.",
    value: "Required",
  },
  {
    id: "improved-purifying-brew",
    name: "<a href='https://www.wowhead.com/spell=343743/improved-purifying-brew' target='_blank'>Improved Purifying Brew</a>",
    description:
      "This talent gives our <a href='https://www.wowhead.com/spell=119582/purifying-brew' target='_blank' class='orange'>Purifying Brew</a> 2 charges which is a must-have.",
    value: "Required",
  },
  {
    id: "tranquil-gai",
    name: "<a href='https://www.wowhead.com/spell=393357/tranquil-spirit' target='_blank'>Tranquil Spirit</a> <span class='white'>/</span> <a href='https://www.wowhead.com/spell=383700/gai-plins-imperial-brew' target='_blank'>Gai Plin's Imperial Brew</a>",
    description:
      "<a href='https://www.wowhead.com/spell=393357/tranquil-spirit' target='_blank' class='orange'>Tranquil Spirit</a> causes every <a href='https://www.wowhead.com/spell=124502/gift-of-the-ox' target='_blank' class='orange'>Gift of the Ox</a> orb you consume to reduce your total stagger by 5%. <a href='https://www.wowhead.com/spell=383700/gai-plins-imperial-brew' target='_blank' class='orange'>Gai Plin's Imperial Brew</a> causes you to heal for 25% of the stagger that you purify. While both are strong, the heal from <a href='https://www.wowhead.com/spell=383700/gai-plins-imperial-brew' target='_blank' class='orange'>Gai Plin's Imperial Brew</a> can be very helpful when you are trying to survive.",
    value: "Required",
  },
  {
    id: "fundamental-observation",
    name: "<a href='https://www.wowhead.com/spell=387035/fundamental-observation' target='_blank'>Fundamental Observation</a>",
    description:
      "This talent reduces <a href='https://www.wowhead.com/spell=115176/zen-meditation' target='_blank' class='orange'>Zen Meditation's</a> cooldown by 25%, along with making it not get canceled by moving or receiving melee attacks. Due to us not being able to do damage or healing during this defensive, we don't take it.",
    value: "Never",
  },
  {
    id: "shadowboxing-fluidity",
    name: "<a href='https://www.wowhead.com/spell=387638/shadowboxing-treads' target='_blank'>Shadowboxing Treads</a> <span class='white'>/</span> <a href='https://www.wowhead.com/spell=387230/fluidity-of-motion' target='_blank'>Fluidity of Motion</a>",
    description:
      "<a href='https://www.wowhead.com/spell=387638/shadowboxing-treads' target='_blank' class='orange'>Shadowboxing Treads</a> is extremely powerful, increasing <a href='https://www.wowhead.com/spell=100784/blackout-kick' target='_blank' class='orange'>Blackout Kick's</a> damage by an additional 20% and making it cleave up to three targets. <a href='https://www.wowhead.com/spell=387230/fluidity-of-motion' target='_blank' class='orange'>Fluidity of Motion</a> is really bad however, making our <a href='https://www.wowhead.com/spell=100784/blackout-kick' target='_blank' class='orange'>Blackout Kick</a> do 10% reduced damage, but decreasing its cooldown by 1 second. <a href='https://www.wowhead.com/spell=387638/shadowboxing-treads' target='_blank' class='orange'>Shadowboxing Treads</a> is miles ahead, as this cooldown reduction is just not worth the damage reduction.",
    value: "Required",
  },

  {
    id: "scalding-salabims",
    name: "<a href='https://www.wowhead.com/spell=383698/scalding-brew' target='_blank'>Scalding Brew</a> <span class='white'>/</span> <a href='https://www.wowhead.com/spell=383697/salsalabims-strength' target='_blank'>Sal'salabim's Strength</a>",
    description:
      "Both <a href='https://www.wowhead.com/spell=383698/scalding-brew' target='_blank' class='orange'>Scalding Brew</a> and <a href='https://www.wowhead.com/spell=383697/salsalabims-strength' target='_blank' class='orange'>Sal'salabim's Strength</a> are very good talents. Due to <a href='https://www.wowhead.com/spell=383697/salsalabims-strength' target='_blank' class='orange'>Sal'salabim's Strength</a> synergizing with our builds more, however, we currently take this talent in every build we play.",
    value: "Required",
  },
  {
    id: "fort-brew-determination",
    name: "<a href='https://www.wowhead.com/spell=322960/fortifying-brew-determination' target='_blank'>Fortifying Brew: Determination</a>",
    description:
      "Although this talent makes our stagger more effective during <a href='https://www.wowhead.com/spell=243435/fortifying-brew' target='_blank' class='orange'>Fortifying Brew</a>, it is not worth taking as <a href='https://www.wowhead.com/spell=243435/fortifying-brew' target='_blank' class='orange'>Fortifying Brew</a> is up so little of the time.",
    value: "Never",
  },
  {
    id: "bob-ox-brew",
    name: "<a href='https://www.wowhead.com/spell=280515/bob-and-weave' target='_blank'>Bob and Weave <span class='white'>/</span> <a href='https://www.wowhead.com/spell=115399/black-ox-brew' target='_blank'>Black Ox Brew</a>",
    description:
      "Both of these talents are extremely good. <a href='https://www.wowhead.com/spell=280515/bob-and-weave' target='_blank' class='orange'>Bob and Weave</a> delays the rate at which our stagger damages us, making us overall tankier. <a href='https://www.wowhead.com/spell=115399/black-ox-brew' target='_blank' class='orange'>Black Ox Brew</a> is a cooldown that allows us to reset the cooldown of all of our brews whenever we want. In super high keys, <a href='https://www.wowhead.com/spell=115399/black-ox-brew' target='_blank' class='orange'>Black Ox Brew</a> is basically required to live certain pulls, but <a href='https://www.wowhead.com/spell=280515/bob-and-weave' target='_blank' class='orange'>Bob and Weave</a> can be taken for most key levels if you want less keybinds overall.",
    value: "Required",
  },
  {
    id: "dave",
    name: "<a href='https://www.wowhead.com/spell=132578/invoke-niuzao-the-black-ox' target='_blank'>Invoke Niuzao, the Black Ox</a>",
    description:
      "This talent gives us a cooldown that summons a pet who staggers 25% of our stagger while active. Unfortunately, he is not amazing and we are required to take him to branch down to very important talents. It is best to use him off cooldown.",
    value: "Required",
  },
  {
    id: "light-training",
    name: "<a href='https://www.wowhead.com/spell=325093/light-brewing' target='_blank'>Light Brewing</a> <span class='white'>/</span> <a href='https://www.wowhead.com/spell=383714/training-of-niuzao' target='_blank'>Training of Niuzao</a>",
    description:
      "Both of these talents are extremely powerful. <a href='https://www.wowhead.com/spell=325093/light-brewing' target='_blank' class='orange'>Light Brewing</a> reduces the cooldown of <a href='https://www.wowhead.com/spell=119582/purifying-brew' target='_blank' class='orange'>Purifying Brew</a> and <a href='https://www.wowhead.com/spell=322507/celestial-brew' target='_blank' class='orange'>Celestial Brew</a> by 20%, while <a href='https://www.wowhead.com/spell=383714/training-of-niuzao' target='_blank' class='orange'>Training of Niuzao</a> gives us an extra 15% mastery based on our stagger. Overall, <a href='https://www.wowhead.com/spell=383714/training-of-niuzao' target='_blank' class='orange'>Training of Niuzao</a> is better as it gives us more dodge chance and increased damage. If you want a cooldown reduction on all of your brews, however, <a href='https://www.wowhead.com/spell=325093/light-brewing' target='_blank' class='orange'>Light Brewing</a> is not a bad choice.",
    value: "Required",
  },
  {
    id: "pretense-of-instability",
    name: "<a href='https://www.wowhead.com/spell=393516/pretense-of-instability' target='_blank'>Pretense of Instability</a>",
    description:
      "This talent gives us an extra 15% dodge chance after using <a href='https://www.wowhead.com/spell=119582/purifying-brew' target='_blank' class='orange'>Purifying Brew</a>, helping make us much tankier in melee heavy encounters.",
    value: "Situational",
  },
  {
    id: "counterstrike",
    name: "<a href='https://www.wowhead.com/spell=383785/counterstrike' target='_blank'>Counterstrike</a>",
    description:
      "This talent is a massive damage increase on both single target and AoE. Whenever we dodge an attack, it increases the damage of our next <a href='https://www.wowhead.com/spell=100780/tiger-palm' target='_blank' class='orange'>Tiger Palm</a> or <a href='https://www.wowhead.com/spell=101546/spinning-crane-kick' target='_blank' class='orange'>Spinning Crane Kick</a> by 100%.",
    value: "Required",
  },

  {
    id: "dragonfire-charred",
    name: "<a href='https://www.wowhead.com/spell=383994/dragonfire-brew' target='_blank'>Dragonfire Brew</a> <span class='white'>/</span> <a href='https://www.wowhead.com/spell=386965/charred-passions' target='_blank'>Charred Passions</a>",
    description:
      "Both of these talents are extremely important as they synergize with our tier set and dictate how our build plays. <a href='https://www.wowhead.com/spell=383994/dragonfire-brew' target='_blank' class='orange'>Dragonfire Brew</a> increases the damage of our <a href='https://www.wowhead.com/spell=115181/breath-of-fire' target='_blank' class='orange'>Breath of Fire</a> based on 100% of our stagger, making it an extremely high damaging ability on AoE. <a href='https://www.wowhead.com/spell=386965/charred-passions' target='_blank' class='orange'>Charred Passions</a> makes our <a href='https://www.wowhead.com/spell=115181/breath-of-fire' target='_blank' class='orange'>Breath of Fire</a> apply a buff to ourselves, causing our <a href='https://www.wowhead.com/spell=100784/blackout-kick' target='_blank' class='orange'>Blackout Kick</a> and <a href='https://www.wowhead.com/spell=101546/spinning-crane-kick' target='_blank' class='orange'>Spinning Crane Kick</a> to deal additional fire damage. In mythic+, we tend to take <a href='https://www.wowhead.com/spell=383994/dragonfire-brew' target='_blank' class='orange'>Dragonfire Brew</a>, but, in raid, we tend to take <a href='https://www.wowhead.com/spell=386965/charred-passions' target='_blank' class='orange'>Charred Passions</a>. Ultimately, however, you can take either one you want in all situations.",
    value: "Required",
  },
  {
    id: "high-tolerance",
    name: "<a href='https://www.wowhead.com/spell=196737/high-tolerance' target='_blank'>High Tolerance</a>",
    description:
      "This talent helps delay your stagger and gives you haste based on your current level of stagger. If you want a more simple playstyle, you can sub out certain talents for a point or two into this one.",
    value: "Optional",
  },
  {
    id: "walk-with-the-ox",
    name: "<a href='https://www.wowhead.com/spell=387219/walk-with-the-ox' target='_blank'>Walk with the Ox</a>",
    description:
      "This talent reduces the cooldown of <a href='https://www.wowhead.com/spell=132578/invoke-niuzao-the-black-ox' target='_blank' class='orange'>Invoke Niuzao, the Black Ox</a>, along with increasing his damage. Due to him being very undertuned at the moment, this should never be taken.",
    value: "Never",
  },
  {
    id: "elusive-footwork",
    name: "<a href='https://www.wowhead.com/spell=387046/elusive-footwork' target='_blank'>Elusive Footwork</a>",
    description:
      "This talent makes our <a href='https://www.wowhead.com/spell=100784/blackout-kick' target='_blank' class='orange'>Blackout Kick</a> do 10% additional damage and grant us additional dodge chance, which is very good.",
    value: "Required",
  },
  {
    id: "anvil-stave",
    name: "<a href='https://www.wowhead.com/spell=386937/anvil-stave' target='_blank'>Anvil & Stave</a>",
    description:
      "This talent reduces the cooldown of our brews everytime we dodge an attack, but, unfortunately, it can only occur once every three seconds, making it horrible.",
    value: "Never",
  },
  {
    id: "face-palm",
    name: "<a href='https://www.wowhead.com/spell=389942/face-palm' target='_blank'>Face Palm</a>",
    description:
      "This talent is very strong on single target, buffing our <a href='https://www.wowhead.com/spell=100780/tiger-palm' target='_blank' class='orange'>Tiger Palm</a> damage by a large amount. This should always be taken on single target encounters in raid.",
    value: "Situational",
  },

  {
    id: "bonedust-brew",
    name: "<a href='https://www.wowhead.com/spell=386276/bonedust-brew' target='_blank'>Bondust Brew</a>",
    description:
      "This talent gives us a brew that applies a debuff onto enemies. It does a lot of damage, gives us additional brew cooldown reduction, and even benefits from our brew cooldown reduction abilities.",
    value: "Required",
  },
  {
    id: "improved-dave",
    name: "<a href='https://www.wowhead.com/spell=322740/improved-invoke-niuzao-the-black-ox' target='_blank'>Improved Invoke Niuzao, the Black Ox</a>",
    description:
      "Due to <a href='https://www.wowhead.com/spell=132578/invoke-niuzao-the-black-ox' target='_blank' class='orange'>Invoke Niuzao, the Black Ox</a> being undertuned at the moment, this talent is very bad and should never be taken.",
    value: "Never",
  },
  {
    id: "exploding-keg",
    name: "<a href='https://www.wowhead.com/spell=325153/exploding-keg' target='_blank'>Exploding Keg</a>",
    description:
      "This talent is one of our top damaging abilities. It can be used for large burst damage, especially when we ramp correctly in our Weapon of Order burst windows (more discussed in the <a href='playstyle.html'>playstyle & rotation</a> section).",
    value: "Required",
  },
  {
    id: "blackout-combo",
    name: "<a href='https://www.wowhead.com/spell=196736/blackout-combo' target='_blank'>Blackout Combo</a>",
    description:
      "This talent causes <a href='https://www.wowhead.com/spell=100784/blackout-kick' target='_blank' class='orange'>Blackout Kick</a> to buff the next use of <a href='https://www.wowhead.com/spell=100780/tiger-palm' target='_blank' class='orange'>Tiger Palm</a>, <a href='https://www.wowhead.com/spell=115181/breath-of-fire' target='_blank' class='orange'>Breath of Fire</a>, <a href='https://www.wowhead.com/spell=121253/keg-smash' target='_blank' class='orange'>Keg Smash</a>, <a href='https://www.wowhead.com/spell=322507/celestial-brew' target='_blank' class='orange'>Celestial Brew</a>, or <a href='https://www.wowhead.com/spell=119582/purifying-brew' target='_blank' class='orange'>Purifying Brew</a>. Typically, you want to use this buff on <a href='https://www.wowhead.com/spell=100780/tiger-palm' target='_blank' class='orange'>Tiger Palm</a> for single target damage, <a href='https://www.wowhead.com/spell=115181/breath-of-fire' target='_blank' class='orange'>Breath of Fire</a> for AoE damage and tier set healing, and <a href='https://www.wowhead.com/spell=121253/keg-smash' target='_blank' class='orange'>Keg Smash</a> for additional cooldown reduction on your brews.",
    value: "Required",
  },
  {
    id: "press-woo",
    name: "<a href='https://www.wowhead.com/spell=418359/press-the-advantage' target='_blank'>Press the Advantage</a> <span class='white'>/</span> <a href='https://www.wowhead.com/spell=387184/weapons-of-order' target='_blank'>Weapons of Order</a>",
    description:
      "Unfortunately, there is currently a bug that is causing <a href='https://www.wowhead.com/spell=418359/press-the-advantage' target='_blank' class='orange'>Press the Advantage</a> to not work properly, so we take <a href='https://www.wowhead.com/spell=387184/weapons-of-order' target='_blank' class='orange'>Weapons of Order</a>. <a href='https://www.wowhead.com/spell=387184/weapons-of-order' target='_blank' class='orange'>Weapons of Order</a> is a cooldown that increases our mastery by a large amount and causes our <a href='https://www.wowhead.com/spell=121253/keg-smash' target='_blank' class='orange'>Keg Smash</a> and <a href='https://www.wowhead.com/spell=107428/rising-sun-kick' target='_blank' class='orange'>Rising Sun Kick</a> to apply a debuff to all enemies, causing us to deal 8% additional damage to them, stacking up to 4 times (more discussed in the <a href='playstyle.html'>playstyle & rotation</a> section).",
    value: "Required",
  },

  {
    id: "bountiful-attenuation",
    name: "<a href='https://www.wowhead.com/spell=386949/bountiful-brew' target='_blank'>Bountiful Brew</a> <span class='white'>/</span> <a href='https://www.wowhead.com/spell=386941/attenuation' target='_blank'>Attenuation</a>",
    description:
      "<a href='https://www.wowhead.com/spell=386949/bountiful-brew' target='_blank' class='orange'>Bountiful Brew</a> gives us a chance to cast <a href='https://www.wowhead.com/spell=386276/bonedust-brew' target='_blank' class='orange'>Bonedust Brew</a> on our enemies, providing us with further uptime. <a href='https://www.wowhead.com/spell=386941/attenuation' target='_blank' class='orange'>Attenuation</a> increases the damage and healing of our <a href='https://www.wowhead.com/spell=386276/bonedust-brew' target='_blank' class='orange'>Bonedust Brew</a> by 20%, while also decreasing its cooldown every time it does damage or healing. While both are powerful, <a href='https://www.wowhead.com/spell=386949/bountiful-brew' target='_blank' class='orange'>Bountiful Brew</a> is currently stronger, as it has a relatively high proc chance.",
    value: "Required",
  },
  {
    id: "stormstouts-last-keg",
    name: "<a href='https://www.wowhead.com/spell=383707/stormstouts-last-keg' target='_blank'>Stormstout's Last Keg</a>",
    description:
      "This talent gives our <a href='https://www.wowhead.com/spell=121253/keg-smash' target='_blank' class='orange'>Keg Smash</a> an additional charge and causes it to deal 20% additional damage. This is necessary for AoE, as <a href='https://www.wowhead.com/spell=121253/keg-smash' target='_blank' class='orange'>Keg Smash</a> is one of our highest AoE damaging abilities.",
    value: "Situational",
  },
  {
    id: "call-surge",
    name: "<a href='https://www.wowhead.com/spell=397251/call-to-arms' target='_blank'>Call to Arms</a> <span class='white'>/</span> <a href='https://www.wowhead.com/spell=393400/chi-surge' target='_blank'>Chi Surge</a>",
    description:
      "<a href='https://www.wowhead.com/spell=397251/call-to-arms' target='_blank' class='orange'>Call to Arms</a> is very underwhelming at the moment as it summons an additional <a href='https://www.wowhead.com/spell=132578/invoke-niuzao-the-black-ox' target='_blank' class='orange'>Invoke Niuzao, the Black Ox</a>. <a href='https://www.wowhead.com/spell=393400/chi-surge' target='_blank' class='orange'>Chi Surge</a>, however, does a good amount of single target damage, and should be taken in raid.",
    value: "Situational",
  },

  // stats
  {
    id: "crit-strike",
    name: "Critical Strike",
    description:
      "Critical Strike is strong for us both offensively and defensively, as it increases our <a href='https://www.wowhead.com/spell=216519/celestial-fortune' target='_blank' class='orange'>Celestial Fortune</a> healing. Critical Strike can also make our 2pc healing stronger, as it's based on the damage that you deal.",
  },
  {
    id: "vers",
    name: "Versatility",
    description:
      "You want a high percentage of Versatility because it increases your damage and healing, while also decreasing all damage that you take. This is especially helpful against magic damage, as we can't dodge it and our stagger has reduced effectiveness against it.",
  },
  {
    id: "mast",
    name: "Mastery",
    description:
      "Mastery is good for us because it increases our damage, gives us increased dodge chance, and makes our <a href='https://www.wowhead.com/spell=124502/gift-of-the-ox' target='_blank' class='orange'>Gift of the Ox</a> and <a href='https://www.wowhead.com/spell=322507/celestial-brew' target='_blank' class='orange'>Celestial Brew</a> stronger.",
  },
  {
    id: "haste",
    name: "Haste",
    description:
      "Haste is really bad for us. Unlike other clases, Brewmaster's global cooldown doesn't decrease based on our haste, so it provides no real value.",
  },

  // tier pieces
  {
    id: "tier-helm",
    name: "<a href='https://www.wowhead.com/item=207245/mystic-herons-hatsuburi' target='_blank'>Mystic Heron's Hatsuburi</a>",
    description:
      "You always want to run tier set on your head, as it gives Critical Strike and Versatility, two very good stats for us.",
    value: "Head",
  },
  {
    id: "tier-chest",
    name: "<a href='https://www.wowhead.com/item=207248/mystic-herons-burdens' target='_blank'>Mystic Heron's Burdens</a>",
    description:
      "You always want to run tier set on your chest. While it gives us Haste, it also gives us Versatility, a stat that is much harder to obtain than the others.",
    value: "Chest",
  },
  {
    id: "tier-gloves",
    name: "<a href='https://www.wowhead.com/item=207246/mystic-herons-glovebills' target='_blank'>Mystic Heron's Glovebills</a>",
    description:
      "You always want to run tier set on your gloves, as it gives Critical Strike and Versatility.",
    value: "Hands",
  },
  {
    id: "tier-legs",
    name: "<a href='https://www.wowhead.com/item=207244/mystic-herons-waders' target='_blank'>Mystic Heron's Waders</a>",
    description:
      "You always want to run tier set on your legs because it gives Critical Strike and Mastery.",
    value: "Legs",
  },

  // necks
  {
    id: "ouroboreal-necklet",
    name: "<a href='https://www.wowhead.com/item=210214/ouroboreal-necklet' target='_blank'>Ouroboreal Necklet</a>",
    description:
      "This neck provides us with a lot of Versatility and a little bit of Critical Strike, helping us reach our stat goals. It also has a nice equip effect that makes us gain fire and nature damage shields once every minute. While these shields aren't overly strong, it is a nice little bonus to have on top of this already great neck.",
  },
  {
    id: "torc-of-passed-time",
    name: "<a href='https://www.wowhead.com/item=201759/torc-of-passed-time' target='_blank'>Torc of Passed Time</a>",
    description:
      "This neck is really nice because we can customize its stats. Typically, you will want to always have Critical Strike on it with Versatility or Mastery depending on your needs. If you are really struggling with both Versatility and Mastery, however, you can opt to stat it that way, too.",
  },
  {
    id: "raven-filigree-pendant",
    name: "<a href='https://www.wowhead.com/item=134499/raven-filigree-pendant' target='_blank'>Raven Filigree Pendant</a>",
    description:
      "This neck gives a lot of Versatility and a pretty good amount of Mastery. If you are struggling with both of these stats, but prefer more Versatility than Mastery, then this neck can be a very good option.",
  },
  {
    id: "chain-of-the-green-flight",
    name: "<a href='https://www.wowhead.com/item=137311/chain-of-the-green-flight' target='_blank'>Chain of the Green Flight</a>",
    description:
      "This neck gives a lot of Mastery and a decent amount of Critical Strike. If you are really low on Mastery, this neck can be a good choice.",
  },

  // shoulders
  {
    id: "strigine-epaulets",
    name: "<a href='https://www.wowhead.com/item=207127/strigine-epaulets' target='_blank'>Strigine Epaulets</a>",
    description:
      "These shoulders are our best shoulders. They give a lot of Critical Strike and a good amount of Mastery, which when paired with the rest of our best in slot, gets us the best stats possible.",
  },
  {
    id: "lifebound-shoulderpads",
    name: "<a href='https://www.wowhead.com/item=193406/life-bound-shoulderpads' target='_blank'>Life-Bound Shoulderpads</a>",
    description:
      "These shoulders are craftable, and just like the Torc of Passed Time, their stats can be customized to your needs. These shoulders can be a good option if you can't get good myth track shoulders from your vault or raid.",
  },
  {
    id: "leafmender-mantle",
    name: "<a href='https://www.wowhead.com/item=109937/leafmender-mantle' target='_blank'>Leafmender Mantle</a>",
    description:
      "These shoulders give a good amount of Mastery and a low amount of Versatility. While they're not perfect, they are a good option if you cannot get Strigine Epaulets or the crafted shoulders.",
  },

  // back
  {
    id: "vibrant-wildercloth-shawl",
    name: "<a href='https://www.wowhead.com/ptr-2/item=193511/vibrant-wildercloth-shawl' target='_blank'>Vibrant Wildercloth Shawl</a>",
    description:
      "This cloak is crafted and a very good option because of the ability to customize its stats.",
  },
  {
    id: "inflammable-drapeleaf",
    name: "<a href='https://www.wowhead.com/item=207160/inflammable-drapeleaf' target='_blank'>Inflammable Drapeleaf</a>",
    description:
      "This cloak has a lot of Critical Strike and a good amount of Versatility, helping us reach our stat goals.",
  },
  {
    id: "mantle-of-blazing-sacrifice",
    name: "<a href='https://www.wowhead.com/item=207161/mantle-of-blazing-sacrifice' target='_blank'>Mantle of Blazing Sacrifice</a>",
    description:
      "This cloak has a lot of Mastery and a small amount of Critical Strike, making it a good option when you are a little low on Mastery.",
  },
  {
    id: "periwinkle-cloak",
    name: "<a href='https://www.wowhead.com/item=133180/periwinkle-cloak' target='_blank'>Periwinkle Cloak</a>",
    description:
      "This cloak has a lot of Versatility and Mastery. If you are struggling with both of these stats, then this can be a very good choice.",
  },

  // wrist
  {
    id: "lifebound-bindings",
    name: "<a href='https://www.wowhead.com/item=193419/life-bound-bindings' target='_blank'>Life-Bound Bindings</a>",
    description:
      "These wrists are craftable and, ideally, will be what we put our Toxified Armor Patch on.",
  },
  {
    id: "venerated-raptorhide-bindings",
    name: "<a href='https://www.wowhead.com/item=160214/venerated-raptorhide-bindings' target='_blank'>Venerated Raptorhide Bindings</a>",
    description:
      "These wrists have an almost even amount of Critical Strike and Versatility. They can be a very good option if you can't craft wrists for some reason.",
  },
  {
    id: "chronomancer-stasis-shackles",
    name: "<a href='https://www.wowhead.com/item=207939/chronomancers-stasis-shackles' target='_blank'>Chronomancer's Stasis Shackles</a>",
    description:
      "These wrists have Versatility and Mastery and can be a good alternative to the crafted bracers if you are struggling with these two stats.",
  },
  {
    id: "primordial-serpent-bindings",
    name: "<a href='https://www.wowhead.com/item=207128/primordial-serpents-bindings' target='_blank'>Primordial Serpent's Bindings</a>",
    description:
      "These wrists are very similar to the Chronomancer's Stasis Shackles, but have slightly more Versatility.",
  },

  // waist
  {
    id: "bloody-dragonhide-belt",
    name: "<a href='https://www.wowhead.com/item=207131/bloody-dragonhide-belt' target='_blank'>Bloody Dragonhide Belt</a>",
    description:
      "This belt is really good for us as it gives a lot of Critical Strike and a little bit of Versatility.",
  },
  {
    id: "lifebound-belt",
    name: "<a href='https://www.wowhead.com/item=193407/life-bound-belt' target='_blank'>Life-Bound Belt</a>",
    description:
      "This belt is craftable and can be really good when you want to customize your stats in a specific way. It is also a good choice for your Toxified Armor Patch if you for some reason don't want to put it on your bracers.",
  },
  {
    id: "hound-jowl-waistband",
    name: "<a href='https://www.wowhead.com/item=159341/hound-jowl-waistband' target='_blank'>Hound-Jowl Waistband</a>",
    description:
      "This belt gives a relatively even amount of Versatility and Mastery, a good option when you are struggling with those stats.",
  },

  // feet
  {
    id: "slimy-expulsion-boots",
    name: "<a href='https://www.wowhead.com/item=193451/slimy-expulsion-boots' target='_blank'>Slimy Expulsion Boots</a>",
    description:
      "These boots have good stats for us, helping us get our Versatility and Mastery up. Not only this, but they also have an embellishment attached to them that does good damage on single target, especially when paired with a Toxified Armor Patch. There is no other competitive option for boots becausae of how good these are for us.",
  },

  // rings
  {
    id: "signet-of-titanic-insight",
    name: "<a href='https://www.wowhead.com/item=192999/signet-of-titanic-insight' target='_blank'>Signet of Titanic Insight</a>",
    description:
      "This is our crafted ring. Just like the others we want to customize its stats to our liking. If you have a flavor pocket this can be a really good slot to put it on, too.",
  },
  {
    id: "signet-of-the-last-elder",
    name: "<a href='https://www.wowhead.com/item=207162/signet-of-the-last-elder' target='_blank'>Signet of the Last Elder</a>",
    description:
      "This ring has extremely high Versatility and a low amount of Critical Strike making it a very good option for us.",
  },
  {
    id: "lord-waycrests-signet",
    name: "<a href='https://www.wowhead.com/item=158362/lord-waycrests-signet' target='_blank'>Lord Waycrest's Signet</a>",
    description:
      "This ring has high Critical Strike and a good amount of Versatility. If you are already good on Versatility and prefer more Critical Strike, or you don't have access to raid, this ring is very good.",
  },
  {
    id: "band-of-twisted-bark",
    name: "<a href='https://www.wowhead.com/item=134531/band-of-twisted-bark' target='_blank'>Band of Twisted Bark</a>",
    description:
      "This ring has high Critical Strike and a good amount of Mastery. It is a good option if you want to target these two stats with more focus on Critical Strike.",
  },
  {
    id: "anthias-ring",
    name: "<a href='https://www.wowhead.com/item=133189/anthias-ring' target='_blank'>Anthia's Ring</a>",
    description:
      "This ring has slightly more Critical Strike than Mastery, making it a good option when you need a lot of both stats, but a slight focus on Critical Strike.",
  },

  // weapons
  {
    id: "rashon-the-immortal-blaze",
    name: "<a href='https://www.wowhead.com/item=207793/rashon-the-immortal-blaze' target='_blank'>Rashon, the Immortal Blaze</a>",
    description:
      "While this weapon's stats isn't particularly great for us, it gives us a little bit of Versatility which is better than nothing. What makes this weapon so strong, however, is the equip effect, which gives our abilities a chance to deal extra Shadowflame damage. This weapon is a very nice dps boost, especially on single target.",
  },
  {
    id: "thorncaller-gholak",
    name: "<a href='https://www.wowhead.com/item=207784/thorncaller-claw' target='_blank'>Thorncaller Claw</a> <span class='white'>/</span> <a href='https://www.wowhead.com/item=207786/gholak-the-final-conflagration' target='_blank'>Gholak, the Final Conflagration</a>",
    description:
      "Thorncaller Claw is a very strong weapon, especially on AoE, providing a nice damage boost. While Gholak, the Final Conflagration is a strength weapon, its equip effect is very similar to Rashon, the Immortal Blaze. When combined with the Thorncaller Claw, especially, we gain a lot of damage through the two equip effects. The only downside of this combo is that we miss out on some secondaries and primary stat.",
  },
  {
    id: "thorncaller-bonesplitter",
    name: "<a href='https://www.wowhead.com/item=207784/thorncaller-claw' target='_blank'>Thorncaller Claw</a> <span class='white'>/</span> <a href='https://www.wowhead.com/item=207992/fallen-drakes-bonesplitter' target='_blank'>Fallen Drake's Bonesplitter</a>",
    description:
      "Although not as strong as the Thorncaller Claw and Gholak, the Final Conflagration combo, this combo is still very strong. Fallen Drake's Bonesplitter helps us with the lost secondary stats from Thorncaller Claw. Due to Gholak, the Final Conflagration's proc damage being so high, however, it is not quite as good.",
  },
  {
    id: "borrowed-time",
    name: "<a href='https://www.wowhead.com/item=207987/borrowed-time' target='_blank'>Borrowed Time</a>",
    description:
      "This weapon is a very nice option, especially if you don't have access to raid loot. Just like Rashon, the Immortal Blaze, it gives us Haste and Versatility, which isn't perfect, but its equip effect is very strong. This equip effect gives our abilities a chance to duplicate a little bit of their damage, doing a little bit less damage than Rashon, the Immortal Blaze's equip effect.",
  },
  {
    id: "blightreaper",
    name: "<a href='https://www.wowhead.com/item=159662/blightreaper' target='_blank'>Blightreaper</a>",
    description:
      "This weapon is not as good as the other weapons on this list, but it is still a good option if you want a decent amount of Mastery and Versatility.",
  },

  // defensive trinkets
  {
    id: "fyrakks-tainted-rageheart",
    name: "<a href='https://www.wowhead.com/item=207174/fyrakks-tainted-rageheart' target='_blank'>Fyrakk's Tainted Rageheart</a>",
    description:
      "This trinket is ridiculously strong. Although it doesn't give us Agility, we still gain Versatility, a very good stat for us. On use, it gives us a massive absorb shield and radiates AoE damage, which is also strong on single target. While it is listed as a defensive trinket, it is also our top damaging trinket and can be used aggressively if you don't think you'll need the absorb shield any time soon.",
  },
  {
    id: "prophetic-stonescales",
    name: "<a href='https://www.wowhead.com/item=207528/prophetic-stonescales' target='_blank'>Prophetic Stonescales</a>",
    description:
      "This trinket serves as a cheat death trinket. After you cheat death, it also gives you a 20% damage reduction to all mobs around you for 12 seconds, making you extremely tanky. It also has a good amount of Agility on it which is also ways. When combined with Fyrakk's Tainted Rageheart, it is our strongest defensive trinket combo.",
  },
  {
    id: "xeritacs-unhatched-egg-sac",
    name: "<a href='https://www.wowhead.com/ptr-2/item=110019/xeritacs-unhatched-egg-sac' target='_blank'>Xeri'tac's Unhatched Egg Sac",
    description:
      "While this trinket is not amazing, it is a good alternative to Fyrakk's Tainted Rageheart if you don't have access to raid. It gives us a decent amount of Stamina, increasing our maximum health, while absorbing and dealing small amounts of damage.",
  },
  {
    id: "writhing-heart-of-darkness",
    name: "<a href='https://www.wowhead.com/ptr-2/item=137315/writhing-heart-of-darkness#icon' target='_blank'>Writhing Heart of Darkness",
    description:
      "This trinket is just like Xeri'tac's Unhatched Egg Sac. The difference, however, is that it makes you slightly tankier against physical damage. If you want more physical damage reduction, you run this. If you want more magical damage reduction, you run Xeri'tac's Unhatched Egg Sac.",
  },

  // offensive trinkets
  {
    id: "augury-of-the-primal-flame",
    name: "<a href='https://www.wowhead.com/ptr-2/item=208614/augury-of-the-primal-flame' target='_blank'>Augury of the Primal Flame</a>",
    description:
      "This trinket is an extremely strong damage trinket. Whenever we deal damage, we have a chance to cause our Critical Strikes to deal 50% additional damage as fire damage for 20 seconds. When combined with Fyrakk's Tainted Rageheart, it is our strongest offensive trinket combo. It also gives us a good amount of Critical Strike, our most important secondary.",
  },
  {
    id: "bandolier-of-twisted-blades",
    name: "<a href='https://www.wowhead.com/item=207165/bandolier-of-twisted-blades' target='_blank'>Bandolier of Twisted Blades</a>",
    description:
      "This trinket is an extremely well-rounded damage trinket. Although not the best at anything, if you want a trinket that does decent single target and AoE, along with additional primary stat, this trinket is a very good option.",
  },
  {
    id: "mydas-talisman",
    name: "<a href='https://www.wowhead.com/item=158319/mydas-talisman' target='_blank'>My'das Talisman</a>",
    description:
      "This trinket is extremely strong on single target. When combined with Fyrakk's Tainted Rageheart, it is a very competitive trinket combo in raid for single target fights. On use, it causes our next 5 auto attacks to do massive amounts of damage, along with giving us additional primary stat.",
  },

  // emebellishments
  {
    id: "coated-in-slime",
    name: "<a href='https://www.wowhead.com/spell=378423/coated-in-slime' target='_blank'>Coated in Slime</a>",
    description:
      "This embellishment does good damage on single target, especially when paired with a Toxified Armor Patch. It can only be obtained by crafting Slimy Expulsion Boots, which, fortunately for us, has good secondary stats for us.",
  },
  {
    id: "toxified-armor-patch",
    name: "<a href='https://www.wowhead.com/item=193552/toxified-armor-patch' target='_blank'>Toxified Armor Patch</a>",
    description:
      "This patch is super important for buffing our Coated in Slime damage. It is recommended that you put this patch on your wrists, as they are a low stat item, but it can ultimately be put on any crafted leatherworking gear.",
  },
  {
    id: "alchemical-flavor-pocket",
    name: "<a href='https://www.wowhead.com/item=200652/alchemical-flavor-pocket' target='_blank'>Alchemical Flavor Pocket</a>",
    description:
      "This embellishment is really nice because it makes your Well Fed buff persist through death, while also not consuming one of your two embellishment slots. It is recommended that you put this embellishment on a crafted ring or something that won't ever be replaced this season.",
  },

  // enchantments
  {
    id: "helm-enchant",
    name: "<a href='https://www.wowhead.com/item=210494/incandescent-essence' target='_blank'>Incandescent Essence</a>",
    description:
      "This enchant is very strong. It gives our abilities a chance to surround us with a shield of fire, which deals damage to enemies and shields us from a decent amount of damage.",
    value: "Head",
  },
  {
    id: "back-enchant",
    name: "<a href='https://www.wowhead.com/item=200033/enchant-cloak-regenerative-leech' target='_blank'>Regenerative Leech</a>",
    description:
      "This enchant is very strong for us because it gives us a small amount of Leech, providing us with more self-healing.",
    value: "Back",
  },
  {
    id: "chest-enchant",
    name: "<a href='https://www.wowhead.com/item=200030/enchant-chest-waking-stats' target='_blank'>Waking Stats</a>",
    description:
      "This enchant increases our primary stat, providing us with more damage and survivability.",
    value: "Chest",
  },
  {
    id: "wrist-enchant",
    name: "<a href='https://www.wowhead.com/item=200022/enchant-bracer-devotion-of-leech' target='_blank'>Devotion of Leech</a>",
    description:
      "This enchant provides us with more Leech further making us tankier.",
    value: "Wrist",
  },
  {
    id: "waist-enchant",
    name: "<a href='https://www.wowhead.com/spell=408288/shadowed-belt-clasp' target='_blank'>Shadowed Belt Clasp</a>",
    description:
      "This enchant gives us additional Stamina. It is very expensive, however, so it is not a big deal if you don't have one, at least right away.",
    value: "Waist",
  },
  {
    id: "leg-enchant",
    name: "<a href='https://www.wowhead.com/item=193565/fierce-armor-kit' target='_blank'>Fierce Armor Kit</a>",
    description:
      "This enchant is very good as not only does it provide us with more Stamina, but it also gives us more Agility.",
    value: "Legs",
  },
  {
    id: "feet-enchant",
    name: "<a href='https://www.wowhead.com/item=200020/enchant-boots-watchers-loam' target='_blank'>Watcher's Loam</a>",
    description:
      "This enchant gives us more Stamina, further adding to our survivability.",
    value: "Feet",
  },
  {
    id: "ring-enchants",
    name: "<a href='https://www.wowhead.com/item=200037/enchant-ring-devotion-of-critical-strike' target='_blank'>Devotion of Critical Strike</a> <span class='white'>/</span> <a href='https://www.wowhead.com/item=199956/enchant-ring-devotion-of-versatility' target='_blank'>Devotion of Versatility</a> <span class='white'>/</span> <a href='https://www.wowhead.com/item=200039/enchant-ring-devotion-of-mastery' target='_blank'>Devotion of Mastery</a>",
    description:
      "The enchants that you put on your rings depend on the stats that you currently need. If you need Versatility or Mastery, you can use the respective enchants. Otherwise, you want Critical Strike. It is not a big deal if you mismatch your ring enchants.",
    value: "Rings",
  },
  {
    id: "weapon-enchants",
    name: "<a href='https://www.wowhead.com/item=200054/enchant-weapon-sophic-devotion' target='_blank'>Sophic Devotion</a>",
    description:
      "This enchant is ridiculously strong, providing our abilities a chance to grant us a large amount of primary stat. If you dual wield, you can run two of these, providing double the benefit.",
    value: "Weapon(s)",
  },

  // consumables
  {
    id: "weapon-runes",
    name: "<a href='https://www.wowhead.com/item=204973/hissing-rune' target='_blank'>Hissing Rune</a>",
    description:
      "Unlike the rest of our secondary stat choices, you always want to run Hissing Runes because Mastery has a lot more static power than a little bit more Critical Strike.",
    value: "Weapon Rune(s)",
  },
  {
    id: "deviously-deviled-eggs",
    name: "<a href='https://www.wowhead.com/item=204072/deviously-deviled-eggs' target='_blank'>Deviously Deviled Eggs</a>",
    description:
      "This food provides us with more Agility, which is more important than any secondary stat.",
    value: "Food",
  },
  {
    id: "phial",
    name: "<a href='https://www.wowhead.com/item=191320/phial-of-the-eye-in-the-storm' target='_blank'>Phial of the Eye in the Storm</a> <span class='white'>/</span> <a href='https://www.wowhead.com/ptr/item=191341/phial-of-tepid-versatility' target='_blank'>Phial of Tepid Versatility</a>",
    description:
      "The phial that you run depends greatly. For fortified weeks and extremely large AoE, such as Everbloom, you want to run Phial of Eye in the Storm, as it makes you significantly tankier. For tyrannical weeks and raid, however, you want to run Phial of Tepid Versatility.",
    value: "Battle Potion",
  },
  {
    id: "healing-potion",
    name: "<a href='https://www.wowhead.com/ptr-2/item=207023/dreamwalkers-healing-potion' target='_blank'>Dreamwalker's Healing Potion</a>",
    description:
      "Due to our <a href='https://www.wowhead.com/spell=216519/celestial-fortune' target='_blank' class='orange'>Celestial Fortune</a> and high Critical Strike, healing potions are extremely valuable for us. We prefer this healing potion due to it doing additional healing over 6 seconds, providing us with more opportunities to proc our <a href='https://www.wowhead.com/spell=216519/celestial-fortune' target='_blank' class='orange'>Celestial Fortune</a>.",
    value: "Healing Potion",
  },
  {
    id: "damage-potion",
    name: "<a href='https://www.wowhead.com/item=191383/elemental-potion-of-ultimate-power' target='_blank'>Elemental Potion of Ultimate Power</a> <span class='white'>/</span> <a href='https://www.wowhead.com/item=191399/potion-of-shocking-disclosure' target='_blank'>Potion of Shocking Disclosure</a>",
    description:
      "Typically, you want to run Elemental Potion of Ultimate Power, as it is a very large damage increase, providing us with a lot of Agility on use. If you struggle with AoE threat, however, you can run Potion of Shocking Disclosure.",
    value: "Phial",
  },

  // unique gems
  {
    id: "inscribed-illimited-diamond",
    name: "<a href='https://www.wowhead.com/item=192982/inscribed-illimited-diamond' target='_blank'>Inscribed Illimited Diamond</a>",
    description:
      "This gem provides Critical Strike and is what should be run if you don't need any additional Versatility or Mastery.",
  },
  {
    id: "resplendent-illimited-diamond",
    name: "<a href='https://www.wowhead.com/item=192991/resplendent-illimited-diamond' target='_blank'>Resplendent Illimited Diamond</a>",
    description:
      "This gem provides Versatility and is what should be run if you need additional Versatility.",
  },
  {
    id: "skillful-illimited-diamond",
    name: "<a href='https://www.wowhead.com/item=192986/skillful-illimited-diamond' target='_blank'>Skillful Illimited Diamond</a>",
    description:
      "This gem provides Mastery and is what should be run if you need additional Mastery.",
  },

  // regular gems
  {
    id: "radiant-alexstraszite",
    name: "<a href='https://www.wowhead.com/ptr/item=192925/radiant-alexstraszite' target='_blank'>Radiant Alexstraszite</a>",
    description:
      "If you prefer more Critical Strike with a little bit of Versatility, run this gem.",
  },
  {
    id: "senseis-alexstraszite",
    name: "<a href='https://www.wowhead.com/item=192922/senseis-alexstraszite' target='_blank'>Sensei's Alexstrasizte</a>",
    description:
      "If you prefer more Critical Strike with a little bit of Mastery, run this gem.",
  },
  {
    id: "radiant-malygite",
    name: "<a href='https://www.wowhead.com/item=192932/radiant-malygite' target='_blank'>Radiant Malygite</a>",
    description:
      "If you prefer more Versatility with a little bit of Critical Strike, run this gem.",
  },
  {
    id: "zen-malygite",
    name: "<a href='https://www.wowhead.com/item=192938/zen-malygite' target='_blank'>Zen Malygite</a>",
    description:
      "If you prefer more Versatility with a little bit of Mastery, run this gem.",
  },
  {
    id: "senseis-neltharite",
    name: "<a href='https://www.wowhead.com/item=192958/senseis-neltharite' target='_blank'>Sensei's Neltharite</a>",
    description:
      "If you prefer more Mastery with a little bit of Critical Strike, run this gem.",
  },
  {
    id: "zen-neltharite",
    name: "<a href='https://www.wowhead.com/item=192964/zen-neltharite' target='_blank'>Zen Neltharite</a>",
    description:
      "If you prefer more Mastery with a little bit of Versatility, run this gem.",
  },

  // dungeons
  {
    id: "ataldazar",
    name: "<a href='https://www.wowhead.com/zone=9028/ataldazar' target='_blank'>Atal'Dazar</a>",
    description:
      "Atal'Dazar is a very easy dungeon this season. There aren't any mobs that do a lot of tank damage, and all group damage is avoidable or easily healable. Yazma, especially on Tyrannical, can really suck though.",
    value: "Easy",
    dungeonRoute: "ataldazar-route",
  },
  {
    id: "black-rook-hold",
    name: "<a href='https://www.wowhead.com/zone=7805/black-rook-hold' target='_blank'>Black Rook Hold</a>",
    description:
      "Blackrook Hold is the easiest dungeon this season. The timer is super lenient and all of the mobs' damage is easily avoidable. Luckily, Smashspite the Hateful, which is typically challenging, can be made much easier by cheesing him (more discussed down below). The first packs can be really strong on Fortified, however, and Lord Kur'talos Ravencrest can be really RNG on super high keys.",
    value: "Easy",
    dungeonRoute: "black-rook-hold-route",
  },
  {
    id: "darkheart-thicket",
    name: "<a href='https://www.wowhead.com/zone=7673/darkheart-thicket' target='_blank'>Darkheart Thicket</a>",
    description:
      "Darkheart Thicket is another easy dungeon. The only difficult mobs, which are the bears, can be skipped. Oakheart can be pretty brutal on high keys, but as long as you play well, you can live.",
    value: "Easy",
    dungeonRoute: "darkheart-thicket-route",
  },
  {
    id: "doti-fall",
    name: "<a href='https://www.wowhead.com/zone=14514/dawn-of-the-infinite' target='_blank'>Dawn of the Infinite: Galakrond's Fall</a>",
    description:
      "On Fortified, Dawn of the Infinite: Galakrond's Fall is relatively easy. The time area before Manifested Timeways can be challenging for you and your group to live, but the timer is lenient. On Tyrannical, however, this dungeon becomes much more challenging, with Manifested Timeways, Blight of Galakrond, and Iridikron the Stonescaled all becoming extremely dangerous for the group.",
    value: "Medium",
    dungeonRoute: "doti-fall-route",
  },
  {
    id: "doti-rise",
    name: "<a href='https://www.wowhead.com/zone=14514/dawn-of-the-infinite' target='_blank'>Dawn of the Infinite: Murozond's Rise</a>",
    description:
      "Dawn of the Infinite: Murozond's Rise is the hardest dungeon this season. The timer is extremely tight on both Fortified and Tyrannical. After the first area, all of the mobs do a lot of tank and group damage, along with every boss being very dangerous. Timing this dungeon relies heavily on the speed at which you can pull, mainly in the sand area.",
    value: "Hard",
    dungeonRoute: "doti-rise-route",
  },
  {
    id: "the-everbloom",
    name: "<a href='https://www.wowhead.com/zone=7109/the-everbloom' target='_blank'>The Everbloom</a>",
    description:
      "The Everbloom is nearly just as hard as Dawn of the Infinite: Murozond's Rise. The Everbloom does a ridiculous amount of tank damage the entire time, and the last three bosses are all very deadly to your group. Ancient Protectors and the pack before Archmage Sol require so many interrupts that it is basically impossible to stop them all (so long as you are playing Brewmaster).",
    value: "Hard",
    dungeonRoute: "the-everbloom-route",
  },
  {
    id: "throne-of-the-tides",
    name: "<a href='https://www.wowhead.com/zone=5004/throne-of-the-tides' target='_blank'>Throne of the Tides</a>",
    description:
      "Just like the two previously discussed dungeons, Throne of the Tides, too, is challenging. The entire dungeon does a lot of tank and group damage, while also requiring a ton of coordinated interrupts. Once you get to medium key levels, the last three bosses each become very dangerous. Once you get to the high key levels, all of the bosses become very dangerous.",
    value: "Hard",
    dungeonRoute: "throne-of-the-tides-route",
  },
  {
    id: "waycrest-manor",
    name: "<a href='https://www.wowhead.com/zone=9424/waycrest-manor' target='_blank'>Waycrest Manor</a>",
    description:
      "Waycrest Manor is a pretty easy dungeon. Due to some of the mobs being overtuned, every route is very similar, each avoiding said mobs. The mobs that are typically pulled are pretty easy to kill, as long as things get interrupted. Heartsbane Triad is dangerous for the group, however, especially on Tyrannical. As Brewmaster, Soulbound Goliath is made much easier due to us not having to cleanse in fire as much as other tanks. As long as the thorns die fast enough and the healer is ready for the fire, your group should be fine.",
    value: "Easy",
    dungeonRoute: "waycrest-manor-route",
  },

  // dungeon bosses
  {
    id: "priestess-alunza",
    name: "<a href='https://www.wowhead.com/npc=129614/priestess-alunza' target='_blank'>Priestess Alun'za</a>",
    description:
      "This boss is extremely easy. There is pretty much no tank damage, very little group wide damage, and she dies extremely fast, even on tyrannical. There aren't really any tricks for her, either, besides imprisoning one of the ads when they spawn so you don't have to kill it.",
    value: "Easy",
  },
  {
    id: "volkaal",
    name: "<a href='https://www.wowhead.com/npc=129399/volkaal' target='_blank'>Vol'kaal</a>",
    description:
      "This boss is pretty easy as long as everyone kills the totems at the same time. There are no tricks, you just want to slowly rotate him around the room once the totems are dead.",
    value: "Easy",
  },
  {
    id: "rezan",
    name: "<a href='https://www.wowhead.com/npc=143577/rezan' target='_blank'>Rezan</a>",
    description:
      "Rezan is easy for your group, but it can be very challenging to live for you as a tank. Make sure that you use two defensives for each tank buster and position him to one of the sides of the room.",
    value: "Medium",
  },
  {
    id: "yazma",
    name: "<a href='https://www.wowhead.com/npc=129412/yazma' target='_blank'>Yazma</a>",
    description:
      "This boss is a nightmare, especially on tyrannical. She lives forever, and all of the spiders can get extremely overwhelming. The best strategy for this boss is for everyone to stack on you, as you rotate away from the spiders around the room.",
    value: "Hard",
  },

  {
    id: "the-amalgam-of-souls",
    name: "<a href='https://www.wowhead.com/npc=98542/amalgam-of-souls' target='_blank'>The Amalgam of Souls</a>",
    description:
      "This boss is super simple. You just dps him, making sure to face him away from the party as much as possible. When the spirits come out, you are really good at controlling them with <a href='https://www.wowhead.com/spell=119381/leg-sweep' target='_blank' class='orange'>Leg Sweep</a> and <a href='https://www.wowhead.com/spell=116844/ring-of-peace' target='_blank' class='orange'>Ring of Peace</a>.",
    value: "Easy",
  },
  {
    id: "illysanna-ravencrest",
    name: "<a href='https://www.wowhead.com/npc=98696/illysanna-ravencrest' target='_blank'>Illysanna Ravencrest</a>",
    description:
      "This boss's group bleed damage can be a little difficult to heal through for your healer. As the tank, there are no tricks for her, however.",
    value: "Medium",
  },
  {
    id: "smashspite-the-hateful",
    name: "<a href='https://www.wowhead.com/npc=98949/smashspite-the-hateful' target='_blank'>Smashspite the Hateful</a>",
    description:
      "This boss can be decently hard for most groups, but with a Brewmaster, it becomes much easier. You want to make sure that you have a way to track your dodge percent. This way, you can make sure that you have 100% or more stagger for every Hateful Charge, allowing you to soak the hit and not take any damage (more discussed in <a href='interface.html'>interface & macros</a>). If you soak every single charge, this drastically reduces the amount of group damage going out.",
    value: "Easy",
  },
  {
    id: "lord-kurtalos-ravencrest",
    name: "<a href='https://www.wowhead.com/npc=94923/lord-kurtalos-ravencrest' target='_blank'>Lord Kur'talos Ravencrest</a>",
    description:
      "This boss is pretty hard, especially in higher keys. At the start, the tank buster does a lot of damage, and the bleed stays on you for the entire fight. The random hits to your party are also really brutal. In the second phase, it is just a lot of consistent healing required from the healer. Unfortunately, there are no tricks to make this boss easier for you and your group.",
    value: "Hard",
  },

  {
    id: "archdruid-glaidalis",
    name: "<a href='https://www.wowhead.com/npc=96512/archdruid-glaidalis' target='_blank'>Achdruid Glaidalis</a>",
    description:
      "This boss is super easy if you know the trick. You want to make sure that you tank this boss a small distance from a wall, facing away from your team, and using a defensive for the first hit of his tank buster, Primal Rampage. If you have enough distance between him and the wall behind you, then you should be able to <a href='https://www.wowhead.com/spell=109132/roll' target='_blank' class='orange'>Roll</a> out and not get hit by the second hit. The rest of the fight is really easy, and you just rotate him around the room, moving away from the bad stuff on the floor.",
    value: "Easy",
  },
  {
    id: "oakheart",
    name: "<a href='https://www.wowhead.com/npc=103344/oakheart' target='_blank'>Oakheart</a>",
    description:
      "This boss is extremely difficult. His Crushing Grip requires multiple defensives to live, and it happens very frequently. Luckily, his Nightmare Breath is dodgeable if you <a href='https://www.wowhead.com/spell=109132/roll' target='_blank' class='orange'>Roll</a> backwards right when he starts the cast. His stomp ability also does a bunch of damage to the entire group.",
    value: "Hard",
  },
  {
    id: "dresaron",
    name: "<a href='https://www.wowhead.com/npc=99200/dresaron' target='_blank'>Dresaron</a>",
    description:
      "This boss is extremely easy. He does no tank damage, and his group damage is very predictable, making it easy to outheal. There are no tricks to make this boss easier.",
    value: "Easy",
  },
  {
    id: "shade-of-xavius",
    name: "<a href='https://www.wowhead.com/npc=99192/shade-of-xavius' target='_blank'>Shade of Xavius</a>",
    description:
      "This boss's difficulty depends on how well you do his mechanics in the second phase. He doesn't really do any tank damage, but once he hits 50% health, bad stuff starts raining all over the room. As the tank, your job is to drag him out of the circles, or he gets a stacking damage increase. If he gets too many stacks, on a higher key, he will end up just instant killing one of your allies.",
    value: "Medium",
  },

  {
    id: "chronikar",
    name: "<a href='https://www.wowhead.com/npc=198995/chronikar' target='_blank'>Chronikar</a>",
    description:
      "This boss is extremely easy. There really are no tricks to it. If you want to make it even easier than it already is, you can save up on <a href='https://www.wowhead.com/spell=124502/gift-of-the-ox' target='_blank' class='orange'>Gift of the Ox</a> orbs and instant heal off the heal absorb from Chronoshear.",
    value: "Easy",
  },
  {
    id: "manifested-timeways",
    name: "<a href='https://www.wowhead.com/npc=206238/manifested-timeways' target='_blank'>Manifested Timeways</a>",
    description:
      "This boss is extremely difficult, especially since there is nothing that you can do to make it easier. The group takes a lot of burst AoE damage. Luckily for you, however, it's easy to live as a tank.",
    value: "Hard",
  },
  {
    id: "blight-of-galakrond",
    name: "<a href='https://www.wowhead.com/npc=207639/blight-of-galakrond' target='_blank'>Blight of Galakrond</a>",
    description:
      "This boss is relatively difficult. It does a bunch of group wide damage, and because everything is magic damage, it also does a decent amount of damage to us. You can make it slightly easier by making sure that you also grab the Corrosion during Death Winds.",
    value: "Hard",
  },
  {
    id: "iridikron-the-stonescaled",
    name: "<a href='https://www.wowhead.com/npc=194907/iridikron' target='_blank'>Iridikron the Stonescaled</a>",
    description:
      "This boss is pretty easy for you to live, as long as you pop multiple defensives for each group soak. It does a lot of damage to the party, however, but if the group uses defensives well, it isn't the hardest boss in the world. Unfortunately, there is no way to make the boss any easier.",
    value: "Medium",
  },

  {
    id: "tyr-the-infinite-keeper",
    name: "<a href='https://www.wowhead.com/npc=198998/tyr-the-infinite-keeper' target='_blank'>Tyr, the Infinite Keeper</a>",
    description:
      "This boss is super hard. He takes forever to kill, requires a lot of healing, and his tank buster can delete you if you aren't prepared for it. There really aren't any tricks for him, either. You just want to face him away from your party the entire time, baiting his attacks to the outside.",
    value: "Hard",
  },
  {
    id: "morchie",
    name: "<a href='https://www.wowhead.com/npc=202789/morchie' target='_blank'>Morchie</a>",
    description:
      "Morchie's difficult can fluctuate greatly depending on how well your group performs. Her tank buster always does a massive amount of damage to you, and when the ads are trapped, a gross debuff is put on the entire party. You can slightly help with the ads by using your ccs and <a href='https://www.wowhead.com/spell=116844/ring-of-peace' target='_blank' class='orange'>Ring of Peace</a>, but overall, there isn't too much you can do to help your party.",
    value: "Medium",
  },
  {
    id: "time-lost-battlefield",
    name: "<a href='https://www.wowhead.com/npc=209208/anduin-lothar' target='_blank'>Time-Lost Battlefield</a>",
    description:
      "This boss is extremely difficult. Not only does his tank buster hit for a decent amount, but it reduces the amount of healing you receive by 75% for 5 seconds. He also does a huge amount of group wide damage, especially if your allies run him through the ads. Make sure that you don't ever hold this boss in the center of the room, and are always on the outside, to prevent him from killing the ads.",
    value: "Hard",
  },
  {
    id: "chrono-lord-deios",
    name: "<a href='https://www.wowhead.com/npc=199000/chrono-lord-deios' target='_blank'>Chrono-Lord Deios</a>",
    description:
      "This boss is disgusting. He melees you for a ridiculous amount, his tank buster hits stupidly hard, and the ads hit hard, too. To top it off, he does a good amount of group wide damage in phase 2. Unfortunately, we can't do anything to help with this boss.",
    value: "Hard",
  },

  {
    id: "witherbark",
    name: "<a href='https://www.wowhead.com/npc=81522/witherbark' target='_blank'>Witherbark</a>",
    description:
      "This is the easiest boss this season. There is no trick, you just pull him to the back of the room, facing him away from your group. When he goes into his Brittle Bark stage you want to pop cds and burst him down as fast as possible.",
    value: "Easy",
  },
  {
    id: "ancient-protectors",
    name: "<a href='https://www.wowhead.com/npc=83894/dulhu' target='_blank'>Ancient Protectors</a>",
    description:
      "This boss is super difficult. We have no way to make it easier, and there are so many interrupts that it is impossible to get them all. The group wide is ridiculously high, but luckily, the tank damage isn't too bad.",
    value: "Hard",
  },
  {
    id: "archmage-sol",
    name: "<a href='https://www.wowhead.com/npc=82682/archmage-sol' target='_blank'>Archmage Sol</a>",
    description:
      "This boss is also very difficult. Her mechanics can get overwhelming at times, making it easy to mess up, and she does an extremely high amount of burst AoE damage. Not only this, but everything she does is magic damage, so her casts do a lot of damage to us, too. You want to make sure that you move her a large distance during Spatial Compression, making it easier for your group to dodge the mechanics.",
    value: "Hard",
  },
  {
    id: "yalnu",
    name: "<a href='https://www.wowhead.com/npc=83846/yalnu' target='_blank'>Yalnu</a>",
    description:
      "This boss is very easy as a tank, but for the group, it is incredibly difficult. When the tree ad comes out, his AoE damage is ridiculously high. If the tree ad doesn't die within a few seconds, it is likely a wipe on higher keys. This boss is really funny as a Brewmaster, though, because our tier set is glitched, causing it to do much higher damage than it should.",
    value: "Hard",
  },

  {
    id: "lady-nazjar",
    name: "<a href='https://www.wowhead.com/npc=40586/lady-nazjar' target='_blank'>Lady Naz'jar</a>",
    description:
      "This boss is super easy on low to medium keys and can be a little scary for your healer on high keys. When the ads spawn, make sure that you are standing on one of the ranged ads so that you can interrupt her and move everything into the middle for easy grouping.",
    value: "Easy",
  },
  {
    id: "commander-ulthok",
    name: "<a href='https://www.wowhead.com/npc=40765/commander-ulthok' target='_blank'>Commander Ulthok, the Festering Prince</a>",
    description:
      "This boss does a lot of group wide damage, does a good amount of tank damage, and can have troublesome positions for pugs. To make this fight as easy as possible, you want to make sure that your party is stacked on you the entire time. You want to position the puddles that spawn the slimes between you guys and the boss. If done correctly, the slimes will never be able to reach you.",
    value: "Hard",
  },
  {
    id: "mindbender-ghursha",
    name: "<a href='https://www.wowhead.com/npc=40788/mindbender-ghursha' target='_blank'>Mindbender Ghur'sha</a>",
    description:
      "This boss is extremely dangerous. His Flame Shock that he applies to random party members does a lot of damage, and it can't be instantly dispelled later into the fight. When his totem goes out, he also does a lot of tank damage, so make sure that you use at least two defensives for each totem. Once the mindbender is separated from the draenei, you can hold it near the bubbles at the front of the room for a quicker way to line of sight.",
    value: "Hard",
  },
  {
    id: "ozumat",
    name: "<a href='https://www.wowhead.com/npc=44566/ozumat' target='_blank'>Ozumat</a>",
    description:
      "This boss does a lot of group wide damage, but luckily, his tank damage is pretty low, so long as you use a defensive for each tank buster. If your group fails to do mechanics, however, it is pretty much a guaranteed wipe. There isn't really anything we can do to help on this boss.",
    value: "Hard",
  },

  {
    id: "heartsbane-triad",
    name: "<a href='https://www.wowhead.com/npc=135360/sister-briar' target='_blank'>Heartsbane Triad</a>",
    description:
      "This boss is super painful for the group. There are so many interrupts that it's literally impossible to interrupt everything. There are also no tricks to helping out your party, so you just have to have faith in everyone else.",
    value: "Hard",
  },
  {
    id: "soulbound-goliath",
    name: "<a href='https://www.wowhead.com/npc=131667/soulbound-goliath' target='_blank'>Soulbound Goliath</a>",
    description:
      "As a Brewmaster, it is pretty easy to live this boss. When you want to clear the stacks in the fire is primarily up to you and the key level, but we can go pretty high since he does pure physical damage. What makes this boss so difficult, is that the thorns do ridiculous amounts of damage and have a lot of health. If your healer isn't ready for the fire, it can also be extremely deadly. To make this boss easier, make sure that you are tracking when the thorns will come out, ensuring that you don't overlap it with the fire.",
    value: "Hard",
  },
  {
    id: "raal-the-gluttonous",
    name: "<a href='https://www.wowhead.com/npc=131863/raal-the-gluttonous' target='_blank'>Raal the Gluttonous</a>",
    description:
      "This boss isn't too difficult, outside of how long he takes to kill and the random one shots that can happen to your party. Brewmaster is really good for this boss due to all of the control we can have on ads, such as <a href='https://www.wowhead.com/spell=115078/paralysis' target='_blank' class='orange'>Paralysis</a>, <a href='https://www.wowhead.com/spell=119381/leg-sweep' target='_blank' class='orange'>Leg Sweep</a>, and <a href='https://www.wowhead.com/spell=116844/ring-of-peace' target='_blank' class='orange'>Ring of Peace</a>.",
    value: "Medium",
  },
  {
    id: "lord-and-lady-waycrest",
    name: "<a href='https://www.wowhead.com/npc=131527/lord-waycrest' target='_blank'>Lord and Lady Waycrest</a>",
    description:
      "This boss is pretty easy. Make sure that you hold them in the upper left corner of the room so you don't pull the ad across the room. Both her group and tank damage are pretty low, and the mechanics are very simple.",
    value: "Easy",
  },
  {
    id: "gorak-tul",
    name: "<a href='https://www.wowhead.com/npc=144324/gorak-tul' target='_blank'>Gorak Tul</a>",
    description:
      "This boss is extremely easy. As long as you interrupt Dark Lightning and cc the ads when they try casting, nothing can go wrong. There is pretty much no group wide damage, and literally no tank damage.",
    value: "Easy",
  },

  // affixes
  {
    id: "fortified",
    name: "<a href='https://www.wowhead.com/affix=10/fortified' target='_blank'>Fortified</a>",
    description:
      "This affix makes mobs have additional health and do additional damage. This is much preferred over Tyrannical, as it makes dungeons overall easier, and you can still time after a wipe or two. Make sure that you pull a little bit smaller than you would on tyrannical, though.",
  },
  {
    id: "tyrannical",
    name: "<a href='https://www.wowhead.com/affix=9/tyrannical' target='_blank'>Tyrannical</a>",
    description:
      "This affix does the opposite of fortified; it makes the bosses have additional health and do additional damage. It is much more difficult than fortified, due to bosses taking so long that a single wipe can fail a key. The only good thing about this affix is that you can pull slightly larger on trash packs.",
  },
  {
    id: "incorporeal",
    name: "<a href='https://www.wowhead.com/affix=136/incorporeal' target='_blank'>Incorporeal</a>",
    description:
      "This affix spawns two ads at random times during combat, which have to be cc'd or they will make you and your party do reduced damage and healing. This affix can be super annoying, as they can spawn in really awkward spots, making them difficult to cc. Make sure that you are trying to help out with them as much as possible by using <a href='https://www.wowhead.com/spell=115078/paralysis' target='_blank' class='orange'>Paralysis</a>.",
  },
  {
    id: "sanguine",
    name: "<a href='https://www.wowhead.com/affix=8/sanguine' target='_blank'>Sanguine</a>",
    description:
      "This affix causes mobs to spawn puddles after dying, healing other mobs that are standing within them. This affix can be super annoying, as it causes dungeons to take a lot longer. This season, especially is much more difficult to deal with, as there are a lot of mobs that cast and can't be moved through the use of <a href='https://www.wowhead.com/spell=116844/ring-of-peace' target='_blank' class='orange'>Ring of Peace</a>.",
  },
  {
    id: "afflicted",
    name: "<a href='https://www.wowhead.com/affix=135/afflicted' target='_blank'>Afflicted</a>",
    description:
      "This affix is a worse version of incorporeal. These ads you have to dispel, or else they will reduce your party's haste. While it may not sound worse, there are a lot of dispel-heavy fights, which become much more difficult when you have to waste a dispel on the ads.",
  },
  {
    id: "bursting",
    name: "<a href='https://www.wowhead.com/affix=11/bursting' target='_blank'>Bursting</a>",
    description:
      "This affix causes mobs to explode on death, putting a damage over time effect on your party, which can stack. In high target count dungeons, this can be extremely dangerous, one shotting your group after a large amount of mobs die. Even on smaller mob count dungeons, it still requires a decent amount of healing from your healer.",
  },
  {
    id: "spiteful",
    name: "<a href='https://www.wowhead.com/affix=123/spiteful' target='_blank'>Spiteful</a>",
    description:
      "This affix is really easy as a tank and ranged, but is super annoying for melee. When mobs die, ghosts spawn, fixating a random target. As Brewmaster, you can help your allies run from them through the use of <a href='https://www.wowhead.com/spell=119381/leg-sweep' target='_blank' class='orange'>Leg Sweep</a> and <a href='https://www.wowhead.com/spell=116844/ring-of-peace' target='_blank' class='orange'>Ring of Peace</a>.",
  },
  {
    id: "entangling",
    name: "<a href='https://www.wowhead.com/affix=134/entangling' target='_blank'>Entangling</a>",
    description:
      "Randomly throughout the dungeon, you will be snared in a circle. If you do not run out of the circle to clear your snare in time, you will be stunned for a few seconds. As a Brewmaster, this is very easy, as you can use <a href='https://www.wowhead.com/spell=116841/tigers-lust' target='_blank' class='orange'>Tiger's Lust</a> to clear it.",
  },
  {
    id: "bolstering",
    name: "<a href='https://www.wowhead.com/affix=7/bolstering' target='_blank'>Bolstering</a>",
    description:
      "This affix is the worst affix there is. When mobs die, they will bolster their allies, causing them to deal increased damage. This effect can stack, and it can get out of hand extremely quickly, causing the mobs to one shot you and/or your party. When mobs get a lot of bolstering, the only option you have is to kite so that they don't one shot you. You also want to make sure that you pull significantly smaller during bolstering weeks.",
  },
  {
    id: "raging",
    name: "<a href='https://www.wowhead.com/affix=6/raging' target='_blank'>Raging</a>",
    description:
      "This affix can be pretty annoying unless you have an evoker to AoE soothe. When mobs reach 30% health, they become immune to cc. This can cause dangerous mobs to get important cc abilities off, killing people in your party.",
  },
  {
    id: "storming",
    name: "<a href='https://www.wowhead.com/affix=124/storming' target='_blank'>Storming</a>",
    description:
      "This affix can be pretty annoying for you and melees. During combat, tornadoes will spawn, knocking anyone up that runs into them. As a tank, it is your job to try and eat as many of these tornadoes as possible for your melee dps.",
  },
  {
    id: "volcanic",
    name: "<a href='https://www.wowhead.com/affix=3/volcanic' target='_blank'>Volcanic</a>",
    description:
      "This affix doesn't really do anything. It will occasionally spawn orbs under people at range, knocking them up. This affix doesn't affect you at all, so there is nothing to worry about.",
  },
];

function menuFunc(submenu) {
  submenu = document.getElementById(submenu);

  if (submenu.style.maxHeight === "0px" || !submenu.style.maxHeight) {
    submenu.classList.toggle("transition");
  } else {
    submenu.style.maxHeight = 0;
  }
}

function updateInfo(element) {
  if (element.classList.contains("selected")) {
    return;
  }
  const name = element.parentNode.getElementsByTagName("h3")[0];
  const value = element.parentNode.getElementsByTagName("h4")[0];
  let description;

  // assigns description
  for (const desc of element.parentNode.getElementsByTagName("p")) {
    if (desc.classList.contains("description")) {
      description = desc;
    }
  }

  for (let i = 0; i < infoArray.length; i++) {
    if (infoArray[i].id === element.id) {
      // updates name, description, and value
      name.innerHTML = infoArray[i].name;
      description.innerHTML = infoArray[i].description;

      // updates tier type
      if (value) {
        value.innerHTML = infoArray[i].value;

        if (!value.classList.contains("tier-type")) {
          value.className = "";
          value.classList.add(infoArray[i].value);
        }
      }

      // updates dungeon route
      if (infoArray[i].dungeonRoute) {
        for (const route of document.getElementsByClassName("dungeon-route")) {
          if (route.classList.contains("display"))
            [(route.className = "dungeon-route")];
        }

        document
          .getElementById(infoArray[i].dungeonRoute)
          .classList.add("display");

        const bosses = document.getElementById(infoArray[i].id + "-bosses");
        bosses.parentNode
          .getElementsByClassName("display")[0]
          .classList.remove("display");
        bosses.classList.add("display");
      }
    }
  }

  // unselects previous
  for (const image of element.parentNode.getElementsByTagName("img")) {
    if (image.classList.contains("selected")) {
      image.classList.remove("selected");
    }
  }

  // selects image
  element.classList.add("selected");
}

function copyToClipboard(element) {
  const importCode = element.getAttribute("import-code");
  navigator.clipboard.writeText(importCode);
}

function changeAffix(element) {
  const route =
    element.parentNode.parentNode.getElementsByClassName("route")[0];
  const lustTimings =
    element.parentNode.parentNode.getElementsByClassName("lust-timings")[0];
  const importCode =
    element.parentNode.parentNode.getElementsByClassName("mdt-copy")[0];

  if (
    element.innerHTML.includes("Fortified") &&
    !element.classList.contains("chosen")
  ) {
    element.classList.add("chosen");
    element.parentNode
      .getElementsByClassName("tyran")[0]
      .classList.remove("chosen");

    route.src = "images/" + element.parentNode.parentNode.id + "-fortified.png";
    lustTimings.innerHTML =
      "<span class='red'>Bloodlust Timings:</span> " +
      lustTimings.getAttribute("fort");
    importCode.setAttribute("import-code", importCode.getAttribute("fort"));
  } else if (
    element.innerHTML.includes("Tyrannical") &&
    !element.classList.contains("chosen")
  ) {
    element.classList.add("chosen");
    element.parentNode
      .getElementsByClassName("fort")[0]
      .classList.remove("chosen");

    route.src =
      "images/" + element.parentNode.parentNode.id + "-tyrannical.png";
    lustTimings.innerHTML =
      "<span class='red'>Bloodlust Timings:</span> " +
      lustTimings.getAttribute("tyran");
    importCode.setAttribute("import-code", importCode.getAttribute("tyran"));
  }
}

if (
  !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) &&
  document.getElementById("back-video")
) {
  const videoSource = document.createElement("source");
  videoSource.src = "videos/mop-login-screen.mp4";
  videoSource.type = "video/mp4";
  document.getElementById("back-video").appendChild(videoSource);
}
