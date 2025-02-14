export interface Step {
    id: number;
    stepName: string;
    stepDesc: string;
    stepImage?: string | null;
}

export interface Project {
    id: number;
    name: string;
    slug: string;
    image: string;
    desc: string;
    reason?: string | null;
    problemStatement?: string | null;
    problemStatementImage?: string | null;
    steps?: Step[];
}

export interface PropsAttr {
    project: Project;
}

export interface StepPropsAttr {
    step: Step;
}
