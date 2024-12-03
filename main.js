let input = document.getElementById("input");
let btn = document.querySelector(".btn");
let text = document.querySelector(".text")

/*btn.onclick == '' => th emesseg appers */
btn.onclick = function(){
    if(input.value.length === 0){
        alert("Enter Message ?!");
    }
    else{
        text.innerHTML +=`
        <div class="msg">
        <span class="line">${input.value}</span>
        <button class="delete"><ion-icon name="trash-outline"></ion-icon></button>
        </div>
        `;
        text.style.display = 'block';
        clear();
        line();
        input.value = '';
        
    };
}



function clear(){
    document.querySelectorAll(".delete").forEach(button =>{
        button.onclick = function () {
            this.parentElement.remove();
        }
    });
}

function line(){
    document.querySelectorAll(".line").forEach(line =>{
        line.onclick = function(){
            this.classList.toggle("strikethrough");
        }
    })
}
