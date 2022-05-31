//import assert from 'assert'
import chai from 'chai'
import Calculadora from '../src/Calculadora.js'

const expect = chai.expect

describe('Testando os cálculos das operações básicas', () => {
    describe('Soma', () => {
        let resultado;
        it('Se A = 7 e B = 1, a soma deverá retornar 8 e ser um número', () => {
            resultado = Calculadora.som(7, 1)
            expect(resultado).to.be.eq(8).and.to.be.a('number')
        })
        it('Se A = -5 e B = 5, a soma deverá retornar 0 e ser um número', () => {
            resultado = Calculadora.som(-5, 5)
            expect(resultado).to.be.eq(0).and.to.be.a('number')
        })
        it('Se não for passado um dos parâmetros, a soma deverá retornar a impossibilidade e ser um texto', () => {
            resultado = Calculadora.som(3)
            expect(resultado).to.be.eq("Um ou mais números não foram informados").and.to.be.a('string')
        })
        it('Se não for passado nenhum parâmetro, a soma deverá retornar a impossibilidade e ser um texto', () => {
            resultado = Calculadora.som()
            expect(resultado).to.be.eq("Um ou mais números não foram informados").and.to.be.a('string')
        })
    })

    describe('Subtração', () => {
        let resultado;
        it('Se A = 7 e B = 1, a subtração deverá retornar 6 e ser um número', () => {
            resultado = Calculadora.sub(7, 1)
            expect(resultado).to.be.eq(6).and.to.be.a('number')
        })
        it('Se A = -5 e B = 5, a subtração deverá retornar -10 e ser um número', () => {
            resultado = Calculadora.sub(-5, 5)
            expect(resultado).to.be.eq(-10).and.to.be.a('number')
        })
        it('Se não for passado um dos parâmetros, a subtração deverá retornar a impossibilidade e ser um texto', () => {
            resultado = Calculadora.sub(3)
            expect(resultado).to.be.eq("Um ou mais números não foram informados").and.to.be.a('string')
        })
        it('Se não for passado nenhum parâmetro, a subtração deverá retornar a impossibilidade e ser um texto', () => {
            resultado = Calculadora.sub()
            expect(resultado).to.be.eq("Um ou mais números não foram informados").and.to.be.a('string')
        })
    })

    describe('Multiplicação', () => {
        let resultado;
        it('Se A = 7 e B = 3, a multiplicação deverá retornar 21 e ser um número', () => {
            resultado = Calculadora.mul(7, 3)
            expect(resultado).to.be.eq(21).and.to.be.a('number')
        })
        it('Se A = -5 e B = 5, a multiplicação deverá retornar -25 e ser um número', () => {
            resultado = Calculadora.mul(-5, 5)
            expect(resultado).to.be.eq(-25).and.to.be.a('number')
        })
        it('Se A = 7 e B = 0, a multiplicação deverá retornar 0 e ser um número', () => {
            resultado = Calculadora.mul(7, 0)
            expect(resultado).to.be.eq(0).and.to.be.a('number')
        })
        it('Se não for passado um dos parâmetros, a multiplicação deverá retornar a impossibilidade e ser um texto', () => {
            resultado = Calculadora.mul(3)
            expect(resultado).to.be.eq("Um ou mais números não foram informados").and.to.be.a('string')
        })
        it('Se não for passado nenhum parâmetro, a multiplicação deverá retornar a impossibilidade e ser um texto', () => {
            resultado = Calculadora.mul()
            expect(resultado).to.be.eq("Um ou mais números não foram informados").and.to.be.a('string')
        })
    })

    describe('Divisão', () => {
        let resultado;
        it('Se A = 8 e B = 2, a divisão deverá retornar 4 e ser um número', () => {
            resultado = Calculadora.div(8, 2)
            expect(resultado).to.be.eq(4).and.to.be.a('number')
        })
        it('Se A = -5 e B = 5, a divisão deverá retornar -1 e ser um número', () => {
            resultado = Calculadora.div(-5, 5)
            expect(resultado).to.be.eq(-1).and.to.be.a('number')
        })
        it('Se A = 7 e B = 2, a divisão deverá retornar 3.5 e ser um número', () => {
            resultado = Calculadora.div(7, 2)
            expect(resultado).to.be.eq(3.5).and.to.be.a('number')
        })
        it('Se A = 7 e B = 0, a divisão deverá retornar a impossibilidade e ser um texto', () => {
            resultado = Calculadora.div(7, 0)
            expect(resultado).to.be.eq("Não é possível dividir um número por 0").and.to.be.a('string')
        })
        it('Se não for passado um dos parâmetros, a divisão deverá retornar a impossibilidade e ser um texto', () => {
            resultado = Calculadora.div(3)
            expect(resultado).to.be.eq("Um ou mais números não foram informados").and.to.be.a('string')
        })
        it('Se não for passado nenhum parâmetro, a divisão deverá retornar a impossibilidade e ser um texto', () => {
            resultado = Calculadora.div()
            expect(resultado).to.be.eq("Um ou mais números não foram informados").and.to.be.a('string')
        })
    })
})

