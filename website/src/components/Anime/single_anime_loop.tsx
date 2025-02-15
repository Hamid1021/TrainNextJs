import Image from "next/image";
import { PropsAttr } from "./types";
import Link from "next/link";

export default function Single_Anime_Loop(prop: PropsAttr) {
    const { anime } = prop;
    return (
        <div className="proj-item-full dark:bg-gradient-to-br dark:from-[rgb(46,13,114)] dark:from-35% dark:to-gray-500">
            <Link href={`animes/${anime.slug}/${anime.id}`}>
                <div className="proj-img-full dark:text-white">
                    <Image src={anime.image} width={100} height={100} alt={anime.name} />
                </div>
            </Link>
            <div className="proj-title-full dark:text-white">
                <Link href={`animes/${anime.slug}/${anime.id}`}>
                    <h3>{anime.name}</h3>
                </Link>
            </div>
            <div className="proj-desc-full dark:text-white">
                <p>{anime.desc}</p>
            </div>
        </div>
    );
}
