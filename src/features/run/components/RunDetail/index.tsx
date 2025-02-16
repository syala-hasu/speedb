import {Attempt, Run, Segment} from "../../../../types/Lss.ts";
import {ReactElement, useState} from "react";

export interface Props {
    run: Run
}

function RunDetail(props: Props) {
    const run = props.run

    const [selectRun, setSelectRun] = useState<number>(0)

    const runList = run.AttemptHistory.Attempt.map((attempt: Attempt, index: number) => {
        if (!attempt.RealTime && !attempt.GameTime) return;

        const onClick = () => {
            setSelectRun(index+1)
        }

        return (
            <tr className="hover cursor-pointer" onClick={onClick}>
                <th>{attempt.id}</th>
                <th>{attempt.ended}</th>
                <td>{attempt.RealTime}</td>
                <td>{attempt.GameTime}</td>
            </tr>
        )
    })

    const splits: ReactElement[] = []
    const subSplits: ReactElement[] = []

    run.Segments.Segment.forEach((segment: Segment, index: number) => {
        const time = segment.SegmentHistory.Time.find(t => {
            return t.id == selectRun
        });

        if (segment.Name.startsWith("-")) {
            subSplits.push(
                <tr className="hover">
                    <th>{index + 1}</th>
                    <td>{segment.Name.replace(/^-/, "").trim()}</td>
                    <td>{time ? time.RealTime : ""}</td>
                    <td>{segment.BestSegmentTime.RealTime}</td>
                </tr>
            )

            return
        }

        {
            const match = segment.Name.match(/^\{(.*?)\}/);
            const hasBrackets = match !== null;

            const sectionName = match ? match[1] : null;
            const segmentName = segment.Name.replace(/^\{.*?\}\s*/, "");

            if (hasBrackets) {
                subSplits.push(
                    <tr className="hover">
                        <th>{index + 1}</th>
                        <td>{segmentName}</td>
                        <td>{time ? time.RealTime : ""}</td>
                        <td>{segment.BestSegmentTime.RealTime}</td>
                    </tr>
                )

                splits.push(
                    <>
                        <thead className={`font-bold`}>
                        <tr className={`bg-base-200`}>
                            <th>Segment Index</th>
                            <th>{sectionName}</th>
                            <th>Personal Best Segment</th>
                            <th>Best Segment</th>
                        </tr>
                        </thead>
                        <tbody>
                        {subSplits.slice()}
                        </tbody>
                    </>
                )

                subSplits.length = 0
            } else {
                splits.push(
                    <>
                        <thead>
                        <tr className={`bg-base-200`}>
                            <th>Segment Index</th>
                            <th></th>
                            <th>Personal Best Segment</th>
                            <th>Best Segment</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="hover">
                            <th>{index + 1}</th>
                            <td>{segment.Name.replace(/^-/, "").trim()}</td>
                            <td>{time ? time.RealTime : ""}</td>
                            <td>{segment.BestSegmentTime.RealTime}</td>
                        </tr>
                        </tbody>
                    </>
                )
            }
        }
    })

    return (
        <>
            <h1>{run.GameName}</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Attempt</th>
                        <th>Run Datetime</th>
                        <th>RealTime</th>
                        <th>GameTime</th>
                    </tr>
                    </thead>
                    <tbody>
                    {runList}
                    </tbody>
                </table>
            </div>

            {selectRun > 0 && <div className="h-96 overflow-x-auto mt-4">
                <table className="table table-pin-rows">
                    {splits.length > 0 && splits}
                </table>
            </div>}
        </>
    )
}

export default RunDetail