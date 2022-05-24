from io import open
import os
#Voy a crear un programa que cree un archivo y lo guarde en varias carpetas.

#Creo una lista con las carpetas que quiero abrir.
carpetas=[r"C:\Users\leobr\OneDrive\Escritorio\Home\Repositorios\FullStack_Dev\learning-path\js\aprendiendo_js\1\js",
r"C:\Users\leobr\OneDrive\Escritorio\Home\Repositorios\FullStack_Dev\learning-path\js\aprendiendo_js\2\js",
r"C:\Users\leobr\OneDrive\Escritorio\Home\Repositorios\FullStack_Dev\learning-path\js\aprendiendo_js\3\js",
r"C:\Users\leobr\OneDrive\Escritorio\Home\Repositorios\FullStack_Dev\learning-path\js\aprendiendo_js\4\js",
r"C:\Users\leobr\OneDrive\Escritorio\Home\Repositorios\FullStack_Dev\learning-path\js\aprendiendo_js\5\js",
r"C:\Users\leobr\OneDrive\Escritorio\Home\Repositorios\FullStack_Dev\learning-path\js\aprendiendo_js\6\js",
r"C:\Users\leobr\OneDrive\Escritorio\Home\Repositorios\FullStack_Dev\learning-path\js\aprendiendo_js\7\js"]

#creo una lista con los archivos que quiero crear en cada carpeta.
archivos=["contenido.md","contenido.md","contenido.md","contenido.md","contenido.md","contenido.md","contenido.md"]

#creo una lista con los textos que quiero escribir en cada archivo.
textos=["El codigo de esta carpeta contiene la explicacion de ",
        "El codigo de esta carpeta contiene la explicacion de ",
        "El codigo de esta carpeta contiene la explicacion de ",
        "El codigo de esta carpeta contiene la explicacion de ",
        "El codigo de esta carpeta contiene la explicacion de ",
        "El codigo de esta carpeta contiene la explicacion de ",
        "El codigo de esta carpeta contiene la explicacion de "]

#recorro la lista de carpetas.
for i in carpetas:
    #abro la carpeta
    os.chdir(i)
    #creo los archivos en cada carpeta.
    for j in archivos:
        #abro el archivo para poder escribir en él.
        archivo=open(i+"/"+j, "w")
        #escribo en el archivo.
        archivo.write(textos[carpetas.index(i)])
        #cierro el archivo.
        archivo.close()