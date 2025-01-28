import Image from "next/image";
import { StepPropsAttr } from "./types";



export default function Step_Loop(prop : StepPropsAttr){
    const {Step} = prop 
    return (
        <div id={`Lv${Step.step_id}`}>
            <h3 className="font-bold text-[18px] my-3">{Step.step_name}</h3>
            <p>
                <span className="font-bold text-[18px] my-3">توضیح :</span>
                {Step.step_desc}
            </p>
            <div className="step-image my-3">
            {
                Step.step_image? 
                <Image style={{height:"500px"}} src={Step.step_image} alt={Step.step_name} width={1000} height={1000} className="h-[400px] mt-3 2xs:my-2 rounded-lg shadow-lg w-[95%] xs:mt-2 lg:mt-0 md:mt-0"></Image>
                : <></>
            }
            </div>
        </div>
    )
}