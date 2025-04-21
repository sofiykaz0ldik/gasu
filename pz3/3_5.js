const	Array = [
    ["WBWBWBWB"],
    ["BWBWBWBW"],
    ["BWBWBWBW"],
    ["BWWBWBWW"],
    ["WBWBWBWB"],
    ["WBWBWBWB"],
    ["WBWBWBWB"],
    ["WBWBWBWB"],
]
const chessboard = (board) => {
    const trueboard1 = "WBWBWBWB";
    const trueboard2 = "BWBWBWBW";
    for (var i=0; i< board.length; i++){
        const row = board[i][0];
    
        if (i=== 0 && row[0] !== "W") return false;
        var find = false;
        for (var j = 0; j < 8; j++){
            const shift = row.slice(j) + row.slice(0,j);
            if (shift === trueboard1 || shift===trueboard2){
                find = true;
            }
        }  
        if (!find) return false;
    }
    return true;
}
console.log(chessboard(Array))