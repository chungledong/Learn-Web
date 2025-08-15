import React ,{useState, useEffect  } from "react";

const GitHubUser = () => {
  const [username, setUsername] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/chungledong`);
        const data = await response.json();
        setUsername(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>GitHub User Profile</h1>
      <img src={username.avatar_url} alt={`Avatar of ${username.login}`} 
      style={{ width: '100px', height: '100px' } }
      />
      {username && (
        <div>
          <h2>{username.name}</h2>
          <p>{username.bio}</p>
          <img src={username.avatar_url} alt={username.name} />
        </div>
      )}
    </div>
  );
};

export default GitHubUser;
