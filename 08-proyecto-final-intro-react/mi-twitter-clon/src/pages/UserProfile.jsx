import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const UserProfile = () => {
  const { username } = useParams();
  const [userTweets, setUserTweets] = useState([]);

  useEffect(() => {
    // Cargar los tweets desde localStorage
    const storedTweets = JSON.parse(localStorage.getItem("tweets")) || [];

    // Filtrar los tweets que sean del autor actual
    const filtered = storedTweets.filter(tweet => tweet.author === username);

    setUserTweets(filtered);
  }, [username]);

  return (
    <div style={{   display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center",  
      textAlign: "center" }}>
      <h1>Perfil  de {username}</h1>

      {userTweets.length === 0 ? (
        <p>Este usuario aún no ha publicado ningún tweet.</p>
      ) : (
        <ul>
          {userTweets.map(tweet => (
                <li key={tweet.id} style={{ marginBottom: "1rem", border: "1px solid #ccc", padding: "1rem", width:"420px" }}>
                  <p>{tweet.text}</p>
                  <p>❤️ {tweet.likes}</p>
                  <p style={{ fontSize: "0.9rem", color: "#555" }}>
                    🕒 Publicado el {new Date(tweet.date).toLocaleDateString("es-MX", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </li>
              ))}
        </ul>
      )}
      <Link to="/home">
        <button>🏠 Ir al Home</button>
      </Link>
    </div>
  );
};