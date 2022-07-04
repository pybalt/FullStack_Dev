""" 
? El siguiente archivo corresponde al FINAL DE SPRINT 4.
||-><----><-- Consigna --><----><-||
Los distintos movimientos de cheques del banco
Se van registrando en un archivo de texto 
donde cada registro almacenado es una linea del archivo

Este archivo contiene los campos:
NroCheque -> Numero de cheque, este debe ser unico por cuenta  ✔️
CodigoBanco -> Codigo numerico del banco, #! entre 1 y 100. ✔️
CodigoSucursal -> Codigo numerico de la sucursal del banco #! entre 1 y 300. ✔️
NumeroCuentaOrigen -> Cuenta donde se cobra el cheque  ✔️
NumeroCuentaDestino -> Cuenta donde se cobra el cheque ✔️
Valor -> Float con el valor del cheque ✔️
FechaOrigen -> Fecha de emision: (en timestamp) ✔️
FechaPago -> Fecha de pago o cobro del cheque: (en timestamp) ✔️
DNI -> String con DNI del cliente donde se permite identificarlo  ✔️
Estado -> Puede tener tres valores: pendiente, aprobado o rechazado ✔️
Tipo -> Puede tener dos valores: Emitido o DEPOSITADO ✔️
||-><----><----><----><----><----><----><----><----><----><----><----><----><-||
? Requerimientos:
? 2. El orden de los argumentos son los siguientes:
    a. Nombre del archivo csv. ✔️
    b. DNI del cliente donde se filtraran.✔️
    c. Salida: PANTALLA o CSV.
    d. Tipo de cheque: EMITIDO o DEPOSITADO ✔️
    e. Estado del cheque: PENDIENTE, APROBADO, RECHAZADO (OPCIONAL) ✔️
    f. Rango fecha: xx-xx-xxxx:yy-yy-yyyy(Opcional) ✔️
? 3. Si para un DNI dado un numero de cheque de una misma cuenta se repite,
?    se debe mostrar el error por pantalla, indicando que ese es el problema. ✔️
? 4. Si el parametro "Salida" es PANTALLA, se debera imprimir por pantalla
?    todos los valores que se tienen; 
?    Si el parametro "Salida" es CSV, se debera exportar a un csv con las siguientes
?    condiciones:
        a. El nombre de archivo tiene que tener el formato <DNI><TIMESTAMPS ACTUAL>.csv
        b. Se tiene que exportar las dos fechas, el valor del cheque y la cuenta.
? 5. Si el estado del cheque no se pasa, se deberan imprimir los cheques sin filtrar
?    por estado.
"""

import csv
from datetime import datetime

"VARIABLES"
contenido = []
runtime = True
titulos = [
    'Dni:                    ',
    'NroCheque:              ',
    'CodigoBanco:            ',
    'CodigoSucursal:         ',
    'NumeroCuentaOrigen:     ',
    'NumeroCuentaDestino:    ',
    'Valor:                  ',
    'FechaOrigen:            ',
    'FechaPago:              ',
    'Estado:                 ',
    'Tipo:                   '
]
mensaje1 = """Indique una opcion para continuar:
1. Agregar nuevo movimiento
2. Ver movimientos.
3. Terminar (Por defecto)\n"""
msjOp1 = """Elegiste agregar nuevo movimiento:\n"""
msjOp2 = """Elegiste ver los movimientos. Elija una opcion:
1. Filtrar por DNI
2. Filtrar por Estado
3. Filtrar por Rango de Fecha.\n"""

"FUNCIONES"

def mensaje2(x): return print(f"""El archivo CSV se encuentra {x} """)
def dato(x): return print(f"Indique el {x}")

def filtradoPorFechas():
    fecha1 = datetime.strptime(
    input("Fecha 1:\nFormato: 'DAY-MONTH-YEAR'\nFecha --> "), '%d-%m-%Y')
    fecha2 = datetime.strptime(
    input("Fecha 1:\nFormato: 'DAY-MONTH-YEAR'\nFecha --> "), '%d-%m-%Y')
    fecha1 = int(datetime.timestamp(fecha1))
    fecha2 = int(datetime.timestamp(fecha2))
    filtradoPorFechas = []
    for row in contenido:
        x1 = int(row[7])
        x2 = int(row[8])
        if fecha1 <= x1 and x2 <= fecha2:
            filtradoPorFechas.append(row)
    return filtradoPorFechas

def filtrarPorEstado():
    estado = input('Indique el estado a filtrar. Predeterminado: SIN FILTRO\n1. PENDIENTE\n2. APROBADO\n3. RECHAZADO\n--> ')
    match estado:
        case '1':
            return filtro(9, contenido, "'PENDIENTE'")
        case '2':
            return filtro(9, contenido, "'APROBADO'")
        case '3':
            return filtro(9, contenido, "'RECHAZADO'")
        case _:
            return mostrarPorPantalla(contenido)

