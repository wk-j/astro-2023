type Props = {
    text: string
}

function onClick() {
    console.log("Hello, world");
}

let Button = ({ text } : Props) => {
    return (<button onClick={x => onClick()}>{text}</button>)
}

export { Button, onClick}
