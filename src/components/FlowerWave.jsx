"use client";

import {
  motion,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";

import {
  useRef,
  useEffect,
} from "react";

import {
  getWaveFlowers,
} from "./FlowerData";



function Flower({
  flower,
}) {


  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const scale = useMotionValue(0);
  const rotate = useMotionValue(0);
  const opacity = useMotionValue(0);


  const startTime = useRef(null);



  useAnimationFrame((time)=>{


    if(startTime.current === null){

      startTime.current = time;

    }


    const elapsed =
      (time - startTime.current) / 1000;



    if(elapsed < flower.delay)
      return;



    const progress =
      Math.min(

        (elapsed - flower.delay)
        /
        flower.duration,

        1

      );



    /*
    =====================
    Spiral masuk
    =====================
    */


    const theta =
      flower.angle +
      progress *
      flower.angularSpeed *
      Math.PI *
      2;



    const radius =
      flower.orbitRadius *
      Math.sin(
        progress *
        Math.PI /
        2
      );



    const spiralX =
      Math.cos(theta) *
      radius;



    const spiralY =
      Math.sin(theta) *
      radius;



    /*
    =====================
    Menuju formasi persegi
    =====================
    */


    const distance =
      Math.sqrt(

        flower.targetX ** 2 +
        flower.targetY ** 2

      );



    const spreadStart =
      Math.min(

        0.75,

        0.35 +
        distance / 3500

      );



    let currentX;
    let currentY;



    if(progress < spreadStart){


      currentX =
        spiralX;


      currentY =
        spiralY;


    }
    else{


      const t =
        (progress - spreadStart)
        /
        (1 - spreadStart);



      currentX =
        spiralX * (1 - t)
        +
        flower.targetX * t;



      currentY =
        spiralY * (1 - t)
        +
        flower.targetY * t;


    }




    /*
    Simpan posisi terakhir
    untuk FlowerCurtain
    */


    if(progress >= 1){


      currentX =
        flower.targetX;


      currentY =
        flower.targetY;


    }



    x.set(currentX);
    y.set(currentY);



    flower.currentX =
      currentX;


    flower.currentY =
      currentY;




    scale.set(

      Math.min(
        progress * 2,
        1
      )

    );



    rotate.set(

      flower.rotate +
      progress * 1080

    );



    opacity.set(progress);



  });





  return (

    <motion.img

      src={flower.image}

      alt="flower"

      draggable={false}


      className="
      absolute
      pointer-events-none
      select-none
      drop-shadow-lg
      "


      style={{


        left:"50%",


        top:"50%",



        width:
          flower.size,



        marginLeft:
          -flower.size / 2,



        marginTop:
          -flower.size / 2,



        x,

        y,

        scale,

        rotate,

        opacity,



        zIndex:
          100,


      }}

    />

  );

}






export default function FlowerWave({

  wave,

  onComplete,

}) {



  const flowers =
    getWaveFlowers(wave);





  useEffect(()=>{


    if(!onComplete)
      return;



    if(
      !flowers ||
      flowers.length === 0
    ){

      console.log(
        "FlowerWave kosong"
      );

      return;

    }




    const maxTime =
      Math.max(

        ...flowers.map(

          (flower)=>

          flower.delay +
          flower.duration

        )

      );





    const timer =
      setTimeout(()=>{


        console.log(

          "Wave selesai",

          flowers.length,

          "bunga"

        );



        onComplete(flowers);



      },

      (maxTime + 0.5) * 1000

      );





    return ()=>{

      clearTimeout(timer);

    };



  },[
    flowers,
    onComplete,
  ]);






  return (

    <>

      {
        flowers.map(

          (flower)=>(


            <Flower

              key={
                flower.id
              }


              flower={
                flower
              }


            />


          )

        )
      }

    </>

  );

}