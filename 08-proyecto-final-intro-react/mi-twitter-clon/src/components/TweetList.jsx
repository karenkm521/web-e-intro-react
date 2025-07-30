import { Tweet } from "./Tweet"

export const TweetList = ({tweet, onLike}) => {
  return (
    <div>
        {tweet.map( tweet => (
            <Tweet key={tweet.id} tweet={tweet} onLike={onLike}/>
        ) )}
    </div>
  )
}