function btclick(){
    if(inp.value==""){
        alert("Please Enter Task Name First..!")
    }
    else{
        const task=document.getElementById('inp').value
        var parentdiv = document.getElementById('hiddentask')
    
    
    
        // create new div
        var Newdiv = document.createElement('div');
        var Newdiv2 = document.createElement('div');
        var edit=document.createElement('button')
        var remove=document.createElement('button')
    
    
    
    
        remove.style.width = "70px"
        remove.style.marginLeft = "400px"
        edit.style.marginLeft = "10px"
        edit.style.width = "70px"
        Newdiv.style.marginTop = "20px"
        Newdiv.style.border = "1px solid black"
    
        Newdiv.style.backgroundColor="white"
        Newdiv.style.padding="15px"
        Newdiv.style.borderRadius="10px"
        Newdiv.style.color="black"
        Newdiv.style.fontSize="17px"
        remove.style.borderRadius = "50px"
        edit.style.borderRadius = "50px"
        Newdiv.style.boxShadow = "5px 5px 5px gray"
    
    
    
    
    
    
    // assign values to div
        Newdiv.textContent = task;
        edit.innerHTML=`<i class="fa-regular fa-pen-to-square fa-beat" style="color: #11ff00;"></i>`
        remove.innerHTML=`<i class="fa-regular fa-trash-can fa-beat" style="color: #ff0000;"></i>`
    
        edit.onclick = function(){
            const Message=prompt("Enter new name")
            Newdiv.textContent=Message
            Newdiv.appendChild(Newdiv2)
            Newdiv2.appendChild(remove)
            Newdiv2.appendChild(edit)
        }
    
        remove.onclick = function(){
        Newdiv.parentNode.removeChild(Newdiv)
    };
       
    
     
        parentdiv.appendChild(Newdiv)
        Newdiv.appendChild(Newdiv2)
        Newdiv2.appendChild(remove)
        Newdiv2.appendChild(edit)
    
        function clear(){
            inp.value =""
        }
        clear()

    }
 
  

       
        
    }

    




