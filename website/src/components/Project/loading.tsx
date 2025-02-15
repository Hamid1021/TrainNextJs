import React from "react";

const ProjectLoading = () => {
    return (
        <section id="last-projects" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">اخرین پروژه ها</h2>
            <div className="grid grid-cols-1 gap-y-3">
                {[...Array(3)].map((_, index) => (
                    <div className="proj-item-empty" key={index}>
                        <div className="proj-img-empty">
                        </div>
                        <div className="proj-title-empty">
                        </div>
                        <div className="proj-desc-empty">
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectLoading;
