import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const SubscriptionForm = () => {
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState({});
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newError = {};
	
    if (!email) newError.email = "Email обязателен.";
    if (!category) newError.category = "Выберите категорию.";
    if (!agreed) newError.agreed = "Вы должны согласиться с условиями.";

    if (Object.keys(newError).length > 0) {
      setError(newError);
      setSuccess("");
    } else {
      setError({});
      setSuccess("Вы успешно подписались на новости!");
      setEmail("");
      setCategory("");
      setAgreed(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Email"
        size="small"
        margin="normal"
        fullWidth
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={!!error.email}
        helperText={error.email}
      />

      <FormControl fullWidth margin="normal" error={!!error.category}>
        <InputLabel>Категория подписки</InputLabel>
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
          <MenuItem value="news">Новости</MenuItem>
          <MenuItem value="articles">Статьи</MenuItem>
          <MenuItem value="offers">Предложения</MenuItem>
        </Select>
        {error.category && (
          <Typography color="error" variant="body2">
            {error.category}
          </Typography>
        )}
      </FormControl>

      <FormControlLabel
        control={<Checkbox checked={agreed} onChange={(e) => setAgreed(e.target.checked)} color="primary" />}
        label="Согласен с условиями"
      />
      {error.agreed && (
        <Typography color="error" variant="body2">
          {error.agreed}
        </Typography>
      )}

      <Button type="submit" variant="contained" color="primary" style={{ marginTop: "20px" }}>
        Подписаться
      </Button>

      {success && (
        <Typography color="success" style={{ marginTop: "20px" }}>
          {success}
        </Typography>
      )}
    </form>
  );
};

export default SubscriptionForm;
