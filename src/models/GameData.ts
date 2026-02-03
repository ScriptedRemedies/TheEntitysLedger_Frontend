export interface Character {
    id: string;
    name: string;
    role: 'KILLER' | 'SURVIVOR';
    dlc: string; // To determine which characters are allowed
    cost?: number; // For variants where characters cost money
}
export interface Perk {
    id: string;
    name: string;
    ownerId?: string; // Assigning the perk to the character
    cost?: number;
}

export const KILLER_ROSTER: Character[] = [
    // Base Game
    {id: 'TRAPPER', name: 'The Trapper', role: 'KILLER', dlc: 'Base Game'},
    {id: 'WRAITH', name: 'The Wraith', role: 'KILLER', dlc: 'Base Game'},
    {id: 'HILLBILLY', name: 'The Hillbilly', role: 'KILLER', dlc: 'Base Game'},
    {id: 'NURSE', name: 'The Nurse', role: 'KILLER', dlc: 'Base Game'},
    {id: 'HUNTRESS', name: 'The Huntress', role: 'KILLER', dlc: 'Base Game'},

    // Original DLC
    {id: 'HAG', name: 'The Hag', role: 'KILLER', dlc: 'Original'},
    {id: 'DOCTOR', name: 'The Doctor', role: 'KILLER', dlc: 'Original'},
    {id: 'CLOWN', name: 'The Clown', role: 'KILLER', dlc: 'Original'},
    {id: 'SPIRIT', name: 'The Spirit', role: 'KILLER', dlc: 'Original'},
    {id: 'LEGION', name: 'The Legion', role: 'KILLER', dlc: 'Original'},
    {id: 'PLAGUE', name: 'The Plague', role: 'KILLER', dlc: 'Original'},
    {id: 'ONI', name: 'The Oni', role: 'KILLER', dlc: 'Original'},
    {id: 'DEATHSLINGER', name: 'The Deathslinger', role: 'KILLER', dlc: 'Original'},
    {id: 'BLIGHT', name: 'The Blight', role: 'KILLER', dlc: 'Original'},
    {id: 'TWINS', name: 'The Twins', role: 'KILLER', dlc: 'Original'},
    {id: 'TRICKSTER', name: 'The Trickster', role: 'KILLER', dlc: 'Original'},
    {id: 'ARTIST', name: 'The Artist', role: 'KILLER', dlc: 'Original'},
    {id: 'DREDGE', name: 'The Dredge', role: 'KILLER', dlc: 'Original'},
    {id: 'KNIGHT', name: 'The Knight', role: 'KILLER', dlc: 'Original'},
    {id: 'SKULL_MERCHANT', name: 'The Skull Merchant', role: 'KILLER', dlc: 'Original'},
    {id: 'SINGULARITY', name: 'The Singularity', role: 'KILLER', dlc: 'Original'},
    {id: 'UNKNOWN', name: 'The Unknown', role: 'KILLER', dlc: 'Original'},
    {id: 'HOUNDMASTER', name: 'The Houndmaster', role: 'KILLER', dlc: 'Original'},
    {id: 'KRASUE', name: 'The Krasue', role: 'KILLER', dlc: 'Original'},

    // Franchise DLC
    {id: 'CANNIBAL', name: 'The Cannibal', role: 'KILLER', dlc: 'Franchise'},
    {id: 'SHAPE', name: 'The Shape', role: 'KILLER', dlc: 'Franchise'},
    {id: 'NIGHTMARE', name: 'The Nightmare', role: 'KILLER', dlc: 'Franchise'},
    {id: 'PIG', name: 'The Pig', role: 'KILLER', dlc: 'Franchise'},
    {id: 'GHOST_FACE', name: 'The Ghost Face', role: 'KILLER', dlc: 'Franchise'},
    {id: 'DEMOGORGON', name: 'The Demogorgon', role: 'KILLER', dlc: 'Franchise'},
    {id: 'EXECUTIONER', name: 'The Executioner', role: 'KILLER', dlc: 'Franchise'},
    {id: 'NEMESIS', name: 'The Nemesis', role: 'KILLER', dlc: 'Franchise'},
    {id: 'CENOBITE', name: 'The Cenobite', role: 'KILLER', dlc: 'Franchise'},
    {id: 'ONRYO', name: 'The Onryō', role: 'KILLER', dlc: 'Franchise'},
    {id: 'MASTERMIND', name: 'The Mastermind', role: 'KILLER', dlc: 'Franchise'},
    {id: 'XENOMORPH', name: 'The Xenomorph', role: 'KILLER', dlc: 'Franchise'},
    {id: 'GOOD_GUY', name: 'The Good Guy', role: 'KILLER', dlc: 'Franchise'},
    {id: 'LICH', name: 'The Lich', role: 'KILLER', dlc: 'Franchise'},
    {id: 'DARK_LORD', name: 'The Dark Lord', role: 'KILLER', dlc: 'Franchise'},
    {id: 'GHOUL', name: 'The Ghoul', role: 'KILLER', dlc: 'Franchise'},
    {id: 'ANIMATRONIC', name: 'The Animatronic', role: 'KILLER', dlc: 'Franchise'},
    {id: 'FIRST', name: 'The First', role: 'KILLER', dlc: 'Franchise'},
];
export const KILLER_PERKS: Perk[] = [
    // TRAPPER
    {id: 'UNNERVING_PRESENCE', name: 'Unnerving Presence', ownerId: 'TRAPPER'},
    {id: 'BRUTAL_STRENGTH', name: 'Brutal Strength', ownerId: 'TRAPPER'},
    {id: 'AGITATION', name: 'Agitation', ownerId: 'TRAPPER'},

    // WRAITH
    {id: 'PREDATOR', name: 'Predator', ownerId: 'WRAITH'},
    {id: 'BLOODHOUND', name: 'Bloodhound', ownerId: 'WRAITH'},
    {id: 'SHADOWBORN', name: 'Shadowborn', ownerId: 'WRAITH'},

    // HILLBILLY
    {id: 'ENDURING', name: 'Enduring', ownerId: 'HILLBILLY'},
    {id: 'LIGHTBORN', name: 'Lightborn', ownerId: 'HILLBILLY'},
    {id: 'TINKERER', name: 'Tinkerer', ownerId: 'HILLBILLY'},

    // NURSE
    {id: 'A_NURSES_CALLING', name: 'A Nurse\'s Calling', ownerId: 'NURSE'},
    {id: 'STRIDOR', name: 'Stridor', ownerId: 'NURSE'},
    {id: 'THANATOPHOBIA', name: 'Thanatophobia', ownerId: 'NURSE'},

    // HUNTRESS
    {id: 'BEAST_OF_PREY', name: 'Beast of Prey', ownerId: 'HUNTRESS'},
    {id: 'HUNTRESS_LULLABY', name: 'Hex: Huntress Lullaby', ownerId: 'HUNTRESS'},
    {id: 'TERRITORIAL_IMPERATIVE', name: 'Territorial Imperative', ownerId: 'HUNTRESS'},

    // HAG
    {id: 'DEVOUR_HOPE', name: 'Hex: Devour Hope', ownerId: 'HAG'},
    {id: 'RUIN', name: 'Hex: Ruin', ownerId: 'HAG'},
    {id: 'THE_THIRD_SEAL', name: 'Hex: The Third Seal', ownerId: 'HAG'},

    // DOCTOR
    {id: 'OVERCHARGE', name: 'Overcharge', ownerId: 'DOCTOR'},
    {id: 'MONITOR_ABUSE', name: 'Monitor & Abuse', ownerId: 'DOCTOR'},
    {id: 'OVERWHELMING_PRESENCE', name: 'Overwhelming Presence', ownerId: 'DOCTOR'},

    // CLOWN
    {id: 'BAMBOOZLE', name: 'Bamboozle', ownerId: 'CLOWN'},
    {id: 'COULROPHOBIA', name: 'Coulrophobia', ownerId: 'CLOWN'},
    {id: 'POP_GOES_THE_WEASEL', name: 'Pop Goes the Weasel', ownerId: 'CLOWN'},

    // SPIRIT
    {id: 'HAUNTED_GROUND', name: 'Hex: Haunted Ground', ownerId: 'SPIRIT'},
    {id: 'RANCOR', name: 'Rancor', ownerId: 'SPIRIT'},
    {id: 'SPIRIT_FURY', name: 'Spirit Fury', ownerId: 'SPIRIT'},

    // LEGION
    {id: 'DISCORDANCE', name: 'Discordance', ownerId: 'LEGION'},
    {id: 'IRON_MAIDEN', name: 'Iron Maiden', ownerId: 'LEGION'},
    {id: 'MAD_GRIT', name: 'Mad Grit', ownerId: 'LEGION'},

    // PLAGUE
    {id: 'CORRUPT_INTERVENTION', name: 'Corrupt Intervention', ownerId: 'PLAGUE'},
    {id: 'DARK_DEVOTION', name: 'Dark Devotion', ownerId: 'PLAGUE'},
    {id: 'INFECTIOUS_FRIGHT', name: 'Infectious Fright', ownerId: 'PLAGUE'},

    // ONI
    {id: 'BLOOD_ECHO', name: 'Blood Echo', ownerId: 'ONI'},
    {id: 'NEMESIS', name: 'Nemesis', ownerId: 'ONI'},
    {id: 'ZANSHIN_TACTICS', name: 'Zanshin Tactics', ownerId: 'ONI'},

    // DEATHSLINGER
    {id: 'DEAD_MANS_SWITCH', name: 'Dead Man\'s Switch', ownerId: 'DEATHSLINGER'},
    {id: 'GEARHEAD', name: 'Gearhead', ownerId: 'DEATHSLINGER'},
    {id: 'RETRIBUTION', name: 'Hex: Retribution', ownerId: 'DEATHSLINGER'},

    // BLIGHT
    {id: 'DRAGONS_GRIP', name: 'Dragon\'s Grip', ownerId: 'BLIGHT'},
    {id: 'BLOOD_FAVOR', name: 'Hex: Blood Favor', ownerId: 'BLIGHT'},
    {id: 'UNDYING', name: 'Hex: Undying', ownerId: 'BLIGHT'},

    // TWINS
    {id: 'HOARDER', name: 'Hoarder', ownerId: 'TWINS'},
    {id: 'OPPRESSION', name: 'Oppression', ownerId: 'TWINS'},
    {id: 'COUP_DE_GRACE', name: 'Coup de Grâce', ownerId: 'TWINS'},

    // TRICKSTER
    {id: 'STARSTRUCK', name: 'Starstruck', ownerId: 'TRICKSTER'},
    {id: 'CROWD_CONTROL', name: 'Hex: Crowd Control', ownerId: 'TRICKSTER'},
    {id: 'NO_WAY_OUT', name: 'No Way Out', ownerId: 'TRICKSTER'},

    // ARTIST
    {id: 'GRIM_EMBRACE', name: 'Grim Embrace', ownerId: 'ARTIST'},
    {id: 'PAIN_RESONANCE', name: 'Scourge Hook: Pain Resonance', ownerId: 'ARTIST'},
    {id: 'PENTIMENTO', name: 'Hex: Pentimento', ownerId: 'ARTIST'},

    // DREDGE
    {id: 'DISSOLUTION', name: 'Dissolution', ownerId: 'DREDGE'},
    {id: 'DARKNESS_REVEALED', name: 'Darkness Revealed', ownerId: 'DREDGE'},
    {id: 'SEPTIC_TOUCH', name: 'Septic Touch', ownerId: 'DREDGE'},

    // KNIGHT
    {id: 'NOWHERE_TO_HIDE', name: 'Nowhere to Hide', ownerId: 'KNIGHT'},
    {id: 'FACE_THE_DARKNESS', name: 'Face the Darkness', ownerId: 'KNIGHT'},
    {id: 'HUBRIS', name: 'Hubris', ownerId: 'KNIGHT'},

    // SKULL_MERCHANT
    {id: 'GAME_AFOOT', name: 'Game Afoot', ownerId: 'SKULL_MERCHANT'},
    {id: 'THWACK', name: 'THWACK!', ownerId: 'SKULL_MERCHANT'},
    {id: 'LEVERAGE', name: 'Leverage', ownerId: 'SKULL_MERCHANT'},

    // SINGULARITY
    {id: 'GENETIC_LIMITS', name: 'Genetic Limits', ownerId: 'SINGULARITY'},
    {id: 'FORCED_HESITATION', name: 'Forced Hesitation', ownerId: 'SINGULARITY'},
    {id: 'MACHINE_LEARNING', name: 'Machine Learning', ownerId: 'SINGULARITY'},

    // UNKNOWN
    {id: 'UNBOUND', name: 'Unbound', ownerId: 'UNKNOWN'},
    {id: 'UNFORESEEN', name: 'Unforeseen', ownerId: 'UNKNOWN'},
    {id: 'UNDONE', name: 'Undone', ownerId: 'UNKNOWN'},

    // HOUNDMASTER
    {id: 'ALL_SHAKING_THUNDER', name: 'All-Shaking Thunder', ownerId: 'HOUNDMASTER'},
    {id: 'JAGGED_COMPASS', name: 'Scourge Hook: Jagged Compass', ownerId: 'HOUNDMASTER'},
    {id: 'NO_QUARTER', name: 'No Quarter', ownerId: 'HOUNDMASTER'},

    // KRASUE
    {id: 'RAVENOUS', name: 'Ravenous', ownerId: 'KRASUE'},
    {id: 'WANDERING_EYE', name: 'Wandering Eye', ownerId: 'KRASUE'},
    {id: 'OVERTURE_OF_DOOM', name: 'Hex: Overture of Doom', ownerId: 'KRASUE'},

    // CANNIBAL
    {id: 'BARBECUE_CHILLI', name: 'Barbecue & Chili', ownerId: 'CANNIBAL'},
    {id: 'FRANKLINS_DEMISE', name: 'Franklin\'s Demise', ownerId: 'CANNIBAL'},
    {id: 'KNOCK_OUT', name: 'Knock Out', ownerId: 'CANNIBAL'},

    // SHAPE
    {id: 'DYING_LIGHT', name: 'Dying Light', ownerId: 'SHAPE'},
    {id: 'PLAY_WITH_YOUR_FOOD', name: 'Play With Your Food', ownerId: 'SHAPE'},
    {id: 'SAVE_THE_BEST_FOR_LAST', name: 'Save the Best for Last', ownerId: 'SHAPE'},

    // NIGHTMARE
    {id: 'BLOOD_WARDEN', name: 'Blood Warden', ownerId: 'NIGHTMARE'},
    {id: 'FIRE_UP', name: 'Fire Up', ownerId: 'NIGHTMARE'},
    {id: 'REMEMBER_ME', name: 'Remember Me', ownerId: 'NIGHTMARE'},

    // PIG
    {id: 'HANGMANS_HOOK', name: 'Scourge Hook: Hangman\'s Trick', ownerId: 'PIG'},
    {id: 'MAKE_YOUR_CHOICE', name: 'Make Your Choice', ownerId: 'PIG'},
    {id: 'SURVEILLANCE', name: 'Surveillance', ownerId: 'PIG'},

    // GHOST_FACE
    {id: 'FURTIVE_CHASE', name: 'Furtive Chase', ownerId: 'GHOST_FACE'},
    {id: 'IM_ALL_EARS', name: 'I\'m All Ears', ownerId: 'GHOST_FACE'},
    {id: 'THRILLING_TREMORS', name: 'Thrilling Tremors', ownerId: 'GHOST_FACE'},

    // DEMOGORGON
    {id: 'CRUEL_LIMITS', name: 'Cruel Limits', ownerId: 'DEMOGORGON'},
    {id: 'MINDBREAKER', name: 'Mindbreaker', ownerId: 'DEMOGORGON'},
    {id: 'SURGE', name: 'Surge', ownerId: 'DEMOGORGON'},

    // EXECUTIONER
    {id: 'DEATHBOUND', name: 'Deathbound', ownerId: 'EXECUTIONER'},
    {id: 'FORCED_PENANCE', name: 'Forced Penance', ownerId: 'EXECUTIONER'},
    {id: 'TRAIL_OF_TORMENT', name: 'Trail of Torment', ownerId: 'EXECUTIONER'},

    // NEMESIS
    {id: 'LETHAL_PURSUER', name: 'Lethal Pursuer', ownerId: 'NEMESIS'},
    {id: 'HYSTERIA', name: 'Hysteria', ownerId: 'NEMESIS'},
    {id: 'ERUPTION', name: 'Eruption', ownerId: 'NEMESIS'},

    // CENOBITE
    {id: 'DEADLOCK', name: 'Deadlock', ownerId: 'CENOBITE'},
    {id: 'PLAYTHING', name: 'Hex: Plaything', ownerId: 'CENOBITE'},
    {id: 'GIFT_OF_PAIN', name: 'Scourge Hook: Gift of Pain', ownerId: 'CENOBITE'},

    // ONRYO
    {id: 'FLOODS_OF_RAGE', name: 'Scourge Hook: Floods of Rage', ownerId: 'ONRYO'},
    {id: 'CALL_OF_BRINE', name: 'Call of Brine', ownerId: 'ONRYO'},
    {id: 'MERCILESS_STORM', name: 'Merciless Storm', ownerId: 'ONRYO'},

    // MASTERMIND
    {id: 'SUPERIOR_ANATOMY', name: 'Superior Anatomy', ownerId: 'MASTERMIND'},
    {id: 'AWAKENED_AWARENESS', name: 'Awakened Awareness', ownerId: 'MASTERMIND'},
    {id: 'TERMINUS', name: 'Terminus', ownerId: 'MASTERMIND'},

    // XENOMORPH
    {id: 'ULTIMATE_WEAPON', name: 'Ultimate Weapon', ownerId: 'XENOMORPH'},
    {id: 'RAPID_BRUTALITY', name: 'Rapid Brutality', ownerId: 'XENOMORPH'},
    {id: 'ALIEN_INSTINCT', name: 'Alien Instinct', ownerId: 'XENOMORPH'},

    // GOOD_GUY
    {id: 'TWO_CAN_PLAY', name: 'Hex: Two Can Play', ownerId: 'GOOD_GUY'},
    {id: 'FRIENDS_TIL_THE_END', name: 'Friends \'Til the End', ownerId: 'GOOD_GUY'},
    {id: 'BATTERIES_INCLUDED', name: 'Batteries Included', ownerId: 'GOOD_GUY'},

    // LICH
    {id: 'WEAVE_ATTUNEMENT', name: 'Weave Attunement', ownerId: 'LICH'},
    {id: 'LANGUID_TOUCH', name: 'Languid Touch', ownerId: 'LICH'},
    {id: 'DARK_ARROGANCE', name: 'Dark Arrogance', ownerId: 'LICH'},

    // DARK_LORD
    {id: 'WRETCHED_FATE', name: 'Hex: Wretched Fate', ownerId: 'DARK_LORD'},
    {id: 'HUMAN_GREED', name: 'Human Greed', ownerId: 'DARK_LORD'},
    {id: 'DOMINANCE', name: 'Dominance', ownerId: 'DARK_LORD'},

    // GHOUL
    {id: 'NOTHING_BUT_MISERY', name: 'Hex: Nothing But Misery', ownerId: 'GHOUL'},
    {id: 'FOREVER_ENTWINED', name: 'Forever Entwined', ownerId: 'GHOUL'},
    {id: 'NONE_ARE_FREE', name: 'None Are Free', ownerId: 'GHOUL'},

    // ANIMATRONIC
    {id: 'HELP_WANTED', name: 'Help Wanted', ownerId: 'ANIMATRONIC'},
    {id: 'PHANTOM_FEAR', name: 'Phantom Fear', ownerId: 'ANIMATRONIC'},
    {id: 'HAYWIRE', name: 'Haywire', ownerId: 'ANIMATRONIC'},

    // FIRST
    {id: 'TURN_BACK_THE_CLOCK', name: 'Turn Back The Clock', ownerId: 'FIRST'},
    {id: 'SECRET_PROJECT', name: 'Secret Project', ownerId: 'FIRST'},
    {id: 'HIVE_MIND', name: 'Hex: Hive Mind', ownerId: 'FIRST'},

    // All other perks
    {id: 'BITTER_MURMUR', name: 'Bitter Murmur'},
    {id: 'DEERSTALKER', name: 'Deerstalker'},
    {id: 'DISTRESSING', name: 'Distressing'},
    {id: 'NO_ONE_ESCAPES_DEATH', name: 'Hex: No One Escapes Death'},
    {id: 'THRILL_OF_THE_HUNT', name: 'Hex: Thrill of the Hunt'},
    {id: 'INSIDIOUS', name: 'Insidious'},
    {id: 'IRON_GRASP', name: 'Iron Grasp'},
    {id: 'MONSTROUS_SHRINE', name: 'Scourge Hook: Monstrous Shrine'},
    {id: 'SHATTERED_HOPE', name: 'Shattered Hope'},
    {id: 'SLOPPY_BUTCHER', name: 'Sloppy Butcher'},
    {id: 'SPIES_FROM_THE_SHADOWS', name: 'Spies from the Shadows'},
    {id: 'UNRELENTING', name: 'Unrelenting'},
    {id: 'WHISPERS', name: 'Whispers'},
];

export const SURVIVOR_ROSTER: Character[] = [
    // Base Game
];
export const SURVIVOR_PERKS: Perk[] = [

];

// -- HELPER FUNCTIONS --
// Finds the 3 perks for a character
export const getCharacterPerks = (characterId: string, perkList: Perk[]): Perk[] => {
    return perkList.filter(perk => perk.ownerId === characterId);
}