describe('Testando o cálculo do exponencial', () => {
    let resultado
    it('Se A = 7 e B = 3, o exponencial deverá retornar 343 e ser um número', () => {
        resultado = Calculadora.exponencial(7, 3)
        expect(resultado).to.be.eq(343).and.to.be.a('number')
    })
    it('Se A = -4 e B = 3, o exponencial deverá retornar -64 e ser um número', () => {
        resultado = Calculadora.exponencial(-4, 3)
        expect(resultado).to.be.eq(-64).and.to.be.a('number')
    })
    it('Se A = 4 e B = -1, o exponencial deverá retornar 0.25 e ser um número', () => {
        resultado = Calculadora.exponencial(4, -1)
        expect(resultado).to.be.eq(0.25).and.to.be.a('number')
    })
    it('Se A = 2 e B = 0, o exponencial deverá retornar 1 e ser um número', () => {
        resultado = Calculadora.exponencial(2, 0)
        expect(resultado).to.be.eq(1).and.to.be.a('number')
    })
    it('Se não for passado um dos parâmetros, o exponencial deverá retornar a impossibilidade e ser um texto', () => {
        resultado = Calculadora.exponencial(3)
        expect(resultado).to.be.eq("Um ou mais números não foram informados").and.to.be.a('string')
    })
    it('Se não for passado nenhum parâmetro, o exponencial deverá retornar a impossibilidade e ser um texto', () => {
        resultado = Calculadora.exponencial()
        expect(resultado).to.be.eq("Um ou mais números não foram informados").and.to.be.a('string')
    })
})

describe('Testando o cálculo da média', () => {
    let resultado
    it('Se A = 7 e B = 3, a média deverá retornar 5 e ser um número', () => {
        resultado = Calculadora.media(7, 3)
        expect(resultado).to.be.eq(5).and.to.be.a('number')
    })
    it('Se A = -4 e B = 3, a média deverá retornar -0.5 e ser um número', () => {
        resultado = Calculadora.media(-4, 3)
        expect(resultado).to.be.eq(-0.5).and.to.be.a('number')
    })
    it('Se não for passado um dos parâmetros, a média deverá retornar a impossibilidade e ser um texto', () => {
        resultado = Calculadora.media(3)
        expect(resultado).to.be.eq("Um ou mais números não foram informados").and.to.be.a('string')
    })
    it('Se não for passado nenhum parâmetro, a média deverá retornar a impossibilidade e ser um texto', () => {
        resultado = Calculadora.media()
        expect(resultado).to.be.eq("Um ou mais números não foram informados").and.to.be.a('string')
    })
})

describe('Testando o cálculo de raiz quadrada', () => {
    let resultado
    it('Se A = 25, a raiz quadrada deverá retornar 5 e ser um número', () => {
        resultado = Calculadora.raizQuadrada(25)
        expect(resultado).to.be.eq(5).and.to.be.a('number')
    })
    it('Se A = 625, a raiz quadrada deverá retornar 25 e ser um número', () => {
        resultado = Calculadora.raizQuadrada(625)
        expect(resultado).to.be.eq(25).and.to.be.a('number')
    })
    it('Se A = 0, a raiz quadrada deverá retornar 0 e ser um número', () => {
        resultado = Calculadora.raizQuadrada(0)
        expect(resultado).to.be.eq(0).and.to.be.a('number')
    })
    it('Se A = -3, a raiz quadrada deverá retornar a impossibilidade e ser um texto', () => {
        resultado = Calculadora.raizQuadrada(-3)
        expect(resultado).to.be.eq("Não é possível calcular com número negativo").and.to.be.a('string')
    })
    it('Se não for passado nenhum parâmetro, a raiz quadrada deverá retornar a impossibilidade e ser um texto', () => {
        resultado = Calculadora.raizQuadrada()
        expect(resultado).to.be.eq("Um ou mais números não foram informados").and.to.be.a('string')
    })
})

