import Content from "./Content"
import Header from "./Header"
const Course = ({ courseName, parts }) => {
    console.log(courseName);
    return (
        <>
            <Header courseName={courseName} />
            <Content parts={parts} />
        </>
    )
}

export default Course