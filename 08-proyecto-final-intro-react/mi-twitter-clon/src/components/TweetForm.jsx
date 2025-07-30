import { useState } from "react"

export const TweetForm = ({onAddTweet}) => {

    const [text, setText] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        if(!text.trim()) return
        onAddTweet(text)
        setText("")
    }

    return (
        <form onSubmit={handleSubmit} style={{paddingBottom:"40px"}}>
            <input
                type="text"
                placeholder="¿Qué piensas?"
                value={text}
                onChange={ e => setText(e.target.value)}
            />
            <button type="submit">Tweet</button>
        </form>
    )
}