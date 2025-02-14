import Image from "next/image";
import { PropsAttr, Step } from "./types";
import Step_Loop from "./loop_step";

export default function Single_Project(prop: PropsAttr) {
    const { project } = prop;
    return (
        <section id="last-projects" className="mb-8 dark:text-white">
            <h2 className="text-2xl font-semibold dark:text-white text-center border rounded-lg p-5 mb-4">{project.name}</h2>
            <div className="single-project grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="project_photo h-[300px] relative overflow-hidden">
                    <Image src={project.image} alt={project.name} layout="fill" objectFit="scale-down" className="rounded-lg shadow-lg" />
                </div>
                <div className="project-description flex flex-col gap-4 text-[16px]">
                    <div className="project-title">
                        <span className="font-bold">عنوان پروژه :</span>
                        <span> {project.name} </span>
                    </div>
                    <div className="project-desc">
                        <span className="font-bold">توضیحات پروژه :</span>
                        <p> {project.desc} </p>
                    </div>
                    <div className="project-resn">
                        <span className="font-bold">علت ساخت پروژه :</span>
                        <p> {project.reason} </p>
                    </div>
                </div>
            </div>
            <div className="project-guide mt-8">
                {project.problemStatement && (
                    <>
                        <h3 className="text-center font-bold text-[18px] mb-3">طراح مسئله</h3>
                        <p className="text-justify mb-6">{project.problemStatement}</p>
                    </>
                )}
                {project.problemStatementImage && (
                    <div className="mb-6 h-[300px] relative overflow-hidden">
                        <Image
                            src={project.problemStatementImage}
                            alt={project.name}
                            layout="fill"
                            objectFit="scale-down"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                )}
                <div className="grid grid-cols-2 gap-4">
                    {project.steps ?
                        project?.steps.map((step: Step) => (
                            <Step_Loop key={step.id} step={step} />
                        ))
                        :
                        undefined
                    }
                </div>
            </div>
        </section>
    );
}
