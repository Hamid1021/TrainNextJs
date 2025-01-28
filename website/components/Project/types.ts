export interface Step {
    step_id:number;
    step_name: string;
    step_desc:string;
    step_image?:string;
}

export interface Project {
    id: number;
    name: string;
    slug:string;
    image: string;
    desc: string;
    reason?: string;
    problemStatement?: string;
    problemStatementImage?: string;
    steps?: Step[];
}

export interface PropsAttr {
    Project: Project,
}

export interface StepPropsAttr {
    Step: Step,
}
