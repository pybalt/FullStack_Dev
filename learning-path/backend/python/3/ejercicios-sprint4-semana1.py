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


if __name__ == "__main__":
    function()