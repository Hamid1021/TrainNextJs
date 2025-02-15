import React from "react";
import Single_Project_Loop from "../Project/single_project_loop";
import { Project } from "../Project/types";

interface LatestProjectsProps {
    projects: Project[];
}

const LatestProjects = ({ projects }: LatestProjectsProps) => {
    return (
        <section id="last-projects" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">لیست پروژه ها</h2>
            <div className="grid grid-cols-1 gap-y-3">
                {projects.map((project) => (
                    <Single_Project_Loop key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};

export default LatestProjects;
