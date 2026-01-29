export interface SurvivorModel {
    readonly id: number;
    readonly name: string;
    //readonly imageId: string;
    readonly difficulty: 'EASY' | 'MODERATE' | 'HARD';
    readonly chapter?: string;
}

export const SURVIVORS: readonly SurvivorModel[] = [
    { id: 1, name: 'Dwight Fairfield', difficulty: 'EASY' },
    { id: 2, name: 'Meg Thomas', difficulty: 'EASY' },
    { id: 3, name: 'Claudette Morel', difficulty: 'EASY' },
    { id: 4, name: 'Jake Park', difficulty: 'EASY' },
    { id: 5, name: 'Nea Karlsson', difficulty: 'EASY' },
    { id: 6, name: 'Laurie Strode', difficulty: 'HARD', chapter: 'Halloween' },
    { id: 7, name: 'Ace Visconti', difficulty: 'EASY', chapter: 'Of Flesh and Mud' },
    { id: 8, name: 'William "Bill" Overbeck', difficulty: 'HARD', chapter: 'Left Behind' },
    { id: 9, name: 'Feng Min', difficulty: 'EASY', chapter: 'Spark of Madness' },
    { id: 10, name: 'David King', difficulty: 'MODERATE', chapter: 'A Lullaby for the Dark' },
    { id: 11, name: 'Quentin Smith', difficulty: 'HARD', chapter: 'A Nightmare on Elm Street' },
    { id: 12, name: 'David Tapp', difficulty: 'MODERATE', chapter: 'Saw' },
    { id: 13, name: 'Kate Denson', difficulty: 'EASY', chapter: 'Curtain Call' },
    { id: 14, name: 'Adam Francis', difficulty: 'MODERATE', chapter: 'Shattered Bloodline' },
    { id: 15, name: 'Jeff Johansen', difficulty: 'MODERATE', chapter: 'Darkness Among Us' },
    { id: 16, name: 'Jane Romero', difficulty: 'MODERATE', chapter: 'Demise of the Faithful' },
    { id: 17, name: 'Ash Williams', difficulty: 'HARD', chapter: 'Ash vs Evil Dead' },
    { id: 18, name: 'Nancy Wheeler', difficulty: 'MODERATE', chapter: 'Stranger Things' },
    { id: 19, name: 'Steve Harrington', difficulty: 'EASY', chapter: 'Stranger Things' },
    { id: 20, name: 'Yui Kimura', difficulty: 'MODERATE', chapter: 'Cursed Legacy' },
    { id: 21, name: 'Zarina Kassir', difficulty: 'HARD', chapter: 'Chains of Hate' },
    { id: 22, name: 'Cheryl Mason', difficulty: 'MODERATE', chapter: 'Silent Hill' },
    { id: 23, name: 'Felix Richter', difficulty: 'EASY', chapter: 'Descend Beyond' },
    { id: 24, name: 'Élodie Rakoto', difficulty: 'MODERATE', chapter: 'A Binding of Kin' },
    { id: 25, name: 'Yun-Jin Lee', difficulty: 'MODERATE', chapter: 'All-Kill' },
    { id: 26, name: 'Jill Valentine', difficulty: 'MODERATE', chapter: 'Resident Evil' },
    { id: 27, name: 'Leon S. Kennedy', difficulty: 'MODERATE', chapter: 'Resident Evil' },
    { id: 28, name: 'Mikaela Reid', difficulty: 'MODERATE', chapter: 'Hour of the Witch' },
    { id: 29, name: 'Jonah Vasquez', difficulty: 'MODERATE', chapter: 'Portrait of a Murder' },
    { id: 30, name: 'Yoichi Asakawa', difficulty: 'HARD', chapter: 'Sadako Rising' },
    { id: 31, name: 'Haddie Kaur', difficulty: 'MODERATE', chapter: 'Roots of Dread' },
    { id: 32, name: 'Ada Wong', difficulty: 'MODERATE', chapter: 'Resident Evil: Project W' },
    { id: 33, name: 'Rebecca Chambers', difficulty: 'HARD', chapter: 'Resident Evil: Project W' },
    { id: 34, name: 'Vittorio Toscano', difficulty: 'MODERATE', chapter: 'Forged in Fog' },
    { id: 35, name: 'Thalita Lyra', difficulty: 'MODERATE', chapter: 'Tools of Torment' },
    { id: 36, name: 'Renato Lyra', difficulty: 'MODERATE', chapter: 'Tools of Torment' },
    { id: 37, name: 'Gabriel Soma', difficulty: 'MODERATE', chapter: 'End Transmission' },
    { id: 38, name: 'Nicolas Cage', difficulty: 'HARD', chapter: 'Nicolas Cage' },
    { id: 39, name: 'Ellen Ripley', difficulty: 'MODERATE', chapter: 'Alien' },
    { id: 40, name: 'Alan Wake', difficulty: 'HARD', chapter: 'Alan Wake' },
    { id: 41, name: 'Sable Ward', difficulty: 'EASY', chapter: 'All Things Wicked' },
    { id: 42, name: 'Aestri Yazar', difficulty: 'MODERATE', chapter: 'Dungeons & Dragons' },
    { id: 43, name: 'Baermar Uraz', difficulty: 'MODERATE', chapter: 'Dungeons & Dragons' },
    { id: 44, name: 'Trevor Belmont', difficulty: 'MODERATE', chapter: 'Castlevania' }
] as const;
