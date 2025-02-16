const initialRunState: Run = {
    GameIcon: "",
    GameName: "",
    CategoryName: "",
    LayoutPath: "",
    Metadata: {
        Run: "",
        Platform: "",
        Region: "",
        Variables: "",
        CustomVariables: ""
    },
    Offset: "00:00:00",
    AttemptCount: 0,
    AttemptHistory: {
        Attempt: [
            { RealTime: "00:00:00.6451299" },
        ]
    },
    Segments: {
        Segment: [
            {
                Name: "1",
                Icon: "",
                SplitTimes: {
                    SplitTime: { RealTime: "00:00:01.3636997" }
                },
                BestSegmentTime: {
                    RealTime: "00:00:00.6035080"
                },
                SegmentHistory: {
                    Time: [
                        { RealTime: "00:00:00.6451299" },
                        { RealTime: "00:00:00.6035080" },
                        { RealTime: "00:00:01.3636997" }
                    ]
                }
            },
        ]
    },
    AutoSplitterSettings: ""
};

interface Run {
    GameIcon: string;
    GameName: string;
    CategoryName: string;
    LayoutPath: string;
    Metadata: Metadata;
    Offset: string;
    AttemptCount: number;
    AttemptHistory: AttemptHistory;
    Segments: Segments;
    AutoSplitterSettings: string;
}

interface Metadata {
    Run: string;
    Platform: string;
    Region: string;
    Variables: string;
    CustomVariables: string;
}

interface AttemptHistory {
    Attempt: Attempt[];
}

interface Attempt {
    id: number;
    ended: string;
    RealTime: string;
    GameTime: string;
}

interface Segments {
    Segment: Segment[];
}

interface Segment {
    Name: string;
    Icon: string;
    SplitTimes: SplitTimes;
    BestSegmentTime: BestSegmentTime;
    SegmentHistory: SegmentHistory;
}

interface SplitTimes {
    SplitTime: SplitTime;
}

interface SplitTime {
    RealTime: string;
}

interface BestSegmentTime {
    RealTime: string;
}

interface SegmentHistory {
    Time: Time[];
}

interface Time {
    id: number;
    RealTime: string;
}

interface Lss {
    "?xml": string;
    Run: Run;
}

export type { Lss, Run, Segment, Time, Attempt};

export {initialRunState}
