function manejarTareas(){
    let tareas = obtenerTareas();

    function agregar(){
        let txt = document.getElementById("tarea").value.trim();

        if(txt === ""){
            Swal.fire({
                icon:"error",
                title:"Error",
                text:"Ingrese una tarea."
            });
            return;
        }

        tareas.push({
            tarea:txt
        });
        localStorage.setItem("tareas",JSON.stringify(tareas));

        document.getElementById("tarea").value="";
        renderizar();
    }

    function eliminar(indice){
        Swal.fire({
            title:"¿Eliminar tarea?",
            icon:"warning",
            showCancelButton:true,
            confirmButtonText:"Sí",
            cancelButtonText:"No"
        }).then((resultado)=>{
            if(resultado.isConfirmed){
                tareas.splice(indice,1);
                localStorage.setItem("tareas",JSON.stringify(tareas));

                renderizar();
            }
        });
    }

    function renderizar(){
        let lista=document.getElementById("listaTareas");
        lista.innerHTML="";

        tareas.forEach((elemento,indice)=>{
            lista.innerHTML+=`
            <li>
                ${elemento.tarea}
                <button onclick="gestor.eliminar(${indice})">
                    Eliminar
                </button>
            </li>
            `;
        });
    }

    return{
        agregar,
        eliminar,
        renderizar
    };
}

function obtenerTareas(){
    let datos=localStorage.getItem("tareas");
    return datos?JSON.parse(datos):[];
}

let gestor=manejarTareas();
gestor.renderizar();