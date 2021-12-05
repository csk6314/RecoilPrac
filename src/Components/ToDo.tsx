import { IToDo } from "../atoms";

const ToDo = ({text}:IToDo) => {
    return (
        <>
        <li>{text}</li>
        <button>ToDo</button>
        <button>Doing</button>
        <button>Done</button>
        </>
    )
}
export default ToDo;