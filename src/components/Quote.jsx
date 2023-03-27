
import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import { FaHeart } from 'react-icons/fa';





function Quote() {
    const url = "https://raw.githubusercontent.com/JamesFT/Database-Quotes-JSON/master/quotes.json"

    const [quote, setQuote] = useState("")   //  the state for the quote
    const [author, setAuthor]  = useState("")
    const [isClicked , setisClick] = useState(false)  //handles  the font awesome favorite icon
    const [fav , setFav] = useState("")
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0); // keep track of the current quote index
    const [quotesData , setQuotesData] = useState([])   // the fetch data is pushed into the quotes Data state so that it can be accesed in all functions
      const [liked, setLiked] = useState(false);

    useEffect(()=> {
     fetchQuotes() 
    }, [])


    const fetchQuotes = ()=>{
       axios.get(url).then((res)=>{
        setQuotesData(res.data)
        var min = 1
        const currentQuotes = (Math.floor(Math.random() * (quotesData.length - min + 1)) + min) //generate a random number which can be used as an index to access the quotes from the array of objects
        const quoteOfDay = quotesData[currentQuotes].quoteText
        const authorOfQuote = quotesData[currentQuotes].quoteAuthor
        setQuote(quoteOfDay) 
        setAuthor(authorOfQuote)
       }).catch((err)=> {
        console.log(err)
       })
    }

    const increment = () =>{
        let newIndex = currentQuoteIndex + 1;
        if (newIndex >= quotesData.length) {
            newIndex = 0;
        }
        const quoteOfDay = quotesData[newIndex].quoteText;
        const authorOfQuote = quotesData[newIndex].quoteAuthor;
        setQuote(quoteOfDay);
        setAuthor(authorOfQuote);
        setCurrentQuoteIndex(newIndex); // update the current quote index
    }

    const decrement = () =>{
        let newIndex = currentQuoteIndex  - 1;
        if (newIndex < 0) {
            newIndex = 0;
        }
        const quoteOfDay = quotesData[newIndex].quoteText;
        const authorOfQuote = quotesData[newIndex].quoteAuthor;
        setQuote(quoteOfDay);
        setAuthor(authorOfQuote);
        setCurrentQuoteIndex(newIndex); // update the current quote index
    }


    const handleStarIconClick = ()=>{
        setisClick(true)
        setTimeout(() => {
            setisClick(false)
            
        }, 400);

    }


    return (
        <div>
            <div className="container mx-auto h-600  max-w-lg py-4  bg-white shadow-lg  space-y-5 rounded-lg my-20">
                <div className="flex justify-center md:justify-end -mt-16">
                        <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"/>
                </div>
                <div className="p-5">
                        <h2 className="text-gray-800 text-3xl font-semibold">Quotes Lab</h2>
                        <p className="mt-2 text-darkGray">{quote}</p>
                </div>

                <div className="flex relative pt-6">
                <a href="#" className="text-sm p-2  absolute bottom-0 left-2 font-medium text-indigo-500 text-right">{author} </a>
                <div className="absolute right-6 bottom-1"> 
                    <button  className={`shadow-lg rounded-full p-2 ${ liked ? 'text-red shadow-md shadow-red' : 'text-lightGray shadow-md shadow-lightGray'}`} onClick={() => setLiked(!liked)}>
                     <FaHeart size={20} />
                    </button>

                    {/* <FontAwesomeIcon icon={faStar } className={` ${isClicked? "starIcon clicked" : "starIcon"} `}    onClick={handleStarIconClick} size="lg" style={{}} />                        */}
                </div>

                </div>
                
                
            </div>

            <div className="  flex items-center space-x-3 justify-center bg-white py-5 md:w-1/3  sm:w-1/3 mx-auto  rounded">
                <button onClick={decrement} className='relative object-contain inline-flex text-sm sm:text-base rounded-md font-medium border-2  border-transparent transition-colors outline-transparent focus:outline-transparent text-white bg-[#4040F2] hover:bg-[#3333D1] focus:border-[#B3B3FD] focus:bg-[#4040F2] px-4 py-1 sm:py-1.5 sm:px-5'>
                    Prev.
                </button>
                <button onClick ={fetchQuotes}  className='relative  object-contain inline-flex text-sm sm:text-base rounded-md font-medium border-2  border-transparent transition-colors outline-transparent focus:outline-transparent text-white bg-[#4040F2] hover:bg-[#3333D1] focus:border-[#B3B3FD] focus:bg-[#4040F2] px-4 py-1 sm:py-1.5 sm:px-5'>
                    Random
                </button>
                <button onClick={increment}  className='relative ring-purple-500 hover:bg-tranparent ring-offset-4 inline-flex text-sm sm:text-base rounded-md font-medium border-2  border-transparent transition-colors outline-transparent focus:outline-transparent text-white bg-[#4040F2] hover:bg-[#3333D1] focus:border-[#B3B3FD] focus:bg-[#4040F2] px-4 py-1 sm:py-1.5 sm:px-5'>
                    Next
                </button>
             </div>
            
        </div>
    )
}

export default Quote