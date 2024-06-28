import React from "react";
import Box from "@mui/material/Box";
import { Button, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import SnackbarComponent from "./SnackbarComponent";
import RoleSelectComponent from "./RoleSelectComponent";
import TextFieldComponent from "./TextFieldComponent";
import Header from "../..//Header";

const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const regPhone =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const Form = () => {
  const {
    register,
    handleSubmit,
   
    formState: { errors },
  } = useForm();

  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const onSubmit = () => {
    console.log("doneeeeeeeeeeee");

    handleClick();
  };

  return (
    <Box>
      <Header title={"CREATE USER"} subTitle={"Create a New User Profile"} />
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
        noValidate
        autoComplete="off"
      >
        <Stack sx={{ gap: 2 }} direction={"row"}>
          <TextFieldComponent
            label={"First Name"}
            name={"firstName"}
            register={register}
            errors={errors}
            validation={{ required: true, minLength: 3 }}
          />

          <TextFieldComponent
            label={"Last Name"}
            name={"lastName"}
            register={register}
            errors={errors}
            validation={{ required: true, minLength: 3 }}
          />
        </Stack>

        <TextFieldComponent
          label={"Email"}
          name={"email"}
          register={register}
          errors={errors}
          validation={{ required: true, pattern: regEmail }}
        />
        <TextFieldComponent
          label="Contact Number"
          name="ContactNumber"
          register={register}
          errors={errors}
          validation={{
            required: true,
            pattern: regPhone,
          }}
        />

        <TextField label="Adress 1" variant="filled" />
        <TextField label="Adress 2" variant="filled" />
        <RoleSelectComponent />

        <Box sx={{ textAlign: "right" }}>
          <Button
            type="submit"
            sx={{ textTransform: "capitalize" }}
            variant="contained"
          >
            Create New User
          </Button>

          <SnackbarComponent open={open} handleClose={handleClose} />
        </Box>
      </Box>
    </Box>
  );
};

export default Form;
