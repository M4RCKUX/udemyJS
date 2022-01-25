// importaciones

import '../css/components.css';

export const getHTML = (tarea) => {

    const li = document.createElement('li');
    li.id = tarea.id;
    if (tarea.hecho == true) {
        li.classList.add('completed');
    }

    li.innerHTML = (
`						<div class="view">
                            <input class="toggle" type="checkbox" ${(tarea.heho? 'checked': '')} >
                            <label>${tarea.txt}</label>
                            <button class="destroy"></button>
                        </div>
                        <input class="edit" value="Create a TodoMVC template">
                        `);
    return li;
}

