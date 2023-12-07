import React,{useState} from "react";

export default function FavouriteColor(){
    const [color, setColor] = useState("Green");

    const changecolor = (newcolor) => {
        setColor(newcolor)
        document.body.style.backgroundColor= newcolor;
    } ;

    return(
        <>
        <center>
        <h1>My FavouriteColor is {color}</h1>
        <button type="button" onClick={()=>changecolor("purple")} style={{backgroundColor:"purple"}}>purple</button>

        <button type="button" onClick={()=>changecolor("red")} style={{backgroundColor:"red"}}>red</button>
        <button type="button" onClick={()=>changecolor("white")} style={{backgroundColor:"white"}}>white</button>
        <button type="button" onClick={()=>changecolor("Green")} style={{backgroundColor:"Green"}}>Green</button>
        </center>
        </>

    )
};