export class View {

    constructor (app) {
        this.app = app;
        this.newTodo = document.querySelector('.new-todo');
        this.todoList = document.querySelector('.todo-list');
        this.todoCount = document.querySelector('.todo-count').firstChild;
        this.filters = document.querySelector('.filters');
        this.clearCompleted = document.querySelector('.clear-completed');
        this.setControls();
    }

    addTarea (tarea) {
        const li = document.createElement("li");
        li.id = `id${tarea.id}`;
        if (tarea.hecho) {
            li.classList.add('completed');
        }
        li.innerHTML = `
            <div class="view">
                <input class="toggle" type="checkbox" ${(tarea.hecho? 'checked': '')} >
                <label>${ tarea.txt }</label>
                <button class="destroy"></button>
            </div>`;
        
        li.querySelector('.destroy').addEventListener('click', (e) => this.app.deleteTarea(tarea.id));
        li.querySelector('.toggle').addEventListener('click', (e) => this.app.toggleTarea(tarea.id));

        this.todoList.append(li);
        this.updatePendientes();
        
    }

    deleteTarea(id) {
        const li = document.querySelector(`#id${id}`);
        li.remove();
        this.updatePendientes();
    }

    toogleTarea(id) {
        const li = document.querySelector(`#id${id}`);

        if (li.classList.contains('completed')) {
            li.classList.remove('completed');
        } else {
            li.classList.add('completed');
        }
        this.updatePendientes();
    }

    refresh(listaTareas) {
        this.todoList.innerHTML ='';
        for(const id in listaTareas.lista) {
            this.addTarea(listaTareas.lista[id]);
        }
        this.updatePendientes();
    }

    updatePendientes() {
        const lis = this.todoList.querySelectorAll('li');
        let total = 0;
        lis.forEach(li => total+=(li.classList.contains('completed')?0:1));
        this.todoCount.innerText = total;
    }

    filtrar (filtro) {
        const lis = this.todoList.querySelectorAll('li');
        lis.forEach(li => {
            li.classList.remove('hidden');
            switch (filtro) {
                case 'Completados':
                    if (!li.classList.contains('completed')) {
                        li.classList.add('hidden');
                    }
                    break;
                case 'Pendientes':
                    if (li.classList.contains('completed')) {
                        li.classList.add('hidden');
                    }
                    break;
                default:
                    break;
            }
        });
    }

    setControls () {
        this.newTodo.addEventListener('change', (e) => {
            const txt = e.target.value;
            if (txt != '') {
                this.app.addTarea(txt);
                e.target.value = '';
            }
        });
        
        this.clearCompleted.addEventListener('click', (e) => this.app.clearCompleted());

        this.filters.addEventListener('click', (e) => {
            const filtros = this.filters.querySelectorAll('.filtro');
            filtros.forEach(filtro => filtro.classList.remove('selected'));
            e.target.classList.add('selected');            
            this.filtrar(e.target.innerText);
        });
    }



}