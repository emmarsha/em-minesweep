export class GamePiece {

    public row: number;

    public column: number;

    public adjacentCount = 0; 

    public hasBomb = false;

    public triggeredBomb = false;
    
    public clicked = false;
    
    public flagged = false;
    
    constructor(row: number, column: number) {
        
        this.row = row;

        this.column = column;
    }

}
