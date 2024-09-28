const inputBox = document.getElementById('input-box')
const buttonBox = document.getElementById('button-box')
const listContainer = document.getElementById('list-container')

buttonBox.addEventListener('click', addTask = () => {
    if (inputBox.value === "") {
    console.log('set');
   } else {
       const task = document.createElement('li')
       task.innerHTML = inputBox.value
       listContainer.appendChild(task)

       const delTask = document.createElement('span')
       delTask.innerHTML = '\u00d7'
       task.appendChild(delTask)
   }
    inputBoxnputBox.value = ""
    saveTask()
})

listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle('checked')
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
    }

    saveTask()
})

saveTask = () => {
    localStorage.setItem('data', listContainer.innerHTML)
}
showTask = () => {
    listContainer.innerHTML = localStorage.getItem('data')
}
showTask()







































// const inputBox = document.getElementById("input-box")
// const buttonBox = document.getElementById("button-box")
// const listContainer = document.getElementById("list-container")

// buttonBox.addEventListener("click", addTask = () => {
//     if (inputBox.value === "") {
//     }else{
//         const task = document.createElement("li")
//         task.innerHTML = inputBox.value
//         listContainer.appendChild(task)

//         const xButton = document.createElement("span")
//         xButton.innerHTML = "\u00d7"
//         task.appendChild(xButton)
//     }
//     inputBox.value = ""

//     // saveTask()
// })

// listContainer.addEventListener("click", (e) => {
//     if (e.target.tagName === "LI") {
//         e.target.classList.toggle("checked")
//     } else if (e.target.tagName == "SPAN")(
//         e.target.parentElement.remove()
//     )
//     // saveTask()
// })

// const showTask = () => {
//     listContainer.innerHTML = localStorage.getItem("data")
// }
// showTask()

// const saveTask = () => {
//     localStorage.setItem("data", listContainer.innerHTML)
// }









































// const inputBox = document.getElementById("input-box")
// const buttonBox = document.getElementById("button-box")
// const taskContainer = document.getElementById("list-container")

// buttonBox.addEventListener("click", addTask = () => {
//     if (inputBox.value === "") {
//         alert("Enter Task")
//     } else {
//         const task = document.createElement("li")
//         task.innerHTML = inputBox.value
//         taskContainer.appendChild(task)

//         const x = document.createElement("span")
//         x.innerHTML = "\u00d7"
//         task.appendChild(x)
//     }

//     inputBox.value = ""
//     saveTask()
// })

// taskContainer.addEventListener("click", (e) => {
//     if (e.target.tagName === "LI") {
//         e.target.classList.toggle("checked")
//     } else if (e.target.tagName === "SPAN") {
//         e.target.parentElement.remove()
//     }
//     saveTask()
// })

// const saveTask = () => {
//     localStorage.setItem("data", taskContainer.innerHTML)
// }

// const showTask = () => {
//     taskContainer.innerHTML = localStorage.getItem("data")
// }
// showTask()




































// // CODE TEN
// const buttonBox = document.getElementById('button-box')
// const inputBox = document.getElementById('input-box')
// const listContainer = document.getElementById('list-container')

// buttonBox.addEventListener("click", addTask = () => {
//     const task = document.createElement('li')
//     task.innerHTML = inputBox.value
//     listContainer.appendChild(task)

//     const del = document.createElement('span')
//     del.innerHTML = "\u00d7"
//     task.appendChild(del)

//     inputBox.value = ""
//     // saveTask()
// });

// listContainer.addEventListener("click", (e) => {
//     if (e.target.tagName == "LI") {
//         e.target.classList.toggle("checked")
//     } else if (e.target.tagName == "SPAN") {
//         e.target.parentElement.remove()
//     }
//     // saveTask()
// })
// ;
// const showTask = () => {
//     listContainer.innerHTML =  localStorage.getItem('data')
// }
// showTask();

// const saveTask = () => {
//     localStorage.setItem('data', listContainer.innerHTML)
// };






































// // CODE NINE

// const inputBox = document.getElementById('input-box')
// const buttonBox = document.getElementById('button-box')
// const listContainer = document.getElementById('list-container')

// buttonBox.addEventListener('click', addTask = () => {
//     if (inputBox.value == "") {
//         console.log("fill-in the input box");
//         alert("fill-in the input box");
//     } else {
//         const li = document.createElement('li')
//         li.innerHTML = inputBox.value
//         listContainer.appendChild(li)

//         const span = document.createElement('span')
//         span.innerHTML = '\u00d7'  // represents an x ( \u >> unicode)  ( 00d7 >> x)
//         li.appendChild(span)
//     }

//     inputBox.value = ""
//     saveData()
// })

