import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atoms";
interface IForm {
    toDo:string;
}
const CreateToDo =() => {
    const {register,handleSubmit,setValue}= useForm<IForm>();
    const setToDos = useSetRecoilState(toDoState);
    const handleVaild = ({toDo}:IForm) => {
        setToDos(oldToDos => [{text:toDo,id:Date.now(),category:"TO_DO"},...oldToDos]);
        setValue("toDo","");
    };
    return (
        <form onSubmit={handleSubmit(handleVaild)}>
                <input 
                    {...register("toDo", {
                        required:"Please Write a To Do"
                    })}
                    placeholder="Write a to do"
                />
                <button >add</button>
            </form>
    );
}
export default CreateToDo;