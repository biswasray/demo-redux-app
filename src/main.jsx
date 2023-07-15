/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import { Provider, useDispatch, useSelector } from 'react-redux'
import store from './redux/store.js'
import { decrease, increase_ } from './redux/actions/counter.js';
import { getContacts } from './redux/actions/contacts.js';
// import './index.css'

function Counter() {
  const {count} = useSelector(state=>state.counter);
  const dispatch = useDispatch();
  return(<div>
    <p>Count:{count}</p><br/>
    <button onClick={()=>{
      dispatch(increase_(8))
    }}>+</button> <button  onClick={()=>{
      dispatch(decrease())
    }}>-</button>
  </div>)
}

function ContactList() {
  const contacts = useSelector(state=>state.contacts)
  return (
    <div>
      {contacts.loading?"Loading...":<ul>
        {contacts.data?.map((c, i) => <li key={i}><div>{c.name}</div><div>{c.tel}</div></li>)}
      </ul>}
    </div>
  )
}

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    // getContacts()(dispatch);
    //thunk
    dispatch(getContacts());
  },[])
  
  return (<div>
    <Counter/>
    <ContactList/>
  </div>)
}



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App/>
  </Provider>,
)