// listContainer.addEventListener('click', (evt) => {
//     if (evt.target.tagName == "LI") {
//         evt.target.classList.toggle('checked')
//     } else if (evt.target.tagName == "SPAN") {
//         evt.target.parentElement.remove()
//     }
//     saveData()
// })

// const saveData = () => {
//     localStorage.setItem('data', listContainer.innerHTML)
// }

// const showTask = () => {
//     listContainer.innerHTML = localStorage.getItem('data')
// }
// showTask()




































// CODE EIGTH
// const buttonBox = document.getElementById('button-box')
// const inputBox = document.getElementById('input-box')
// const listContainer = document.getElementById('list-container')

// buttonBox.addEventListener('click', addTask = () => {
//     if (inputBox.value == "") {
//         alert("Input field is EMPTY!")
//     } else {
//         const li = document.createElement('li')
//         li.innerHTML = inputBox.value
//         listContainer.appendChild(li)

//         const span = document.createElement('span')
//         span.innerHTML = '\u00d7'
//         li.appendChild(span)
//     }
//     inputBox.value = ""
//     saveData()
// })

// listContainer.addEventListener('click', (event) => {  // you could use (event), (evt) or (e) which are all common variable name for the event object
//     if (event.target.tagName == "LI") {
//         event.target.classList.toggle('checked')
//     } else if (event.target.tagName == "SPAN") {
//         event.target.parentElement.remove()
//     }
//     saveData()
// })

// const saveData = () => {
//     localStorage.setItem('data', listContainer.innerHTML)
// }

// const showData = () => {
//     listContainer.innerHTML = localStorage.getItem('data')
// }
// showData()






































// // CODE SEVEN
// const inputBox = document.getElementById('input-box')
// const buttonBox = document.getElementById('button-box')
// const listContainer = document.getElementById('list-container')

// buttonBox.addEventListener('click', addTask = () => {
//     if (inputBox.value == "") {
//         alert("nah!")
//     } else {
//         const li = document.createElement("li")
//         li.innerHTML = inputBox.value
//         listContainer.appendChild(li)

//         const span = document.createElement("span")
//         span.innerHTML = '\u00d7'
//         li.appendChild(span)
//     }
//     inputBox.value = ""
//     saveData()
// })

// listContainer.addEventListener('click', (e) => {
//     if (e.target.tagName == "LI") {
//         e.target.classList.toggle('checked')
//     }
//     else if (e.target.tagName == "SPAN") {
//         e.target.parentElement.remove()
//     }
//     saveData()
// })

// const saveData = () => {
//     localStorage.setItem('data', listContainer.innerHTML)
// }

// const showTask = () => {
//     listContainer.innerHTML = localStorage.getItem('data')
// }
// showTask()



































// // CODE SIX
// const inputBox = document.getElementById('input-box')
// const buttonBox = document.getElementById('button-box')
// const listContainer = document.getElementById('list-container')

// buttonBox.addEventListener('click', addTask = () => {
//     if (inputBox.value == "") {
//         alert("Add a to-do")
//     } else {
//         const li = document.createElement("li")
//         li.innerHTML = inputBox.value
//         listContainer.appendChild(li)

//         const span = document.createElement("span")
//         span.innerHTML = "\u00d7"
//         li.appendChild(span)
//     }
//     inputBox.value = ""
//     saveData()
// })

// listContainer.addEventListener('click', (e) => {
//     if (e.target.tagName == "LI") {
//         e.target.classList.toggle("checked")
//     } else if (e.target.tagName == "SPAN") {
//         e.target.parentElement.remove()
//     }
//     saveData()
// })

// saveData = () => {
//     localStorage.setItem('data', listContainer.innerHTML)
// }

// showData = () => {
//     listContainer.innerHTML = localStorage.getItem('data')
// }
// showData()


































// // CODE FIVE
// const inputBox = document.getElementById('input-box')
// const buttonBox = document.getElementById('button-box')
// const listContainer = document.getElementById('list-container')

// buttonBox.addEventListener('click', setTask = () => {
//     if (inputBox.value == "") {
//         alert("FILL-IN THE BOX")
//     } else {
//         const li = document.createElement('li')
//         li.innerHTML = inputBox.value
//         listContainer.appendChild(li)

//         const span = document.createElement('span')
//         span.innerHTML = '\u00d7'
//         li.appendChild(span)
//     }
//     inputBox.value = ""
//     saveData()
// })

// listContainer.addEventListener('click', (e) => {
//     if (e.target.tagName == "LI") {
//         e.target.classList.toggle("checked")
//     } else if (e.target.tagName == "SPAN") {
//         e.target.parentElement.remove()
//     }
//     saveData()
// })

// saveData = () => {
//     localStorage.setItem('data', listContainer.innerHTML)
// }

// showTask = () => {
//     listContainer.innerHTML = localStorage.getItem('data')
// }
// showTask()


































