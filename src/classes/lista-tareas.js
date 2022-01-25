export class ListaTareas {

    constructor () {
        this.lista = {};
    }

    add(tarea) {
        this.lista[tarea.id] = tarea;
    }

    eliminar(id) {
        delete this.lista[id];
    }

    get(id) {
        return this.lista[id];
    }

    toggle(id) {
        this.lista[id].hecho = !this.lista[id].hecho;
    }

    eliminarCompletados() {
        for (const id in this.lista) {
            if (this.lista[id].hecho) delete this.lista[id];
        }
    }

}