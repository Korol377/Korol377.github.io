function changeColorById(){
    const elementId = document.getElementById('first_id')
    const elementId_2 = document.getElementById('second_id')
    elementId.style.color = 'yellow'
    elementId.style.backgroundColor = 'green'
    elementId_2.style.color = 'yellow'
    elementId_2.style.backgroundColor = 'green'

}


function changeColorBySelector(){
    const elementSelector = document.querySelector('#first_id')
    const elementSelector_2 = document.querySelector('#second_id')
    elementSelector.style.color = 'green'
    elementSelector.style.backgroundColor = 'yellow'
    elementSelector_2.style.color = 'green'
    elementSelector_2.style.backgroundColor = 'yellow'
}

function zoom_in_images(){
    const imageLviv = document.getElementById('Lviv-photo')
    imageLviv.style.width = '660px'
}

function diminish_images(){
    const imageLviv = document.getElementById('Lviv-photo')
    imageLviv.style.width = '550px'
}

function deleteImage(){
    const imageLviv = document.getElementById('Lviv-photo')
    imageLviv.style.display = 'none';
}

function addImage(){
    const imageLviv = document.getElementById('Lviv-photo')
    imageLviv.style.display = 'block';
}