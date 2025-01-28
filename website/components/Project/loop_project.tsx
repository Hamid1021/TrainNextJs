import Image from "next/image";
import { PropsAttr } from "./types";
import Link from "next/link";



export default function Single_Project_Loop(prop: PropsAttr) {
    const { Project } = prop
    return (
        <div className="proj-item-full dark:bg-gradient-to-br dark:from-[rgb(46,13,114)] dark:from-35% dark:to-gray-500">
            <Link href={`projects/${Project.slug}/${Project.id}`}>
                <div className="proj-img-full dark:text-white">
                    <Image src={Project.image} width={100} height={100} alt={Project.name}></Image>
                </div>
            </Link>
            <div className="proj-title-full dark:text-white">
                <Link href={`projects/${Project.slug}/${Project.id}`}>
                    <h3>{Project.name}</h3>
                </Link>
            </div>
            <div className="proj-desc-full dark:text-white">
                <p>{Project.desc}</p>
            </div>
        </div>
    )
}