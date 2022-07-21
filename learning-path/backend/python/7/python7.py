##El contenido de este archivo pertenece al
# Sprint 6. Esta es la clase 1 y 2 del uso de SQLite
#* Voy a automatizar la creacion de bases de datos usando mis propios comandos.

import sqlite3 as sql

name = 'ejercicio1'
DB = sql.connect(f"7/{name}.db")
CLOSEDB = lambda: DB.close()
EJECUTAR = lambda x: DB.cursor().executescript(x)

"""Comandos:
#? CREATE TABLE -> Crear nueva tabla
#? INSERT INTO ${nameTable} VALUES (...) -> Inserta en la tabla ${nameTable} los valores (...)
"""

def createTable(nombreTabla, **kargs):
    keys = []
    values = []

    for key in kargs.keys():
        keys.append(key)
    for value in kargs.values():
        values.append(value)
    
    text=f"""
CREATE TABLE {nombreTabla}(

ID INT AUTOINCREMENT,
"""

    for i in keys:
        k = keys.index(i)
        if k != len(keys) - 1: #* Siempre que no sea la ultima linea, se usaran comas para delimitar.
            text = text + f"""
{i} : {values[k]},
"""
        else:
            text = text + f"""
{i} : {values[k]}
"""
    return text + "\n);"

def insert(nombreTabla, nombreFilas, *args):
    text = f'INSERT INTO {nombreTabla}({nombreFilas}) VALUES {args}'
    return text

#! Falta crear funciones para:
"""
    1. Buscar datos en la tabla
    2. Borrar datos de la tabla
    3. Filtrar la tabla
    4. ...
"""

print(createTable('ALUMNOS', NOMBRE="VARCHAR", APELLIDO = "VARCHAR", DNI="INT"))

if __name__ == "__main__":
    pass