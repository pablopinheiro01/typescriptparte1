//mascaramos o problema de compilação do uso do jquery
//declare var $: any;
//o codigo acima foi substituido pela instalação de types do typescript garantindo o uso de bibliotecas na linguagaem
// só é utilizado o declare var no caso de nao existir um type para a biblioteca que queremos utilizar

//definindo que a View vai trabalhar com o tipo T generico
abstract class View<T>{

    //o atributo definido como private garante que não esta relaxado no encapsulamento e pode ser acessado atraves
    //do generics implementado na classe pai
    private _elemento: JQuery;

    constructor(selector: string){
        this._elemento = $(selector);
    }

    update(model: T ){
        this._elemento.html(this.template(model));
    }

    /*template(model: T) : string{
        throw new Error("Voce deve implementar o metodo template!!!");
    }*/
    //vou colocar o template como metodo abstrato para avisar o desenvolvedor em tempo de compilação
    abstract template(model: T): string;

}