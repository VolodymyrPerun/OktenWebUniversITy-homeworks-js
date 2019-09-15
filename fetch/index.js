const btn = document.getElementsByTagName("button")[0];

btn.onclick = () =>{
    fetch("https://jsonplaceholder.typicode.com/users")
        .then (users =>{
            console.log(users);
            return users.json();
        })
        .then(jsonUsers =>{
            console.log(jsonUsers);
            divBuild(jsonUsers);

        })
        .catch(reason =>{
            console.log(reason);
        })


}


function divBuild (user){
    for (let i=0;i<user.length;i++){
        let myDiv = document.createElement("div");
        myDiv.innerText = `${user[i].name}`;
        myDiv.style.backgroundColor = "lightblue";
        myDiv.style.margin = "25px";
        document.body.appendChild(myDiv);
    }
}