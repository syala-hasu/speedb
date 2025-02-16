import IntroductionItem from "../IntroductionItem";
import React from "react";
import {Introduction} from "../../../../entities/Introduction.ts";
import Loading from "../../../common/components/Loading";


export interface Props {
    introductionList: Introduction[];
    isLoading?: boolean;
}

function IntroductionList(props: Props): React.ReactElement {

    if (props.isLoading) return <Loading />

    if (!props.introductionList) return <Loading />;

    const introductionList = props.introductionList.map(
        (introduction) =>
            <tr>
                <IntroductionItem introduction={introduction} />
            </tr>
    )
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                    <tr>
                        <th>Player</th>
                        <th>Event</th>
                        <th>Date</th>
                        <th>Category</th>
                        <th>EST</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    {introductionList}
                    </tbody>
                    <tfoot>
                    <tr>
                        <th>Player</th>
                        <th>Event</th>
                        <th>Date</th>
                        <th>Category</th>
                        <th>EST</th>
                        <th>Description</th>
                    </tr>
                    </tfoot>
                </table>
            </div>
        </>
    )
}

export default IntroductionList
