import { Link } from "react-router-dom";
export const Tweet = ({tweet, onLike,}) => {
  return (
    <div
  style={{
    border: "1px solid #e1e8ed",
    borderRadius: "12px",
    padding: "16px",
    marginBottom: "16px",
    maxWidth: "500px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    backgroundColor: "#ffffff",
    width:"420px",
  }}
>
  

  <p style={{ fontSize: "14px", color: "#657786" }}>
    <Link to={`/profile/${tweet.author}`} style={{ textDecoration: "none", color: "#1DA1F2" }}>
      <strong>@{tweet.author}</strong>
    </Link>{" "}
    dijo:
  </p>
  <p style={{ fontSize: "16px", marginBottom: "12px" }}>{tweet.text}</p>

  <button
    onClick={() => onLike(tweet.id)}
    style={{
      backgroundColor: "#1DA1F2",
      color: "#fff",
      border: "none",
      borderRadius: "20px",
      padding: "6px 12px",
      cursor: "pointer",
      marginTop: "10px"
    }}
  >
    {tweet.likes} ❤️
  </button>
</div>
  )
}