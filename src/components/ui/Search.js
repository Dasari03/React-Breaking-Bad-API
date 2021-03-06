import React, { useState} from 'react'

const Search = ( {getQuery}) => {

    const [text, setText] = useState('')
    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }
    
    return (

        
        <section className='search'>
            <form>
                <input 
                placeholder='Search Character'
                autoFocus
                className='form-control'
                type='text'
                value={text}
                onChange={(e)=>onChange(e.target.value)}
                >
                </input>
            </form>
            
        </section>
    )
}

export default Search

