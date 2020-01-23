// for(i = 1; i <= 10; i++){
//     for(d = i; d <= 100; d+=10 ){
//         document.write(d + ' ');
//     }
//     document.write('<br>');
// }
// facotry function 

// function mobile(){
//     return{
//       model: 'sumsung',
//       price:function(){
//           return 'price is 3000';
//       }

//     }
// }
// var sumsung = mobile();
// document.write(sumsung.model + ' ' + sumsung.price());
// document.write('<br>');
// function newmobile(modelname,modelprice){
//     document.write(modelname + ' ' + 'mobile price is ' + modelprice + '<br>' );
// }

document.write('<br>');
// function newmobile(modelname,modelprice){
//     return{
//       model: modelname,
//       price: modelprice
//     }
// }
// var sumsung = newmobile('sumsung',5000);
// var lg = newmobile('lg', 9000);
// var opo = newmobile('oppo', 11000);

// document.write(sumsung.model + ' ' + 'mobile price is ' + sumsung.price + '<br>' );
// document.write(lg.model + ' ' + 'mobile price is ' + lg.price + '<br>');
// document.write(opo.model + ' ' + 'mobile price is ' + opo.price );
/* constructor */
function latestmobile(modelname,pricename){
    this.model = modelname;
    this.price = pricename;
    this.alldetail = function(){
       document.write(this.model + ' price is ' + this.price);

    }
}
var sumsung = new latestmobile('sumsung gallaxy' , 15000);
sumsung.alldetail();

/* check property method*/
if(typeof sumsung.price !== 'undefined'){
    document.write('available');
}else{
    document.write('not aavailable');
}
if('prices' in sumsung){
    document.write('ava');
}else{
    document.write('not ava');
}