describe('Testando se um número é par ou ímpar', () => {
    let resultado
    it('Se A = 7, deverá ser retornado que é um ímpar e ser um texto', () => {
        resultado = Calculadora.parImpar(7)
        expect(resultado).to.be.eq("Ímpar").and.to.be.a('string')
    })
    it('Se A = 2, deverá retornar que é um par e ser um texto', () => {
        resultado = Calculadora.parImpar(2)
        expect(resultado).to.be.eq("Par").and.to.be.a('string')
    })
    it('Se A = -7, deverá retornar que é um ímpar negativo e ser um texto', () => {
        resultado = Calculadora.parImpar(-7)
        expect(resultado).to.be.eq("Ímpar negativo").and.to.be.a('string')
    })
    it('Se A = -2, deverá retornar que é um par negativo e ser um texto', () => {
        resultado = Calculadora.parImpar(-2)
        expect(resultado).to.be.eq("Par negativo").and.to.be.a('string')
    })
    it('Se não for passado nenhum parâmetro, deverá retornar a impossibilidade e ser um texto', () => {
        resultado = Calculadora.parImpar()
        expect(resultado).to.be.eq("Um ou mais números não foram informados").and.to.be.a('string')
    })
})

describe('Testando se um número é primo', () => {
    let resultado;
    it('Se A = 2, deverá retornar que é primo e ser um texto', () => {
        resultado = Calculadora.primo(2)
        expect(resultado).to.be.eq("Primo").and.to.be.a('string')
    })
    it('Se A = 3, deverá retornar que é primo e ser um texto', () => {
        resultado = Calculadora.primo(3)
        expect(resultado).to.be.eq("Primo").and.to.be.a('string')
    })
    it('Se A = 4, deverá retornar que não é primo e ser um texto', () => {
        resultado = Calculadora.primo(4)
        expect(resultado).to.be.eq("Não é primo").and.to.be.a('string')
    })
    it('Se A = 76, deverá retornar que não é primo e ser um texto', () => {
        resultado = Calculadora.primo(76)
        expect(resultado).to.be.eq("Não é primo").and.to.be.a('string')
    })
    it('Se não for passado nenhum parâmetro, deverá retornar a impossibilidade e ser um texto', () => {
        resultado = Calculadora.primo()
        expect(resultado).to.be.eq("Um ou mais números não foram informados").and.to.be.a('string')
    })
})

