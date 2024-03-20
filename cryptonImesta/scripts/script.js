function start(option){

     var input = document.getElementById("texto").value.trim();    

    if (!validation(input)){
        alert("Digite algum texto.");
    }else {
        var str = normalizeStr(input);
        select(str, option);
    }
}

function validation(str) {

    return  typeof str === 'string' && str !== '';
}

function normalizeStr(str){

    // Remover acentos da string
    str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // Converter todas as letras para minúsculas e remover caracteres especiais
    str = str.toLowerCase().replace(/[^a-z ]/g, "");

    return str;
}

function select(str, option){

    if (option == 1){

        crypto(str);

    } else if (option == 2) {

        desCrypto(str)        
    }

}

function desCrypto(str) {

    //var deCryptoStr = document.getElementById("texto").value;
    var deCryptoStr = str;

    const crypto = ["ai", "enter", "imes", "ober", "ufat"];
    const vogal = "aeiou";
    var textarea = document.getElementById("cryptoResult");
    var eraseArea = document.getElementById("texto");
    

    for (const word of crypto) {

        const regex = new RegExp(word, 'gi');
        deCryptoStr = deCryptoStr.replace(regex, vogal[crypto.indexOf(word)]);
    }
    textarea.value = deCryptoStr;
    eraseArea.value = "";   
}

function crypto(str) {
   
    var cryptoStr = str;
    // Array com as vogais e suas correspondentes sequências criptografadas
    const crypto = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };

    // Substituir cada vogal pela sequência criptografada correspondente
    var result = "";
    for (var i = 0; i < cryptoStr.length; i++) {
        var char = cryptoStr[i];
        if (crypto[char]) {
            result += crypto[char];
        } else {
            result += char;
        }
    }
    
    // Exibir o resultado no textarea com ID "cryptoResult"
    document.getElementById("cryptoResult").value = result;
    document.getElementById("texto").value = "";
}

function copyText(){
    // obter o elemento do textarea peo ID
    var textarea = document.getElementById("cryptoResult").value;

    if (!validation(textarea)) {
        alert("Não há texto a ser copiado")
        return 0;
    }
    // Copiar o texto para a área de transferência usando a API Clipboard
    navigator.clipboard.writeText(textarea)
        .then(() => {
            // Se a cópia for bem-sucedida, exibir um alerta de confirmação
            alert("Texto copiado para a área de transferência!");
        })
        .catch(err => {
            // Se ocorrer um erro ao copiar o texto, exibir uma mensagem de erro
            console.error('Erro ao copiar texto:', err);
            alert("Erro ao copiar texto. Por favor, tente novamente.");
        });
}
