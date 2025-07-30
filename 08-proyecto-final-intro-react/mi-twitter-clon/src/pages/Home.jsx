import { useEffect, useState } from "react";
import { TweetForm } from "../components/TweetForm";
import { TweetList } from "../components/TweetList";

export const Home = ({ user, onLogout }) => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const storedTweets = JSON.parse(localStorage.getItem("tweets")) || [];
    setTweets(storedTweets);
  }, []);

  useEffect(() => {
    localStorage.setItem("tweets", JSON.stringify(tweets));
  }, [tweets]);

  const addTweet = (text) => {
    const newTweet = {
      id: Date.now(),
      text,
      likes: 0,
      author: user || "Anónimo",
      date: new Date().toISOString(), 
    };
    setTweets([newTweet, ...tweets]);
  };

  const likeTweet = (id) => {
    setTweets(
      tweets.map((tweet) =>
        tweet.id === id ? { ...tweet, likes: tweet.likes + 1 } : tweet
      )
    );
  };

  return (
    <div style={{   display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center",  
      textAlign: "center" }}> 
      <div >
        <h1>Bienvenido {user || "invitado"}</h1>
      </div>
      <TweetForm onAddTweet={addTweet} />
      <TweetList tweet={tweets} onLike={likeTweet} />
      <div style={{ paddingTop:"20px" }}>
        {user && <button onClick={onLogout}  >Cerrar sesión</button>}
      </div>
      
    </div>
  );
};
