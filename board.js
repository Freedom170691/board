const createBoard = (num) => {
    let board = '';
    for (let i = 1; i < num*num; i += 1) {
        if ((i % (num +1)) === 0) {
            board += '\n';
        } else if (i % 2 !== 0) {
            board += '██';
        } else {
            board += '  ';
        }
    }
    return board;
}

console.log(createBoard(8));