def pantallaOCSV(arr):
    opcion = input('¿Salida de datos en PANTALLA o CSV?\n1. PANTALLA\n2. CSV\n--> ')
    if opcion == '1':
        return mostrarPorPantalla(arr)
    if opcion == '2':
        return mostrarPorCSV(arr)
def mostrarPorPantalla(filtrado):
    try:
        for i in range(len(filtrado)):
            print('===============================================')
            for a in range(len(titulos)):
                print(f'{titulos[a]}{filtrado[i][a]}')
            print('===============================================')
    except TypeError:
        print("Vacio")        
def mostrarPorCSV(arr):
    timestamp = datetime.timestamp(datetime.now()) #timestamp
    try:
        if len(arr)>1: #Si el array tiene mas de un filtro, se van a poner todos los array.
            arrdni=[]
            for i in arr:
                print(i)
                arrdni.append(i[0])
                arrdni.append('-')
            quitarRedundancias = []
            [quitarRedundancias.append(x) for x in arrdni if x not in quitarRedundancias] #Para no tener DNI repetidos
            arrdni = quitarRedundancias
            dni = ''.join(arrdni)
        else:
            dni = f'{arr[0][0]}-' #Como el len del array es uno, se agrega este, que esta en la posicion 0.
    except:
        print("No se pudo realizar la operacion.")
    name = f"{dni}-{timestamp}.csv"
    with open(name, 'w', newline='') as csvfile:
        writer = csv.writer(csvfile, delimiter=';')
        for row in arr:
            writer.writerow(row)
        csvfile.close()
def filtro(position, array, value=''):
    value = str(value)
    arr=[]
    for i in array:
        if value== i[position]:
            arr.append(i)
        elif value == '':
            arr.append(i[position])
    return arr

def abrirArchivo(name):
    if name == '':
        path = r'cheques.csv'
    else:
        path=name+'.csv'
    with open(path, 'r') as csvfile:
        agendareader = csv.reader(csvfile, delimiter=';')
        for row in agendareader:
            contenido.append(row)

def guardarYCerrarArchivo(name=r'cheques'):
    path = name + '.csv'
    with open(path, 'w', newline='') as csvfile:
        writer = csv.writer(csvfile, delimiter=';')
        for row in contenido:
            writer.writerow(row)
        csvfile.close()

def crearArchivo(name):
    path = name + '.csv'
    with open(path, 'w+') as csvfile:
        agendareader = csv.reader(csvfile, delimiter=';')
        for row in agendareader:
            contenido.append(row)


def numeroEntero(msj='', range=False, x=0, y=0):
    if range:
        if msj != '':
            print(msj)
        while True:
            try:
                num = int(input(f"-Debe de estar entre {x} y {y}: \n--> "))
                break
            except ValueError:
                print("No ha asignado un numero entero. Intente otra vez.")
    else:
        if msj != '':
            print(msj)
        while True:
            try:
                num = int(input("--> "))
                break
            except ValueError:
                print("No ha asignado un numero entero. Intente otra vez.")
    return str(num)

def limpiarDatos():
    global contenido
    quitarRedundancias = []
    [quitarRedundancias.append(x) for x in contenido if x not in quitarRedundancias]
    contenido = quitarRedundancias
    return contenido

def numeroFloat(msj=''):
    if msj != '':
        print(msj)
    while True:
        try:
            num = float(input("--> "))
            break
        except ValueError:
            print("No ha asignado un numero flotante. Intente otra vez.")
    return str(num)

def enRango(value, initrange, finalrange):
    while True:
        value = int(value)
        if value in range(initrange-1, finalrange+1):
            break
        else:
            print(f"El numero debe de estar entre {initrange} y {finalrange}")
            value = numeroEntero()
    return value

