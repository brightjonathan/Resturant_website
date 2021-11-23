import React from 'react'
import BookTable1 from '../InnerPages/BookTable1'


const BookTable = ({onBook}) => {
    return (
        <div>
            <BookTable1 onBook2={onBook}/>
        </div>
    )
}

export default BookTable