describe('Testando os cálculos de áreas', () => {

    describe('Área do quadrado', () => {
        let resultado
        it('Se A = 1, o quadrado deverá retornar 1 e ser um número', () => {
            resultado = Calculadora.areaQuadrado(1)
            expect(resultado).to.be.eq(1).and.to.be.a('number')
        })
        it('Se A = 9, o quadrado deverá retornar 81 e ser um número', () => {
            resultado = Calculadora.areaQuadrado(9)
            expect(resultado).to.be.eq(81).and.to.be.a('number')
        })
        it('Se A = -15, o quadrado deverá retornar a impossibilidade e ser um texto', () => {
            resultado = Calculadora.areaQuadrado(-15)
            expect(resultado).to.be.eq("Não é possível calcular com número negativo").and.to.be.a('string')
        })
        it('Se A = 0, o quadrado deverá retornar a impossibilidade e ser um texto', () => {
            resultado = Calculadora.areaQuadrado(0)
            expect(resultado).to.be.eq("Não é possível calcular com o número zero").and.to.be.a('string')
        })
        it('Se não for passado nenhum parâmetro, o quadrado deverá retornar a impossibilidade e ser um texto', () => {
            resultado = Calculadora.areaQuadrado()
            expect(resultado).to.be.eq("Um ou mais números não foram informados").and.to.be.a('string')
        })
    })

    describe('Área do triângulo', () => {
        let resultado
        it('Se A = 3 e B = 6, o triângulo deverá retornar 9 e ser um número', () => {
            resultado = Calculadora.areaTriangulo(2, 6)
            expect(resultado).to.be.eq(6).and.to.be.a('number')
        })
        it('Se A = 0 e B = 8, o triângulo deverá retornar a impossibilidade e ser um texto', () => {
            resultado = Calculadora.areaTriangulo(0, 8)
            expect(resultado).to.be.eq("Não é possível calcular com o número zero").and.to.be.a('string')
        })
        it('Se A = -2 e B = 6, o triângulo deverá retornar a impossibilidade e ser um texto', () => {
            resultado = Calculadora.areaTriangulo(-2, 6)
            expect(resultado).to.be.eq("Não é possível calcular com número negativo").and.to.be.a('string')
        })
        it('Se não for passado um dos parâmetros, o triângulo deverá retornar a impossibilidade e ser um texto', () => {
            resultado = Calculadora.areaTriangulo(3)
            expect(resultado).to.be.eq("Um ou mais números não foram informados").and.to.be.a('string')
        })
        it('Se não for passado nenhum parâmetro, o triãngul deverá retornar a impossibilidade e ser um texto', () => {
            resultado = Calculadora.areaTriangulo()
            expect(resultado).to.be.eq("Um ou mais números não foram informados").and.to.be.a('string')
        })
    })

    describe('Área do retângulo', () => {
        let resultado
        it('Se A = 3 e B = 6, o retângulo deverá retornar 18 e ser um número', () => {
            resultado = Calculadora.areaRetangulo(3, 6)
            expect(resultado).to.be.eq(18).and.to.be.a('number')
        })
        it('Se A = 0 e B = 8, o retângulo deverá retornar a impossibilidade e ser um texto', () => {
            resultado = Calculadora.areaRetangulo(0, 8)
            expect(resultado).to.be.eq("Não é possível calcular com o número zero").and.to.be.a('string')
        })
        it('Se A = -2 e B = 6, o retângulo deverá retornar a impossibilidade e ser um texto', () => {
            resultado = Calculadora.areaRetangulo(-2, 6)
            expect(resultado).to.be.eq("Não é possível calcular com número negativo").and.to.be.a('string')
        })
        it('Se não for passado um dos parâmetros, o retângulo deverá retornar a impossibilidade e ser um texto', () => {
            resultado = Calculadora.areaRetangulo(3)
            expect(resultado).to.be.eq("Um ou mais números não foram informados").and.to.be.a('string')
        })
        it('Se não for passado nenhum parâmetro, o retângulo deverá retornar a impossibilidade e ser um texto', () => {
            resultado = Calculadora.areaRetangulo()
            expect(resultado).to.be.eq("Um ou mais números não foram informados").and.to.be.a('string')
        })
    })

    describe('Área do círculo', () => {
        let resultado
        it('Se A = 3, o círculo deverá retornar 28.26 e ser um número', () => {
            resultado = Calculadora.areaCirculo(3)
            expect(resultado).to.be.eq(28.26).and.to.be.a('number')
        })
        it('Se A = 0, o círculo deverá retornar a impossibilidade e ser um texto', () => {
            resultado = Calculadora.areaCirculo(0)
            expect(resultado).to.be.eq("Não é possível calcular com o número zero").and.to.be.a('string')
        })
        it('Se A = -2, o círculo deverá retornar a impossibilidade e ser um texto', () => {
            resultado = Calculadora.areaCirculo(-2)
            expect(resultado).to.be.eq("Não é possível calcular com número negativo").and.to.be.a('string')
        })
        it('Se não for passado nenhum parâmetro, o círculo deverá retornar a impossibilidade e ser um texto', () => {
            resultado = Calculadora.areaCirculo()
            expect(resultado).to.be.eq("Um ou mais números não foram informados").and.to.be.a('string')
        })
    })

    describe('Área do trapézio', () => {
        let resultado
        it('Se A = 3, B = 6 e C = 4, o trapézio deverá retornar 18 e ser um número', () => {
            resultado = Calculadora.areaTrapezio(3, 6, 4)
            expect(resultado).to.be.eq(18).and.to.be.a('number')
        })
        it('Se A = 8, B = 0 e C = 5, o trapézio deverá retornar a impossibilidade e ser um texto', () => {
            resultado = Calculadora.areaTrapezio(8, 0, 5)
            expect(resultado).to.be.eq("Não é possível calcular com o número zero").and.to.be.a('string')
        })
        it('Se A = -2, B = 7 e C = 9, o trapézio deverá retornar a impossibilidade e ser um texto', () => {
            resultado = Calculadora.areaTrapezio(-2, 7, 9)
            expect(resultado).to.be.eq("Não é possível calcular com número negativo").and.to.be.a('string')
        })
        it('Se não for passado um dos parâmetros, o trapézio deverá retornar a impossibilidade e ser um texto', () => {
            resultado = Calculadora.areaTrapezio(3)
            expect(resultado).to.be.eq("Um ou mais números não foram informados").and.to.be.a('string')
        })
        it('Se não for passado nenhum parâmetro, o trapézio deverá retornar a impossibilidade e ser um texto', () => {
            resultado = Calculadora.areaTrapezio()
            expect(resultado).to.be.eq("Um ou mais números não foram informados").and.to.be.a('string')
        })
    })

    describe('Área do losango', () => {
        let resultado
        it('Se A = 3 e B = 6, o losango deverá retornar 9 e ser um número', () => {
            resultado = Calculadora.areaLosango(3, 6)
            expect(resultado).to.be.eq(9).and.to.be.a('number')
        })
        it('Se A = 0 e B = 8, o losango deverá retornar a impossibilidade e ser um texto', () => {
            resultado = Calculadora.areaLosango(0, 8)
            expect(resultado).to.be.eq("Não é possível calcular com o número zero").and.to.be.a('string')
        })
        it('Se A = -2 e B = 6, o losango deverá retornar a impossibilidade e ser um texto', () => {
            resultado = Calculadora.areaLosango(-2, 6)
            expect(resultado).to.be.eq("Não é possível calcular com número negativo").and.to.be.a('string')
        })
        it('Se não for passado um dos parâmetros, o losango deverá retornar a impossibilidade e ser um texto', () => {
            resultado = Calculadora.areaLosango(3)
            expect(resultado).to.be.eq("Um ou mais números não foram informados").and.to.be.a('string')
        })
        it('Se não for passado nenhum parâmetro, o losango deverá retornar a impossibilidade e ser um texto', () => {
            resultado = Calculadora.areaLosango()
            expect(resultado).to.be.eq("Um ou mais números não foram informados").and.to.be.a('string')
        })
    })

})

