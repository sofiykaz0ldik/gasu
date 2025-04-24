const array = [
    ["+Миша"], ["+Олег"],["+Антон"],
    ["+Таня"], ["-Миша"],
    ["Таня:Как дела?"],
    ["Олег:Все хорошо!"],
    ["-Таня"], ["+Толя"],
    ["Толя:Я что-то пропустил?"]
];
const chatTraffic = (actions) => {
    const onlineUsers = new Set();   
    let traffic = 0;  
    for (let i = 0; i < actions.length; i++) {
        const action = actions[i][0]; 
        const userName = action.slice(1);
        if (action[0] === "+") {
            onlineUsers.add(userName);
        } else if (action[0] === "-") {
            onlineUsers.delete(userName);
        } else {
            const [user, message] = action.split(":");  
            const messageLength = message.length; 
            const userCount = onlineUsers.size - 1;  
            traffic += messageLength * userCount;  
        }
    }
    return traffic;  
}
console.log(chatTraffic(array));  
