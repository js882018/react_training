export function Component1() {
    let pagName = "To-Do List";
    const toDoListData = [
        {
            id: 1,
            name: 'Daily EASE CheckIn'
        },
        {
            id: 2,
            name: 'Sprint Sheet Update'
        },
        {
            id: 3,
            name: 'Asana Status Update'
        },
        {
            id: 4,
            name: 'Attend the Standup'
        },
        {
            id: 5,
            name: 'EASE Tracking'
        },
        {
            id: 6,
            name: 'Technical Blog Reading'
        }
    ];
    function getToDoData() {
        return toDoListData.map((data) => {
           return <p key={data.id}>{data.id}. {data.name}</p>
        })
    }
    return (
        <>
            <div className="left">
                <h2>{pagName}</h2>
                <div>{getToDoData()}</div>
            </div>
        </>

    );
}