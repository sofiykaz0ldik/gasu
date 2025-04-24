const array = [
    ["WBWBWBWB"],
    ["BWBWBWBW"],
    ["BWBWBWBW"],
    ["BWWBWBWW"],
    ["WBWBWBWB"],
    ["WBWBWBWB"],
    ["WBWBWBWB"],
    ["WBWBWBWB"],
]
const Chessboard = (board) => {
    const trueboard1 = "WBWBWBWB";
    const trueboard2 = "BWBWBWBW";

    let find = true;
    for (let row of board){
        let rowStr = row[0];
        let findV = false;
    
        for (let i = 0; i < rowStr.length; i++){
            const shift = rowStr.slice(i) + rowStr.slice(0,i);
            if (shift === trueboard1 || shift===trueboard2){
                findV = true;
            }
        }
    if(!findV) find = false;
    }
    return find;
}
console.log(Chessboard(array))