import Image from "next/image";
import { StepPropsAttr } from "./types";

export default function Step_Loop(prop: StepPropsAttr) {
    const { step } = prop;
    return (
        <div id={`Lv${step.id}`}>
            <h3 className="font-bold text-[18px] my-3">{step.stepName}</h3>
            <p>
                <span className="font-bold text-[18px] my-3">توضیح :</span>
                {step.stepDesc}
            </p>
            <div className="step-image my-3">
                {step.stepImage ? (
                    <Image style={{ height: "500px" }} src={step.stepImage} alt={step.stepName} width={1000} height={1000} className="h-[400px] mt-3 2xs:my-2 rounded-lg shadow-lg w-[95%] xs:mt-2 lg:mt-0 md:mt-0" />
                ) : null}
            </div>
        </div>
    );
}
