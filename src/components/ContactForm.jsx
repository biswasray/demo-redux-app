/* eslint-disable react/prop-types */

import { useState } from "react"
import { useContact } from "../App";

export default function ContactForm() {
    const [name,setName] = useState("");
    const [tel,setTel] = useState("");
    const {setContacts} = useContact();
    return (
        <div>
            Name: <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br/>
            Tel: <input type="text" value={tel} onChange={(e)=>setTel(e.target.value)}/><br/>
            <button onClick={()=>{
                const contact = {
                    name,
                    tel
                };
                // console.log(contact);
                setContacts(p=>[...p,contact]);
            }}>Add Contact</button>
        </div>
    )
}
// useEffect