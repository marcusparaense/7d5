//PREMISSAS
//1 - LISTA DE COMPRAS DE ALIMENTOS NO MERCADO/FEIRA.
//2 - PERGUNTA SE USUARIO QUER COMPRAR ALIMENTO.
//3 - 3.1 - SE SIM, DIGITAR O ALIMENTO. 3.2 -SE NÃO, FECHAR E IMPRIMIR A LISTA.
//3.1.1 - DEPOIS DIGITAR QUAL A CATEGORIA DO ALIMENTO.
//4 - E REINICIAR PROCESSO, ATÉ OBTER RESPOSTA NÃO, E ENTÃO EXECUTA 3.2.
//5 - USAR ARRAYS PARA CONSTRUÇÃO DAS LISTAS DE ALIMENTOS, SEPARADAS POR CATEGORIAS.

let cereaisEpaesEtuberculos = [] //1
let hortalicas = [] //2
let frutas = [] //3
let leguminosas = [] //4
let carnesEovos = [] //5
let leiteEderivados = [] //6
let oleosEgorduras = [] //7
let acucares = [] //8

let comprar = null

mercado()

function mercado() {
while(comprar == null) {

    comprar = prompt('Deseja adicionar algum alimento a sua lista de compras? Digite (1) para SIM e (2) para NÃO:')

    if(comprar == 1) {
        let alimento = prompt('Qual alimento gostaria de adicionar? digite abaixo:')
        let categoria = prompt('Digite o numero correspondente a categoria desse alimento: (1) Cereais, Pães e Tuberculos, (2) Hortaliças, (3) Frutas, (4) Leguminosas, (5) Carnes e Ovos, (6) Leite e Derivados, (7) Óleos e Gorduras, (8) Açúcares')

        if(categoria == 1) {
            categoria = cereaisEpaesEtuberculos
        }
        else if(categoria == 2) {
            categoria = hortalicas
        }
        else if(categoria == 3) {
            categoria = frutas
        }
        else if(categoria == 4) {
            categoria = leguminosas
        }
        else if(categoria == 5) {
            categoria = carnesEovos
        }
        else if(categoria == 6) {
            categoria = leiteEderivados
        }
        else if(categoria == 7) {
            categoria = oleosEgorduras 
        }
        else if(categoria == 8) {
            categoria = acucares
        }
        categoria.push(alimento)
        comprar = null

    }
    else if(comprar == 2) {
        alert(`Essa é sua lista de compras:\nCereais, Pães e Tuberculos: ${cereaisEpaesEtuberculos};\n Hortaliças: ${hortalicas};\n Frutas: ${frutas};\n Leguminosas: ${leguminosas};\n Carnes e Ovos: ${carnesEovos};\n Leite e Derivados: ${leiteEderivados};\n Óleos e Gorduras: ${oleosEgorduras};\n Açúcares: ${acucares};`)
       
    }
    else {
        alert('Opção inválida. Por favor, tente novamente!!')
        comprar = null
    }
}
}





