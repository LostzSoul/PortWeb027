var num = 0;

function postFunction()
{
    num++;
   if(num ==1)
   {
        var thetext = document.getElementById("text1").value;
        var thebox = document.getElementById("topic1");
        thebox.innerText = "" +thetext;
        
   }
   else if(num == 2)
   {
        var thetext = document.getElementById("text1").value;
        var thebox = document.getElementById("comment1");
        thebox.innerText = "" +thetext;
       
   }
   else
   {    
        var thetext = document.getElementById("text1").value;
        var thebox = document.getElementById("comment2");
        thebox.innerText = "" +thetext;
       
   }
  

}
function clearFunction()
{
    var thebox = document.getElementById("topic1");
    var thebox2 = document.getElementById("comment1");
    var thebox3 = document.getElementById("comment2");
    thebox.innerText = "";
    thebox2.innerText = "";
    thebox3.innerText = "";
    num = 0;
}