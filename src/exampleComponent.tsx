import React, { useState } from 'react';
import { request } from './typedFetch'

export default function ExampleComponent() {

    const [count, setCount] = useState(0);
    const [error, setError] = useState(false);
    const [joke, setJoke] = useState("")

    async function handleClick() {
        request<any>("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single")
            .then((res) => {
                
                // these two below will be "batched" (grouped) together
                setCount(count => count + 1)
                setJoke(res.joke.toString())
                // React 18+ will rerender only once at the end.
            })
            .catch(() => {
                console.log("So this is awkward... Something went wrong.")
                setError(true)
            })
        // React 18 will rerender only now
    }

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            {error ? <p>Warsaw, we have a problem. Refresh the page to try again.</p> : null}
            <h1>Click to get a random Dad joke, and to increase count</h1>
            <p>Count: {count}</p>
            {joke ? <p>{joke}</p> : <i>Warning the joke may be really bad...</i>}
            <button onClick={handleClick} style={{ width: "3rem", alignSelf: "center", marginTop: "0.5rem" }}>Click</button>
        </div>
    )
}