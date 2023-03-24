
import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'





function Quote() {
    const url = "https://raw.githubusercontent.com/JamesFT/Database-Quotes-JSON/master/quotes.json"

    const {quote, setQuote} = useState("")

    useEffect(()=> {
     fetchQuotes() 
    })


    const fetchQuotes = ()=>{
       axios.get(url).then((res)=>{
        let min = 1
        let quotesData = res.data
        let currentQuotes = (Math.floor(Math.random() * (quotesData.length - min + 1)) + min)
        let quoteOfDay = quotesData[currentQuotes].quoteText
        let authorOfQuote = quotesData[currentQuotes].quoteAuthor
        console.log(authorOfQuote,quoteOfDay)
       }).catch((err)=> {
        console.log(err)
       })
    }


    return (
        <div>
            <div className="container mx-auto max-w-lg max-h-lg py-4 px-8 bg-white shadow-lg rounded-lg my-20">
                <div className="flex justify-center md:justify-end -mt-16">
                        <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"/>
                </div>
                <div>
                        <h2 className="text-gray-800 text-3xl font-semibold">Quotes Lab</h2>
                        <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
                </div>
                <div className="flex justify-end mt-4">
                Author: <a href="#" className="text-xl font-medium text-indigo-500"> </a>
                </div>
            </div>
            
        </div>
    )
}

export default Quote