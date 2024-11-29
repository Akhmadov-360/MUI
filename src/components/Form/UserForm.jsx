import { Button, Card, CardContent, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const UserForm = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [foundUser, setFoundUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleSearch = () => {
    const user = users.find((u) => u.name.toLowerCase() === searchQuery.toLowerCase());
    setFoundUser(user || null);
  };

  return (
    <div>
      <TextField
        label="Search User by Name"
        size="small"
        margin="normal"
        fullWidth
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>

      {foundUser ? (
        <Card style={{ marginTop: "20px" }}>
          <CardContent>
            <Typography variant="h6">{foundUser.name}</Typography>
            <Typography variant="body2">Email: {foundUser.email}</Typography>
            <Typography variant="body2">Phone: {foundUser.phone}</Typography>
            <Typography variant="body2">Website: {foundUser.website}</Typography>
          </CardContent>
        </Card>
      ) : (
        searchQuery && (
          <Typography color="error" style={{ marginTop: "20px" }}>
            Пользователь не найден
          </Typography>
        )
      )}
    </div>
  );
};

export default UserForm;
