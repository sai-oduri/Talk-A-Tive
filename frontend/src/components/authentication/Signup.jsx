import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Signup = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmpassword, setConfirmpassword] = useState();
    const [pic, setPic] = useState();
    const [show, setShow] = useState(false);

    const postDetails = (pics) => {

    }

    const submitHandler = () => {

    }


    return (
        <VStack spacing="5px">

            <FormControl id="first-name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)}></Input>
            </FormControl>

            <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)}></Input>
            </FormControl>

            <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input type={show ? "text" : "password"} placeholder='Password' onChange={(e) => setPassword(e.target.value)}></Input>
                    <InputRightElement w="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <FormControl id="password" isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                    <Input type={show ? "text" : "password"} placeholder='Confirm Password' onChange={(e) => setConfirmpassword(e.target.value)}></Input>
                    <InputRightElement w="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <FormControl id="pic">
                <FormLabel>Upload your Picture</FormLabel>
                <Input type="file" p={1} accept="image/*" onChange={postDetails} />
            </FormControl>

            <Button colorScheme='blue' width="100%" style={{ marginTop: 15 }} onClick={submitHandler}  >
                SIgn Up
            </Button>

        </VStack >
    )
}

export default Signup