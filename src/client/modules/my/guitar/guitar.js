import { LightningElement, track } from 'lwc';
const STANDARDFRET = {i:0, s: 0, f:0}; //id, string, fret
const STANDARDFRETBOARD = {
    strings: 6,
    frets: 12
};

export default class Fretboard extends LightningElement {
    @track boxes = [];
    @track boardCreated = false;
    @track fretBoard = {};

    connectedCallback(){
        if(!this.boardCreated){
            this.generateBoard();
            this.boardCreated = true;
        }
    }

    generateBoard(){
        debugger;
        this.fretBoard = Object.assign({}, STANDARDFRETBOARD);
        let allBoxes = [];
        for(let i=1; i<=this.fretBoard.strings; i++){
            console.log('i=>' + i);
            for(let j=1; j<=this.fretBoard.frets; j++){
                console.log('j=>' + j);
                let each = this.generateEachFret(i,j);
                allBoxes.push(each);
                this.boxes = [...allBoxes];
            }
        }
    }

    generateEachFret(stringNumber, fret){
        let each = Object.assign({}, STANDARDFRET);
        each.i = stringNumber + '' + fret;
        each.s = stringNumber;
        each.f = fret;
        each.class = 'box ';
        
        if(fret%12 === 0) each.class += '_12th';
        else if(fret%9 === 0) each.class += '_9th';
        else if(fret%7 === 0) each.class += '_7th';
        else if(fret%5 === 0 && fret%10 !== 0) each.class += '_5th';
        else if(fret%3 === 0 && fret%6 !== 0) each.class += '_3rd';
        
        // switch(i){
        //     case i%12 === 0:
        //         f.class = '_12th';
        //         break;
        //     case i%9 === 0:
        //         f.class += '_9th';
        //         break;
        //     case i%7 === 0:
        //         f.class += '_7th';
        //         break;
        //     case i%5 === 0:
        //         f.class += '_5th';
        //         break;
        //     case i%3 == 0:
        //         f.class += '_3rd';
        //         console.log('hi' + i%12);
        //         break;
        //     default:
        //         break;
        // }
        // f.class = 'box ' + f.class;
        return each;
    }
}
