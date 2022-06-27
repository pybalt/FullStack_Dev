# El contenido de este archivo corresponde a la clase 27/06
# Debemos crear una funcion que ingresemos numeros que se apilan en una numero
# Promedio o suma
# Antes de terminar, que vaya eliminando elemento a elemento con pop. Y que se muestre con pop.

lista = []
def vaciarLista(lista):
    while len(lista) != 0:
        print(lista)
        lista.pop(len(lista)-1)
    else:
        print(lista)


def mainFunction():
    elemento_a_ingresar = input("Ingrese el elemento.\n")
    while elemento_a_ingresar.isdigit():
        elemento_a_ingresar = int(elemento_a_ingresar)
        lista.append(elemento_a_ingresar)
        elemento_a_ingresar = input("Ingrese el elemento.\n")
    else:
        print(lista)
        opcion = int(input(""" ¿Que operacion desea realizar? 
                    1. Promedio
                    2. Suma\nOpcion ->"""))
        if opcion == 1:
            respuesta = sum(lista) / len(lista)
        elif opcion == 2:
            respuesta = sum(lista)
        print('Respuesta: -->',  respuesta)

    return lista

if __name__ == '__main__':
    mainFunction()
    vaciarLista(lista)

