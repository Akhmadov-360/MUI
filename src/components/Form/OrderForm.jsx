import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const OrderForm = () => {
  const [product, setProduct] = useState("");

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const handleChange = (event) => {
    setProduct(event.target.value);
  };

  const onSubmit = (data) => {
    console.log({ ...data, product });
    reset();
    setProduct("");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Name"
        size="small"
        margin="normal"
        {...register("name", { required: "Name required" })}
        error={!!errors.name}
        helperText={errors.name ? errors.name.message : ""}
      />

      <TextField
        label="Phone number"
        size="small"
        margin="normal"
        {...register("phoneNumber", {
          required: "Phone number required",
          pattern: {
            value: /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
            message: "Invalid phone number format",
          },
        })}
        error={!!errors.phoneNumber}
        helperText={errors.phoneNumber ? errors.phoneNumber.message : ""}
      />

      <TextField
        label="Order address"
        size="small"
        margin="normal"
        {...register("address", {
          required: "Address required",
        })}
        error={!!errors.address}
        helperText={errors.address ? errors.address.message : ""}
      />

      <FormControl margin="normal" size="small" required sx={{ minWidth: 80 }}>
        <InputLabel id="product-select-label">Product List</InputLabel>
        <Select labelId="product-select-label" id="product-select" value={product} onChange={handleChange}>
          <MenuItem value="Banana">Banana</MenuItem>
          <MenuItem value="Candy">Candy</MenuItem>
          <MenuItem value="Kiwi">Kiwi</MenuItem>
        </Select>
      </FormControl>

      <Button type="submit" variant="contained" color="primary">
        Send
      </Button>
    </form>
  );
};

export default OrderForm;
