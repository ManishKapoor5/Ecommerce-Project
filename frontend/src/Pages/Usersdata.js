import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Button } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const Usersdata = () => {
    
        
    

  const [udata,setData] = useState([]);
    const fetchData = async() => {
        const {data} = await axios.get("api/usersdata");

        setData(data);
    }

    useEffect(() => {
        fetchData();
    },[]);

    

    return <div>
        {udata.map((usersdata)=>(
            <div key={usersdata.id}>{usersdata.name}</div>
        ))}
          
    </div>
}

export default Usersdata;