// // CODE FOUR
// const inputBox = document.getElementById('input-box');
// const buttonBox = document.getElementById('button-box');
// const listContainer = document.getElementById('list-container');

// buttonBox.addEventListener('click', addTask = () => {
//     if (inputBox.value == "") {
//         alert("filli-in")
//     } else {
//         const li = document.createElement('li')
//         li.innerHTML = inputBox.value
//         listContainer.appendChild(li)

//         const span = document.createElement("span")
//         span.innerHTML = "\u00d7"
//         li.appendChild(span)
//     }
//     inputBox.value = ""
//     saveData()
// })

// listContainer.addEventListener('click', (e) => {
//     if (e.target.tagName == "LI") {
//         e.target.classList.toggle("checked")
//     } else if (e.target.tagName == "SPAN") {
//         e.target.parentElement.remove()
//     }
//     saveData()
// })

// saveData = () => {
//     localStorage.setItem('data', listContainer.innerHTML)
// }

// displayTask = () => {
//     listContainer.innerHTML = localStorage.getItem('data')
// }
// displayTask()




































// CODE THREE
// const inputBox = document.getElementById('input-box')
// const buttonBox = document.getElementById('button-box')
// const listContainer = document.getElementById('list-container')

// buttonBox.addEventListener('click', addTask = () => {
//     if (inputBox.value == "") {
//         alert("EMPTY")
//     } else {
//         const li = document.createElement("li")
//         li.innerHTML = inputBox.value
//         listContainer.appendChild(li)
//         const span = document.createElement("span")
//         span.innerHTML = "\u00d7"
//         li.appendChild(span)
//     }

//     inputBox.value = ""
//     saveData()
// })

// listContainer.addEventListener('click', (e) => {
//     if (e.target.tagName == "LI") {
//         e.target.classList.toggle("checked")
//     } else if(e.target.tagName = "SPAN"){
//         e.target.parentElement.remove()
//     }
//     saveData()
// })

// saveData = () => {
//     localStorage.setItem('data', listContainer.innerHTML)
// }

// showTask = () => {
//     listContainer.innerHTML = localStorage.getItem('data')
// }
// showTask()










































// // CODE TWO
// const inputBox = document.getElementById('input-box');
// const buttonBox = document.getElementById('button-box');
// const listContainer = document.getElementById('list-container')

// buttonBox.addEventListener('click', addTask = () => {
//     if (inputBox.value == "") {
//         alert("THE INPUT SHOULD NOT BE LEFT EMPTY !!");
//     } else {
//         const li = document.createElement("li");
//         li.innerHTML = inputBox.value;
//         listContainer.appendChild(li);

//         const span = document.createElement("span");
//         span.innerHtml = "\u00d7";
//         li.appendChild(span);
//     }
//     inputBox.value = ""
//     saveData();
// });

// // appendChild >> ??
// // \u00d7  >> ??


// listContainer.addEventListener('click', (e) => {
//     if (e.target.tagName == "LI") {
//         e.target.classList.toggle("checked");
//         saveData();
//     } else if (e.target.tagName = "SPAN") {
//         e.target.parentElement.remove();
//         saveData();
//     }
// }, false);

// // e >> mouseevent ??
// // .target >> Returns the object to which event is dispatched (its target).
// // .toggle >> ??
// // Why must the "LI" and "SPAN" of a condition of an e.target.tagName be in capital


// const saveData = () => {
//     localStorage.setItem("data", listContainer.innerHTML)
// }

// const showTask = () => {
//     listContainer.innerHTML = localStorage.getItem("data")
// }
// showTask()








































// CODE ONE
// const inputBox = document.getElementById("input-box");
// const buttonBox = document.getElementById("button-box");
// const listContainer = document.getElementById("list-container");

// buttonBox.addEventListener("click", addTask);
// function addTask() {
//     if (inputBox.value == "") {
//         alert("You must write something!");

//     } else {
//         let li = document.createElement("li");
//         li.innerHTML = inputBox.value;
//         listContainer.appendChild(li);

//         let span = document.createElement("span");
//         span.innerHTML = "\u00d7";  // \u00d7 ??
//         li.appendChild(span);
//     }
//     inputBox.value = "";
//     saveData();
// }

// listContainer.addEventListener("click", function (e) {
//     if (e.target.tagName == "LI") {
//         e.target.classList.toggle("checked");
//         saveData();
//     } else if (e.target.tagName == "SPAN") {
//         e.target.parentElement.remove();
//         saveData();
//     }
// }, false);

// function saveData() {
//     localStorage.setItem("data", listContainer.innerHTML);  // setItem passes two argument ("data") >> the type of event && (, liContainer.innerHTML) >> the event that should be passed
// }

// function showTask() {
//     listContainer.innerHTML = localStorage.getItem("data");
// }
// showTask();