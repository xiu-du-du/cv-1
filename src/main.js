let html=document.querySelector("#demo");
let style=document.querySelector('#style');

let n=0;
let string=`/*
你好，这里是我的一个小项目。
在这个项目中我将使用代码画一个八卦。
第一步，先画一个八卦的形状；
 */
#div1{
    border-radius:50%;
    box-shadow:0 0 10px rgba(0,0,0,0.5);
}
/*
第二步，将八卦填充黑白两色。
*/
#div1{
    background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);
}
/*
第三步，使用S的方式分割阴阳区域。
*/
#div1::before{
    background-color:white;
    top:0;
    left:50%;
    transform:translateX(-50%);
}
#div1::after{
    background-color:black;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
}
/*
接下来，在分割好的阴阳两面画龙点睛。
*/
#div1::before{
    background: rgb(0,0,0);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
#div1::after{
    background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
`;
let string2=``;
let step=()=>{
    setTimeout(()=>{
        if(string[n]==="\n")
        {
            string2+= "<br>"
        }else if(string[n]===" ")
        {
            string2+="&nbsp;"
        }else{
            string2+=string[n]
        }
        
        html.innerHTML=string2;
        style.innerHTML=string.substring(0,n);
        window.scrollTo(0,99999);
        n=n+1;
        if(n<string.length){
            step();
        }
    },50)
};
step();

