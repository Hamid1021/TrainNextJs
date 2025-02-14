import Image from "next/image";
import { PropsAttr, Step } from "./types";
import Step_Loop from "./loop_step";

export default function Single_Project(prop: PropsAttr) {
    const { project } = prop;
    return (
        <section id="last-projects" className="mb-8 dark:text-white">
            <h2 className="text-2xl font-semibold dark:text-white text-center border rounded-lg p-5 mb-4">{project.name}</h2>
            <div className="single-project grid grid-cols-2 2xs:grid-cols-1 md:grid-cols-2">
                <div className="project_photo h-[300px]">
                    <Image style={{ height: "400px" }} src={project.image} alt={project.name} width={500} height={500} className="h-auto 2xs:my-2 rounded-lg shadow-lg w-[95%] xs:mt-2 lg:mt-0 md:mt-0" />
                </div>
                <div className="project-description flex flex-col gap-2 2xs:text-[14px] xs:text-[16px] md:text-[18px]">
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
            <div className="project-guide flex flex-col justify-center items-center divide-y-2">
                {project.problemStatement ? (
                    <>
                        <h3 className="text-center font-bold text-[18px] my-3">طراح مسئله</h3>
                        <p>{project.problemStatement}</p>
                    </>
                ) : null}
                {project.problemStatementImage ? (
                    <Image
                        style={{ height: "400px" }}
                        src={project.problemStatementImage}
                        alt={project.name}
                        width={500} height={500}
                        className="h-auto 2xs:my-2 rounded-lg shadow-lg w-[95%] xs:mt-2 lg:mt-0 md:mt-0"
                    />
                ) : null}
                {project.steps ? (
                    project.steps.map((step: Step) => (
                        <div key={step.id} className="h-[320px]">
                            <Step_Loop step={step} />
                        </div>
                    ))
                ) : null}
            </div>
        </section>
    );
}
