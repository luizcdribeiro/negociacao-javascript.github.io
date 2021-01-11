// DAO =  Data Acess Object

class NegociacaoDao {
  
  constructor(connection) {

    this._connection = connection;
    this._store = 'negociacoes';
  }

  adiciona(negociacao) {

    return new Promise((resolve, reject) => {

      let request = this._connection
        .transaction([this._store], 'readwrite')
        .objectStore(this._store)
        .add(negociacao);
      
      request.onsucess = e => {

        resolve()

      };

      request.onerror = e => {

        console.log(target.error);
        reject('Não foi possivel adicionar a negociacao')

      }



    })
  }


}