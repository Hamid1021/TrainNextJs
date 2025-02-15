import Image from "next/image";
import { StepPropsAttr } from "./types";

export default function Step_Loop(prop: StepPropsAttr) {
    const { step } = prop;
    return (
        <div className="step-item h-[480px] flex gap-5 relative overflow-hidden">
            <div className="w-full">
                <h3 className="font-bold text-[18px] my-3">{step.stepName}</h3>
                <p>
                    <span className="font-bold">توضیح :</span>
                    {step.stepDesc}
                </p>
            </div>
            <div className="w-full h-full relative">
                {step.stepImage && (
                    <Image
                        src={step.stepImage}
                        alt={step.stepName}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg shadow-lg"
                    />
                )}
            </div>
        </div>
    );
}
