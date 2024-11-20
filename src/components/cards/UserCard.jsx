import { Avatar, Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const UserCard = ({ border, className, width }) => {
  const styleCardUser = {
    Border: `3px solid ${border}`,
    Width: width,
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/users"
        );

        if (!response.ok) {
          throw new Error("Faild to fatch");
        }

        const jsonData = await response.json();

        setData(jsonData.slice(0, 15));
      } catch (e) {
        console.error("Fetch error", e);
        setError(e.message || "Error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading....</p>;
  }

  if (error) {
    return <Alert severity="error">Error: {error}</Alert>;
  }

  return (
    <>
      {data.map((user) => (
        <Box key={user.id} style={styleCardUser} width={"300px"} border={"#000"} className={className} >
          <Avatar src={user.avatar} alt={user.name} sx={{ width: 64, height: 64 }} />
          <Box>
            <Typography variant="h6">{user.name}</Typography>
            <Typography variant="body2">Email: {user.email}</Typography>
            <Typography component="p">Role: {user.role}</Typography>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default UserCard;
