
import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'





function Quote() {
    const url = "https://raw.githubusercontent.com/JamesFT/Database-Quotes-JSON/master/quotes.json"

    const [quote, setQuote] = useState("")
    const [author, setAuthor]  = useState("")

    useEffect(()=> {
     fetchQuotes() 
    }, [])


    const fetchQuotes = ()=>{
       axios.get(url).then((res)=>{
        let min = 1
        let quotesData = res.data
        let currentQuotes = (Math.floor(Math.random() * (quotesData.length - min + 1)) + min)
        let quoteOfDay = quotesData[currentQuotes].quoteText
        let authorOfQuote = quotesData[currentQuotes].quoteAuthor
        setQuote(quoteOfDay)
        setAuthor(authorOfQuote)
       }).catch((err)=> {
        console.log(err)
       })
    }


    return (
        <div>
            <div className="container mx-auto h-600  max-w-lg py-4  bg-white shadow-lg  space-y-5 rounded-lg my-20">
                <div className="flex justify-center md:justify-end -mt-16">
                        <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"/>
                </div>
                <div className="pb-3">
                        <h2 className="text-gray-800 text-3xl font-semibold">Quotes Lab</h2>
                        <p className="mt-2 text-gray-600">{quote}</p>
                </div>

                <div className="flex relative pt-6">
                        <i className="fa-solid fa-star fa-xl" style="color: #e5840f;"></i>                    
                        <a href="#" className="text-xl  absolute bottom-0 right-2 font-medium text-indigo-500 text-right">{author} </a>

                </div>
                
                
            </div>

            <div className="  flex items-center space-x-3 justify-center bg-white py-5 w-1/3 mx-auto  rounded">
                <button className='relative object-contain inline-flex text-sm sm:text-base rounded-md font-medium border-2  border-transparent transition-colors outline-transparent focus:outline-transparent text-white bg-[#4040F2] hover:bg-[#3333D1] focus:border-[#B3B3FD] focus:bg-[#4040F2] px-4 py-1 sm:py-1.5 sm:px-5'>
                    Prev.
                </button>
                <button onClick ={fetchQuotes}  className='relative  object-contain inline-flex text-sm sm:text-base rounded-md font-medium border-2  border-transparent transition-colors outline-transparent focus:outline-transparent text-white bg-[#4040F2] hover:bg-[#3333D1] focus:border-[#B3B3FD] focus:bg-[#4040F2] px-4 py-1 sm:py-1.5 sm:px-5'>
                    Random
                </button>
                <button  className='relative ring-purple-500  ring-offset-4 inline-flex text-sm sm:text-base rounded-md font-medium border-2  border-transparent transition-colors outline-transparent focus:outline-transparent text-white bg-[#4040F2] hover:bg-[#3333D1] focus:border-[#B3B3FD] focus:bg-[#4040F2] px-4 py-1 sm:py-1.5 sm:px-5'>
                    Next
                </button>
             </div>
            
        </div>
    )
}

export default Quote