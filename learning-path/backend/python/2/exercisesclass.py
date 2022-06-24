# Este codigo es de los ejercicios
# impartidos en el campus.
# Dado un número entero n, realiza las siguientes acciones condicionales:
from logging import exception
import time
#? Si n es impar, imprime "Weird"
#? Si n es par y está en el rango inclusivo de 2 a 5 , imprima "Not Weird"
#? Si n es par y está en el rango inclusivo de 6 a 20 , imprima "Not Weird"
#? Si n es par y mayor que 20 , imprima "Not Weird"
#? Formato de entrada
#? Una sola línea que contiene un entero positivo,
#? ======= Restricciones ======
#? n entre 1 y 100
#? Formato de salida
#? Imprima "Weird" si el número es raro. De lo contrario, imprima "Not weird".
def evaluacion(n):
    n=int(n)
    if (n%2!=0):
        print("Weird")
    elif(n%2==0 and n>=2 and n<=5):
        print("Not Weird")
    elif(n%2==0 and n>=6 and n <=20):
        print("Weird")
    else:
        print("Not Weird")

#? Crear una calculadora.
def calculator():
    try:
        num1= float(input("Seleccione un numero "))
        num2= float(input("Seleccione un segundo numero "))
        time.sleep(1)
        operator = int(input("""Seleccione una opcion,
                                1. Sumar
                                2. Restar
                                3. Multiplicar
                                4. Dividir\n"""))
        if (operator==1):
                print(f"La operacion sumar entre {num1} y {num2} es ",num1+num2)
        elif(operator == 2):
                print(f"La operacion resta entre {num1} y {num2} es ",num1-num2)
        elif(operator == 3):
                print(f"La operacion multiplicacion entre {num1} y {num2} es ",num1*num2)
        elif(operator == 4):
                print(f"La operacion division entre {num1} y {num2} es ",num1/num2)
    except ZeroDivisionError:
        print("El resultado es indeterminado")
    except ValueError:
        print("Introduzca un numero.")
        calculator()
if __name__ == "__main__":
    calculator()

