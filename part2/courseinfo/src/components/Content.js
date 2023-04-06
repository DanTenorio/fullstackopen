import Part from "./Part"

const Content = ({ parts }) => {
    const totalExercises = parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, 0)
    return (
        <>
            {parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)}
            <p>total of {totalExercises} exercises</p>
        </>
    )
}

export default Content