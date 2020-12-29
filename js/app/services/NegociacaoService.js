class NegociacaoService {

  obterNegociacoesDaSemana(callback) {
    let xhr = new XMLHttpRequest();

    /* configurações */
    xhr.open('GET', 'negociacoes/semana');

    // 0: requisição ainda não iniciada

    // 1: conexão com o servidor estabelecida

    // 2: requisição recebida

    // 3: processando requisição

    // 4: requisição está concluída e a resposta está pronta

    xhr.onreadystatechange = () => {

      if(xhr.readyState === 4) {
         if(xhr.status === 200) { 
           
          callback(null, JSON.parse(xhr.responseText)
          .map(item => new Negociacao(new Date(item.data), item.quantidade, item.valor)));

         } else {
           console.log(xhr.responseText);
           callback('Não foi possivel obter as negociacoes', null);
           
         }
      }
    }

    /* executa */
    xhr.send();
  }
}