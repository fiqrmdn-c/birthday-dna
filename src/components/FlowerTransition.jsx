"use client";

import {
  useEffect,
  useState,
} from "react";

import FlowerWave from "./FlowerWave";
import FlowerCurtain from "./FlowerCurtain";


export default function FlowerTransition({
  show = true,
  onComplete,
}) {


  const [phase, setPhase] =
    useState("wave");


  const [flowers, setFlowers] =
    useState([]);




  useEffect(() => {

    if(show){

      setPhase("wave");

      setFlowers([]);

    }

  }, [show]);




  if(!show)
    return null;




  return (

    <div

      className="
      fixed
      inset-0
      overflow-hidden
      pointer-events-none
      z-[999]
      "

    >



      {
        phase === "wave" && (


          <FlowerWave


            // ambil semua bunga
            wave={undefined}



            onComplete={(result)=>{


              console.log(
                "Wave selesai",
                result.length,
                "bunga"
              );



              setFlowers(result);



              setPhase(
                "curtain"
              );


            }}



          />


        )
      }





      {
        phase === "curtain" && (


          <FlowerCurtain


            flowers={
              flowers
            }



            onComplete={()=>{


              console.log(
                "Curtain selesai"
              );



              if(onComplete){

                onComplete();

              }


            }}



          />


        )
      }



    </div>

  );

}