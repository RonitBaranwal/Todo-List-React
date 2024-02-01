export default function Buttons({clearAllTask,clearCompletedTask}) {
    return (
        <>
            <div
                id="buttons"
                className="ui stackable grid equal width"
            >
                <button
                    id="clear-all-tasks"
                    className="ui button column"
                    // onclick="showClearAllTasksModal()"
            disabled=""
            onClick={clearAllTask}
                >
                    Clear all tasks
                </button>
                <button
                    disabled=""
                    className="ui button column"
                    // onclick="showClearCompletedTasksModal()"
                >
                    Clear completed tasks
                </button>
            </div>
        </>
    );
}