def agregarMovimiento():
    global contenido
    dato("DNI")
    dni = numeroEntero()
    arrDni = filtro(0, contenido, dni)
    print(arrDni)
    dato("NRO: Cuenta de origen")
    cuentaDeOrigen = numeroEntero("-Debe ser un numero entero", False)
    arrCuentas = filtro(4, arrDni, cuentaDeOrigen)
    print(arrCuentas)
    chequesPorCuenta = filtro(1, arrCuentas)
    dato("Nro de cheque")
    while True:
        nroCheque= numeroEntero()
        nroCheque= str(nroCheque)
        if not (nroCheque in chequesPorCuenta):
            print(nroCheque, chequesPorCuenta)
            break
        else:
            print("Ese Nro de Cheque ya ha sido usado.")
    dato("Codigo de Banco")
    codigoBanco = numeroEntero("-Debe ser un numero entero", True, 1, 100)
    codigoBanco = enRango(codigoBanco, 1, 100)
    dato("Codigo de Sucursal")
    codigoSucursal = numeroEntero("-Debe ser un numero entero", True, 1, 300)
    codigoSucursal = enRango(codigoSucursal, 1, 300)
    dato("NRO: Cuenta destino")
    cuentaDestino = numeroEntero("-Debe ser un numero entero", False)
    dato("Valor del cheque")
    valor = numeroFloat("-Debe ser un numero float")
    dato("Fecha de emision del cheque")
    optFecha = input(
        "1. Para introducir fecha manualmente.\nDe lo contrario, se utilizara la fecha actual.\n--> ")
    if optFecha == 1 or optFecha == '1':
        fecha1 = datetime.strptime(
            input("Formato: 'DAY-MONTH-YEAR'\nFecha --> "), '%d-%m-%Y')
        fecha1 = datetime.timestamp(fecha1)
    else:
        datetime_now = datetime.now()
        fecha1 = datetime.timestamp(datetime_now)
    dato("Fecha de pago del cheque")
    optFecha = input(
        "1. Para introducir fecha manualmente.\nDe lo contrario, se utilizara la fecha actual.\n--> ")
    if optFecha == 1 or optFecha == '1':
        fecha2 = datetime.strptime(
            input("Formato: 'DAY-MONTH-YEAR'\nFecha --> "), '%d-%m-%Y')
        fecha2 = datetime.timestamp(fecha2)
    else:
        fecha2 = datetime.now()
        fecha2 = datetime.timestamp(fecha2)
    dato("Estado")
    estadoopt = input(
        "Seleccione la opcion. Por defecto: PENDIENTE\n1.PENDIENTE\n2.APROBADO\n3.RECHAZADO\n--> ")
    if estadoopt == 3:
        estado = 'RECHAZADO'
    elif estadoopt == 2:
        estado = 'APROBADO'
    else:
        estado = 'PENDIENTE'
    dato("Tipo")
    tipoopt = input(
        "Seleccione la opcion. Por defecto: EMITIDO\n1.EMITIDO\n2.DEPOSITADO\n--> ")
    if tipoopt != 1:
        tipo = 'DEPOSITADO'
    else:
        tipo = 'EMITIDO'
    elemento = [dni, nroCheque, codigoBanco, codigoSucursal, cuentaDeOrigen, cuentaDestino, valor, fecha1, fecha2, estado, tipo]
    contenido.append(elemento)

def initmenu():
    global name 
    name = input(
        "Bienvenido. Para empezar, indique el nombre del archivo CSV.\n--> ")
    if name == '':
        name = 'cheques' #* Se designa el nombre del archivo, por defecto el proporcionado por el alumno.
    try:
        abrirArchivo(name) #* Si el archivo ingresado no existe, se creara uno.
    except:
        crearArchivo(name)
    global contenido #* Tuve que declarar contenido y name como globales para evitar distintos errores. De todas formas la finalidad es leer el contenido, no modificarlo
    if not contenido:
        mensaje2('vacio')
        archivocargado= False
    else:
        mensaje2('cargado correctamente')
        archivocargado= False
    while True: #*Bucle infinito que termina al presionar enter o 3.
        if not contenido:
            archivocargado= False
        else:
            archivocargado= True
        op = input(f'{mensaje1}--> ') #* 1. Nuevo mov. 2. Ver movimientos.
        if op == '1': #* Pantalla para cargar nuevos datos.
            print(msjOp1)
            agregarMovimiento()
        elif op == '2': #* Pantalla para filtrar los datos.
            if archivocargado: 
                print(msjOp2) #* 1. Filtro DNI, 2. Filtro ESTADO, 3. Filtro RANGO FECHAS
                op = input('\n--> ')
                if op == '1': #* DNI
                    dni = numeroEntero("Indique el DNI a buscar")
                    respuesta = filtro(0, contenido, dni)
                    pantallaOCSV(respuesta)
                    contenido = limpiarDatos()
                elif op == '2': #* Filtra por estado
                    respuesta = filtrarPorEstado()
                    if respuesta == '':
                        mostrarPorPantalla()
                    else:
                        pantallaOCSV(respuesta)
                    contenido = limpiarDatos()
                elif op == '3': #* Filtra por rango de fechas
                    respuesta = filtradoPorFechas()
                    pantallaOCSV(respuesta)
                    contenido = limpiarDatos()
            else:
                print("Archivo vacio")
        else:
            break

if __name__ == '__main__':
    initmenu()
    guardarYCerrarArchivo(name)
