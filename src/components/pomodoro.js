import React, {useState, useEffect} from "react";

export default function Pomodoro(props) {
    const [seconds, setSeconds] = useState(25 * 60);
    const [paused, setPaused] = useState(true);

    useEffect(() => {
        const int = setInterval(() => {
            if (!paused) {
                setSeconds(s => {
                    if (s <= 0) {
                        props.showModal(true);
                        setPaused(true);
                        clearInterval(int);
                        return s;
                    }
                    return s - 1;
                });
            }
        }, 1000);
        return () => {
            clearInterval(int);
        };
    }, [paused]);

    function startTimer() {
        setPaused(false);
    }
    function pauseTimer() {
        setPaused(true);
    }
    function resetTimer() {
        setPaused(true);
        setSeconds(25 * 60);
    }
    function incrementTimer() {
        setPaused(true);
        setSeconds(seconds + 60);
    }
    function decrementTimer() {
        setPaused(true);
        if (seconds > 0) {
            setSeconds(seconds - 60);
        }
    }
    return (
        <React.Fragment>
            {`${Math.floor(seconds / 60)
                .toString()
                .padStart(2, "0")}:${`${seconds % 60}`
                .toString()
                .padStart(2, "0")}`}
            <button type={"button"} onClick={startTimer}>
                {"Start"}
            </button>
            <button type={"button"} onClick={pauseTimer}>
                {"Stop"}
            </button>
            <button type={"button"} onClick={resetTimer}>
                {"Reset"}
            </button>
            <button type={"button"} onClick={incrementTimer}>
                {" "}
                {" + One minute"}
            </button>
            <button type={"button"} onClick={decrementTimer}>
                {"- One minute"}
            </button>
        </React.Fragment>
    );
}
