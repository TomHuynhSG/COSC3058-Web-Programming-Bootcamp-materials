    document.addEventListener('DOMContentLoaded', function(){
        
        const list = document.querySelector('#movie-list ul');
        const forms = document.forms;

        // delete movies
        list.addEventListener('click', (e) => {
            if(e.target.className == 'delete'){
                const li = e.target.parentElement;
                li.parentNode.removeChild(li);
            }
        });


        // add movies
        const addForm = forms['add-movie'];
        addForm.addEventListener('submit', function(e){
            e.preventDefault();
            // create elements
            const value = addForm.querySelector('input[type="text"]').value;
            const li = document.createElement('li');
            const movieName = document.createElement('span');
            const deleteBtn = document.createElement('span');

            // add text content
            movieName.textContent = value;
            deleteBtn.textContent = 'delete';

            // add classes
            movieName.classList.add('name');
            deleteBtn.classList.add('delete');

            // append to DOM
            li.appendChild(movieName);
            li.appendChild(deleteBtn);
            list.appendChild(li);
        });
    })

