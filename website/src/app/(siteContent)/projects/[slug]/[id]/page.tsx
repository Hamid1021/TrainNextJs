import projects from "@/app/data"
import Single_Project from "../../../../../../components/Project/single_project"

export default async function Page({ params, }: { params: Promise<{ id: number, slug: string }> }) {

    const id = (await params).id
    const slug = (await params).slug
    const project = projects().findLast(o => o.id == id && o.slug == slug)
    console.log(slug);
    if (project) {
        return (
            <Single_Project Project={project} />
        )
    }
}