import { Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const BMICalc = () => {
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      weight: "",
      height: "",
    },
  });

  const calculateBMI = (weight, height) => {
    const heightInMeters = height / 100;
    const bmiValue = (weight / heightInMeters ** 2).toFixed(2);

    setBmi(bmiValue);
    Status(bmiValue);
  };

  const Status = (bmi) => {
    if (bmi < 18.5) {
      setBmiCategory("Недостаточный вес");
    } else if (bmi >= 18.5 && bmi < 24.9) {
      setBmiCategory("Норма");
    } else if (bmi >= 25 && bmi < 29.9) {
      setBmiCategory("Избыточный вес");
    } else {
      setBmiCategory("Ожирение");
    }
  };

  const onSubmit = (data) => {
    const { weight, height } = data;
    calculateBMI(weight, height);
    reset();
  };

  return (
    <Stack direction={"column"} alignItems={"center"} spacing={2}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="weight"
          control={control}
          rules={{
            required: "Введите вес",
            min: { value: 1, message: "Вес должен быть больше 0" },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              type="number"
              label="Weight (Kg)"
              error={!!errors.weight}
              helperText={errors.weight?.message}
            />
          )}
        />

        <Controller
          name="height"
          control={control}
          rules={{
            required: "Введите рост",
            min: { value: 1, message: "Рост должен быть больше 0" },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              type="number"
              label="Height (cm)"
              error={!!errors.height}
              helperText={errors.height?.message}
            />
          )}
        />

        <Button type="submit" variant="contained" color="primary">
          Calculate
        </Button>
      </form>

      {bmi && (
        <div style={{ marginTop: "20px" }}>
          <Typography variant="h6">Ваш ИМТ: {bmi}</Typography>
          <Typography variant="body1" color="textSecondary">
            Состояние: {bmiCategory}
          </Typography>
        </div>
      )}
    </Stack>
  );
};

export default BMICalc;
