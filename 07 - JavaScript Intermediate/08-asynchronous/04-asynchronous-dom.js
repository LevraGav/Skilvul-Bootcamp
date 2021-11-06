const elFormUsername = document.querySelector("#form-username");
const elCard = document.querySelector(".card");
const elCardImg = document.querySelector(".card-img-top");
const elCardBtn = document.querySelector("#card-btn");
const elCardTitle = document.querySelector("#card-title");

const getGitHubUser = async(parameter) => { 
   try {
      if (!parameter) 
      {
         return null;
      }

      const check = await fetch("https://api.github.com/users/" + parameter);
      let temporary = await check.json();
      if (temporary?.login) 
      {
         return temporary;
      }
      return {login:"Not Found"};
   } 
   
   catch (error) 
   {
      throw (error);
   }
}

elFormUsername.onsubmit = async (e) => {
   e.preventDefault();

   const tmp = await getGitHubUser(elFormUsername.firstElementChild.value);
   console.log(tmp);
   elCardTitle.innerText = tmp.login;

   if(tmp.id){
      elCardImg.src = tmp.avatar_url;
      elCardBtn.classList.remove("d-none");
      elCardImg.classList.remove("d-none");
   }

   else{
      elCardBtn.classList.add("d-none");
      elCardImg.classList.add("d-none");
   }
   elCard.classList.remove("d-none");
};