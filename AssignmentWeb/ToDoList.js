$(document).ready(function(){
   
    $('#AddButton').click(function(){

        var title = document.getElementById('title').value;
        var Deadline = document.getElementById('Deadline').value;
        var arrayPriority = document.getElementsByName('priority');
        var Priority = '';  
        for(i=0;i<arrayPriority.length;i++){
       	  if(arrayPriority[i].checked) { Priority=arrayPriority[i].value; } }
        var check  = $('<input type="checkbox" id="cheak"></input>');
        
        if(title == '' || Deadline == '' || Priority == '' )
        {alert('Please fill all field');}
        else{
        var listItem = $('<li></li>').text(title + ' | ' + Deadline).append(check);

        if(Priority == "High"){
            var listItem = $('<li class="high"></li>').text(title + ' | ' + Deadline).append(check);
       }
       else if(Priority == "Mediam"){
          var listItem = $('<li class="mediam"></li>').text(title + ' | ' + Deadline).append(check);
       }
       else if (Priority == "Low"){
           var listItem = $('<li class="low"></li>').text(title + ' | ' + Deadline).append(check);
       }

        var newDate = new Date();

        if(Date.parse(newDate) > Date.parse(Deadline)){
            var img ='<img src="Xicon.png" alt="passed date icon"  >';
            listItem.prepend(img);
           }
           else{
             newDate.setDate(newDate.getDate() + 3);
             if(Date.parse(newDate)  >= Date.parse(Deadline)){
               var img ='<img src="warningIcon.png" alt="Warning icon" >';
               listItem.prepend(img); }
           }

         
        $('#ToDoList').append(listItem);

        }
    });

    $('#DoneButton').click(function(){

     if($(':checkbox:checked').length == 0)
        { alert('Please select a task');}
     else{
       var CheckedBox = $(":checkbox:checked");
       CheckedBox.parent().remove(); 
       CheckedBox.each(function(){
        var donelistItem = $('<li class="checked"></li>').text($(this).parent().text());
        var img ='<img src="checkIcon.png" alt="checked icon">';
        donelistItem.prepend(img);
        $('#completedTasks').append(donelistItem);
       });

     }

    });


    var d = new Date();
        var month = d.getMonth()+1;
        var day = d.getDate();
        var CurrentDate = d.getFullYear() + '/' +
        (month<10 ? '0' : '') + month + '/' +
        (day<10 ? '0' : '') + day;
    document.getElementById("currentDate").innerHTML = CurrentDate;


});