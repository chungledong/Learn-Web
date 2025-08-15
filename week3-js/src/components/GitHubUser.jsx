import React ,{useState, useEffect  } from "react";

const GitHubUser = () => {
  const [username, setUsername] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (username) {
      const fetchUserData = async () => {
        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setUserData(data);
      };
      fetchUserData();
    }
  }, [username]);

  return (
    <div>
      <h1>GitHub User Profile</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />
      {userData && (
        <div>
          <h2>{userData.name}</h2>
          <p>{userData.bio}</p>
          <img src={userData.avatar_url} alt={userData.name} />
        </div>
      )}
    </div>
  );
};

export default GitHubUser;
