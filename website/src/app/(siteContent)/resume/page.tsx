import Chartjs from "../../../../components/ChartJs/chartjs"

export default async function Page() {
    return (
        <>
            <section id="resume" className="mb-8 border p-2 grid grid-cols-2 xs:grid xs:grid-cols-2 2xs:flex 2xs:flex-col 2xs:ga-y-4">
                <div className="flex flex-col items-center justify-center">
                    <div className="w-1/2"><canvas id="Chart1"></canvas></div>
                    <h3 className="font-bold uppercase dark:text-white">html</h3>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <div className="w-1/2"><canvas id="Chart2"></canvas></div>
                    <h3 className="font-bold uppercase dark:text-white">css</h3>
                </div>
            </section>
            <Chartjs />
        </>
    )
}