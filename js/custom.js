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
function newmobile(modelname,modelprice){
    return{
      model: modelname,
      price: modelprice
    }
}
var sumsung = newmobile('sumsung',5000);
var lg = newmobile('lg', 9000);
var opo = newmobile('oppo', 11000);

document.write(sumsung.model + ' ' + 'mobile price is ' + sumsung.price + '<br>' );
document.write(lg.model + ' ' + 'mobile price is ' + lg.price + '<br>');
document.write(opo.model + ' ' + 'mobile price is ' + opo.price );

