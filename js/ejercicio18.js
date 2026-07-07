const input = document.getElementById("nuevoElemento");
const botonAgregar = document.getElementById("agregarBtn");
const lista = document.getElementById("lista");

function agregarElemento(){
    let texto = input.value.trim();

    if(texto===""){
        swal.fire({
            icon:"error",
            title:"Error",
            text:"Ingrese un elemento"
        });
        return;
    }

    let li = document.createElement("li");

    li.classList.add(
        "list-group-item",
        "d-flex",
        "justify-content-between",
        "align-items-center"
    );

    li.textContent = texto;

    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.classList.add(
        "btn",
        "btn-danger",
        "btn-sm"
    );

    botonEliminar.addEventListener("click",function(){
        li.remove();
    });

    li.appendChild(botonEliminar);
    lista.appendChild(li);
    input.value="";
}
botonAgregar.addEventListener("click",agregarElemento);