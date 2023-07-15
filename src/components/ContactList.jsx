/* eslint-disable react/prop-types */
import { useContact } from "./App";

export default function ContactList() {
  const {contacts} = useContact();
  return (
    <div>
      <ul>
        {contacts?.map((c, i) => <li key={i}><div>{c.name}</div><div>{c.tel}</div></li>)}
      </ul>
    </div>
  )
}
