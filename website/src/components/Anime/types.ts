export interface Anime {
    id: number;
    name: string;
    slug: string;
    image: string;
    desc: string;
}

export interface PropsAttr {
    anime: Anime;
}
