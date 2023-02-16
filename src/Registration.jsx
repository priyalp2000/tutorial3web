import { Flex, Heading, Input, Button, InputGroup, Stack, InputLeftElement, chakra, Box, Link, Avatar, FormControl, FormHelperText, InputRightElement } from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

//Reference: https://codesandbox.io/s/ncc3q
export const Registration = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword ] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const handleShowClick = () => setShowPassword(!showPassword);
    const handleShowClickConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);
    const navigate = useNavigate();

    const handleSubmit = () => {
        if(firstName!='' && lastName!='' && email!='' && password!='' && confirmPassword!='')
        {
            if(/^[a-zA-Z]+$/.test(firstName))
            {
                if(/^[a-zA-Z]+$/.test(lastName))
                {
                    if (email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))
                    {
                        if(password.length >=8)
                        {
                            if(password.match(/[a-z]/g))
                            {
                                if(password.match(/[A-Z]/g))
                                {
                                    if(password.match(/[0-9]/g))
                                    {
                                        if(password.match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/))
                                        {
                                            if(confirmPassword.match(password))
                                            {
                                                navigate('/profile', { state : {firstName:firstName, lastName: lastName, email: email}});
                                            }
                                            else
                                            {
                                                alert("Confirm password must be same as Password...");
                                            }
                                        }
                                        else
                                        {
                                            alert("Password must have atleast 1 special character...");
                                        }
                                    }
                                    else
                                    {
                                        alert("Password must have atleast 1 numeric character...");
                                    }
                                }
                                else
                                {
                                    alert("Password must have atleast 1 uppercase character...");
                                }
                            }
                            else
                            {
                                alert("Password must have atleast 1 lowercase character...");
                            }
                        }
                        else
                        {
                            alert("Enter the password with more than 8 characters...");
                        }
                    }
                    else
                    {
                        alert("Enter Valid Email Address...");
                    }
                }
                else
                {
                    alert("Enter Valid Last Name... (Only Letters)");
                }
            }
            else
            {
                alert("Enter Valid First Name... (Only Letters)");
            }
        }
        else
        {
            alert("Please Entre all details...");
        }
    }

    return(
        <Flex flexDirection="column" width="100wh" height="100vh" backgroundColor="gray.200" justifyContent="center" alignItems="center">
            <Stack flexDir="column" mb="2" justifyContent="center" alignItems="center">
                <Avatar bg="teal.500" />
                <Heading color="teal.400">Welcome</Heading>
                <Box minW={{ base: "90%", md: "468px" }}>
                <form onSubmit={handleSubmit}>
                    <Stack spacing={4} p="1rem" backgroundColor="whiteAlpha.900" boxShadow="md">
                    <FormControl>
                        <InputGroup>
                        <InputLeftElement pointerEvents="none" children={<CFaUserAlt color="gray.300" />}
                        />
                        <Input type="text" placeholder="First Name" onChange={(event) => {setFirstName(event.target.value);}}/>
                        </InputGroup>
                    </FormControl>
                    <FormControl>
                        <InputGroup>
                        <InputLeftElement pointerEvents="none" children={<CFaUserAlt color="gray.300" />} />
                        <Input type="text" placeholder="Last Name" onChange={(event) => {setLastName(event.target.value);}}/>
                        </InputGroup>
                    </FormControl>
                    <FormControl>
                        <InputGroup>
                        <InputLeftElement pointerEvents="none" children={<CFaUserAlt color="gray.300" />} />
                        <Input type="email" placeholder="Email Address" onChange={(event) => {setEmail(event.target.value);}}/>
                        </InputGroup>
                    </FormControl>
                    <FormControl>
                        <InputGroup>
                        <InputLeftElement pointerEvents="none" color="gray.300" children={<CFaLock color="gray.300" />} />
                        <Input type={showPassword ? "text" : "password"} placeholder="Password" onChange={(event) => {setPassword(event.target.value);}}/>
                        <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                            {showPassword ? "Hide" : "Show"}
                            </Button>
                        </InputRightElement>
                        </InputGroup>
                    </FormControl>
                    <FormControl>
                        <InputGroup>
                        <InputLeftElement pointerEvents="none" color="gray.300" children={<CFaLock color="gray.300" />}/>
                        <Input type={showConfirmPassword ? "text" : "password"} placeholder="Confirm Password" onChange={(event) => {setConfirmPassword(event.target.value);}}/>
                        <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={handleShowClickConfirmPassword}>
                            {showConfirmPassword ? "Hide" : "Show"}
                            </Button>
                        </InputRightElement>
                        </InputGroup>
                    </FormControl>
                    <Button borderRadius={0} type="submit" variant="solid" colorScheme="teal" width="full">
                        Register
                    </Button>
                    </Stack>
                </form>
                </Box>
            </Stack>
        </Flex>
    );
}
export default Registration;