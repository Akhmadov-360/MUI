import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const HookForm = () => {
  const [submittedData, setSubmittedData] = useState(null);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setSubmittedData(data);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label={"Name"}
        size="small"
        margin="normal"
        {...register("name", { required: "Name required" })}
        error={!!errors.name}
        helperText={errors.name ? errors.name.message : ""}
      />

      <TextField
        label={"Email"}
        size="small"
        margin="normal"
        {...register("email", {
          required: "email required",
          pattern: {
            value: /^\S+@\S+\.\S+$/,
            message: "No farmat",
          },
        })}
        error={!!errors.email}
        helperText={errors.email ? errors.email.message : ""}
      />

      <Button type="submit">Send</Button>

      {submittedData && (
        <div>
          <h3>Data: </h3>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
        </div>
      )}
    </form>
  );
};

export default HookForm;
