export default class Calculadora {

    static som(a, b) {
        let c

        if ((a == undefined) || (b == undefined)) {
            c = "Um ou mais números não foram informados"
        } else {
            c = a + b
        }

        return c
    }

    static sub(a, b) {
        let c

        if ((a == undefined) || (b == undefined)) {
            c = "Um ou mais números não foram informados"
        } else {
            c = a - b
        }

        return c
    }

    static mul(a, b) {
        let c

        if ((a == undefined) || (b == undefined)) {
            c = "Um ou mais números não foram informados"
        } else {
            c = a * b
        }

        return c
    }

    static div(a, b) {
        let c

        if ((a == undefined) || (b == undefined)) {
            c = "Um ou mais números não foram informados"
        } else {
            if (b == 0) {
                c = "Não é possível dividir um número por 0"
            } else {
                c = a / b
            }
        }

        return c
    }

    static exponencial(a, b) {
        let c

        if ((a == undefined) || (b == undefined)) {
            c = "Um ou mais números não foram informados"
        } else {
            c = a ** b
        }

        return c
    }

    static media(a, b) {
        let c

        if ((a == undefined) || (b == undefined)) {
            c = "Um ou mais números não foram informados"
        } else {
            c = (a + b) / 2
        }

        return c
    }

    static raizQuadrada(a) {
        let b

        if (a == undefined) {
            b = "Um ou mais números não foram informados"
        } else {
            if (a < 0) {
                b = "Não é possível calcular com número negativo"
            } else {
                b = parseFloat((Math.sqrt(a)).toFixed(2))
            }
        }

        return b
    }

    static parImpar(a) {
        let b

        if (a == undefined) {
            b = "Um ou mais números não foram informados"
        } else {
            if (a % 2 == 0) {
                b = "Par"
            } else {
                b = "Ímpar"
            }

            if (a < 0) {
                b += " negativo"
            }
        }

        return b
    }

    static primo(a) {
        let b = a, c = "", primo = 0, contPrimo = 0

        if (a == undefined) {
            c = "Um ou mais números não foram informados"
        } else {
            while (b > 0) {
                primo = this.div(a, b)
                if ((primo % 1 == 0) || (primo % a == 0)) {
                    contPrimo++;
                }
                b--;
            }

            if (contPrimo <= 2) {
                c = "Primo"
            } else {
                c = "Não é primo"
            }
        }

        return c
    }

    static areaQuadrado(a) {
        let b

        if (a == undefined) {
            b = "Um ou mais números não foram informados"
        } else {
            if (a < 0) {
                b = "Não é possível calcular com número negativo"
            } else if (a == 0) {
                b = "Não é possível calcular com o número zero"
            } else {
                b = a * a
            }
        }

        return b
    }

    static areaTriangulo(a, b) {
        let c

        if ((a == undefined) || (b == undefined)) {
            c = "Um ou mais números não foram informados"
        } else {
            if ((a < 0) || (b < 0)) {
                c = "Não é possível calcular com número negativo"
            } else if ((a == 0) || (b == 0)) {
                c = "Não é possível calcular com o número zero"
            } else {
                c = (a * b) / 2
            }
        }

        return c
    }

    static areaRetangulo(a, b) {
        let c

        if ((a  == undefined) || (b == undefined)) {
            c = c = "Um ou mais números não foram informados"
        } else {
            if ((a < 0) || (b < 0)) {
                c = "Não é possível calcular com número negativo"
            } else if ((a == 0) || (b == 0)) {
                c = "Não é possível calcular com o número zero"
            } else {
                c = a * b
            }
        }

        return c
    }

    static areaCirculo(a) {
        const pi = 3.14
        let b

        if (a == undefined) {
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

    static areaTrapezio(a, b, c) {
        let d

        if ((a == undefined) || (b == undefined) || (c == undefined)) {
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

    static areaLosango(a, b) {
        let c

        if ((a == undefined) || (b == undefined)) {
            c = "Um ou mais números não foram informados"
        } else {
            if ((a < 0) || (b < 0)) {
                c = "Não é possível calcular com número negativo"
            } else if ((a == 0) || (b == 0)) {
                c = "Não é possível calcular com o número zero"
            } else {
                c = (a * b) / 2
            }
        }

        return c

    }

    static fatorial(a) {
        let b

        if (a == undefined) {
            b = "Um ou mais números não foram informados"
        } else {
            if (a < 0) {
                b = "Não é possível calcular com número negativo"
            } else {
                b = a
                for (let i = 1; i < a; i++) {
                    b *= i
                }
            }
        }

        return b
    }

    static anoIdade(a) {
        let b
        let data = new Date()
        let anoAtual = data.getFullYear()

        if (a == undefined) {
            b = "Um ou mais números não foram informados"
        } else {
            if ((a < 1898) || (a > anoAtual)) {
                b = "A idade calculada não é válida"
            } else {
                b = anoAtual - a
            }
        }

        return b
    }

}