##El contenido de este archivo: 
#? Ejercicios asignados en el aula virtual.
# * Ingresando dos números enteros por pantalla a y b . Agregue código para imprimir tres líneas donde:
# * La primera línea contiene la suma de los dos números.
# * La segunda línea contiene la diferencia de los dos números (primero - segundo).
# * La tercera línea contiene el producto de los dos números

def function():
    a= float(input("Ingrese el numero A: --> "))
    b= float(input("Ingrese el numero B: --> "))
    if 1<= a <= 10000000 and 1<= b <= 10000000:
        print(f"""
        La suma entre {a} y {b} es {a+b}
        La diferencia entre {a} y {b} es {a-b}
        El producto entre {a} y {b} es {a*b}
        """)
    else:
        print("Introduzca un numero entre 1 y 10000000")
        function()
# *Ingresando un numero entero n por pantalla. 
# *Para todos los numero enteros no negativos i < n, imprimir i2
import math
def functionA():
    n = int(input("Ingrese un numero entero --> "))
    if 1<=n<=20:
        numeros = []
        for n in range(n+1):
            numeros.append(n)
        else:
            for n in numeros:
                print(int(math.pow(n,2)))
    else:
        print("Debe de ingresar un numero entre 1 y 20")
        functionA()

# * Ingresando dos números enteros a y b por pantalla. 
# * Agregue lógica para imprimir dos líneas. 
# * La primera línea debe contener el resultado de la división de enteros, a // b . 
# * La segunda línea debe contener el resultado de la división flotante, a / b .
def functionB():
    try:
        n = int(input("Ingrese un numero --> "))
        n2 = int(input("Ingrese un segundo numero --> "))
        print(f"{n//n2}\n{n/n2}")
    except ZeroDivisionError:
        print("Division por 0. Intentelo nuevamente")
        functionB()
# Se le pide que se asegure de que los nombres y apellidos de las personas comiencen con una letra mayúscula en sus pasaportes. 
# Por ejemplo, juan perez debe escribirse con mayúscula correctamente como Juan Perez.
def functionC():
    nombre = str(input("Indique su nombre. --> "))
    if not 1<=len(nombre)<1000:
        print("El nombre debe tener entre 0 y 1000 caracteres.")
        functionC()
    verificacion = all(n.istitle() for n in nombre)
    if verificacion:
        print(nombre)
    else:
        print(nombre.title())
if __name__ == "__main__":
    functionC()