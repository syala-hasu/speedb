import React from "react";

export interface Props {
    accept: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function UploadInput(props: Props) {
    return (
        <>
            <input
                type="file"
                className="file-input w-full max-w-xs"
                accept={props.accept}
                onChange={props.onChange} />
        </>
    )
}

export default UploadInput;