const botaoLogin = document.getElementById('botaoLogin')


async function realizarLogin(registro,senha){
    try {
        const usuarios = await fetch('http://localhost:3333/busca/usuarios')

        const dados = await usuarios.json()  

        for (let i = 0; i < dados.length; i++) {
            if(registro == registro_recebido && senha == senha_recebida ){
                alert('tudo certo cria')
            }
            else{
                alert('errado')
            }
        }
    } catch (error) {
        console.error(error)
    }
}