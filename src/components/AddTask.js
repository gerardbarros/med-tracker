import { useState } from "react"

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState("")
    const [day, setDay] = useState("")
    const [nextDose, setNextDose] = useState("")
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert("Please add task")
            return
        }

        onAdd({ text, day, nextDose, reminder })

        setText("")
        setDay("")
        setNextDose("")
        setReminder(false)
    }

    return (
    <form className="add-form" onSubmit={onSubmit} >
        <div className="form-control">
            <label>Medication and Dose</label>
            <input type="text" placeholder="Add Medication and Dose" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className="form-control">
            <label>Current Time</label>
            <input type="time" placeholder="Add Current Time" value={day} onChange={(e) => setDay(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Next Dose</label>
            <input type="time" placeholder="When's your next dose?" value={nextDose} onChange={(e) => setNextDose(e.target.value)}/>
        </div>
        <div className="form-control form-control-check">
            <label>Set Reminder</label>
            <input type="checkbox"  checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
        </div>

        <input type="submit" value="Save Task" className="btn btn-block"/>
    </form>
    )
}

export default AddTask