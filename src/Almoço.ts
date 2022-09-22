class Almoco{
     private proteína: string;
     private carboidrato: string;

     public get refeição(){
        return `${this.proteína} com ${this.carboidrato}`;
     }

     public set carne(proteína: string){
        if(proteína != ''){
            this.proteína = proteína;
        }
     }

     constructor(proteína: string, carboidrato: string){
        this.proteína = proteína;
        this.carboidrato = carboidrato;
     }
}
export{Almoco};