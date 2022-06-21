ARRAY= [];
I=0;
function Modify(array, callback)
{ //callback es una funcion que se ejecuta luego de ejecutar el codigo de la funcion que llama al callback
    I++;
    array.push(`${I}`);
    callback(I) // aca llamamos a la funcion callback
}
function Play(n_veces) // Esta funcion creara un bucle que llamara a Modify x cantidad de veces.
{
    for (let i = 0; i < n_veces; i++) {
        Modify(ARRAY, (I)=>{ // En este caso, decidimos que el callback contenga un console.log
            console.log(`Este array fue modificado ${I} veces`);
        })};
}