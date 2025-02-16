export interface Props {
    heads: string[];
    items: object[];
    columnCount: number;
}

function Table(props: Props) {

    const tableHeads = props.heads.map((head: string) => {
        return (<th>{head}</th>)
    })


    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                <tr>
                    {tableHeads}
                </tr>
                </thead>
                <tbody>
                <tr className="hover">
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td>Purple</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table;