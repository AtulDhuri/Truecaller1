function checkname()
{
 var name=document.getElementById( "UserName" ).value;
  
 if(name)
 {
  $.ajax({
  type: 'post',
  url: 'http://asquareholidays.com/checkdata1.php',
  data: {
   user_name:name,
  },
  success: function (response) {
   $( '#name_status' ).html(response);
   if(response=="OK") 
   {
    return true;  
   }
   else
   {
    return false; 
   }
  }
  });
 }
 else
 {
  $( '#name_status' ).html("");
  return false;
 }
}

function checkemail()
{
 var unumber=document.getElementById( "UserNumber" ).value;
  
 if(unumber)
 {
  $.ajax({
  type: 'post',
  url: 'http://asquareholidays.com/checkdata1.php',
  data: {
   user_number:unumber,
  },
  success: function (response) {
   $( '#number_status' ).html(response);
   if(response=="OK") 
   {
    return true;  
   }
   else
   {
    return false; 
   }
  }
  });
 }
 else
 {
  $( '#number_status' ).html("");
  return false;
 }
}

function checkall()
{
 //var namehtml=document.getElementById("name_status").innerHTML;
 var emailhtml=document.getElementById("number_status").innerHTML;

 if((emailhtml)=="OK")
 {
  return true;
 }
 else
 {
  return false;
 }
}