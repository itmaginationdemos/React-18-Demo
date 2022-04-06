import { Suspense } from "react"

interface Props {
    joke: string
}

export default function Joke({ joke }: Props) {
    return (
        <Suspense fallback={<p>Loading...</p>}>
        <p data-testid="joke">{joke}</p>
        </Suspense>
    )
}
