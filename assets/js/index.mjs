// import * as THREE from "three";

// console.log(THREE);
console.log("foo")

import * as PIXI from "pixi.js";

$(()=>{
  {
    // console.log(`PIXI.VERSION: ${PIXI.VERSION}`);
  
    const canvasPixi=document.querySelector(".p-pixi__canvas");
    canvasPixi.style.width="400px";
    canvasPixi.style.height="400px";
    const renderer=new PIXI.Renderer({
      view:canvasPixi,
      width:400,
      height:400,
      resolution:window.devicePixelRatio,
      hello:true,
    });
    const stage=new PIXI.Container();
  
    const message="あいうえお𰻞𰻞麺";
    const styleBase={
      fontFamily: "sans-serif",
      fontSize: 25,
      fill: 0xffffff,
    };
    {
      const text=new PIXI.Text(message,{
        ...styleBase,
        fontFamily:"bizud-pgothic-regular",
      });
      text.y=0;
      stage.addChild(text);
    }
    {
      const text=new PIXI.Text(message,{
        ...styleBase,
        fontFamily:"bizud-pgothic-bold",
      });
      text.y=25;
      stage.addChild(text);
    }
    {
      const text=new PIXI.Text(message,{
        ...styleBase,
        fontFamily:"mplus1-regular",
      });
      text.y=50;
      stage.addChild(text);
    }
    {
      const text=new PIXI.Text(message,{
        ...styleBase,
        fontFamily:"mplus1-bold",
      });
      text.y=75;
      stage.addChild(text);
    }
    {
      const text=new PIXI.Text(message,{
        ...styleBase,
        fontFamily:"yujisyuku-regular",
      });
      text.y=100;
      stage.addChild(text);
    }
    renderer.render(stage);
  }

});