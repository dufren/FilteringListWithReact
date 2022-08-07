import {useState} from 'react'

const initialFormValues = {fullname:"", phone_number:""}

function Form({contacts, setContacts}) {
    const [form, setForm] = useState(initialFormValues)
    
    const onChangeInput = ((e) =>{
        setForm({...form, [e.target.name]: e.target.value})
    })

    const onSubmit = ((e) => {
        e.preventDefault()
        
        if(form.fullname === "" || form.phone_number === ""){
            return false
        }
        setContacts([...contacts, form])
        setForm(initialFormValues)
    })

  return (
    <div className='deneme container'>
        <h1 className='mb-3'>Add Content</h1>
        <form className='' onSubmit={onSubmit}>
            <div className='mb-2'>
                <input className='' name='fullname' value={form.fullname} placeholder='Full Name' onChange={onChangeInput}/>
            </div>
            <div className='mb-2'>
                <input name='phone_number' value={form.phone_number} placeholder='Phone Number' onChange={onChangeInput}/>
            </div>
            <div className=''>
                <button className='mb-2 btn btn-success'>Add</button>
            </div>
        </form>
    </div>
  )
}

export default Form