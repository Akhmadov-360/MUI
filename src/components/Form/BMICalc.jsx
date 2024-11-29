import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  const handleCalculate = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const calculatedBmi = (weight / heightInMeters ** 2).toFixed(2);
      setBmi(calculatedBmi);
      Status(calculatedBmi);
    }
  };

  const Status = (bmi) => {
    if (bmi < 18.5) {
      setStatus("Недостаточный вес");
    } else if (bmi >= 18.5 && bmi < 24.9) {
      setStatus("Норма");
    } else if (bmi >= 25 && bmi < 29.9) {
      setStatus("Избыточный вес");
    } else {
      setStatus("Ожирение");
    }
  };

  return (
    <div>
      <TextField
        label="Height (cm)"
        size="small"
        margin="normal"
        fullWidth
        type="number"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        helperText={!height && "Required"}
        error={!height}
      />

      <TextField
        label="Weight (kg)"
        size="small"
        margin="normal"
        fullWidth
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        helperText={!weight && "Required"}
        error={!weight}
      />

      <Button variant="contained" color="primary" onClick={handleCalculate} style={{ marginTop: "10px" }}>
        Рассчитать
      </Button>

      {bmi && (
        <div style={{ marginTop: "20px" }}>
          <Typography variant="h6">Ваш ИМТ: {bmi}</Typography>
          <Typography variant="body1" color="textSecondary">
            Состояние: {status}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
