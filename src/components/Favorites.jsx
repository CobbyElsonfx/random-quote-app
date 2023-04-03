import React from 'react'
import favcon from "../assets/favorite.svg"
import mobileDivider from "../assets/divider.svg"
import desktopDivider from "../assets/desktopDivider.svg"
import openQuote from "../assets/closingQuote.svg"
import closeQuote from "../assets/openingQuote.svg"

function Favorites(favQuotes) {
    return (
        <div>
            <div>Favorites Quotes</div>
            
            {favQuotes}
        </div>
    )
}

export default Favorites
