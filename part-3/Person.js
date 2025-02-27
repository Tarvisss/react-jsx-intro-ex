
const Person = (props) => {
    let reply;
    if (props.age > 18) {
      reply = "Please go vote"
    }  else {
      reply = "Sorry, you must be 18"
    }
    return (
        <div>
            <p>Learn some information about this person</p>
            <p>name: {props.name.slice(0,6)}</p>
            <p>age: {props.age}</p>
            <h3>{reply}</h3>
            <h3>Hobbies:</h3>
            <ul>
                {props.hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)}
            </ul>

        </div>
    )
}