import { describe, expect, it } from "vitest"



function suma(a,b){
  
    if(typeof a != "number" || typeof b != 'number'){
      return 'error al realizar la suma'
    }

    return a + b
}

const multiplicacion = (a,b) => a*b 



describe("LA CALCULADORA", () => {


    it('la funcion suma, debe sumar dos valores', () => {
          expect(suma(1,1)).toBe(2)
          expect(suma([], null)).toBe('error al realizar la suma')
    })
    
    it('la funcion multiplicacion, debe multiplicar dos valores', () => {

        const numero1 = 10
        const numero2 = 2

        expect(multiplicacion(numero1,numero2)).toBeGreaterThan(19)
        expect(multiplicacion(numero1,numero2)).toBeTruthy()


    })




})