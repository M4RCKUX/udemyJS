import { ListaTareas } from ".";
import { Tarea } from ".";


export class Model {

    constructor () {

    }

    loadListaTareas() {
        const listaTareas = new ListaTareas();
        const lista =  JSON.parse(localStorage.getItem('listaTareas'));

        console.log(lista);

        if (lista) {
            for (const id in lista) {
                listaTareas.add(new Tarea(
                    lista[id].txt,
                    lista[id].hecho,
                    lista[id].id,
                    lista[id].fechaInicio
                ));
            }
        }


        return listaTareas;
        
    }

    saveListaTareas(listaTareas) {
        localStorage.setItem('listaTareas', JSON.stringify(listaTareas.lista))
    }
    
}