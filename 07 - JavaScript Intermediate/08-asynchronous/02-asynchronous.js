const isR18Plus = (age) => {
   const isTrue = age > 18;
   return new Promise((resolve, reject) => {
      if(isTrue){
         resolve("Anda sudah dewasa")
      } 
      
      else{
         reject("anda masih dibawah umur")
      }
   })
}

const printR18Plus = async () => {
   const underAge = await isR18Plus(10).then(isTrue => isTrue).catch(isTrue => isTrue);
   const properAge = await isR18Plus(19).then(isTrue => isTrue).catch(isTrue => isTrue);

   console.log(underAge);
   console.log(properAge);
}

printR18Plus();