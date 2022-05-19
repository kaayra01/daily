export default class Calculadora {

    static som(a, b) {
        return a + b
    }

    static sub(a, b) {
        return a - b
    }

    static mul(a, b) {
        return a * b
    }

    static div(a, b) {
        let c;
        if (b == 0) {
            c = "Não é possível dividir um número por 0"
        } else {
            c = a / b
        }
        return c
    }

    static exponencial(a, b) {
        return a ** b
    }

    static parimpar(a) {
        let b = ""
        let par = a % 2 == 0
        if (par) {
            b = "Par"
        } else {
            b = "Ímpar"
        }
        if (a < 0) {
            b += " negativo"
        }
        return b
    }

    static primo(a) {
        let b = a
        let c = ""
        let primo = 0
        let contPrimo = 0

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

        return c
    }

    static areaQuadrado(a) {
        let b

        if (a < 0) {
            b = "Não é possível calcular com número negativo"
        } else if (a == 0) {
            b = "Não é possível calcular com o número zero"
        } else {
            b = a * a
        }

        return b
    }

    static areaTriangulo(a, b) {
        let c

        if ((a < 0) || (b < 0)) {
            c = "Não é possível calcular com número negativo"
        } else if ((a == 0) || (b == 0)) {
            c = "Não é possível calcular com o número zero"
        } else {
            c = (a * b) / 2
        }

        return c
    }

    static areaRetangulo(a, b) {
        let c

        if ((a < 0) || (b < 0)) {
            c = "Não é possível calcular com número negativo"
        } else if ((a == 0) || (b == 0)) {
            c = "Não é possível calcular com o número zero"
        } else {
            c = a * b
        }

        return c
    }

    static areaCirculo(a) {
        // a = pi * (r**2)
        const pi = 3.14
        let b

        if (a < 0) {
            b = "Não é possível calcular com número negativo"
        } else if (a == 0) {
            b = "Não é possível calcular com o número zero"
        } else {
            b = pi * (this.exponencial(a, 2))
        }

        return b
    }

    static areaTrapezio(a, b, c) {
        // a = ((B + b ) * h) / 2
        let d

        if ((a < 0) || (b < 0) || (c < 0)) {
            d = "Não é possível calcular com número negativo"
        } else if ((a == 0) || (b == 0) || (c == 0)) {
            d = "Não é possível calcular com o número zero"
        } else {
            d = ((a + b) * c) / 2
        }

        return d
    }

    static areaLosango(a, b) {
        // a = (D * d) / 2
        let c

        if ((a < 0) || (b < 0)) {
            c = "Não é possível calcular com número negativo"
        } else if ((a == 0) || (b == 0)) {
            c = "Não é possível calcular com o número zero"
        } else {
            c = (a * b) / 2
        }

        return c

    }

    static fatorial(a) {
        let b = 0
        let c = 0

        if (a < 0) {
            c = "Não é possível calcular com número negativo"
        } else {
            c = 1
            while (b < a) {
                
                b++
            }
        }

        return c
    }

    static anoIdade(a) {
        let b
        let data = new Date()
        let anoAtual = data.getFullYear()

        if ((a < 1898) || (a > anoAtual)) {
            b = "A idade calculada não é válida"
        } else {
            b = anoAtual - a
        }

        return b
    }

}