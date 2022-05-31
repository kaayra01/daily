function verifyEmpty(emptyVal) {

    emptyVal === undefined ? true : false
}

function underZero(under) {
    under < 0 ? true : false
}

function equalZero(equal) {
    equal === 0 ? true : false
}


function som(somA, somB) {
    let resultSom

    (verifyEmpty(somA) || verifyEmpty(somB)) ? resultSom = "Um ou mais números não foram informados" : resultSom = somA + somB

    return resultSom
}

function sub(subA, subB) {
    let resultSub

    (verifyEmpty(subA) || verifyEmpty(subB)) ? resultSub = "Um ou mais números não foram informados" : resultSub = subA - subB

    return resultSub
}

function mul(mulA, mulB) {
    let resultMul

    if ((mulA === undefined) || (mulB === undefined)) {
        resultMul = "Um ou mais números não foram informados"
    } else {
        resultMul = mulA * mulB
    }

    return resultMul
}

function div(divA, divB) {
    let resultDiv

    if ((divA === undefined) || (divB === undefined)) {
        resultDiv = "Um ou mais números não foram informados"
    } else {
        if (divB == 0) {
            resultDiv = "Não é possível dividir um número por 0"
        } else {
            resultDiv = divA / divB
        }
    }

    return resultDiv
}

function exponencial(expA, expB) {
    let resultExp

    if ((expA === undefined) || (expB === undefined)) {
        resultExp = "Um ou mais números não foram informados"
    } else {
        resultExp = expA ** expB
    }

    return resultExp
}

function media(medA, medB) {
    let resultMed

    if ((medA === undefined) || (medB === undefined)) {
        resultMed = "Um ou mais números não foram informados"
    } else {
        resultMed = (medA + medB) / 2
    }

    return resultMed
}

function raizQuadrada(raizA) {
    let resultRaiz

    if (raizA === undefined) {
        resultRaiz = "Um ou mais números não foram informados"
    } else {
        if (raizA < 0) {
            resultRaiz = "Não é possível calcular com número negativo"
        } else {
            resultRaiz = parseFloat((Math.sqrt(raizA)).toFixed(2))
        }
    }

    return resultRaiz
}

function parImpar(parA) {
    let resultPar

    if (parA === undefined) {
        resultPar = "Um ou mais números não foram informados"
    } else {
        (parA % 2 == 0) ? resultPar = "Par" : resultPar = "Ímpar"

            (parA < 0) ? resultPar += " negativo" : null
    }

    return resultPar
}

function primo(primA) {
    let resultPrim, cont, primo, contPrimo

    if (primA === undefined) {
        resultPrim = "Um ou mais números não foram informados"
    } else {
        cont = primA
        while (cont > 0) {
            primo = this.div(primA, cont)
                ((primo % 1 == 0) || (primo % primA == 0)) ? contPrimo++ : null
            cont--;
        }

        (contPrimo <= 2) ? resultPrim = "Primo" : resultPrim = "Não é primo"
    }

    return resultPrim
}

function areaQuadrado(quadA) {
    let resultQuad

    if (verifyEmpty(quadA)) {
        resultQuad = "Um ou mais números não foram informados"
    } else {
        if (quadA < 0) {
            resultQuad = "Não é possível calcular com número negativo"
        } else if (quadA == 0) {
            resultQuad = "Não é possível calcular com o número zero"
        } else {
            resultQuad = quadA * quadA
        }
    }

    return resultQuad
}

function areaTriangulo(triA, triB) {
    let resultTri

    if ((triA === undefined) || (triB === undefined)) {
        resultTri = "Um ou mais números não foram informados"
    } else {
        if ((triA < 0) || (triB < 0)) {
            resultTri = "Não é possível calcular com número negativo"
        } else if ((triA == 0) || (triB == 0)) {
            resultTri = "Não é possível calcular com o número zero"
        } else {
            resultTri = (triA * triB) / 2
        }
    }

    return resultTri
}

function areaRetangulo(retA, retB) {
    let resultRet
    let menorZero = retA < 0 || retB < 0
    let igualZero = retA == 0 || retB == 0

    if ((retA === undefined) || (retB === undefined)) {
        resultRet = "Um ou mais números não foram informados"
    } else {
        if (menorZero) {
            resultRet = "Não é possível calcular com número negativo"
        } else if (igualZero) {
            resultRet = "Não é possível calcular com o número zero"
        } else {
            resultRet = retA * retB
        }
    }

    return resultRet
}

function areaCirculo(a) {
    const pi = 3.14
    let b

    if (a === undefined) {
        b = "Um ou mais números não foram informados"
    } else {
        if (a < 0) {
            b = "Não é possível calcular com número negativo"
        } else if (a == 0) {
            b = "Não é possível calcular com o número zero"
        } else {
            b = pi * (this.exponencial(a, 2))
        }
    }

    return b
}

function areaTrapezio(a, b, c) {
    let d

    if ((a === undefined) || (b === undefined) || (c === undefined)) {
        d = c = "Um ou mais números não foram informados"
    } else {
        if ((a < 0) || (b < 0) || (c < 0)) {
            d = "Não é possível calcular com número negativo"
        } else if ((a == 0) || (b == 0) || (c == 0)) {
            d = "Não é possível calcular com o número zero"
        } else {
            d = ((a + b) * c) / 2
        }
    }

    return d
}

function areaLosango(losA, losB) {
    let resultLos
    let underZero = underZero(losA) || underZero(losB)
    let equalZero = equalZero(losA) || equalZero(losB)

    if ((a === undefined) || (losB === undefined)) {
        resultLos = "Um ou mais números não foram informados"
    } else {
        if (underZero) {
            resultLos = "Não é possível calcular com número negativo"
        } else if (equalZero) {
            resultLos = "Não é possível calcular com o número zero"
        } else {
            resultLos = (losA * losB) / 2
        }
    }

    return resultLos

}

function fatorial(fatA) {
    let resultFat

    if (verifyEmpty(fatA)) {
        resultFat = "Um ou mais números não foram informados"
    } else {
        (underZero(fatA)) ?  resultFat = "Não é possível calcular com número negativo" : 
            resultFat = fatA
            for (let i = 1; i < fatA; i++) {
                resultFat *= i
            }
        
    }

    return resultFat
}

function anoIdade(idade) {
    // Essa função se baseia no ano de 2022, onde a maior idade aceitável é de 124 anos
    let resultIdade
    let data = new Date()
    let anoAtual = data.getFullYear()
    let invalido = idade < 1898 || idade > anoAtual

    if (verifyEmpty(idade)) {
        resultIdade = "Um ou mais números não foram informados"
    } else {
        (invalido) ? resultIdade = "A idade calculada não é válida" : resultIdade = anoAtual - idade
    }

    return resultIdade
}