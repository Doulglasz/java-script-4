// exercicio 1
    function mostrarMensagem(){
        console.log("Bem-vindo ao estudo de funções em JavaScript!");
    }

    mostrarMensagem();


// exercicio 2
    function somaSimples(a, b){
        a = 4;
        b = 6;
        let resultado = a + b; 
        return resultado;
    }

    console.log(somaSimples());


// exercicio 3
    function imprimirNome(){
        const nome = "Gustavo Mayer";
        console.log(nome)
    }

    imprimirNome();


// exercicio 4
    function quadrado(num){
        num = prompt("Digite um numero:");
        num = num ** 2;
        return num;
    }

    console.log(quadrado());


// exercicio 5
    function converterParaCelsius(f, c){
        f = prompt("Digite a temperatura em Fahrenheit:");
        c = (f - 32) * 5/9;
        return c;
    }

    console.log(converterParaCelsius(), "C°");


// exercicio 6
    function concatenaPalavras(st1, st2, conca){
        st1 = prompt("Digite uma palavra:");
        st2 = prompt("Digite outra palavra:");
        conca = st1 + " " + st2;
        return conca;
    }

    console.log(concatenaPalavras());


// exercicio 7
    function calcularMedia(nota1, nota2, nota3, media){
        nota1 = Number(prompt("Digite a 1º nota:"));
        nota2 = Number(prompt("Digite a 2º nota:"));
        nota3 = Number(prompt("Digite a 3º nota:"));

        media = (nota1 + nota2 + nota3) / 3;
        return console.log(media);
    }

    calcularMedia();
    

// exercicio 8
    function desconto(valorProduto, desconto, valor){
        valorProduto = Number(prompt("Digite o valor do produto:"));
        desconto = Number(prompt("Digite o desconto recebido (%):"));

        valor = valorProduto - (valorProduto * desconto / 100);
        return valor;
    }

    console.log(desconto());


// exercicio 9
    function saudacaoPersonalizada(nome){
        nome = prompt("Digite seu nome:");
        console.log("Olá, " + nome + "! Seja bem-vindo.");
    }

    saudacaoPersonalizada();


// exercicio 10
    const multiplicar = function(a, b){
        a = Number(prompt("Digite o 1º numero:"));
        b = Number(prompt("Digite o 2º numero:"));
        let resultado = a * b;
        return resultado;
    }

    console.log(multiplicar());


// exercicio 11
    const dividir = function(a, b){
        a = Number(prompt("Digite o 1º numero:"));
        b = Number(prompt("Digite o 2º numero:"));
        let resultado = a / b;
        return resultado;
    }

    console.log(dividir());


// exercicio 12
    const dobro = (num) => {
        num = Number(prompt("Digite um numero:"));
        return num * 2;
    }

    console.log(dobro());


// exercicio 13
    const ehPar = (num) => {
        num = Number(prompt("Digite um numero:"));
        return num % 2 === 0;
    }

    console.log(ehPar());


// exercicio 14
    function calculadora(a, b){
        a = Number(prompt("Digite o 1º numero:"));
        b = Number(prompt("Digite o 2º numero:"));

        function soma(x, y){
            return x + y;
        }

        function subtrair(x, y){
            return x - y;
        }

        console.log("Soma:", soma(a, b));
        console.log("Subtração:", subtrair(a, b));
    }

    calculadora();


// exercicio 15
    function operacoesAvancadas(a, b){
        a = Number(prompt("Digite o 1º numero:"));
        b = Number(prompt("Digite o 2º numero:"));

        function produto(x, y){
            return x * y;
        }

        function potencia(x, y){
            return x ** y;
        }

        return {
            produto: produto(a, b),
            potencia: potencia(a, b)
        };
    }

    console.log(operacoesAvancadas());