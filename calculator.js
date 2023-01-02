function converter(a){
let one = 0;
let ten=0;
let RomeResult='';
        ten = Math.trunc(a / 10);



      for (let i = 0; i < ten; i++){

          if (ten >= 5){
              if (ten == 10){
                  RomeResult+="C";
                  break;
              }
              if (ten == 9){
                  ten -= 9;
                  RomeResult+="XC";
                  continue;
              }
              ten-= 5;
              RomeResult+="L";
              continue;
          }
          if (ten == 4){
              ten-=4;
              RomeResult+="XL";
              continue;
          }
          if (ten >= 1){
              RomeResult+="X";
          }

      }


      one = a % 10;

     for(let j = 0; j<one; j++){
            if (one >= 5){
                if (one == 9){
                    one -= 9;
                    RomeResult+="IX";
                    continue;
                }
                one-= 5;
                RomeResult+="V";


            }

            if (one == 4){
                one-=4;
                RomeResult+="IV";
                continue;
            }
            if (one >= 1){
                RomeResult+="I";
            }

        }
  return RomeResult;
}



function check(num1,num2)
  {
    if(num1>10 || num2>10) throw ('недопустимые значения'); 
    
}

function operation_sw(num1,num2,sign){
  if (num1*num2==0) throw ('некорректное значение');
  switch(sign) {
case '+':
    return String(num1+num2);
case '-':
    return String(num1-num2);
case '*':
    return String(num1*num2);
case '/':
     
    return (String(Math.trunc(num1/num2)));
    default: throw('недопустимый символ');
}

  
}
function calculator(string) {
mass=["","I","II","III","IV","V","VI","VII","VIII","IX","X"];  
let num1;
let sign;
let num2;
let checkerz=0;
let checkerz2=0;
let s=string.split(' ');
  sign=s[1];
  for(let i = 1 ; i<mass.length; i++)
    {
    if(s[0]==mass[i])
    {
    checkerz=1;
    }
    }
  for(let i=1;i<mass.length;i++)
    {
      if(s[2]==mass[i])
      {
        checkerz2=1;
      }
    }
if(checkerz==0&& checkerz2==0)
{
num1=Number(s[0]);
num2=Number(s[2]);
if(s.length!=3) throw ('неверный формат ввода');
check(num1,num2);
return operation_sw(num1,num2,sign);
}
else if(checkerz==1 && checkerz2==1){

 check(num1,num2);
num1= mass.indexOf(s[0]);
num2= mass.indexOf(s[2]);

return converter(operation_sw(Number(num1),Number(num2),sign),mass);
  
}else 
{
throw ('неправильный формат ввода');
}
}


module.exports = calculator; // Не трогайте эту строчку