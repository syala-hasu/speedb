import React, {useState} from "react";
import {initialRunState, Lss, Run, Segment} from "../../../types/Lss.ts";
import {useQuery} from "../../../features/common/hooks/useQuery.ts";
import {
    FetchGameByNameDocument,
    FetchGameByNameQuery,
    InsertGameDocument,
    InsertGameMutation,
    InsertRunDocument,
    InsertRunMutation,
    InsertSegmentsDocument,
    InsertSegmentsMutation,
    Segments_Insert_Input
} from "../../../gql/graphql.ts";
import {useMutation} from "../../../features/common/hooks/useMutation.ts";
import {XMLParser} from "fast-xml-parser";
import {hash} from "../../../util/hash.ts";
import UploadInput from "../../../features/common/components/UploadInput";
import RunDetail from "../../../features/run/components/RunDetail";
import Button from "../../../features/common/components/Button";

function Upload() {
    const [run, setRun] = useState<Run>(initialRunState)
    const {data, error} = useQuery<FetchGameByNameQuery>(FetchGameByNameDocument, {name: run.GameName})


    const {mutation: insertGameMutation} = useMutation<InsertGameMutation>(InsertGameDocument)
    const {mutation: insertRunMutation} = useMutation<InsertRunMutation>(InsertRunDocument)
    const {mutation: insertSegmentsMutation} = useMutation<InsertSegmentsMutation>(InsertSegmentsDocument)

    const onLoadLss = (xmlString: string) => {
        const parser = new XMLParser({
            ignoreAttributes: false,
            attributeNamePrefix : ""
        });
        const lss: Lss = parser.parse(xmlString);

        setRun(lss.Run)
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.currentTarget.files;
        if (!files || files?.length === 0) return;
        const file = files[0];

        const reader = new FileReader();

        reader.onload = event => {
            const content = event.target?.result as string;
            onLoadLss(content)
        }

        reader.readAsText(file, 'UTF-8');
    }

    const onClick = async () => {
        if (!data) return

        if (data.games.length === 0) {
            insertGameMutation({name: run.GameName, uid: hash(run.GameName)}).then()
        }

        // const game = data.games[0]
        //
        // const runUid = hash(game.uid)
        //
        // await insertRunMutation({attempt_count: run.AttemptCount, game_uid: game.uid, uid: runUid})
        //
        // const segments = run.Segments.Segment.map((segment: Segment, index: number) => {
        //     const input: Segments_Insert_Input = {}
        //     input.uid = hash(segment.Name)
        //     input.run_uid = runUid
        //     input.index = index + 1
        //     input.name = `${segment.Name}`
        //     input.best_time = segment.BestSegmentTime.RealTime
        //
        //     return input
        // })

        // await insertSegmentsMutation({segments: segments})
    }

    return (
        <>
            <UploadInput accept={`.lss`} onChange={onChange}/>

            <RunDetail run={run} />

            <Button onClick={onClick}>Upload</Button>
        </>
    )
}

export default Upload
