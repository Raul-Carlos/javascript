let amigo = {nome: 'José',
sexo: 'M',
peso: 85.4,
engodar(p=0) {
    console.log('Engordou')
    this.peso += p
}}
amigo.engodar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}`)