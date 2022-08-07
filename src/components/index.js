import {useState, useEffect} from 'react'
import Form from './form'
import List from './list'


function Contact() {
    const [contacts, setContacts] = useState([
        {
            fullname:"sad0",
            phone_number:875523
        },
        {
            fullname:"zgr",
            phone_number:9998
        },
        {
            fullname:"bezeker",
            phone_number:444444
        }
    ])

    useEffect(() =>{
        console.log(contacts)
    }, [contacts])

  return (
    <div className='container text-center col-md-3 offset-md-4'>
        <h1>zgr's Filter Example</h1>
        <List contacts={contacts} setContacts={setContacts}/>
        <Form contacts={contacts} setContacts={setContacts}/>
    </div>
  )
}

export default Contact