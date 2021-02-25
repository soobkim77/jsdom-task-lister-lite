const inp = document.querySelectorAll('input')
const task = inp[0]
const submit = inp[1]


submit.addEventListener('click', handleSubmit )

function handleSubmit(e){
  e.preventDefault();
  console.log(task.value);
  let li = document.createElement('li');
  li.setAttribute("class", "lItem")
  li.textContent = task.value;
  let tasks = document.querySelector('#tasks');
  tasks.appendChild(li);
  let xButton = document.createElement('button');
  xButton.setAttribute("class", "delete");
  xButton.setAttribute("onclick", "handleRemove()")
  xButton.textContent = "X";
  li.appendChild(xButton);
}


function handleRemove(){
  let delButton = document.querySelectorAll(".lItem")
  for (let index = 0;index <delButton.length; index++){
    delButton[index].addEventListener("click", function(){
      console.log(delButton[index])
    });
    delButton[index].querySelector(".delete").addEventListener("click", function(){
      this.closest(".lItem").remove();
    });
  }}
  
  







