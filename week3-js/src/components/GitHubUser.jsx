// src/components/GitHubUser.jsx
import React, { useState, useEffect } from "react";

const GitHubUser = () => {
  // Quản lý state dữ liệu người dùng
  const [user, setUser] = useState(null);
  // Quản lý state trạng thái tải
  const [loading, setLoading] = useState(true);
  // Quản lý state lỗi
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/chungledong`);
        
        // Xử lý trường hợp API trả về lỗi (ví dụ: 404 Not Found)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  // Điều kiện render: nếu đang tải
  if (loading) {
    return <div>Loading...</div>;
  }

  // Điều kiện render: nếu có lỗi
  if (error) {
    return <div>Error: {error.message}. Please try again later.</div>;
  }

  // Điều kiện render: nếu có dữ liệu
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>GitHub User Profile</h1>
      {user && (
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', maxWidth: '400px', margin: 'auto' }}>
          <img 
            src={user.avatar_url} 
            alt={`Avatar of ${user.login}`} 
            style={{ width: '150px', height: '150px', borderRadius: '50%', border: '3px solid #007bff' }}
          />
          <h2>{user.name}</h2>
          <p><strong>Username:</strong> {user.login}</p>
          <p><strong>Bio:</strong> {user.bio || 'No bio available'}</p>
          <p><strong>Followers:</strong> {user.followers}</p>
          <p><strong>Public Repos:</strong> {user.public_repos}</p>
        </div>
      )}
    </div>
  );
};

export default GitHubUser;