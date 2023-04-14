    const monsterContainer = document.getElementById("monster-container") 


    document.addEventListener("DOMContentLoaded", () => {
            fetch("http://localhost:3000/monsters")
            .then(response => response.json())
            .then(data => {
                console.log(data) 
            })
    })

    