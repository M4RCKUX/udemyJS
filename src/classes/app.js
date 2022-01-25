import { Tarea } from '.';
import { Model } from '.';
import { View } from '.';

export class App {

    constructor () {
        this.model = new Model();
        this.listaTareas = this.model.loadListaTareas();
        this.view = new View(this);
        this.view.refresh(this.listaTareas);
    }

    addTarea (txt) {
        const tarea = new Tarea(txt);
        this.listaTareas.add(tarea);
        this.view.addTarea(tarea);
        this.model.saveListaTareas(this.listaTareas);
    }

    toggleTarea (id) {
        this.listaTareas.toggle(id);
        this.view.toogleTarea(id);
        this.model.saveListaTareas(this.listaTareas);
    }

    deleteTarea (id) {
        this.listaTareas.eliminar(id);
        this.view.deleteTarea(id);
        this.model.saveListaTareas(this.listaTareas);
    }

    clearCompleted() {
        this.listaTareas.eliminarCompletados();
        this.view.refresh(this.listaTareas);
        this.model.saveListaTareas(this.listaTareas);
    }

}