function printPaths(i: number, j: number, rows: number, columns: number, psf: string) : void {

    if(i == rows && j == columns){
        console.log(psf);
        return;
    }
    if(i > rows || j > columns) return;

    //If I go Horizontally
    printPaths(i, j+1, rows, columns, psf+"H");

    //If I go vertically
    printPaths(i+1, j, rows, columns, psf+"V"); 
}

printPaths(1, 1, 3, 4, "");



function countPaths(i: number, j: number, rows: number, columns: number): number {

    if(i == rows && j == columns) return 1;
    if(i>rows || j>columns) return 0;

    //horizontal
    let hori = countPaths(i, j+1, rows, columns);
    //vertical
    let vertical = countPaths(i+1, j, rows, columns);

    return hori+vertical;
}

console.log(countPaths(1, 1, 3, 4));