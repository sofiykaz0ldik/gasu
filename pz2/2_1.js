Queue = {
    commands:[
        {id: "1-command", command: "go"},
        {id: "2-command", command: "rotate"},
        {id: "3-command", command: "push"},
        {id: "4-command", command: "pop"},
        {id: "5-command", command: "reverse"}
    ],
    get property(){
        var firstCommand = Queue.commands[0].command;
        Queue.commands.shift(); 
        for (var i = 0; i < Queue.commands.length; i++) {
            Queue.commands[i].id = (i + 1) + "-command";
        }
        return firstCommand;
        },
    set property(command){
        var newId = Queue.commands.length + 1;  
        Queue.commands.push({ id: newId + "-command", command: command });
        },
    showQueue:function(){
        var alphabet = "abcdefgh";
        for (var i = 0; i < Queue.commands.length; i++) {
            console.log(alphabet[i] + "." + Queue.commands[i].command);
        }
    }
};
console.log(Queue.property); 
Queue.property = "run";
Queue.showQueue();
    