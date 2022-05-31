from io import open
import os
#Voy a crear un programa que cree un archivo y lo guarde en varias carpetas.

#Creo una lista con las carpetas que quiero abrir.
carpetas=[r"C:\Users\leobr\OneDrive\Escritorio\Home\Repositorios\FullStack_Dev\projects\5"]

#creo una lista con los archivos que quiero crear en cada carpeta.
archivos=["contenido.md","index.html","app.js","style.css"]

#creo una lista con los textos que quiero escribir en cada archivo.
textos=['El codigo de esta carpeta contiene la explicacion de', 
'!',
 '',
 '']

#recorro la lista de carpetas.
for i in carpetas:
    #abro la carpeta
    os.chdir(i)
    #creo los archivos en cada carpeta.
    for j in archivos:
        #abro el archivo para poder escribir en él.
        archivo=open(i+"/"+j, "w")
        #escribo en el archivo.
        archivo.write(textos[archivos.index(j)])
        #cierro el archivo.
        archivo.close()