# El contenido de este archivo son ejercicios realizados en la clase
# 23/06
# * Realizar una funcion que cuente los primeros 10 numeros pares.
numeros_pares= []
contador = 0
while len(numeros_pares)<= 10:
    if (contador%2 == 0):
        numeros_pares.append(contador)
        print(contador)
    contador+=1
print(numeros_pares)
# * Calcular el promedio de tres numeros: 9, 3, 6
def promedio(num1, num2, num3):
    return (num1 + num2 + num3)/3
print(promedio(9, 3, 6))
# * Cada nota tiene vale un % del total. num1*15%, num2*35%, num3*50%
# * Calcular el promedio teniendo en cuenta esto.
def promedioPorcentaje(num1, num2, num3):
    num = num1*0.15 + num2*0.35 + num3*0.50
    return num
print(promedioPorcentaje(10,10,5))