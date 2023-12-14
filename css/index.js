function storeData(v){
    var txtInput= document.getElementById('txtInput');
    var oldvalue=txtInput.value;
    var t= oldvalue.length;
    var lastChr=oldvalue[t-1];
   txtInput.value= oldvalue+ v;
   var oprSym =["+","-","*","/",".","%"];
   if(oprSym.includes(v)){
             if(oprSym.includes(lastChr)){
                  var removeLast=oldvalue.slice(0, -1);
                     txtInput.value= removeLast+ v; 


                }
            else {

                     txtInput.value= oldvalue+ v;

                 }

   }

   else {

         txtInput.value= oldvalue+ v;

        }

}


function calData(){

    var txtInput= document.getElementById('txtInput');
    var oldvalue=eval(txtInput.value);
    txtInput.value = oldvalue
}

function clearData(){

    var txtInput= document.getElementById('txtInput').value= '';
}

function delData(){

   var txtInput= document.getElementById('txtInput');
    var oldvalue=txtInput.value;
    var backvalue= oldvalue.slice(0,-1);
    txtInput.value = backvalue
}

