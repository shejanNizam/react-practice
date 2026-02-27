import Task from "./Task";

export default function TaskList({ tasks, onEditTask, onDeleteTask }) {
  return (
    <>
      <ul>
        {tasks?.map((task) => (
          <Task
            key={task.id}
            task={task}
            onEditTask={onEditTask}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </ul>
    </>
  );
}
