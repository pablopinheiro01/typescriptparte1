class NegociacaoController {

    /* Essa implementação não levamos em consideração o uso do jQuery no projeto, no codigo logo abaixo utilizaremos essa famosa bibliteca
    private _inputData: HTMLInputElement ;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private _negociacoes: Negociacoes = new Negociacoes();
    private _negociacoesView: NegociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView("#mensagemView");

    constructor(){
        this._inputData = <HTMLInputElement> document.querySelector('#data');
        this._inputQuantidade = <HTMLInputElement> document.querySelector('#quantidade');
        this._inputValor = <HTMLInputElement> document.querySelector('#valor');
        this._negociacoesView.update(this._negociacoes);
    }    
    */

   private _inputData: JQuery ;
   private _inputQuantidade: JQuery;
   private _inputValor: JQuery;
   private _negociacoes: Negociacoes = new Negociacoes();
   private _negociacoesView: NegociacoesView = new NegociacoesView('#negociacoesView');
   private _mensagemView = new MensagemView("#mensagemView");

   constructor(){
       this._inputData = $('#data');
       this._inputQuantidade = $('#quantidade');
       this._inputValor = $('#valor');
       this._negociacoesView.update(this._negociacoes);
   } 



    adiciona(event: Event){
        event.preventDefault();

        const negociacao = new Negociacao(
            new Date(this._inputData.val().replace(/-/g, ',')),
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );
        
        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update("Negociacao adicionada com sucesso!!!");

        this._negociacoes.paraArray().forEach(negociacao => {
            console.log(negociacao.data);
            console.log(negociacao.valor);
            console.log(negociacao.volume);
        })

    }

}