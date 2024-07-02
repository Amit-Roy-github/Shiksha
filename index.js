window.addEventListener('scroll',()=>{
   document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>30)
});

function message(){
   var name = document.getElementById("name") ;
   var email = document.getElementById("email")   ;
   var text = document.getElementById('text')  ;
   var aa =document.getElementById('aa') ;

   const succes = document.getElementById('success');

   if( name.value === '' || email.value === ''   || text.value === '' || aa.value === '' )
      {
         // console.log("Null");
         succes.style.display = 'none' ;
         danger.style.display = 'block' ;
      }
      else{
         var body = 'Name: '+ name + '<br/> Email: '+email + '<br/> Message: ' + text ; 
      //    Email.send({
      //       Host : "smtp.elasticemail.com",
      //       Username : "aroy104321@gmail.com",
      //       Password : "aflkvkfa",
      //       To : 'aroy104321@gmail.com',
      //       From : email.value,
      //       Subject : '',
      //       Body : body 
      //   }).then(
      //     message => alert(message)
      //   );

         setTimeout(() => {
            name.value = email.value   = text.value =   '' ;aa.value = '';
         }, 200 ) ;
         danger.style.display = 'none' ;
         succes.style.display = 'block' ;
      }

      setTimeout( () => {
         danger.style.display = 'none' ;
         succes.style.display = 'none';
      } , 2000 ) ;
};