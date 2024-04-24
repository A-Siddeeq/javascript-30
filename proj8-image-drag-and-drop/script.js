let boxes = document.querySelectorAll('#image-box');
let image = document.querySelector('#image');

boxes.forEach((box) => {
    box.addEventListener('dragover', 
    (e) => {
        e.preventDefault()
        box.classList.add('hovered')
    })

    box.addEventListener('dragleave', 
    () => box.classList.remove('hovered'))

    box.addEventListener('drop', 
    () => {
        box.appendChild(image)
        box.classList.remove('hovered')
    })
}
)