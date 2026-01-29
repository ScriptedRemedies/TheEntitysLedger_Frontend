export interface KillerModel {
    readonly id: number;
    readonly name: string;
    //readonly imageId: string;
    readonly difficulty: string;
    readonly chapter?: string;
}

export const KILLERS: readonly KillerModel[] = [
    { id: 1, name: 'The Trapper', difficulty: 'EASY' },
    { id: 2, name: 'The Wraith', difficulty: 'EASY' },
    { id: 3, name: 'The Hillbilly', difficulty: 'MODERATE' },
    { id: 4, name: 'The Nurse', difficulty: 'VERY HARD' },
    { id: 5, name: 'The Shape (Myers)', difficulty: 'HARD', chapter: 'Halloween' },
    { id: 6, name: 'The Hag', difficulty: 'VERY HARD', chapter: 'Of Flesh and Mud' },
    { id: 7, name: 'The Doctor', difficulty: 'HARD', chapter: 'Spark of Madness' },
    { id: 8, name: 'The Huntress', difficulty: 'MODERATE', chapter: 'A Lullaby for the Dark' },
    { id: 9, name: 'The Cannibal (Bubba)', difficulty: 'MODERATE', chapter: 'Leatherface' },
    { id: 10, name: 'The Nightmare (Freddy)', difficulty: 'HARD', chapter: 'A Nightmare on Elm Street' },
    { id: 11, name: 'The Pig', difficulty: 'HARD', chapter: 'Saw' },
    { id: 12, name: 'The Clown', difficulty: 'MODERATE', chapter: 'Curtain Call' },
    { id: 13, name: 'The Spirit', difficulty: 'HARD', chapter: 'Shattered Bloodline' },
    { id: 14, name: 'The Legion', difficulty: 'EASY', chapter: 'Darkness Among Us' },
    { id: 15, name: 'The Plague', difficulty: 'HARD', chapter: 'Demise of the Faithful' },
    { id: 16, name: 'The Ghost Face', difficulty: 'HARD', chapter: 'Ghost Face' },
    { id: 17, name: 'The Demogorgon', difficulty: 'MODERATE', chapter: 'Stranger Things' },
    { id: 18, name: 'The Oni', difficulty: 'VERY HARD', chapter: 'Cursed Legacy' },
    { id: 19, name: 'The Deathslinger', difficulty: 'HARD', chapter: 'Chains of Hate' },
    { id: 20, name: 'The Executioner (Pyramid Head)', difficulty: 'VERY HARD', chapter: 'Silent Hill' },
    { id: 21, name: 'The Blight', difficulty: 'VERY HARD', chapter: 'Descend Beyond' },
    { id: 22, name: 'The Twins', difficulty: 'VERY HARD', chapter: 'A Binding of Kin' },
    { id: 23, name: 'The Trickster', difficulty: 'MODERATE', chapter: 'All-Kill' },
    { id: 24, name: 'The Nemesis', difficulty: 'MODERATE', chapter: 'Resident Evil' },
    { id: 25, name: 'The Cenobite (Pinhead)', difficulty: 'VERY HARD', chapter: 'Hellraiser' },
    { id: 26, name: 'The Artist', difficulty: 'MODERATE', chapter: 'Portrait of a Murder' },
    { id: 27, name: 'The Onryō (Sadako)', difficulty: 'HARD', chapter: 'Sadako Rising' },
    { id: 28, name: 'The Dredge', difficulty: 'MODERATE', chapter: 'Roots of Dread' },
    { id: 29, name: 'The Mastermind (Wesker)', difficulty: 'MODERATE', chapter: 'Resident Evil: Project W' },
    { id: 30, name: 'The Knight', difficulty: 'MODERATE', chapter: 'Forged in Fog' },
    { id: 31, name: 'The Skull Merchant', difficulty: 'MODERATE', chapter: 'Tools of Torment' },
    { id: 32, name: 'The Singularity', difficulty: 'VERY HARD', chapter: 'End Transmission' },
    { id: 33, name: 'The Xenomorph', difficulty: 'MODERATE', chapter: 'Alien' },
    { id: 34, name: 'The Good Guy (Chucky)', difficulty: 'HARD', chapter: 'Chucky' },
    { id: 35, name: 'The Unknown', difficulty: 'MODERATE', chapter: 'All Things Wicked' },
    { id: 36, name: 'The Lich (Vecna)', difficulty: 'VERY HARD', chapter: 'Dungeons & Dragons' },
    { id: 37, name: 'The Dark Lord (Dracula)', difficulty: 'HARD', chapter: 'Castlevania' }
] as const;
