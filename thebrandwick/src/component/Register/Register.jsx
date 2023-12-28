import React, { useState } from "react";
import {
  Box,
  FormErrorMessage,
  
  FormLabel,
  Input,
  FormControl,
  Button,
  Flex,
} from "@chakra-ui/react";
export const Register = () => {
 
  const intailValue = { name:"",username: "", email: "", password: "" ,phone:""}
  const [details, setDetails] = useState(intailValue);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value })
  };

 

  return (
    <Box  >
      <h1 style={{fontFamily:"sans-serif",fontSize:"larger",fontWeight:"bolder" ,textAlign:"center",padding:"10px"}}>Register User</h1>
       <FormControl
   
      width={"30%"}
      margin={"auto"}
      style={{ boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px", padding: "10px" }}
    >
          
      <Box w={"70%"} margin={"auto"}>
        
        <Box>
          <FormLabel>Name</FormLabel>
          <Input type="text" value={details.name} name="name"onChange={(e)=>handleInputChange(e)} placeholder={"Enter your Name"}/>
          {
           !details.name && <FormErrorMessage> Name is required.</FormErrorMessage>
          }
        </Box>

        <Box>
          <FormLabel>User Name</FormLabel>
          <Input type="text" value={details.username} onChange={(e)=>handleInputChange(e)}placeholder={"Enter your User Name"}/>
          {!details.username &&
            <FormErrorMessage>User name is required.</FormErrorMessage>
          }
        </Box>

        <Box>
          <FormLabel>Email</FormLabel>
          <Input type="email" value={details.email} onChange={(e)=>handleInputChange(e)} placeholder={"Enter your Email."}/>
          {!details.email &&
            <FormErrorMessage> Email is required.</FormErrorMessage>
          }
        </Box>

        <Box>
          <FormLabel>Phone No.</FormLabel>
          <Input type="text" name="phone" value={details.phone} onChange={(e)=>handleInputChange(e)} placeholder={"Enter your Phone No."}/>
          {!details.phone &&
            <FormErrorMessage> Phone No is required.</FormErrorMessage>
          }
        </Box>

        <Box>
          <FormLabel>Password</FormLabel>
          <Input type="password"  name="password" value={details.password} onChange={(e)=>handleInputChange(e)} placeholder={"Enter your Password."}/>
          {
            !details.password && <FormErrorMessage> Password is required.</FormErrorMessage>
          }
        </Box>
        <Flex
          w={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
          mt="10px"
        >
          <Button bg={"black"} color={"white"} p={"5px"} w="50%">
            Register
          </Button>
        </Flex>
      </Box>
    </FormControl>

    </Box>
   
  );
};
