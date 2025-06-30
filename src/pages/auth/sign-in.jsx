import React, { useState, useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";

import axios from "../../http/axios";

import { useSnackbar } from "notistack";
import { LoginContext } from "@/context/LoginContext";

// Images
import background from "../../assets/images/background.jpg";
import { CopyAllRounded } from "@mui/icons-material";

export function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { enqueueSnackbar } = useSnackbar();
  const state = useContext(LoginContext);
  const navigate = useNavigate();

  const handleSignin = () => {
    axios
      .post(
        "/Admin/login",
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        }
      )
      .then(function (response) {
        if (response.data.msg === "email") {
          enqueueSnackbar("Email Unkown", { variant: "error" });
          console.log("Email Unknownn");
        }
        if (response.data.msg === "password") {
          enqueueSnackbar("Password Incorrect", { variant: "warning" });
        }
        if (response.data.msg === "success") {
          enqueueSnackbar("Login Success", { variant: "success" });

          const responseData = response.data.accessToken;
          const jwtResponse = jwt_decode(responseData);

          state.setAdmin(jwtResponse);
          state.setLoggedIn(true);

          console.log(responseData);
          console.log(jwtResponse);

          navigate("/dashboard/home");
        }
      });
  };
  return (
    <>
      <img
        src={background}
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign In
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              label="Email"
              size="lg"
            />
            <Input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              label="Password"
              size="lg"
            />
            {/* Test Account Credentials */}
            <div className="flex flex-col items-start justify-start gap-2 px-2">
              {/* Email */}
              <div className="flex">
                <span className="text-black">Email: </span>
                <span className="flex items-center justify-start gap-1 pl-3">
                  <p>admin@gmail.com</p>
                  <CopyAllRounded
                    onClick={() => {
                      navigator.clipboard.writeText("admin@gmail.com");
                      enqueueSnackbar("Copied to Clipboard", {
                        variant: "success",
                      });
                    }}
                    className="h-3 w-3 cursor-pointer text-primary"
                  />
                </span>
              </div>
              {/* Password */}
              <div className="flex">
                <span className="text-black">Password: </span>
                <span className="flex items-center justify-start gap-1 pl-3">
                  <p>admin</p>
                  <CopyAllRounded
                    onClick={() => {
                      navigator.clipboard.writeText("admin");
                      enqueueSnackbar("Copied to Clipboard", {
                        variant: "success",
                      });
                    }}
                    className="h-3 w-3 cursor-pointer text-primary"
                  />
                </span>
              </div>
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button onClick={handleSignin} variant="gradient" fullWidth>
              Sign In
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default SignIn;
