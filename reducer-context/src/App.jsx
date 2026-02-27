import { useReducer } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from "./data/tasks";
import taskReducer from "./reducers/taskReducer";

function App() {
  // const [tasks, setTasks] = useState(initialTasks);
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
  console.log(tasks);

  const getNextId = (data) => {
    // Find the maximum id in the data array and add 1 to it
    const maxId = data.reduce(
      (prev, current) => (prev && prev > current.id ? prev : current.id),
      0,
    );

    return maxId + 1;
  };

  const handleAddTask = (text) => {
    // ---
    dispatch({
      type: "added",
      id: getNextId(tasks),
      text,
    });
  };

  const handleEditTask = (task) => {
    dispatch({
      type: "edited",
      task,
    });
  };

  const handleDeleteTask = (taskId) => {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  };

  return (
    <>
      <h1 className="text-3xl font-semibold">Prague itinerary</h1>

      <AddTask onAddTask={handleAddTask} />

      <TaskList
        tasks={tasks}
        onEditTask={handleEditTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

export default App;
