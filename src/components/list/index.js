import {useState} from 'react'

function List({contacts, setContacts}) {
    const [filterText, setFilterText] = useState("")

    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) => 
            item[key]
            .toString()
            .toLowerCase()
            .includes(filterText.toLowerCase())
        ) 
    })

    const rmElement = (e) => {
        var newList = contacts
        newList.splice(e, 1)
        setContacts([...newList])
    }  

  return (
    <div className='container'>
        <input className='list-input' value={filterText} placeholder='Filter Content' onChange={(e) => setFilterText(e.target.value)}/>
        <h1>List</h1>
        <ul className='list-ul'>
            {
                filtered.map((contact, index) =>
                <li className='list-li' key={index}>
                    <span className=''>{contact.fullname}</span>
                    <span className=''>{contact.phone_number}</span>
                    <span><button className="trash-btn" onClick={() => rmElement(index)}><i className='fas fa-trash'></i></button></span>
                    </li>)
            }
        </ul>
    </div>
  )
}

export default List