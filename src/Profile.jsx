import { Card, Image, Stack, Button, CardBody, Heading, CardFooter, Text } from "@chakra-ui/react";

export const Profile = () => {
    return(
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            ml={5}
            mr={5}
            mt={10}
            >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src='https://bit.ly/dan-abramov'
                alt='Profile Photo'/>

            <Stack>
                <CardBody>
                <Heading size='2xl'>John Abramov</Heading>

                <Text py='1' fontSize='2xl'>
                    Student at Dalhousie University.
                </Text>
                <Text py='1' fontSize='2xl'>
                    Email: john@dal.ca
                </Text>
                <Text py='1' fontSize='2xl'>
                    Contact info: +1 (902)-483-1234
                </Text>
                </CardBody>

            </Stack>
        </Card>
    );
}
export default Profile;