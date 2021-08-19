import { StyledTask } from "./index.styled"

const Task = ({ id, title, content, due, done}) => {
    let date = due.split('T')
    let day = date[0].split('-').reverse().join('/')
    let time = date[1].split('.')

    return(
        <StyledTask id={id}>
            <div className="task-title">
                <h3>Task #{id}: {title}</h3>
            </div>
            <div className="task-content">
                <p>{content}</p>
            </div>
            <div className="wrapper-due">
                <div className="task-due">
                    <p>Due: {`${day}`} at {`${time[0]}`}</p>
                </div>
                <div className="task-done">
                    <p>Done? <span>{done ? '🟢' : '⛔'}</span></p>
                </div>
            </div>
        </StyledTask>
    )
}

export default Task