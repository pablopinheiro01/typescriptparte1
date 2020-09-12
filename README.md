# typescriptparte1

O Typescript ajuda a resolver uma serie de problemas de compilação 

É uma linguagem criada pela microsoft sendo um superset do ecmascript 2015 (javascript nova ES)

- para instalar o type script é preciso inicializar o projeto no npm
npm init (enter)

npm install typescript@2.3.2 --save-dev

-- O uso do Node.js não é opcional, pois o compilador depende desta plataforma para funcionar, inclusive é baixado pelo seu gerenciador de pacotes npm. Além disso, o código TypeScript precisa ser traduzido/convertido para um código em ECMASCRIPT para que seja entendido pelo navegador. Lembre-se que apenas ECMASCRIPT é suportado pelo navegador.

-- Para compilar o codigo typescript
npm run compile

-- automatizando a compilação
-- configurado no package.json 
```
    "start":"tsc -w"
```
comando: npm start

- por padrao em um projeto que esta iniciando é favoravel voce desaabilitar a tipagem "any" implicita no fonte, porem se é migração de um projeto javascript legado, manter a obrigatoriedade do tipo "any" desabilitada facilita no funcionamento do codigo.
