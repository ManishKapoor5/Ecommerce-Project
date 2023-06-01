// import React, { useEffect, useState } from 'react';
// import axios from "axios";
// import { Button, VStack, Flex, Box } from '@chakra-ui/react';
// import { useToast } from '@chakra-ui/react';
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

// export const Logout = () => {
    
        
//         const [loading, setLoading] = useState(false);
        
//         const toast = useToast()
//     const history = useHistory();
    


//     const submitHandler = async() => {
//         setLoading(true);
        
        
//             toast({
//                 title: "Logout Successful",
//                 status: "success",
//                 duration: 5000,
//                 isClosable: true,
//                 position: "bottom",
//             });

//             // localStorage.setItem("userInfo", JSON.stringify(data));

//             setLoading(false);
//             history.push("/");
        
//     };

//     return (
//         <Flex justifyContent="flex-end" mt={2}>
        
        
//      <Button
//     colorScheme='blue'
//     style={{ marginTop: 3, marginLeft: 515}}
//     onClick={submitHandler}
//     >
//         Logout
//     </Button>
    
    
//     </Flex>
//     )
// }
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Button, VStack, Flex, Box } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export const Logout = () => {
   
       
        const [loading, setLoading] = useState(false);
       
        const toast = useToast()
    const history = useHistory();
   

    const submitHandler = async() => {
        setLoading(true);
       
       
            toast({
                title: "Logout Successful",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });

            // localStorage.setItem("userInfo", JSON.stringify(data));

            setLoading(false);
            history.push("/");
       
    };

    return (
        <Flex justifyContent="flex-end" mt={2}>
       
     <Button
    colorScheme='dark'
    onClick={submitHandler}
    >
        Logout
    </Button>
   
    </Flex>
    )
}