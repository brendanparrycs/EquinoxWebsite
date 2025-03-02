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
    id: "earthen-dwarf",
    name: "The Earthen",
    description:
      "The Earthen is a very solid choice, as they gain a passive 10% increase in armor, giving Brewmaster even more natural survivability.",
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
      "This ability procs your mastery and gives you shuffle; use it off cooldown. It also buffs your <a class='orange' href='https://www.wowhead.com/spell=121253/keg-smash' target='_blank'>Keg Smash</a>, <a class='orange' href='https://www.wowhead.com/spell=100780/tiger-palm' target='_blank'>Tiger Palm, and <a class='orange' href='https://www.wowhead.com/spell=115181/breath-of-fire' target='_blank'>Breath of Fire</a>.",
  },
  {
    id: "sck",
    name: "<a href='https://www.wowhead.com/spell=101546/spinning-crane-kick' target='_blank'>Spinning Crane Kick</a>",
    description:
      "In The War Within, this ability is very undertuned and is rarely ever used. The only time that it can be helpful to use is when you are gathering mobs, so you can build a little bit extra aggro.",
  },
  {
    id: "tp",
    name: "<a href='https://www.wowhead.com/spell=100780/tiger-palm' target='_blank'>Tiger Palm</a>",
    description:
      "This spell is your main filler ability on AoE, and your top damaging ability on single target. There are some tricks utilizing our talents to further buff its damage, which will be discussed in the <a href='talents'>Talents</a> section.",
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
      "When combined with <a href='https://www.wowhead.com/spell=388681/elusive-mists' target='_blank' class='orange'>Elusive Mists</a>, this talent can provide us very strong off-healing. Make sure that you roll out of combat, otherwise you will quickly die since you cannot dodge when channeling this.",
    value: "Situational",
  },
  {
    id: "rsk-talent",
    name: "<a href='https://www.wowhead.com/spell=107428/rising-sun-kick' target='_blank'>Rising Sun Kick</a>",
    description:
      "This is one of your highest single target damaging abilities and a good filler option in AoE when you don't want to spend energy on a global cooldown.",
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
    id: "crashing-disable",
    name: "<a href='https://www.wowhead.com/spell=450335/crashing-momentum' target='_blank'>Crashing Momentum <span class='white'>/</span> <a href='https://www.wowhead.com/spell=116095/disable' target='_blank'>Disable</a>",
    description:
      "This node gives you the choice between snaring enemies that you roll through, and having a spammable single target snare. We have many better talent nodes in our class tree, so you never want to take this talent.",
    value: "Never",
  },

  {
    id: "tiger-tail-sweep",
    name: "<a href='https://www.wowhead.com/spell=264348/tiger-tail-sweep' target='_blank'>Tiger Tail Sweep</a>",
    description:
      "This talent increases the range of <a href='https://www.wowhead.com/spell=119381/leg-sweep' target='_blank' class='orange'>Leg Sweep</a>, which can be helpful on large AoE packs, where mobs aren't perfectly grouped up. You are required to take this talent node to access the next node.",
    value: "Required",
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
      "This increases all healing we receive by 4%, making us much more survivable.",
    value: "Required",
  },
  {
    id: "vivacious-vivification",
    name: "<a href='https://www.wowhead.com/spell=388812/vivacious-vivification' target='_blank'>Vivacious Vivification</a>",
    description:
      "This talent makes our <a href='https://www.wowhead.com/spell=116670/vivify' target='_blank' class='orange'>Vivify</a> instant cast every 10 seconds. Because of <a href='https://www.wowhead.com/spell=116670/vivify' target='_blank' class='orange'>Vivify</a> being so strong this expansion, this provides us a way to spot heal not only ourselves, but also party members while in combat.",
    value: "Required",
  },
  {
    id: "jade-walk",
    name: "<a href='https://www.wowhead.com/beta/spell=450553/jade-walk' target='_blank'>Jade Walk</a>",
    description:
      "This talent increases our movement speed by 15% while outside of combat. If you are in a dungeon where you cannot mount, and you want increased movement speed from pack-to-pack, then this can be a helpful talent.",
    value: "Optional",
  },
  {
    id: "pressure-points",
    name: "<a href='https://www.wowhead.com/beta/spell=450432/pressure-points' target='_blank'>Pressure Points</a>",
    description:
      "This talent makes our <a href='https://www.wowhead.com/spell=115078/paralysis' target='_blank' class='orange'>Paralysis</a> remove all enrage effects on the enemy. This is a helpful talent whenever a soothe is needed.",
    value: "Situational",
  },
  {
    id: "ancient-arts",
    name: "<a href='https://www.wowhead.com/beta/spell=344359/ancient-arts' target='_blank'>Ancient Arts</a>",
    description:
      "This talent reduces the cooldown of <a href='https://www.wowhead.com/spell=115078/paralysis' target='_blank' class='orange'>Paralysis</a> by 15 seconds and <a href='https://www.wowhead.com/spell=119381/leg-sweep' target='_blank' class='orange'>Leg Sweep</a> by 10 seconds, which is very important for dungeons.",
    value: "Required",
  },
  {
    id: "ferocity-of-xuen",
    name: "<a href='https://www.wowhead.com/spell=388674/ferocity-of-xuen' target='_blank'>Ferocity of Xuen</a>",
    description:
      "This talent increases all damage we deal by 2%, which is very good.",
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
      "This talent gives us and our target 6% damage reduction while channeling <a href='https://www.wowhead.com/spell=115175/soothing-mist' target='_blank' class='orange'>Soothing Mist</a>, which can be good when we are running <a href='https://www.wowhead.com/spell=115175/soothing-mist' target='_blank' class='orange'>Soothing Mist</a>.",
    value: "Situational",
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
    value: "Required",
  },
  {
    id: "fort-brew-talent",
    name: "<a href='https://www.wowhead.com/spell=243435/fortifying-brew' target='_blank'>Fortifying Brew</a>",
    description:
      "This is your primary defensive. It is most effective for tank busters or on pull to take less damage while gathering mobs.",
    value: "Required",
  },
  {
    id: "energy-transfer",
    name: "<a href='https://www.wowhead.com/beta/spell=450631/energy-transfer' target='_blank'>Energy Transfer</a>",
    description:
      "This talent makes it so when we interrupt an enemy, the cooldown of <a href='https://www.wowhead.com/spell=115078/paralysis' target='_blank' class='orange'>Paralysis</a> and <a href='https://www.wowhead.com/spell=119381/leg-sweep' target='_blank' class='orange'>Leg Sweep</a> are reduced by 5 seconds. While not required, it is a recommended talent, but it is ultimately up to you if you want to take it.",
    value: "Optional",
  },
  {
    id: "chi-proficiency",
    name: "<a href='https://www.wowhead.com/beta/spell=450426/chi-proficiency' target='_blank'>Chi Proficiency</a>",
    description:
      "This talent increases magical damage and healing done by 4%. The healing is extremely helpful, and the magic damage increase is slightly helpful. This talent node is very important however, as we want it to branch to later talents.",
    value: "Required",
  },

  {
    id: "chi-wave-burst",
    name: "<a href='https://www.wowhead.com/spell=115098/chi-wave' target='_blank'>Chi Wave</a> <span class='white'>/</span> <a href='https://www.wowhead.com/spell=123986/chi-burst' target='_blank'>Chi Burst</a>",
    description:
      "<a href='https://www.wowhead.com/spell=123986/chi-burst' target='_blank' class='orange'>Chi Burst</a> is a casted ability that does a ton of damage on both single target and AoE. We are able to dodge while casting this, so it is a great talent node.",
    value: "Required",
  },
  {
    id: "escape-linked-spirits",
    name: "<a href='https://www.wowhead.com/spell=394110/escape-from-reality' target='_blank'>Escape from Reality</a> <span class='white'>/</span> <a href='https://www.wowhead.com/beta/spell=434774/transcendence-linked-spirits' target='_blank'>Transcendence: Linked Spirits</a>",
    description:
      "This node gives us the choice to give us two teleports with <a href='https://www.wowhead.com/spell=101643/transcendence' target='_blank' class='orange'>Transcendence</a>, or to teleport to an ally with <a href='https://www.wowhead.com/spell=101643/transcendence' target='_blank' class='orange'>Transcendence</a>. There are some interesting tricks that can be done with <a href='https://www.wowhead.com/spell=434774/transcendence-linked-spirits' target='_blank' class='orange'>Transcendence: Linked Spirits</a>, so this can be good take at times.",
    value: "Situational",
  },
  {
    id: "strength-rebuttal",
    name: "<a href='https://www.wowhead.com/spell=387276/strength-of-spirit' target='_blank'>Strength of Spirit</a> <span class='white'>/</span> <a href='https://www.wowhead.com/spell=392910/profound-rebuttal' target-'_blank'>Profound Rebuttal</a>",
    description:
      "Both of these talents increase the healing done of <a href='https://www.wowhead.com/spell=115072/expel-harm' target='_blank' class='orange'>Expel Harm</a> by a considerable amount. In the end, <a href='https://www.wowhead.com/spell=387276/strength-of-spirit' target='_blank' class='orange'>Strength of Spirit</a> comes out ahead, though, and it should always be ran.",
    value: "Required",
  },
  {
    id: "quick-hasty-provocation",
    name: "<a href='https://www.wowhead.com/beta/spell=450503/quick-footed' target='_blank'>Quick Footed</a> <span class='white'>/</span> <a href='https://www.wowhead.com/spell=328670/hasty-provocation' target='_blank'>Hasty Provocation</a>",
    description:
      "<a href='https://www.wowhead.com/beta/spell=450503/quick-footed' target='_blank' class='orange'>Quick Footed</a> is essentially useless, but <a href='https://www.wowhead.com/spell=328670/hasty-provocation' target='_blank' class='orange'>Hasty Provocation</a> can be good in certain situations, as it makes <a href='https://www.wowhead.com/spell=115546/provoke' target='_blank' class='orange'>Provoke</a> increase how fast the target runs at us. It can be very nice when we need to taunt bosses on high movement fights.",
    value: "Optional",
  },
  {
    id: "hasty-provocation",
    name: "<a href='https://www.wowhead.com/spell=328670/hasty-provocation' target='_blank'>Hasty Provocation</a>",
    description:
      "This talent makes our taunt, <a href='https://www.wowhead.com/spell=115546/provoke' target='_blank' class='orange'>Provoke</a>, increase how fast the target runs at us. It can be very nice when we need to taunt bosses on high movement fights.",
    value: "Optional",
  },
  {
    id: "spirits-essence",
    name: "<a href='https://www.wowhead.com/beta/spell=450595/spirits-essence' target='_blank'>Spirit's Essence</a>",
    description:
      "This talent snares all nearby enemies after we teleport with <a href='https://www.wowhead.com/spell=101643/transcendence' target='_blank' class='orange'>Transcendence</a>. This isn't a very good talent, as we have a ton of other ways to kite mobs, so it should never be taken.",
    value: "Never",
  },
  {
    id: "ring-song",
    name: "<a href='https://www.wowhead.com/spell=116844/ring-of-peace' target='_blank'>Ring of Peace</a> <span class='white'>/</span> <a href='https://www.wowhead.com/spell=198898/song-of-chi-ji' target='_blank'>Song of Chi-Ji</a>",
    description:
      "<a href='https://www.wowhead.com/spell=116844/ring-of-peace' target='_blank' class='orange'>Ring of Peace</a> is a million times better than <a href='https://www.wowhead.com/spell=198898/song-of-chi-ji' target='_blank' class='orange'>Song of Chi-Ji</a>. <a href='https://www.wowhead.com/spell=116844/ring-of-peace' target='_blank' class='orange'>Ring of Peace</a> gives us an option to AoE knock mobs, which can be used as an interrupt, cc, or a tool for kiting. <a href='https://www.wowhead.com/spell=198898/song-of-chi-ji' target='_blank' class='orange'>Song of Chi-Ji</a> gives us an AoE cc, with the downside of us having to cast it, where we can be left vulnerable to attacks.",
    value: "Required",
  },
  {
    id: "rushing-clash",
    name: "<a href='https://www.wowhead.com/beta/spell=450154/rushing-reflexes' target='_blank'>Rushing Reflexes</a> <span class='white'>/</span> <a href='https://www.wowhead.com/spell=324312/clash' target='_blank'>Clash</a>",
    description:
      "<a href='https://www.wowhead.com/beta/spell=450154/rushing-reflexes' target='_blank' class='orange'>Rushing Reflexes</a> is really bad and serves no purpose. <a href='https://www.wowhead.com/spell=324312/clash' target='_blank' class='orange'>Clash</a> can be good in situations where you need to quickly bring a mob in.",
    value: "Situational",
  },
  {
    id: "fast-feet",
    name: "<a href='https://www.wowhead.com/spell=388809/fast-feet' target='_blank'>Fast Feet</a>",
    description:
      "This talent is really good, as it gives a big damage boost to <a href='https://www.wowhead.com/spell=107428/rising-sun-kick' target='_blank' class='orange'>Rising Sun Kick</a>.",
    value: "Required",
  },
  {
    id: "bounding-agility",
    name: "<a href='https://www.wowhead.com/spell=450520/bounding-agility' target='_blank'>Bounding Agility</a>",
    description:
      "This talent makes your <a href='https://www.wowhead.com/spell=109132/roll' target='_blank' class='orange'>Roll</a> and <a href='https://www.wowhead.com/spell=115008/chi-torpedo' target='_blank' class='orange'>Chi Torpedo</a> travel further. If you have extra talent points, and want to be slightly more mobile, you can take this talent.",
    value: "Optional",
  },
  {
    id: "winds-reach",
    name: "<a href='https://www.wowhead.com/beta/spell=450514/winds-reach' target='_blank'>Wind's Reach</a>",
    description:
      "This talent is useless as it buffs <a href='https://www.wowhead.com/spell=450335/crashing-momentum' target='_blank' class='orange'>Crashing Momentum</a> and <a href='https://www.wowhead.com/spell=116095/disable' target='_blank' class='orange'>Disable</a>, which we never take.",
    value: "Never",
  },
  {
    id: "celerity-torpedo",
    name: "<a href='https://www.wowhead.com/spell=115173/celerity' target='_blank'>Celerity</a> <span class='white'>/</span> <a href='https://www.wowhead.com/spell=115008/chi-torpedo' target='_blank'>Chi Torpedo</a>",
    description:
      "<a href='https://www.wowhead.com/spell=115173/celerity' target='_blank' class='orange'>Celerity</a> gives us an additional charge of <a href='https://www.wowhead.com/spell=109132/roll' target='_blank' class='orange'>Roll</a> and also reduces its cooldown. <a href='https://www.wowhead.com/spell=115008/chi-torpedo' target='_blank' class='orange'>Chi Torpedo</a> can be taken over <a href='https://www.wowhead.com/spell=115173/celerity' target='_blank' class='orange'>Celerity</a> if you prefer it, as it goes slightly further and gives a movement speed increase afterwards.",
    value: "Optional",
  },
  {
    id: "ironshell-expeditious",
    name: "<a href='https://www.wowhead.com/spell=388814/ironshell-brew' target='_blank'>Ironshell Brew <span class='white'>/</span> <a href='https://www.wowhead.com/spell=388813/expeditious-fortification' target='_blank'>Expeditious Fortification</a>",
    description:
      "Both of these talents are very good. <a href='https://www.wowhead.com/spell=388814/ironshell-brew' target='_blank' class='orange'>Ironshell Brew</a> can be taken whenever you want your <a href='https://www.wowhead.com/spell=243435/fortifying-brew' target='_blank' class='orange'>Fortifying Brew</a> to be a stronger defensive and <a href='https://www.wowhead.com/spell=388813/expeditious-fortification' target='_blank' class='orange'>Expeditious Fortification</a> is taken otherwise to reduce its cooldown. In the current season, you should always take <a href='https://www.wowhead.com/spell=388814/ironshell-brew' target='_blank' class='orange'>Ironshell Brew</a> since it has good synergy with our tier set.",
    value: "Required",
  },

  {
    id: "profound-rebuttal",
    name: "<a href='https://www.wowhead.com/spell=392910/profound-rebuttal' target-'_blank'>Profound Rebuttal</a>",
    description:
      "This talent increases the critical healing of <a href='https://www.wowhead.com/spell=115072/expel-harm' target='_blank' class='orange'>Expel Harm</a>, which is very good, as it does a good amount of healing.",
    value: "Required",
  },
  {
    id: "peace-and-prosperity",
    name: "<a href='https://www.wowhead.com/beta/spell=450448/peace-and-prosperity' target-'_blank'>Peace and Prosperity</a>",
    description:
      "This talent reduces the cooldown of <a href='https://www.wowhead.com/spell=116844/ring-of-peace' target='_blank' class='orange'>Ring of Peace</a> by 5 seconds. If you want a cooldown reduction on <a href='https://www.wowhead.com/spell=116844/ring-of-peace' target='_blank' class='orange'>Ring of Peace</a>, then this is a good talent node.",
    value: "Optional",
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
      "This talent gives a very small damage increase to your tiger palm. If you are trying to parse in raid on single target fights or you do not need <a href='https://www.wowhead.com/spell=218164/detox' target='_blank' class='orange'>Detox</a> in a dungeon, you can take this talent.",
    value: "Optional",
  },
  {
    id: "dance-wind-dampen",
    name: "<a href='https://www.wowhead.com/spell=414132/dance-of-the-wind' target='_blank'>Dance of the Wind <span class='white'>/</span> <a href='https://www.wowhead.com/spell=122278/dampen-harm' target='_blank'>Dampen Harm</a>",
    description:
      "Your choice with this node depends on your current needs. If you want a base dodge increase, you take <a href='https://www.wowhead.com/spell=414132/dance-of-the-wind' target='_blank' class='orange'>Dance of the Wind</a>. If you are expecting very large hits, you take <a href='https://www.wowhead.com/spell=122278/dampen-harm' target='_blank' class='orange'>Dampen Harm</a>. This season, you want to typically run <a href='https://www.wowhead.com/spell=122278/dampen-harm' target='_blank' class='orange'>Dampen Harm</a>, but if you want less buttons, <a href='https://www.wowhead.com/spell=414132/dance-of-the-wind' target='_blank' class='orange'>Dance of the Wind</a> is still a very good choice.",
    value: "Required",
  },
  {
    id: "improved-tod",
    name: "<a href='https://www.wowhead.com/spell=322113/improved-touch-of-death' target='_blank'>Improved Touch of Death</a>",
    description:
      "This talent serves no purpose, as we always want to finish off an enemy with <a href='https://www.wowhead.com/spell=115080/touch-of-death' target='_blank' class='orange'>Touch of Death</a>.",
    value: "Never",
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
      "This talent is extremely strong and is one of Monk's group buffs. Not only does it increase all healing that you receive by 8%, but it increases the healing that your allies receive, too. You want to run this in raid if there is not another monk providing the buff.",
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
      "This talent grants you and your allies a 4% speed increase. This can be a good talent node if you have extra points left over.",
    value: "Optional",
  },
  {
    id: "healing-winds",
    name: "<a href='https://www.wowhead.com/beta/spell=450560/healing-winds' target='_blank'>Healing Winds</a>",
    description:
      "This talent makes <a href='https://www.wowhead.com/spell=101643/transcendence' target='_blank' class='orange'>Transcendence</a> heal is for 10% of our maximum health. This is really bad because it heals for such a low amount.",
    value: "Never",
  },
  {
    id: "fatal-touch",
    name: "<a href='https://www.wowhead.com/spell=394123/fatal-touch' target='_blank'>Fatal Touch</a>",
    description:
      "This talent reduces <a href='https://www.wowhead.com/spell=115080/touch-of-death' target='_blank' class='orange'>Touch of Death's</a> cooldown by 90 seconds, and increases your damage dealt by 5% for 30 seconds after using it.",
    value: "Required",
  },
  {
    id: "generous-pour",
    name: "<a href='https://www.wowhead.com/spell=389575/generous-pour' target='_blank'>Generous Pour</a>",
    description:
      "This talent can be taken to give you and your allies a 4% damage reduction to AoE attacks. This is extremely powerful and should always be run in all content.",
    value: "Required",
  },

  {
    id: "save-them-all",
    name: "<a href='https://www.wowhead.com/spell=389579/save-them-all' target='_blank'>Save them All</a>",
    description:
      "Because our only way to heal allies is on a 10 second cooldown, this talen has a very low uptime, making it not a good choice.",
    value: "Never",
  },
  {
    id: "swift-art",
    name: "<a href='https://www.wowhead.com/beta/spell=450622/swift-art' target='_blank'>Swift Art</a>",
    description:
      "This talent is horrible. We already have a way to get rid of snares with <a href='https://www.wowhead.com/spell=116841/tigers-lust' target='_blank' class='orange'>Tiger's Lust</a>, and it can only trigger every 30 seconds. Never take it.",
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
      "This talent gives us passive damage reduction throughout combat. Unlike the previous season, it is now only one talent point, and should always be taken.",
    value: "Required",
  },
  {
    id: "lighter-than-air",
    name: "<a href='https://www.wowhead.com/beta/spell=449582/lighter-than-air' target='_blank'>Lighter than Air</a>",
    description:
      "This talent gives you an additional dash that can be activated by pressing spacebar after rolling. If you like the talent or want a little bit extra mobility, you can take this talent.",
    value: "Optional",
  },
  {
    id: "flow-of-chi",
    name: "<a href='https://www.wowhead.com/beta/spell=450569/flow-of-chi' target='_blank'>Flow of Chi</a>",
    description:
      "This talent is really good, as it gives us certain buffs based on our health. These buffs include a movement speed increase, damage reduction, and a healing increase. This talent should always be ran.",
    value: "Required",
  },
  {
    id: "martial-instincts",
    name: "<a href='https://www.wowhead.com/beta/spell=450427/martial-instincts' target='_blank'>Martial Instincts</a>",
    description:
      "This talent is extremely good, as it increases your physical damage and avoidance by 4%. Always take this talent.",
    value: "Required",
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
    id: "celestial-determination",
    name: "<a href='https://www.wowhead.com/beta/spell=450638/celestial-determination' target='_blank'>Celestial Determination</a>",
    description:
      "This talent is extremely bad, as we don't run the ability it works with, and even if we did, it would still be useless. Never take it.",
    value: "Never",
  },
  {
    id: "ox-statue",
    name: "<a href='https://www.wowhead.com/spell=115315/summon-black-ox-statue' target='_blank'>Summon Black Ox Statue</a>",
    description:
      "This talent is pretty good right now on certain bosses. Even for regular dungeons, however, it makes AoE threat much easier, due to the AoE taunt it gives us.",
    value: "Optional",
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
      "This talent is a decent choice as of right now. If you want a little bit of extra stagger reduction, you can choose to take this.",
    value: "Optional",
  },

  {
    id: "hit-scheme",
    name: "<a href='hhttps://www.wowhead.com/spell=383695/hit-scheme' target='_blank'>Hit Scheme</a>",
    description:
      "This talent is a massive damage increase. It makes our <a href='https://www.wowhead.com/spell=100784/blackout-kick' target='_blank' class='orange'>Blackout Kick</a> increase the damage of our next <a href='https://www.wowhead.com/spell=121253/keg-smash' target='_blank' class='orange'>Keg Smash</a> by 10%, stacking up to 4 times.",
    value: "Required",
  },
  {
    id: "elixir-of-determination",
    name: "<a href='https://www.wowhead.com/beta/spell=455139/elixir-of-determination' target='_blank'>Elixir of Determination</a>",
    description:
      "This talent gives us an absorb shield whenever our health drops below 40%. This is a nice passive mitigation talent, and should always be taken.",
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
      "Both of these talents do decent damage. <a href='https://www.wowhead.com/spell=196730/special-delivery' target='_blank' class='orange'>Special Delivery</a> makes us drop a keg from the air whenever we purify our stagger, while <a href='https://www.wowhead.com/spell=116847/rushing-jade-wind' target='_blank' class='orange'>Rushing Jade Wind</a> radiates damage around us and is a buff that we have to upkeep. The talent you take here is a personal decision, but <a href='https://www.wowhead.com/spell=196730/special-delivery' target='_blank' class='orange'>Special Delivery</a> can pull just slightly ahead.",
    value: "Required",
  },

  {
    id: "celestial-flames",
    name: "<a href='https://www.wowhead.com/spell=325190/celestial-flames' target='_blank'>Celestial Flames</a>",
    description:
      "This talent applies our <a href='https://www.wowhead.com/spell=115181/breath-of-fire' target='_blank' class='orange'>Breath of Fire</a> to all targets that are hit by our <a href='https://www.wowhead.com/spell=101546/spinning-crane-kick' target='_blank' class='orange'>Spinning Crane Kick</a>, aswell as giving us 5% increased damage reduction. This talent shouldn't be taken as we can already get high <a href='https://www.wowhead.com/spell=115181/breath-of-fire' target='_blank' class='orange'>Breath of Fire</a> uptime without it.",
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
    id: "august-blessing",
    name: "<a href='https://www.wowhead.com/beta/spell=454483/august-blessing' target='_blank'>August Blessing</a>",
    description:
      "This talent applies a HoT whenever you overheal. Currently, there are other talents that are better, so you never want to run this.",
    value: "Never",
  },
  {
    id: "one-with-the-wind",
    name: "<a href='https://www.wowhead.com/beta/spell=454484/one-with-the-wind' target='_blank'>One With the Wind</a>",
    description:
      "This talent gives us a higher uptime on our Mastery, giving us increased dodge change and a good amount of tankiness. We are a little tight on talents at the moment, so you should never take this.",
    value: "Never",
  },
  {
    id: "strike-at-dawn",
    name: "<a href=' https://www.wowhead.com/beta/spell=455043/strike-at-dawn' target='_blank'>Strike At Dawn</a>",
    description:
      "This talent gives us a stack of our Mastery whenever we use <a href='https://www.wowhead.com/spell=107428/rising-sun-kick' target='_blank' class='orange'>Rising Sun Kick</a>. We are a little tight on talents at the moment, so you should never take this.",
    value: "Never",
  },
  {
    id: "zen-meditation",
    name: "<a href='https://www.wowhead.com/spell=115176/zen-meditation' target='_blank'>Zen Meditation</a>",
    description:
      "A 60% defensive to all sources that is canceled as soon as we are hit by a melee attack. While it may not sound very useful, it can be utilized in pure magic damage situations and for tank busters (more discussed in the <a href='advanced.html'>advanced section</a> of the guide). This is an essential talent to branch to later nodes, so you should always take this.",
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
    id: "tranquil-spirit",
    name: "<a href='https://www.wowhead.com/spell=393357/tranquil-spirit' target='_blank'>Tranquil Spirit</a>",
    description:
      "This talent reduces our stagger level whenever we consume a <a href='https://www.wowhead.com/spell=124502/gift-of-the-ox' target='_blank' class='orange'>Gift of the Ox</a> orb, which is a very good talent.",
    value: "Required",
  },
  {
    id: "gai-plins-imperial-brew",
    name: "<a href='https://www.wowhead.com/spell=383700/gai-plins-imperial-brew' target='_blank'>Gai Plin's Imperial Brew</a>",
    description:
      "This talent makes our <a href='https://www.wowhead.com/spell=119582/purifying-brew' target='_blank' class='orange'>Purifying Brew</a> much stronger, as it will now heal us for 25% of the purified stagger.",
    value: "Required",
  },
  {
    id: "fundamental-observation",
    name: "<a href='https://www.wowhead.com/spell=387035/fundamental-observation' target='_blank'>Fundamental Observation</a>",
    description:
      "This talent reduces <a href='https://www.wowhead.com/spell=115176/zen-meditation' target='_blank' class='orange'>Zen Meditation's</a> cooldown by 25%, along with making it not get canceled by moving or receiving melee attacks. You should always run 1 point in this talent. If you want some more survivability, you can run 2.",
    value: "Required",
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
      "Both <a href='https://www.wowhead.com/spell=383698/scalding-brew' target='_blank' class='orange'>Scalding Brew</a> and <a href='https://www.wowhead.com/spell=383697/salsalabims-strength' target='_blank' class='orange'>Sal'salabim's Strength</a> are very good talents. Due to <a href='https://www.wowhead.com/spell=383698/scalding-brew' target='_blank' class='orange'>Scalding Brew</a> synergizing with our builds more, however, we currently take this talent in every build we play.",
    value: "Required",
  },
  {
    id: "fort-brew-determination",
    name: "<a href='https://www.wowhead.com/spell=322960/fortifying-brew-determination' target='_blank'>Fortifying Brew: Determination</a>",
    description:
      "This talent increases the effectiveness of our stagger whenever we use <a href='https://www.wowhead.com/spell=243435/fortifying-brew' target='blank' class='orange'>Fortifying Brew</a>. This talent is very strong, especially since our tier set helps us use <a href='https://www.wowhead.com/spell=243435/fortifying-brew' target='blank' class='orange'>Fortifying Brew</a> more often. With our current tier set and us running Master of Harmony, this should always be taken.",
    value: "Required",
  },
  {
    id: "bob-ox-brew",
    name: "<a href='https://www.wowhead.com/spell=280515/bob-and-weave' target='_blank'>Bob and Weave <span class='white'>/</span> <a href='https://www.wowhead.com/spell=115399/black-ox-brew' target='_blank'>Black Ox Brew</a>",
    description:
      "Both of these talents are extremely good. <a href='https://www.wowhead.com/spell=280515/bob-and-weave' target='_blank' class='orange'>Bob and Weave</a> delays the rate at which our stagger damages us, making us overall tankier. <a href='https://www.wowhead.com/spell=115399/black-ox-brew' target='_blank' class='orange'>Black Ox Brew</a> is a cooldown that allows us to reset the cooldown of all of our brews whenever we want. This season, we want to run <a href='https://www.wowhead.com/spell=115399/black-ox-brew' target='_blank' class='orange'>Black Ox Brew</a>, as it is a very helpful extra defensive, and can even be used offensively in combination with <a href='https://www.wowhead.com/spell=196730/special-delivery' target='_blank' class='orange'>Special Delivery</a>.",
    value: "Required",
  },
  {
    id: "dave",
    name: "<a href='https://www.wowhead.com/spell=132578/invoke-niuzao-the-black-ox' target='_blank'>Invoke Niuzao, the Black Ox</a>",
    description:
      "This talent gives us a cooldown that summons a pet who staggers 25% of our stagger while active. He does close to no damage, and he should never be taken.",
    value: "Never",
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
    value: "Required",
  },
  {
    id: "counterstrike",
    name: "<a href='https://www.wowhead.com/spell=383785/counterstrike' target='_blank'>Counterstrike</a>",
    description:
      "This talent is a massive damage increase single target. Whenever we dodge an attack, it increases the damage of our next <a href='https://www.wowhead.com/spell=100780/tiger-palm' target='_blank' class='orange'>Tiger Palm</a> by 100%. This should always be ran.",
    value: "Required",
  },

  {
    id: "dragonfire-charred",
    name: "<a href='https://www.wowhead.com/spell=383994/dragonfire-brew' target='_blank'>Dragonfire Brew</a> <span class='white'>/</span> <a href='https://www.wowhead.com/spell=386965/charred-passions' target='_blank'>Charred Passions</a>",
    description:
      "<a href='https://www.wowhead.com/spell=383994/dragonfire-brew' target='_blank' class='orange'>Dragonfire Brew</a> increases the damage of our <a href='https://www.wowhead.com/spell=115181/breath-of-fire' target='_blank' class='orange'>Breath of Fire</a> based on 100% of our stagger, making it a good damaging ability on AoE. Because of the increased stagger generation we get from Master of Harmony, you should run <a href='https://www.wowhead.com/spell=383994/dragonfire-brew' target='_blank' class='orange'>Dragonfire Brew</a> for a damage increase on AoE.",
    value: "Required",
  },
  {
    id: "high-tolerance",
    name: "<a href='https://www.wowhead.com/spell=196737/high-tolerance' target='_blank'>High Tolerance</a>",
    description:
      "This talent helps delay your stagger and gives you haste based on your current level of stagger. This is a very strong talent for us and you should always have at least one point in it.",
    value: "Required",
  },
  {
    id: "walk-with-the-ox",
    name: "<a href='https://www.wowhead.com/spell=387219/walk-with-the-ox' target='_blank'>Walk with the Ox</a>",
    description:
      "This talent reduces the cooldown of <a href='https://www.wowhead.com/spell=132578/invoke-niuzao-the-black-ox' target='_blank' class='orange'>Invoke Niuzao, the Black Ox</a>, along with increasing his damage. Due to him being very undertuned at the moment, this should never be taken.",
    value: "Never",
  },
  {
    id: "ox-stance",
    name: "<a href='https://www.wowhead.com/beta/spell=455068/ox-stance' target='_blank'>Ox Stance</a>",
    description:
      "Ox Stance is a great talent to take when you want to deal with heavy hitting tank busters. It increases the effectivess on your stagger when an attack hits you for greater than 60% of your maximum health. We have much better talents to run, so this should never be taken.",
    value: "Never",
  },
  {
    id: "elusive-footwork",
    name: "<a href='https://www.wowhead.com/spell=387046/elusive-footwork' target='_blank'>Elusive Footwork</a>",
    description:
      "This talent makes our <a href='https://www.wowhead.com/spell=100784/blackout-kick' target='_blank' class='orange'>Blackout Kick</a> do 5% additional damage and grant us additional dodge chance, which is very good.",
    value: "Required",
  },
  {
    id: "anvil-stave",
    name: "<a href='https://www.wowhead.com/spell=386937/anvil-stave' target='_blank'>Anvil & Stave</a>",
    description:
      "This talent gives us a significant amount of brew cooldown reduction. In dungeons where you are taking a lot of melees, this can be a good option.",
    value: "Optional",
  },
  {
    id: "face-palm",
    name: "<a href='https://www.wowhead.com/spell=389942/face-palm' target='_blank'>Face Palm</a>",
    description:
      "This talent is very strong on single target and AoE with Master of Harmony, buffing our <a href='https://www.wowhead.com/spell=100780/tiger-palm' target='_blank' class='orange'>Tiger Palm</a> damage by a large amount. This should always be taken.",
    value: "Required",
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
      "This talent is one of our top damaging abilities. It can be used for large burst damage, especially when we ramp correctly in our <a href='https://www.wowhead.com/spell=387184/weapons-of-order' target='_blank' class='orange'>Weapons of Order</a> burst windows (more discussed in the <a href='playstyle.html'>playstyle & rotation</a> section).",
    value: "Required",
  },
  {
    id: "blackout-combo",
    name: "<a href='https://www.wowhead.com/spell=196736/blackout-combo' target='_blank'>Blackout Combo</a>",
    description:
      "This talent causes <a href='https://www.wowhead.com/spell=100784/blackout-kick' target='_blank' class='orange'>Blackout Kick</a> to buff the next use of <a href='https://www.wowhead.com/spell=100780/tiger-palm' target='_blank' class='orange'>Tiger Palm</a>, <a href='https://www.wowhead.com/spell=115181/breath-of-fire' target='_blank' class='orange'>Breath of Fire</a>, <a href='https://www.wowhead.com/spell=121253/keg-smash' target='_blank' class='orange'>Keg Smash</a>, <a href='https://www.wowhead.com/spell=322507/celestial-brew' target='_blank' class='orange'>Celestial Brew</a>, or <a href='https://www.wowhead.com/spell=119582/purifying-brew' target='_blank' class='orange'>Purifying Brew</a>. Typically, you want to use this buff on <a href='https://www.wowhead.com/spell=100780/tiger-palm' target='_blank' class='orange'>Tiger Palm</a> for single target damage, <a href='https://www.wowhead.com/spell=115181/breath-of-fire' target='_blank' class='orange'>Breath of Fire</a> for AoE damage, and <a href='https://www.wowhead.com/spell=121253/keg-smash' target='_blank' class='orange'>Keg Smash</a> for additional cooldown reduction on your brews.",
    value: "Required",
  },
  {
    id: "black-ox-adept",
    name: "<a href='https://www.wowhead.com/beta/spell=455079/black-ox-adept' target='_blank'>Black Ox Adept</a>",
    description:
      "This talent causes <a href='https://www.wowhead.com/spell=107428/rising-sun-kick' target='_blank' class='orange'>Rising Sun Kick</a> to grant us a stack of <a href='https://www.wowhead.com/beta/spell=455068/ox-stance' target='_blank' class='orange'>Ox Stance</a>. This talent is very underwhelming compared to others, so it should never be taken.",
    value: "Never",
  },
  {
    id: "heightened-guard",
    name: "<a href='https://www.wowhead.com/beta/spell=455081/heightened-guard' target='_blank'>Heightened Guard</a>",
    description:
      "This talent causes <a href='https://www.wowhead.com/beta/spell=455068/ox-stance' target='_blank' class='orange'>Ox Stance</a> to trigger more frequently, as it happens at 40% of our maximum health, rather than 60%. Because we currently never take <a href='https://www.wowhead.com/beta/spell=455068/ox-stance' target='_blank' class='orange'>Ox Stance</a>, you should never take this.",
    value: "Never",
  },
  {
    id: "press-woo",
    name: "<a href='https://www.wowhead.com/spell=418359/press-the-advantage' target='_blank'>Press the Advantage</a> <span class='white'>/</span> <a href='https://www.wowhead.com/spell=387184/weapons-of-order' target='_blank'>Weapons of Order</a>",
    description:
      "Because of <a href='https://www.wowhead.com/spell=101546/spinning-crane-kick' target='_blank' class='orange'>Spinning Crane Kick</a> being undertuned right now, we never want to take <a href='https://www.wowhead.com/spell=418359/press-the-advantage' target='_blank' class='orange'>Press the Advantage</a>. <a href='https://www.wowhead.com/spell=387184/weapons-of-order' target='_blank' class='orange'>Weapons of Order</a>, however, is very strong and should always be taken. <a href='https://www.wowhead.com/spell=387184/weapons-of-order' target='_blank' class='orange'>Weapons of Order</a> is a cooldown that increases our mastery by a large amount and causes our <a href='https://www.wowhead.com/spell=121253/keg-smash' target='_blank' class='orange'>Keg Smash</a> and <a href='https://www.wowhead.com/spell=107428/rising-sun-kick' target='_blank' class='orange'>Rising Sun Kick</a> to apply a debuff to all enemies, causing us to deal 8% additional damage to them, stacking up to 4 times (more discussed in the <a href='playstyle.html'>playstyle & rotation</a> section).",
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
      "This talent gives our <a href='https://www.wowhead.com/spell=121253/keg-smash' target='_blank' class='orange'>Keg Smash</a> an additional charge and causes it to deal 20% additional damage. This is a huge damage increase on AoE, and should always be taken.",
    value: "Required",
  },
  {
    id: "call-surge",
    name: "<a href='https://www.wowhead.com/spell=397251/call-to-arms' target='_blank'>Call to Arms</a> <span class='white'>/</span> <a href='https://www.wowhead.com/spell=393400/chi-surge' target='_blank'>Chi Surge</a>",
    description:
      "<a href='https://www.wowhead.com/spell=397251/call-to-arms' target='_blank' class='orange'>Call to Arms</a> is very underwhelming at the moment as it summons an additional <a href='https://www.wowhead.com/spell=132578/invoke-niuzao-the-black-ox' target='_blank' class='orange'>Invoke Niuzao, the Black Ox</a>. <a href='https://www.wowhead.com/spell=393400/chi-surge' target='_blank' class='orange'>Chi Surge</a>, however, does a good amount of single target damage, and should be taken in raid.",
    value: "Situational",
  },
  {
    id: "call-to-arms",
    name: "<a href='https://www.wowhead.com/spell=397251/call-to-arms' target='_blank'>Call to Arms</a>",
    description:
      "<a href='https://www.wowhead.com/spell=397251/call-to-arms' target='_blank' class='orange'>Call to Arms</a> is very underwhelming at the moment as it summons an additional <a href='https://www.wowhead.com/spell=132578/invoke-niuzao-the-black-ox' target='_blank' class='orange'>Invoke Niuzao, the Black Ox</a>. It should never be taken.",
    value: "Never",
  },
  {
    id: "chi-surge",
    name: "<a href='https://www.wowhead.com/spell=393400/chi-surge' target='_blank'>Chi Surge</a>",
    description:
      "<a href='https://www.wowhead.com/spell=393400/chi-surge' target='_blank' class='orange'>Chi Surge</a> causes our <a href='https://www.wowhead.com/spell=387184/weapons-of-order' target='_blank' class='orange'>Weapons of Order</a> to release a chi blast, reducing its cooldown per enemy hit, and doing a decent amount of damage on single target. This is recommended if you want more damage or are running Shado-Pan, as it synergizes well with that hero tree.",
    value: "Optional",
  },

  // stats
  {
    id: "crit-strike",
    name: "Critical Strike",
    description:
      "Critical Strike is strong for us both offensively and defensively, as it increases our <a href='https://www.wowhead.com/spell=216519/celestial-fortune' target='_blank' class='orange'>Celestial Fortune</a> healing. Try to get as much of this as possible, along with Versatility.",
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
      "We want a bit more Mastery this season than last. Because of the buff to <a class='orange' href='https://www.wowhead.com/spell=322507/celestial-brew' target='_blank'>Celestial Brew</a>, it is much stronger.",
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
    name: "<a href='https://www.wowhead.com/ptr-2/item=229298/ageless-serpents-mane' target='_blank'>Ageless Serpent's Mane</a>",
    description: "Haste / Mastery",
    value: "Head",
  },
  {
    id: "tier-shoulders",
    name: "<a href='https://www.wowhead.com/ptr-2/item=229296/ageless-serpents-shoulderpads' target='_blank'>Ageless Serpent's Shoulderpads</a>",
    description: "Critical Strike / Haste",
    value: "Shoulders",
  },
  {
    id: "tier-chest",
    name: "<a href='https://www.wowhead.com/ptr-2/item=229301/ageless-serpents-inked-coils' target='_blank'>Ageless Serpent's Inked Coils</a>",
    description: "Critical Strike / Haste",
    value: "Chest",
  },
  {
    id: "tier-gloves",
    name: "<a href='https://www.wowhead.com/ptr-2/item=229299/ageless-serpents-handguards' target='_blank'>Ageless Serpent's Handguards</a>",
    description: "Haste / Versatility",
    value: "Hands",
  },
  {
    id: "tier-legs",
    name: "<a href='https://www.wowhead.com/ptr-2/item=229297/ageless-serpents-leggings' target='_blank'>Ageless Serpent's Leggings</a>",
    description: "Critical Strike / Versatility",
    value: "Legs",
  },

  // necks
  {
    id: "flickering-glowtorc",
    name: "<a href='https://www.wowhead.com/ptr-2/item=221103/flickering-glowtorc' target='_blank'>Flickering Glowtorc</a>",
    description: "Critical Strike / Versatility",
  },
  {
    id: "elemental-lariat",
    name: "<a href='https://www.wowhead.com/item=193001/elemental-lariat' target='_blank'>Elemental Lariat</a>",
    description:
      "This neck is extremely strong, as it has a change at strengthening the secondary stats we gain from our gems. You do not want to run this until you have full sockets, though.",
  },
  {
    id: "elders-hemolymphal-periapt",
    name: "<a href='https://www.wowhead.com/item=221181/elders-hemolymphal-periapt' target='_blank'>Elder's Hemolymphal Periapt</a>",
    description: "Critical Strike / Versatility",
  },
  {
    id: "tuskarr-bone-necklace",
    name: "<a href='https://www.wowhead.com/ptr-2/item=193666/tuskarr-bone-necklace' target='_blank'>Tuskarr Bone Necklace</a>",
    description:
      "This neck is a great option, as it gives a lot of Critical Strike and a good amount of Versatility.",
  },
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

  // heads
  {
    id: "crown-of-roaring-storms",
    name: "<a href='https://www.wowhead.com/ptr-2/item=193751/crown-of-roaring-storms' target='_blank'>Crown of Roaring Storms</a>",
    description:
      "This helmet gives as lot of Versatility and Critical Strike, making it a great option.",
  },
  {
    id: "violent-gravemask",
    name: "<a href='https://www.wowhead.com/ptr-2/item=202602/violent-gravemask' target='_blank'>Violent Gravemask</a>",
    description:
      "This helmet gives a ton of Mastery and decent Versatility. This is a great option if you want more Mastery.",
  },

  // shoulders
  {
    id: "sanguine-experiments-bandages",
    name: "<a href='https://www.wowhead.com/item=225588/sanguine-experiments-bandages' target='_blank'>Sanguine Experiment's Bandages</a>",
    description: "Critical Strike / Versatility",
  },
  {
    id: "rune-branded-mantle",
    name: "<a href='https://www.wowhead.com/item=219330/rune-branded-mantle' target='_blank'>Rune Branded Mantle</a>",
    description: "Critical Strike / Versatility",
  },
  {
    id: "whispering-umbral-mantle",
    name: "<a href='https://www.wowhead.com/item=221094/whispering-umbral-mantle' target='_blank'>Whispering Umbral Mantle</a>",
    description: "Critical Strike / Versatility",
  },
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
    id: "candlebearers-shroud",
    name: "<a href='https://www.wowhead.com/ptr-2/item=221109/candlebearers-shroud' target='_blank'>Candlebearers Shroud</a>",
    description: "Critical Strike / Versatility",
  },
  {
    id: "swarmcallers-shroud",
    name: "<a href='https://www.wowhead.com/item=221154/swarmcallers-shroud' target='_blank'>Swarmcaller's Shroud</a>",
    description: "Critical Strike / Versatility",
  },
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

  // hands
  {
    id: "self-sanitizing-handwraps",
    name: "<a href='https://www.wowhead.com/ptr-2/item=168985/self-sanitizing-handwraps' target='_blank'>Self-Sanitizing Handwraps</a>",
    description: "Critical Strike / Mastery",
  },
  {
    id: "enforcers-sticky-fingers",
    name: "<a href='https://www.wowhead.com/ptr-2/item=228863/enforcers-sticky-fingers' target='_blank'>Enforcer's Sticky Fingers</a>",
    description: "Critical Strike / Versatility",
  },
  {
    id: "thousand-scar-impalers",
    name: "<a href='https://www.wowhead.com/item=212432/thousand-scar-impalers' target='_blank'>Thousand Scar Impalers</a>",
    description: "Critical Strike / Haste",
  },
  {
    id: "rune-branded-grasps",
    name: "<a href='https://www.wowhead.com/item=219333/rune-branded-grasps' target='_blank'>Rune-Branded Grasps</a>",
    description: "Critical Strike / Versatility",
  },

  // wrist
  {
    id: "hustlers-ante-uppers",
    name: "<a href='https://www.wowhead.com/ptr-2/item=228885/hustlers-ante-uppers' target='_blank'>Hustler's Ante-Uppers</a>",
    description: "Versatility / Mastery",
  },
  {
    id: "ferocious-hyena-hidebinders",
    name: "<a href='https://www.wowhead.com/ptr-2/item=193793/ferocious-hyena-hidebinders' target='_blank'>Ferocious Hyena Hidebinders</a>",
    description:
      "These wrists are a very good option if you need Critical Strike and Versatility.",
  },
  {
    id: "rune-branded-armbands",
    name: "<a href='https://www.wowhead.com/item=219334/rune-branded-armbands' target='_blank'>Rune-Branded Armbands</a>",
    description: "Versatility / Critical Strike",
  },
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
  {
    id: "needlessly-complex-wristguards",
    name: "<a href='https://www.wowhead.com/ptr-2/item=198327/needlessly-complex-wristguards' target='_blank'>Needlessly Complex Wristguards</a>",
    description:
      "These wrists are very good if you want to run a brez as Brewmaster. Not only this, but they give double of the secondary stat that you choose.",
  },

  // waist
  {
    id: "troggskin-waistband",
    name: "<a href='https://www.wowhead.com/ptr-2/item=193668/troggskin-waistband' target='_blank'>Troggskin Waistband</a>",
    description:
      "This belt gives a lot of Critical Strike and a good amount of Versatility, making it a very good choice for us.",
  },
  {
    id: "adrenal-surge-clasp",
    name: "<a href='https://www.wowhead.com/item=219502/adrenal-surge-clasp' target='_blank'>Adrenal Surge Clasp</a>",
    description: "Critical Strike / Versatility",
  },
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
    id: "ageless-serpents-ankleweights",
    name: "<a href='https://www.wowhead.com/ptr-2/item=229300/ageless-serpents-ankleweights' target='_blank'>Ageless Serpent's Ankleweights</a>",
    description: "Critical Strike / Versatility",
  },
  {
    id: "slimy-expulsion-boots",
    name: "<a href='https://www.wowhead.com/item=193451/slimy-expulsion-boots' target='_blank'>Slimy Expulsion Boots</a>",
    description:
      "These boots have good stats for us, helping us get our Versatility and Mastery up. Not only this, but they also have an embellishment attached to them that does good damage on single target. There is no other competitive option for boots because of how good these are for us.",
  },
  {
    id: "viscera-stitched-footpads",
    name: "<a href='https://www.wowhead.com/item=178731/viscera-stitched-footpads' target='_blank'>Viscera Stitched Footpads</a>",
    description: "Critical Strike / Versatility",
  },

  // rings
  {
    id: "ring-of-earthen-craftsmanship",
    name: "<a href='https://www.wowhead.com/ptr-2/item=215135/ring-of-earthen-craftsmanship' target='_blank'>Ring of Earthen Craftsmanship</a>",
    description: "Critical Strike / Versatility",
  },
  {
    id: "ring-of-perpetual-conflict",
    name: "<a href='https://www.wowhead.com/ptr-2/item=178872/ring-of-perpetual-conflict' target='_blank'>Ring of Perpetual Conflict</a>",
    description: "Critical Strike / Mastery",
  },
  {
    id: "ritual-bone-band",
    name: "<a href='https://www.wowhead.com/ptr-2/item=178870/ritual-bone-band' target='_blank'>Ritual Bone Band</a>",
    description: "Versatility / Mastery",
  },
  {
    id: "miniature-roulette-wheel",
    name: "<a href='https://www.wowhead.com/ptr-2/item=228843/miniature-roulette-wheel' target='_blank'>Miniature Roulette Wheel</a>",
    description:
      "Versatility > Critical Strike or Critical Strike > Verastility",
  },
  {
    id: "seal-of-filial-duty",
    name: "<a href='https://www.wowhead.com/item=195526/seal-of-filial-duty' target='_blank'>Seal of Filial Duty</a>",
    description:
      "This ring is extremely powerful. Although it provides a little bit of haste, it gives us a lot of mastery and also has a very strong on equip effect. Whenever we deal damage, this ring has a chance of granting us a shield. This should be your first purchase with the dinar tokens.",
  },
  {
    id: "cyrces-circlet",
    name: "<a href='https://www.wowhead.com/item=228411/cyrces-circlet' target='_blank'>Cyrce's Circlet</a>",
    description:
      "This is the new ring from Siren Isle and it is very strong. The gems that you want to run on it are Legendary Skipper's Citrine, Fathomdweller's Runed Citrine, and Stormbringer's Runed Cintrine or Thunderlord's Crackling Citrine. Stormbringer's provides more survivability and consistency, while Thunderlord's provides more ST. Thunderlord's is really good in keys like City of Threads and Dawnbreaker where it's a lot of ST and low target count pulls.",
  },
  {
    id: "ring-of-dun-algaz",
    name: "<a href='https://www.wowhead.com/item=133287/ring-of-dun-algaz' target='_blank'>Ring of Dun Algaz</a>",
    description: "Critical Strike / Versatility",
  },
  {
    id: "seal-of-the-poisoned-pact",
    name: "<a href='https://www.wowhead.com/item=225578/seal-of-the-poisoned-pact' target='_blank'>Seal of the Poisoned Pact</a>",
    description:
      "Critical Strike / Mastery - This ring stacks up to 5 times. At 5 stacks, you inject a poison into your enemy, doing a good amount of single target damage.",
  },
  {
    id: "ritual-commanders-ring",
    name: "<a href='https://www.wowhead.com/item=178781/ritual-commanders-ring' target='_blank'>Ritual Commander's Ring</a>",
    description: "Critical Strike / Versatility",
  },
  {
    id: "seal-of-diurnas-chosen",
    name: "<a href='https://www.wowhead.com/item=195480/seal-of-diurnas-chosen' target='_blank'>Seal of Diurna's Chosen</a>",
    description:
      "This ring is very good for us because of the stats that it provides, as well as the equip effect. It provides us a little bit of Critical Strike, a lot of Versatility, and gives our abilities a chance to ignite enemies on fire, dealing damage over time.",
  },
  {
    id: "signet-of-titanic-insight",
    name: "<a href='https://www.wowhead.com/item=192999/signet-of-titanic-insight' target='_blank'>Signet of Titanic Insight</a>",
    description:
      "This is our crafted ring. If you cannot get your hands on Seal of Diurna's Choice, then this is your best option. Just like the others we want to customize its stats to our liking. If you have a flavor pocket this can be a really good slot to put it on, too.",
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
    id: "giga-bank-breaker",
    name: "<a href='https://www.wowhead.com/ptr-2/item=228905/giga-bank-breaker' target='_blank'>Giga Bank-Breaker</a>",
    description: "Critical Strike / Mastery",
  },
  {
    id: "charged-halberd",
    name: "<a href='https://www.wowhead.com/ptr-2/item=222448/charged-halberd' target='_blank'>Charged Halberd</a>",
    description: "Critical Strike / Versatility",
  },
  {
    id: "gallytech-turbo-tiller",
    name: "<a href='https://www.wowhead.com/ptr-2/item=234494/gallytech-turbo-tiller' target='_blank'>Gallytech Turbo-Tiller</a>",
    description: "Critical Strike / Mastery",
  },
  {
    id: "djaruun-pillar-of-the-elder-flame",
    name: "<a href='https://www.wowhead.com/item=202569/djaruun-pillar-of-the-elder-flame' target='_blank'>Djaruun, Pillar of the Elder Flame</a>",
    description:
      "This weapon is extremely powerful. It gives us good stats, providing a lot of Critical Strike and some Mastery, as well as having a very strong on use effect. This should be your second purchase with the dinar tokens.",
  },
  {
    id: "harvesters-interdiction",
    name: "<a href='https://www.wowhead.com/item=221159/harvesters-interdiction' target='_blank'>Harvester's Interdiction</a>",
    description: "Versatility / Mastery - Gives a proc to your attacks.",
  },
  {
    id: "spire-of-transfused-horrors",
    name: "<a href='https://www.wowhead.com/item=212389/spire-of-transfused-horrors' target='_blank'>Spire of Transfused Horrors</a>",
    description: "Versatility / Mastery",
  },
  {
    id: "void-reapers-warp-blade",
    name: "<a href='https://www.wowhead.com/item=219877/void-reapers-warp-blade' target='_blank'>Void Reaper's Warp Blade</a>",
    description:
      "Critical Strike - Gives a proc to your attacks, boosting your damage by about 1% overall.",
  },
  {
    id: "zephyrous-sail-carver",
    name: "<a href='https://www.wowhead.com/item=221144/zephyrous-sail-carver' target='_blank'>Zephyrous Sail Carver</a>",
    description: "Critical Strike / Versatility",
  },
  {
    id: "charged-facesmasher",
    name: "<a href='https://www.wowhead.com/item=222446/charged-facesmasher' target='_blank'>Charged Facesmasher</a>",
    description: "Critical Strike / Versatility",
  },
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
    id: "granyths-enduring-scale",
    name: "<a href='https://www.wowhead.com/item=193689/granyths-enduring-scale' target='_blank'>Granyth's Enduring Scale</a>",
    description:
      "This trinket has been reworked this season and has become extremely powerful. It now is an on use trinket that grants a massive shield, along with a ton of armor. This is extremely good for Brewmaster, as we really struggle with our low armor. This trinket will always be run on both fortified and tyrannical mythic+ keys.",
  },
  {
    id: "inexorable-resonator",
    name: "<a href='https://www.wowhead.com/item=193805/inexorable-resonator' target='_blank'>Inexorable Resonator</a>",
    description:
      "This trinket has also been reworked this season. If you want to run a second defensive trinket, this will be your best option. Whenever you fall below 75% max health, you will gain a massive absorb shield that pulses AoE damage. This can only occur once every 1.5 minutes, but it is still very strong. I will run this on fortified mythic+ keys.",
  },
  {
    id: "burgeoning-seed",
    name: "<a href='https://www.wowhead.com/ptr-2/item=193634/burgeoning-seed' target='_blank'>Burgeoning Seed</a>",
    description:
      "This trinket is pretty strong this season. It gives us increased health and versatility, providing some nice passive mitigation. If you want an on equip defensive trinket, this is a great option.",
  },
  {
    id: "all-totem-of-the-master",
    name: "<a href='https://www.wowhead.com/item=194306/all-totem-of-the-master' target='_blank'>All-Totem of the Master</a>",
    description:
      "This trinket cycles through stances every 30 seconds, unleashing an attack based on the element. The most notable stance is the earth stance, which provides a ton of armor, making us extremely tanky. This trinket is a decent option, but not the best because of the stances being uncontrollable and random.",
  },
  {
    id: "fyrakks-tainted-rageheart",
    name: "<a href='https://www.wowhead.com/item=207174/fyrakks-tainted-rageheart' target='_blank'>Fyrakk's Tainted Rageheart</a>",
    description:
      "This trinket is very strong. Although it doesn't give us Agility, we still gain Versatility, a very good stat for us. On use, it gives us an absorb shield and radiates AoE damage, which is also strong on single target. While it may not be as strong as other defensive trinkets, it does good damage too. If you want a trinket that works both offensively and defensively, then this is a great choice.",
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

  // trinkets
  {
    id: "signet-of-the-priory",
    name: "<a href='https://www.wowhead.com/ptr-2/item=219308/signet-of-the-priory' target='_blank'>Signet of the Priory</a>",
    description:
      "This trinket is an on-use that increases your highest secondary stat by a lot, which is great for your <a href='https://www.wowhead.com/spell=387184/weapons-of-order' target='_blank' class='orange'>Weapons of Order</a> window. This should always be ran.",
  },
  {
    id: "house-of-cards",
    name: "<a href='https://www.wowhead.com/ptr-2/item=230027/house-of-cards' target='_blank'>House of Cards</a>",
    description:
      "This trinket is an on-use that increases your Mastery by a lot. If you have access to raid loot, you should always run this trinket along with Signet of the Priory.",
  },
  {
    id: "improvised-seaforium-pacemaker",
    name: "<a href='https://www.wowhead.com/ptr-2/item=232541/improvised-seaforium-pacemaker' target='_blank'>Improvised Seaforium Pacemaker</a>",
    description:
      "This trinket randomly procs every 60 seconds and gives us a ton of Critical Strike. It is great for both our damage and survivability. If you don't have a House of Cards, you should always run this trinket.",
  },
  {
    id: "ringing-ritual-mud",
    name: "<a href='https://www.wowhead.com/ptr-2/item=232543/ringing-ritual-mud' target='_blank'>Ringing Ritual Mud</a>",
    description:
      "This trinket serves as a big absorb shield that also pulses a little bit of damage. If you want a strong defensive trinket, this is a great option.",
  },
  {
    id: "chromebustible-bomb-suit",
    name: "<a href='https://www.wowhead.com/ptr-2/item=230029/chromebustible-bomb-suit' target='_blank'>Chromebustible Bomb Suit</a>",
    description:
      "This trinket is similar to Ringing Ritual Mud, as it is an on-use defensive trinket that also does a little bit of damage. If you want a defensive trinket that has a lower cooldown in exchange for a slightly weaker one, then this trinket is a great option.",
  },
  {
    id: "ovinaxs-mercurial-egg",
    name: "<a href='https://www.wowhead.com/item=220305/ovinaxs-mercurial-egg' target='_blank'>Ovi'nax's Mercurial Egg</a>",
    description:
      "This trinket grants us increased Agility when we are standing still, stacking up to 30 times. When we are moving, we gain an increase to our highest secondary stat, stacking up to 30 times. This egg is very strong, as it is a very helpful stat increase. If you can get it from raid, make sure you always run it.",
  },
  {
    id: "empowering-crystal-of-anubikkaj",
    name: "<a href='https://www.wowhead.com/item=219312/empowering-crystal-of-anubikkaj' target='_blank'>Empowering Crystal of Anub'ikkaj</a>",
    description:
      "This trinket grants us a ton of a random secondary stat. Since 3/4 of the stats are very good for us, this is a great trinket for boosting your secondaries.",
  },
  {
    id: "ara-kara-sacbrood",
    name: "<a href='https://www.wowhead.com/item=219314/ara-kara-sacbrood' target='_blank'>Ara-Kara Sacbrood</a>",
    description:
      "This trinket grants us a ton of passive agility, which benefits us both offensively and defensively. This is an excellent stat stick that can be used.",
  },
  {
    id: "dead-eye-spyglass",
    name: "<a href='https://www.wowhead.com/item=159623/dead-eye-spyglass' target='_blank'>Dead-Eye Spyglass</a>",
    description:
      "This trinket gives us an increase to our Critical Strike at all times. You should always run this trinket.",
  },
  {
    id: "harvesters-edict",
    name: "<a href='https://www.wowhead.com/item=219317/harvesters-edict' target='_blank'>Harvester's Edict</a>",
    description:
      "This trinket gives our damaging abilities a chance to do send out a ball of shadow, dealing shadow damage to enemies on contact. You can also run into the shadow orb yourself, granting yourself an increase in Mastery. This is a good alternative if you cannot get Ovi'nax's Mercurial Egg from raid.",
  },
  {
    id: "refracting-aggression-module",
    name: "<a href='https://www.wowhead.com/item=219315/refracting-aggression-module' target='_blank'>Refracting Aggression Module</a>",
    description:
      "This trinket is a great defensive option. When you taunt, you gain a massive absorb shield which grants you 50% reduced damage until the shield is destroyed. This can occur every 1 minute.",
  },
  {
    id: "swarmlords-authority",
    name: "<a href='https://www.wowhead.com/item=212450/swarmlords-authority' target='_blank'>Swarmlord's Authority</a>",
    description:
      "This trinket is a great defensive option. It can be used a little bit before a tank beater, or as a way to get some passive mitigation for a lot of constant damage.",
  },
  {
    id: "mad-queens-mandate",
    name: "<a href='https://www.wowhead.com/item=212454/mad-queens-mandate' target='_blank'>Mad Queen's Mandate</a>",
    description:
      "This trinket is a really good option if you want increased single target damage. It provides a lot of additional execute damage along with <a href='https://www.wowhead.com/spell=115080/touch-of-death' target='_blank' class='orange'>Touch of Death</a>.",
  },

  // offensive trinkets
  {
    id: "manic-grieftorch",
    name: "<a href='https://www.wowhead.com/item=194308/manic-grieftorch' target='_blank'>Manic Grieftorch</a>",
    description:
      "This trinket is our best damage trinket. On use, we cast and unleash a massive amount of fire damage. The cooldown is also reduced greatly whenever an allie dies. I will run this on tyrannical mythic+ keys.",
  },
  {
    id: "storm-eaters-boon",
    name: "<a href='https://www.wowhead.com/ptr-2/item=194302/storm-eaters-boon' target='_blank'>Storm-Eater's Boon</a>",
    description:
      "This trinket is extremely powerful on AoE dungeons. It turns you into an elemental, doing a bunch of AoE damage over time. The issue with this trinket, however, is that you cannot move. If you want to do a ton of AoE damage, then this is a great trinket, but be careful.",
  },
  {
    id: "whispering-incarnate-icon",
    name: "<a href='https://www.wowhead.com/item=194301/whispering-incarnate-icon' target='_blank'>Whispering Incarnate Icon</a>",
    description:
      "Not only is this trinket a good option for damage, but it also provides us decent survivability as it gives a lot of versatility and primary stat. If you want a more offensive trinket that is not on use, then this is a great option.",
  },
  {
    id: "ominous-chromatic-essence",
    name: "<a href='https://www.wowhead.com/item=203729/ominous-chromatic-essence' target='_blank'>Ominous Chromatic Essence</a>",
    description:
      "This trinket is similar to Whispering Incarnate Icon. Instead of giving ourself a bunch of stats, however, it gives our party good stats, too. This is a good option if you want to provide extra stats for your party.",
  },
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

  // embellishments
  {
    id: "elemental-focusing-lens",
    name: "<a href='https://www.wowhead.com/item=213770/elemental-focusing-lens' target='_blank'>Elemental Focusing Lens</a>",
    description:
      "This embellishment gives our attacks a chance to proc and deal additional magic damage. This is a great embellishment for raid and mythic+ once you are fully geared.",
  },
  {
    id: "coated-in-slime",
    name: "<a href='https://www.wowhead.com/spell=378423/coated-in-slime' target='_blank'>Coated in Slime</a>",
    description:
      "This embellishment does pretty good damage on single target. It can only be obtained by crafting Slimy Expulsion Boots, which, fortunately for us, has good secondary stats.",
  },
  {
    id: "darkmoon-sigil-symbiosis",
    name: "<a href='https://www.wowhead.com/item=226030/darkmoon-sigil-symbiosis' target='_blank'>Darkmoon Sigil: Symbiosis</a>",
    description:
      "This embellishment puts a tiny DoT on us, in exchange for a 889 Versatility. This Versatility stacks up to 5 times, making it very strong.",
  },
  {
    id: "writhing-armor-banding",
    name: "<a href='https://www.wowhead.com/item=219506/writhing-armor-banding' target='_blank'>Writhing Armor Banding</a>",
    description:
      "This embellishment doubles the effect of our other embellishment.",
  },
  {
    id: "adrenal-surge-clasp-embellishment",
    name: "<a href='https://www.wowhead.com/item=219502/adrenal-surge-clasp' target='_blank'>Adrenal Surge Clasp</a>",
    description:
      "This embellishment causes our abilities to grant us a large increase in Agility and slightly decreases our Mastery. This is very good and should be the first embellishment you make.",
  },
  {
    id: "potion-absorption-inhibitor",
    name: "<a href='https://www.wowhead.com/item=191532/potion-absorption-inhibitor' target='_blank'>Potion Absorption Inhibitor</a>",
    description:
      "This embellishment is very strong, as it increases how long our potions last by 50%. Early on in the season, we will want to run this in combination with Coated in Slime.",
  },
  {
    id: "toxified-armor-patch",
    name: "<a href='https://www.wowhead.com/item=193552/toxified-armor-patch' target='_blank'>Toxified Armor Patch</a>",
    description:
      "This patch buffs our Coated in Slime Damage. This season, it is not as strong as Potion Absorption Inhibitor, but if you do not use potions for whatever reason, this is your best option early on in the season.",
  },
  {
    id: "alchemical-flavor-pocket",
    name: "<a href='https://www.wowhead.com/item=200652/alchemical-flavor-pocket' target='_blank'>Alchemical Flavor Pocket</a>",
    description:
      "This embellishment is really nice because it makes your Well Fed buff persist through death, while also not consuming one of your two embellishment slots. It is recommended that you put this embellishment on something that won't ever be replaced this season.",
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
    name: "<a href='https://www.wowhead.com/beta/spell=445386/chant-of-winged-grace' target='_blank'>Winged Grace</a>",
    description: "Increases Avoidance and reduces fall damage taken.",
    value: "Back",
  },
  {
    id: "chest-enchant",
    name: "<a href='https://www.wowhead.com/item=223692/enchant-chest-crystalline-radiance' target='_blank'>Crystalline Radiance</a>",
    description:
      "This enchant increases our primary stat, providing us with more damage and survivability.",
    value: "Chest",
  },
  {
    id: "wrist-enchant",
    name: "<a href='https://www.wowhead.com/beta/spell=445334/chant-of-armored-avoidance' target='_blank'>Armored Avoidance</a>",
    description: "Increases Avoidance.",
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
    name: "<a href='https://www.wowhead.com/beta/item=219911/stormbound-armor-kit' target='_blank'>Stormbound Armor Kit</a>",
    description: "Increases Agility and Stamina.",
    value: "Legs",
  },
  {
    id: "feet-enchant",
    name: "<a href='https://www.wowhead.com/beta/item=223653/enchant-boots-scouts-march' target='_blank'>Scout's March</a> <span class='white'>/</span> <a href='https://www.wowhead.com/beta/item=223656/enchant-boots-defenders-march' target='_blank'>Defender's March</a>",
    description:
      "Scout's March increaes your movement speed. Defender's March increases your Stamina. Use whichever you prefer.",
    value: "Feet",
  },
  {
    id: "ring-enchants",
    name: "<a href='https://www.wowhead.com/beta/item=223680/enchant-ring-radiant-versatility' target='_blank'>Radiant Versatility</a>",
    description: "Increases Versatility.",
    value: "Rings",
  },
  {
    id: "weapon-enchants",
    name: "<a href='https://www.wowhead.com/beta/item=223781/enchant-weapon-authority-of-radiant-power' target='_blank'>Authority of Radiant Power</a>",
    description:
      "Grants your abilities a chance to increase your Agility and smite the enemy target for damage.",
    value: "Weapon(s)",
  },

  // consumables
  {
    id: "weapon-runes",
    name: "<a href='https://www.wowhead.com/beta/item=222504/ironclaw-whetstone' target='_blank'>Ironclaw Whetstone</a>",
    description: "Increases attack power.",
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
    id: "flask",
    name: "<a href='https://www.wowhead.com/beta/item=212277/flask-of-tempered-versatility' target='_blank'>Flask of Tempered Versatility</a> <span class='white'>/</span> <a href='https://www.wowhead.com/item=212271/flask-of-tempered-aggression' target='_blank'>Flask of Tempered Aggression</a>",
    description:
      "I recommend Tempered Versatility when your unbuffed crit is sitting at around 34-35%.",
    value: "Flask",
  },
  {
    id: "healing-potion",
    name: "<a href='https://www.wowhead.com/ptr-2/item=207023/dreamwalkers-healing-potion' target='_blank'>Dreamwalker's Healing Potion</a>",
    description:
      "Due to our <a href='https://www.wowhead.com/spell=216519/celestial-fortune' target='_blank' class='orange'>Celestial Fortune</a> and high Critical Strike, healing potions are extremely valuable for us. We prefer this healing potion due to it doing additional healing over 6 seconds, providing us with more opportunities to proc our <a href='https://www.wowhead.com/spell=216519/celestial-fortune' target='_blank' class='orange'>Celestial Fortune</a>.",
    value: "Healing Potion",
  },
  {
    id: "battle-potion",
    name: "<a href='https://www.wowhead.com/beta/item=212265/tempered-potion' target='_blank'>Tempered Potion</a>",
    description:
      "Increases Critical Strike, Mastery, and Haste for 30 seconds.",
    value: "Battle Potion",
  },

  // unique gems
  {
    id: "inscribed-illimited-diamond",
    name: "<a href='https://www.wowhead.com/item=192982/inscribed-illimited-diamond' target='_blank'>Inscribed Illimited Diamond</a>",
    description:
      "This gem provides Critical Strike and is what should be run if you don't need any additional Versatility or Mastery.",
  },
  {
    id: "culminating-blasphemite",
    name: "<a href='https://www.wowhead.com/beta/item=213743/culminating-blasphemite' target='_blank'>Culminating Blasphemite</a>",
    description:
      "Increase Agility by 181 and increases Critical Strike damage by 0.15% per unique Algari gem color. You can only have one of this gem.",
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
    id: "deadly-sapphire",
    name: "<a href='https://www.wowhead.com/beta/item=213467/deadly-sapphire' target='_blank'>Deadly Sapphire</a>",
    description:
      "Increases Versatility by 147 and Critical Strike by 49. Run this if you want more Versatility than Critical Strike.",
  },
  {
    id: "versatile-ruby",
    name: "<a href='https://www.wowhead.com/beta/item=213459/versatile-ruby' target='_blank'>Versatile Ruby</a>",
    description:
      "Increases Critical Strike by 147 and Versatility by 49. Run this if you want more Critical Strike than Versatility.",
  },
  {
    id: "masterful-sapphire",
    name: "<a href='https://www.wowhead.com/item=213473/masterful-sapphire' target='_blank'>Masterful Sapphire</a>",
    description:
      "Increases Versatility by 147 and Mastery by 49. Run this if you want more Versatility than Critical Strike.",
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
    id: "mechagonworkshop",
    name: "<a href='https://www.wowhead.com/zone=10225/operation-mechagon' target='_blank'>Operation Mechagon: Workshop</a>",
    value: "Easy",
    dungeonRoute: "mechagonworkshop-route",
  },
  {
    id: "themotherlode",
    name: "<a href='https://www.wowhead.com/zone=8064/the-motherlode' target='_blank'>The MOTHERLODE!!</a>",
    value: "Hard",
    dungeonRoute: "themotherlode-route",
  },
  {
    id: "theaterofpain",
    name: "<a href='https://www.wowhead.com/zone=12841/theater-of-pain' target='_blank'>Theater of Pain</a>",
    value: "Medium",
    dungeonRoute: "theaterofpain-route",
  },
  {
    id: "cinderbrewmeadery",
    name: "<a href='https://www.wowhead.com/zone=15103/cinderbrew-meadery' target='_blank'>Cinderbew Meadery</a>",
    value: "Medium",
    dungeonRoute: "cinderbrewmeadery-route",
  },
  {
    id: "darkflamecleft",
    name: "<a href='https://www.wowhead.com/zone=14882/darkflame-cleft' target='_blank'>Darkflame Cleft</a>",
    value: "Easy",
    dungeonRoute: "darkflamecleft-route",
  },
  {
    id: "operationfloodgate",
    name: "<a href='https://www.wowhead.com/ptr-2/zone=15452/operation-floodgate' target='_blank'>Operation: Floogate</a>",
    value: "Easy",
    dungeonRoute: "operationfloodgate-route",
  },
  {
    id: "prioryofthesacredflame",
    name: "<a href='https://www.wowhead.com/zone=14954/priory-of-the-sacred-flame' target='_blank'>Priory of the Sacred Flame</a>",
    value: "Hard",
    dungeonRoute: "prioryofthesacredflame-route",
  },
  {
    id: "therookery",
    name: "<a href='https://www.wowhead.com/zone=14938/the-rookery' target='_blank'>The Rookery</a>",
    value: "Easy",
    dungeonRoute: "therookery-route",
  },
  {
    id: "the-azure-vault",
    name: "<a href='https://www.wowhead.com/zone=13954/the-azure-vault' target='_blank'>The Azure Vault</a>",
    value: "Easy",
    dungeonRoute: "the-azure-vault-route",
  },
  {
    id: "brackenhide-hollow",
    name: "<a href='https://www.wowhead.com/zone=13991/brackenhide-hollow target='_blank'>Brackenhide Hollow</a>",
    value: "Easy",
    dungeonRoute: "brackenhide-hollow-route",
  },
  {
    id: "algethar-academy",
    name: "<a href='https://www.wowhead.com/zone=14032/algethar-academy' target='_blank'>Algeth'ar Academy</a>",
    value: "Easy",
    dungeonRoute: "algethar-academy-route",
  },
  {
    id: "neltharus",
    name: "<a href='https://www.wowhead.com/zone=14011/neltharus' target='_blank'>Neltharus</a>",
    value: "Medium",
    dungeonRoute: "neltharus-route",
  },
  {
    id: "the-nokhud-offensive",
    name: "<a href='https://www.wowhead.com/zone=13982/the-nokhud-offensive' target='_blank'>The Nokhud Offensive</a>",
    value: "Medium",
    dungeonRoute: "the-nokhud-offensive-route",
  },
  {
    id: "ruby-life-pools",
    name: "<a href='https://www.wowhead.com/zone=14063/ruby-life-pools' target='_blank'>Ruby Life Pools</a>",
    value: "Hard",
    dungeonRoute: "ruby-life-pools-route",
  },
  {
    id: "halls-of-infusion",
    name: "<a href='https://www.wowhead.com/zone=14082/halls-of-infusion' target='_blank'>Halls of Infusion</a>",
    description:
      "Halls of Infusion has a bunch of magic damage and bleeds, making it really hard to live. Luckily, it is not as hard as it was in season 2 because we have a lot more defensive options regarding trinkets and stats now. It is extremely recommended that you run <a href='https://www.wowhead.com/spell=122278/dampen-harm' target='_blank' class='orange'>Dampen Harm</a> in this dungeon to help live some of the painful bleeds and casts.",
    value: "Hard",
    dungeonRoute: "halls-of-infusion-route",
  },
  {
    id: "uldaman-legacy-of-tyr",
    name: "<a href='https://www.wowhead.com/zone=13968/uldaman' target='_blank'>Uldaman: Legacy of Tyr</a>",
    value: "Hard",
    dungeonRoute: "uldaman-legacy-of-tyr-route",
  },
  {
    id: "ataldazar",
    name: "<a href='https://www.wowhead.com/zone=9028/ataldazar' target='_blank'>Atal'Dazar</a>",
    value: "Easy",
    dungeonRoute: "ataldazar-route",
  },
  {
    id: "black-rook-hold",
    name: "<a href='https://www.wowhead.com/zone=7805/black-rook-hold' target='_blank'>Black Rook Hold</a>",
    value: "Easy",
    dungeonRoute: "black-rook-hold-route",
  },
  {
    id: "darkheart-thicket",
    name: "<a href='https://www.wowhead.com/zone=7673/darkheart-thicket' target='_blank'>Darkheart Thicket</a>",
    value: "Easy",
    dungeonRoute: "darkheart-thicket-route",
  },
  {
    id: "doti-fall",
    name: "<a href='https://www.wowhead.com/zone=14514/dawn-of-the-infinite' target='_blank'>Dawn of the Infinite: Galakrond's Fall</a>",
    value: "Medium",
    dungeonRoute: "doti-fall-route",
  },
  {
    id: "doti-rise",
    name: "<a href='https://www.wowhead.com/zone=14514/dawn-of-the-infinite' target='_blank'>Dawn of the Infinite: Murozond's Rise</a>",
    value: "Hard",
    dungeonRoute: "doti-rise-route",
  },
  {
    id: "the-everbloom",
    name: "<a href='https://www.wowhead.com/zone=7109/the-everbloom' target='_blank'>The Everbloom</a>",
    value: "Hard",
    dungeonRoute: "the-everbloom-route",
  },
  {
    id: "throne-of-the-tides",
    name: "<a href='https://www.wowhead.com/zone=5004/throne-of-the-tides' target='_blank'>Throne of the Tides</a>",
    value: "Hard",
    dungeonRoute: "throne-of-the-tides-route",
  },
  {
    id: "waycrest-manor",
    name: "<a href='https://www.wowhead.com/zone=9424/waycrest-manor' target='_blank'>Waycrest Manor</a>",
    value: "Easy",
    dungeonRoute: "waycrest-manor-route",
  },
  {
    id: "grim-batol",
    name: "<a href='https://www.wowhead.com/beta/zone=4950/grim-batol' target='_blank'>Grim Batol</a>",
    value: "Hard",
    dungeonRoute: "grim-batol-route",
  },
  {
    id: "siege-of-boralus",
    name: "<a href='https://www.wowhead.com/beta/zone=9354/siege-of-boralus' target='_blank'>Siege of Boralus</a>",
    value: "Medium",
    dungeonRoute: "siege-of-boralus-route",
  },
  {
    id: "mists-of-tirna-scithe",
    name: "<a href='https://www.wowhead.com/beta/zone=13334/mists-of-tirna-scithe' target='_blank'>Mists of Tirna Scithe</a>",
    value: "Easy",
    dungeonRoute: "mists-of-tirna-scithe-route",
  },
  {
    id: "necrotic-wake",
    name: "<a href='https://www.wowhead.com/beta/zone=12916/the-necrotic-wake' target='_blank'>The Necrotic Wake</a>",
    value: "Hard",
    dungeonRoute: "necrotic-wake-route",
  },
  {
    id: "ara-kara",
    name: "<a href='https://www.wowhead.com/beta/zone=15093/ara-kara-city-of-echoes' target='_blank'>Ara-Kara: City of Echoes</a>",
    value: "Medium",
    dungeonRoute: "ara-kara-route",
  },
  {
    id: "city-of-threads",
    name: "<a href='https://www.wowhead.com/beta/zone=14979/city-of-threads' target='_blank'>City of Threads</a>",
    value: "Medium",
    dungeonRoute: "city-of-threads-route",
  },
  {
    id: "the-dawnbreaker",
    name: "<a href='https://www.wowhead.com/beta/zone=14971/the-dawnbreaker' target='_blank'>The Dawnbreaker</a>",
    value: "Medium",
    dungeonRoute: "the-dawnbreaker-route",
  },
  {
    id: "the-stonevault",
    name: "<a href='https://www.wowhead.com/beta/zone=14883/the-stonevault' target='_blank'>The Stonevault</a>",
    value: "Hard",
    dungeonRoute: "the-stonevault-route",
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
  if (element.classList.contains("selected")) return;

  const name = element.parentNode.getElementsByTagName("h3")[0];
  const value = element.parentNode.getElementsByTagName("h4")[0];

  for (let i = 0; i < infoArray.length; i++) {
    if (infoArray[i].id === element.id) {
      // updates name and value
      name.innerHTML = infoArray[i].name;

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
