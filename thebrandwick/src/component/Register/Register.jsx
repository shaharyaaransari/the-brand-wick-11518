import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Text,
  FormLabel,
  Input,
  FormControl,
  Button,
  useToast,
  Flex,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
export const Register = () => {
  const navigate = useNavigate();
  const [formErorr, setFormError] = useState({});
  const intailValue = {
    name: "",
    username: "",
    email: "",
    password: "",
    phone: "",
  };
  const toast = useToast()
  const [details, setDetails] = useState(intailValue);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: name==="phone"? +value:value });
  };

  const handleSubmit = () => {
    setFormError(validate(details));
      console.log(details)
        if(details.name && details.email && details.username && details.phone && details.password){
          axios.post(`http://localhost:8080/user/signup`, details)
          .then((res) => {
              if(res.data.register){
                toast({
                  title: `${res.data.msg}`,
                  status: 'success',
                  duration: 9000,
                  isClosable: true,
                })
              }
          if(res.data.register){
              navigate("/login") 
          }
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          })
        }
    
  };
  const validate = (value) => {
    const error = {};
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!value.name) {
      error.name = "name is required!";
    }
    if (!value.username) {
      error.username = "username is required!";
    }
    if (!value.email) {
      error.email = "email is required!";
    }
    if (!value.phone) {
      error.phone = "phone is required!";
    }
    if (!value.password) {
      error.password = "password is required!";
    } else if (!regex.test(value.password)) {
      error.password = "please enter valid password!";
    }
    return error;
  };

  return (
    <Box
      backgroundColor="gray.200"
      style={{
        width: "100%",
        height: "100vh",
        position: "absolute",
      }}
    >
      <FormControl
        bg="white"
        width={"30%"}
        margin={"auto"}
        style={{
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          padding: "20px",
          borderRadius: "10px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Box w={"70%"} margin={"auto"}>
          <h1
            style={{
              fontFamily: "sans-serif",
              fontSize: "larger",
              fontWeight: "bolder",
              textAlign: "center",
              padding: "10px",
              color: "#333",
            }}
          >
            Register User
          </h1>

          <Box mb="8px">
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              value={details.name}
              name="name"
              onChange={(e) => handleInputChange(e)}
              placeholder={"Enter your Name"}
            />
            <Text color="red">{formErorr.name}</Text>
          </Box>

          <Box mb="8px">
            <FormLabel>User Name</FormLabel>
            <Input
              type="text"
              name="username"
              value={details.username}
              onChange={(e) => handleInputChange(e)}
              placeholder={"Enter your User Name"}
            />
            <Text color="red">{formErorr.username}</Text>
          </Box>

          <Box mb="8px">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={details.email}
              onChange={(e) => handleInputChange(e)}
              placeholder={"Enter your Email."}
            />
            <Text color="red">{formErorr.email}</Text>
          </Box>

          <Box mb="8px">
            <FormLabel>Phone No.</FormLabel>
            <Input
              type="number"
              name="phone"
              value={details.phone}
              onChange={(e) => handleInputChange(e)}
              placeholder={"Enter your Phone No."}
            />
            <Text color="red">{formErorr.phone}</Text>
          </Box>

          <Box mb="8px">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              value={details.password}
              onChange={(e) => handleInputChange(e)}
              placeholder={"Enter your Password."}
            />
            <Text color="red">{formErorr.password}</Text>
          </Box>

          <Flex
            w={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
            mt="20px"
          >
            <Button
              borderRadius={0}
              variant="solid"
              colorScheme="teal"
              width="full"
              onClick={handleSubmit}
            >
              Register
            </Button>
          </Flex>
        </Box>
      </FormControl>
    </Box>
  );
};
