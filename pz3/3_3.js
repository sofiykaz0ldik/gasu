const stones = [
    ["A", "B", true], ["A", "C", true], ["B", "C", true],
    ["A", "D", true], ["B", "D", true], ["D", "C", true],
    ["E", "D", true], ["E", "B", true], ["A", "E", false],
    ["C", "E", false]
];
const sortStones = (stones) => {
    const AllStones = new Set();
    const LightStones = {}
    stones.forEach(([a, b, res]) => {
        AllStones.add(a);
        AllStones.add(b);
        if (res === true){
            if (LightStones[a] === undefined) 
                LightStones[a] = new Set();
            LightStones[a].add(b);} 
        else{
            if (LightStones[b] === undefined)
                LightStones[b] = new Set();
            LightStones[b].add(a)}
    });
    const all = [...AllStones]
    all.sort((st1, st2) => {
        const s1 = LightStones[st1]? LightStones[st1].size : 0;
        const s2 = LightStones[st2]? LightStones[st2].size : 0;
        return s2-s1;
    });
    return all;
}
console.log(sortStones(stones))