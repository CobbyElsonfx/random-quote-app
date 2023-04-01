
import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaHeart } from 'react-icons/fa';
import forward from "../assets/forword.svg"
import backward from "../assets/backward.svg"
import random  from "../assets/random.svg"
import favcon from "../assets/favorite.svg"
import mobileDivider from "../assets/divider.svg"
import desktopDivider from "../assets/desktopDivider.svg"
import openQuote from "../assets/closingQuote.svg"
import closeQuote from "../assets/openingQuote.svg"





function Quote() {
    const url = "https://raw.githubusercontent.com/JamesFT/Database-Quotes-JSON/master/quotes.json"

    const [quote, setQuote] = useState("")   //  the state for the quote
    const [author, setAuthor]  = useState("")
    const [isClicked , setIsClick] = useState(false)  //handles  the font awesome favoriteorite icon
    const [liked, setLiked] = useState(false);
    const [favorite , setfavorite] = useState([])
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0); // keep track of the current quote index
    const [quotesData , setQuotesData] = useState([])   // the fetch data is pushed into the quotes Data state so that it can be accesed in all functions

    useEffect(()=> {
     fetchQuotes() 
    }, [])

    let idCounter = 0;
    const IdGenerator = ()=>{
        return idCounter++;
    }


    const fetchQuotes = ()=>{
       axios.get(url).then((res)=>{
        const likedPropertyData =  res.data.map(quotesObj => ({...quotesObj, liked:false , ID: IdGenerator()}))
        setQuotesData(likedPropertyData)
        
        console.log(quotesData)
       }).catch((err)=> {
        console.log(err)
       })
    }

    const randomQuotes = ()=>{
        let min = 1
        let newIndex = (Math.floor(Math.random() * (quotesData.length - min + 1)) + min) //generate a random number which can be used as an index to access the quotes from the array of objects
        const quoteOfDay = quotesData[newIndex].quoteText
        const authorOfQuote = quotesData[newIndex].quoteAuthor
        const quoteLike = quotesData[newIndex].liked
        setQuote(quoteOfDay) 
        setAuthor(authorOfQuote)
        setCurrentQuoteIndex(newIndex)
    }

    const increment = () =>{
        let newIndex = currentQuoteIndex + 1;
        if (newIndex > quotesData.length) {
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
        if (newIndex <=  0) {
            newIndex = 0;
        }
        const quoteOfDay = quotesData[newIndex].quoteText;
        const authorOfQuote = quotesData[newIndex].quoteAuthor;
        setQuote(quoteOfDay);
        setAuthor(authorOfQuote);
        setCurrentQuoteIndex(newIndex); // update the current quote index
    }

    //a function that takes ihe quotes object and  sets the liked property to true , it also updates the 
    // q
    // const handleLike = (dataOfQuotes)=>{
    //     console.log("from the handlike" )
    //     const updatedQuotes = dataOfQuotes.map((q) =>{
    //         if (q.ID === dataOfQuotes[currentQuoteIndex].ID){
    //             console.log(q.quoteText,)
    //             return {...q, liked:true}
    //         }
    //         return  q
    //     })

    //     setQuotesData(updatedQuotes)
    //     // updated the isClicked to true

    //     setIsClick(true)
    //     setLiked(!liked)

        
    // }

  // for code resusability 
    const addFavoriteQuotes =(quote)=>{
        setfavorite([...favorite, quote])
    }

    const  handlefavoriteQuotes = ()=>{
        addFavoriteQuotes(quote)
        console.log(favorite)
    }



    return (
        <div>
            <div className="container mx-auto  max-h-[30rem] md:min-h-[30rem]  max-w-lg py-3  bg-white shadow-lg relative  space-y-2 relative rounded-lg my-10">
                <div className="flex justify-center md:justify-end -mt-16">
                        <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="./cobbyelsonfx-high-resolution-color-logo.png"/>
                </div>
                <div className="p-3">
                        <h2 className="text-primary text-3xl font-semibold drop-shadow-2xl">Quotes Lab</h2>
                        <p><span>Author: {author} ~~ Quotes Number:</span>{currentQuoteIndex}</p>
                        <div className="y" >
                        <img src={mobileDivider} className=" md:hidden mx-auto"  alt="" />
                        <img src={desktopDivider} className="hidden mx-auto sm:block" alt="" />
                        </div>

                        
                        <div className="mt-2 text-primary  text-left text-2xl pb-4 indent-4  border-1 border-left border-right font-bold md:p-4  relative"><img className="w-8 " src={openQuote} alt="" /><p className="">{quote} </p><img className="w-8 ml-[90%] " src={closeQuote} alt="" /> </div>
                </div>

                <div className="flex ">
                    <div className="absolute right-6 bottom-1"> 
                        {/* <button  className={`shadow-lg rounded-full p-2 ${isClicked? ' text-red shadow-md shadow-red' : 'text-lightGray shadow-md shadow-lightGray'}`}  onClick={() => handleLike(quotesData)}>
                        <FaHeart size={20} />¯
                        </button> */}
                        <button  className= "shadow-lg rounded-full p-2 "  onClick={handlefavoriteQuotes}>
                        <FaHeart size={20} />
                        </button>

                        {/* <FontAwesomeIcon icon={faStar } className={` ${isClicked? "starIcon clicked" : "starIcon"} `}    onClick={handleStarIconClick} size="lg" style={{}} />  */}
                    </div>
                </div>
                
                
            </div>

            <div className="flex items-center space-x-2 md:space-x-8 w-full  justify-center bg-white py-5 md:w-[60%]  fixed   bottom-0 left-0 h-[4rem] md:h-[6rem] absolute  md:absolute md:bottom-10 md:left-[19%] md:rounded-md">
            
                 <button className="justify-center"  >
                    <img src={favcon} className="w-6 h-6  md:w-12 md:h-12 text-center "  alt=""  />
                    <span className="md:hover:text-primary md:hover:text-gray-400 text-center font-semibold text-sm md:text-xl ">Favorites</span>
                </button>
                <button onClick={decrement}>
                    <img src={backward}    className="w-6 md:w-12 md:h-12 "  alt="" />
                    <span className="text-center font-semibold text-sm md:text-xl">Backward</span>

                </button>
                <button onClick ={randomQuotes}>
                    <img src={random} className="w-12 h-6 md:w-12 md:h-12" alt="" />
                    <span className="text-center  font-semibold text-sm md:text-xl">Random</span>

                </button>
                <button onClick={increment}>
                    <img src={forward} className="w-6 md:w-12 md:h-12" alt="" />
                    <span className="text-center font-semibold text-sm md:text-xl">Forward</span>

                </button>
             </div>
            
        </div>
    )
}

export default Quote