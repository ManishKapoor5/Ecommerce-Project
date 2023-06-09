import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useToast } from '@chakra-ui/react';
import axios from "axios";

const Login = () => {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const toast = useToast()
    const history = useHistory();
    const handleClick = () => setShow(!show);

    const submitHandler = async() => {
        setLoading(true);
        if(!email || !password) {
            toast({
                title: "Please Fill all the Fields",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            setLoading(false);
            return;
        }
        
         try {
            const config = {
                headers: {
                    "content-type": "application/json",
                },
            };
            const { data } =await axios.post("/api/user/login", { email, password},
            config
            );
            toast({
                title: "Login Successful",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });

            localStorage.setItem("userInfo", JSON.stringify(data));

            setLoading(false);
            history.push("/usersdata");
         } catch (error) {
            toast({
                title: "Error Occured",
                description: error.response.data.message,
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            setLoading(false);
         }
    };


  return <VStack spacing='5px'>
    
    <FormControl id="email">
        <FormLabel>Email
        </FormLabel>
        <Input bg="white"
        placeholder='Enter your Email'
        onChange={(e) => setEmail(e.target.value)}></Input>
    </FormControl>
    <FormControl id="password" isRequired>
        <FormLabel>Password
        </FormLabel>
        <InputGroup bg="white">
        <Input
        type={show ? "text" : "password"}
        placeholder='Enter your Password'
        onChange={(e) => setPassword(e.target.value)} />
        <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide": "Show"}
            </Button>
        </InputRightElement>
        </InputGroup>
        
    </FormControl>
    

    <Button
    colorScheme='blue'
    width="100%"
    style={{ marginTop: 15}}
    onClick={submitHandler}
    isLoading={loading}>
        Login
    </Button>

    
  </VStack>

  
}

export default Login