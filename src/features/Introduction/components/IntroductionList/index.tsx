import IntroductionItem from "../IntroductionItem";
import React from "react";
import {Introduction} from "../../../../entities/Introduction.ts";
import Loading from "../../../Common/Loading";


export interface Props {
    introductionList: Introduction[];
    isLoading?: boolean;
}

function IntroductionList(props: Props): React.ReactElement {

    if (props.isLoading || props.introductionList.length == 0) return <Loading />

    const introductionList = props.introductionList.map(
        (introduction) =>
            <li className={``}>
                <IntroductionItem {...introduction} />
            </li>
    )
    return (
        <>
            <ul className={`grid grid-cols-3 gap-4`}>
                {introductionList}
            </ul>
        </>
    )
}

export default IntroductionList
