# Este archivo es el que corresponde a la clase 23/06
# * Utilizamos un inicializador para llamar las funciones
# * O recursos cargados en memoria.
# -----> Codigo cargado en memoria
# -----> if __name__ == "__main__":
# ====== Codigo a ejecutar.
def inicio():
    print("Bienvenido al codigo")
def funcionEjemplo():
    print("Esta funcion no va a ejecutarse")
#? la funcion funcionEjemplo(): esta cargada en memoria,
#? pero al no ser llamada al if __name__ = "__main__"
#? no sera ejecutado.
if __name__ == "__main__":
    inicio()