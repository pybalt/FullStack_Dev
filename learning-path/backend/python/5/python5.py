# El contenido de este archivo pertenece a los visto en la clase 28/06.
# Vimos manejos de archivos. La tarea de hoy consiste en crear una agenda y guardarla en un archivo CSV.

# un programa que nos de opciones:
# --> Menu 1 : buscar un telefono por nombre, si existe nos devuelve el telefono, si no existe, nos da la opcion de ingresarlo,
# --> Menu 2: mostrar todos los telefonos,
# --> Menu 3: agendar un nuevo telefono
# --> nombre, apellido, telefono, tipo (laboral, personal)
import csv

agendatitulos = ['Nombre', 'Apellido', 'Numero', 'Tipo']
agenda = []

def buscarCoincidencia(nombre, apellido):
    coincidencia=[]
    for i in range(len(agenda)):
        if nombre == agenda[i][0] and apellido == agenda[i][1]:
            coincidencia.append(True)
            numero_encontrado=agenda[i][2]
            break
        else:
            coincidencia.append(False)
    return coincidencia, numero_encontrado

def formatear(var_a_formatear):
    var_a_formatear= var_a_formatear.title().replace(" ","")
    return var_a_formatear

def menu0():
    print("""Bienvenido a la agenda. 
    Ingrese las opciones para navegar a traves de los menus: 
    1.Mostrar todos los telefonos.
    2.Buscar un telefono por nombre.
    3.Agendar nuevo telefono.
    4.Volver al menu inicial.
    5.Salir de la agenda.""")
    numero = input('Seleccione el menu. --> ')
    numero = int(numero)
    if numero == 1:
        menu1()
    elif numero == 2:
        menu2()
    elif numero == 3:
        menu3()
    elif numero == 4:
        menu0()
    elif numero == 5:
        return agenda
    else:
        print("Has ingresado una opcion erronea, regresando al menu principal...")
        menu0()


def menu1():
    print("""Mostrando todos los telefonos...""")
    for index in range(len(agenda)):
        print(f"""--><-- Contacto {index+1} --><--""")
        for i in range(len(agendatitulos)):
            print(f"""{agendatitulos[i]}: {agenda[index][i]}""")


def menu2():
    print("Busqueda de telefono por nombre.")
    nombre = formatear(str(input("Ingrese un nombre a buscar.\n")))
    apellido = formatear(str(input("Ingrese un apellido.\n")))
    coincidencia, numero_encontrado = buscarCoincidencia(nombre, apellido)
    if any(coincidencia): 
        print(f"Contacto encontrado. Su numero es {numero_encontrado}")
    else:
        agregarcontacto=input("Contacto no encontrado. Desea agregarlo? S/N")
        if agregarcontacto=='S' or 's':
            menu3()

def menu3():
    print("Agendar nuevo telefono.")
    nombre = formatear(str(input("Ingrese el nombre --> ")))
    apellido = formatear(str(input("Ingrese el apellido --> ")))
    numero = ''.join(filter(str.isnumeric, input("Ingrese el numero --> ").replace(" ",""))) #Este codigo evita introducir espacios y letras en el string numero.
    numero = int(numero) # Este metodo convierte el string en numero int.
    tipo = formatear(str(input("Bajo que etiqueta desea guardar este contacto? Ej: Trabajo/Personal --> ")))
    array = [nombre, apellido, numero, tipo]
    agenda.append(array)

if __name__ == '__main__':

    path = r'C:\Users\leobr\OneDrive\Escritorio\Home\Repositorios\FullStack_Dev\learning-path\backend\python\5\agenda.csv'
    with open(path, 'r') as csvfile:
        agendareader = csv.reader(csvfile, delimiter=';')
        for row in agendareader:
            agenda.append(row)
    menu0()

    with open(path, 'w') as csvfile:
        writer = csv.writer(csvfile, delimiter=';')
        for row in agenda:
            writer.writerow(row)
        csvfile.close()
    #! Ver. Este fragmento de codigo dispara errores.