describe('Testando o cálculo do fatorial de um número', () => {
    let resultado
    it('Se A = 5, o fatorial deverá retornar 120 e ser um número', () => {
        resultado = Calculadora.fatorial(5)
        expect(resultado).to.be.eq(120).and.to.be.a('number')
    })
    it('Se A = 0, o fatorial deverá retornar 0 e ser um número', () => {
        resultado = Calculadora.fatorial(0)
        expect(resultado).to.be.eq(0).and.to.be.a('number')
    })
    it('Se A = -2, o fatorial deverá retornar a impossibilidade e ser um texto', () => {
        resultado = Calculadora.fatorial(-2)
        expect(resultado).to.be.eq("Não é possível calcular com número negativo").and.to.be.a('string')
    })
    it('Se não for passado nenhum parâmetro, o fatorial deverá retornar a impossibilidade e ser um texto', () => {
        resultado = Calculadora.fatorial()
        expect(resultado).to.be.eq("Um ou mais números não foram informados").and.to.be.a('string')
    })
})

describe('Testando o cálculo de idade', () => {
    let resultado
    it('Se A = 1985, deverá retornar 37 e ser um número', () => {
        resultado = Calculadora.anoIdade(1985)
        expect(resultado).to.be.eq(37).and.to.be.a('number')
    })
    it('Se A = 2022, deverá retornar 0 e ser um número', () => {
        resultado = Calculadora.anoIdade(2022)
        expect(resultado).to.be.eq(0).and.to.be.a('number')
    })
    it('Se A = 1800, deverá retornar retornar a impossibilidade e ser um texto', () => {
        resultado = Calculadora.anoIdade(1800)
        expect(resultado).to.be.eq("A idade calculada não é válida").and.to.be.a('string')
    })
    it('Se A = 2029, deverá retornar retornar a impossibilidade e ser um texto', () => {
        resultado = Calculadora.anoIdade(2029)
        expect(resultado).to.be.eq("A idade calculada não é válida").and.to.be.a('string')
    })
    it('Se não for passado nenhum parâmetro, deverá retornar a impossibilidade e ser um texto', () => {
        resultado = Calculadora.anoIdade()
        expect(resultado).to.be.eq("Um ou mais números não foram informados").and.to.be.a('string')
    })
})