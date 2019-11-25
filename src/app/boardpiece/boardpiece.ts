export class BoardPiece {

    public row: number;

    public column: number;

    public adjacentCount = 0; 

    public hasBomb = false;
    
    public clicked = false;
    
    constructor(row: number, column: number) {
        
        this.row = row;

        this.column = column;
    }

}
