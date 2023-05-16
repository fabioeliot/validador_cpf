console.log('Validador CPF carregado');

function validaCPF (cpf){
    //console.log(cpf.length);
    if(cpf.length != 11){
        return false;
    }
    else {
        var numeros = cpf.substring(0, 9);//pega de 1 a 9 caracteres
        var digitos = cpf.substring(9);//pega apenas os dois ultimos caracteres
        //console.log("numeros o cpf" + numeros)serve para quebrar os 9 numeros
        //console.log("digito do cpf" + digitos) serve para os ultimos 2 numeros
        
        var soma = 0;
        for (var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i; //retorna a posição da string na lista
        }
            console.log(soma);
            //executa uma operação e pergunta se ela é menor que 2 se for positivo executa o que está até os dois pontos se não for utiliza o que está apos os dois pontos chamado de operadpr ternario substituto de if e else
            var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11); 
            // perguntar se o meu resultado é diferente dos digitos charat, posição 0
           
              //Validação do primeiro digito
            if(resultado != digitos.charAt(0)) {
                return false;
            }
            //console.log(digitos.toString().charAt(0) + "é a primeira posição da variavel soma") lembrar de passar para string e apenas para mostarr destaque de posição

            soma = 0; //reseta a variavel como já foi declarado var não precida declarar depois
            numeros = cpf.substring(0,10); // primeiro caracter até a 1 digito verificador

            // Validação do segundo digito
            for (var k = 11; k > 1 ; k --) {
                soma+= numeros.charAt(11- k) * k
            }

            resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);
            
            if(resultado != digitos.charAt(1)) {
                return false;
            }
        
        return true;}
        
}

function validacao () {
    console.log('Iniciando Validação CPF');
    //serve para ocultar a resposta de certo ou erro e limpar
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';

    var cpf = document.getElementById('cpf_digitado').value;

    var resultadoValidacao = validaCPF(cpf);

    if (resultadoValidacao) {
        document.getElementById('success').style.display = 'block';
    }

    else {
        document.getElementById('error').style.display = 'block';
    }
    



}