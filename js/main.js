"use strict"
const container = document.querySelector('.container')
const toasts = document.querySelector('.toasts')
const scoreCard = document.querySelector('.score-card')
const images = [
    '../assets/apple.jpg',
    '../assets/banana.jpg',
    '../assets/cherry.jpg',
    '../assets/orange.jpg',
    '../assets/pinneaple.jpg',
    '../assets/strawberry.jpg',
    '../assets/apple.jpg',
    '../assets/banana.jpg',
    '../assets/cherry.jpg',
    '../assets/orange.jpg',
    '../assets/pinneaple.jpg',
    '../assets/strawberry.jpg'
]
const defaultImage = '../assets/question-mark.jpg'
let score = 0
function shuffleArray(arr) {
    let usedIndexes = []
    let shuffledArray = []

    while (shuffledArray.length !== arr.length) {
        const randomIndex = Math.floor(Math.random() * arr.length)
        if (!usedIndexes.includes(randomIndex)) {
            shuffledArray.push(arr[randomIndex])
            usedIndexes.push(randomIndex)
        }
    }
    return shuffledArray
}

const shuffledImages = shuffleArray(images)
const flippedBoxes = []
shuffledImages.forEach((image, index) => {
    const box = document.createElement('div')
    box.classList.add('box')
    box.setAttribute('data-index', index + 1)
    box.style.backgroundImage = `url(${defaultImage})`
    container.appendChild(box)

    box.addEventListener('click', () => {
        flippedBoxes.push(box)
        box.style.backgroundImage = `url(${image})`
        console.log(box.getAttribute('data-index'))


        if (flippedBoxes.length > 1) {
            console.log("if 1")
            console.log(box.style.backgroundImage)
            console.log(flippedBoxes[flippedBoxes.length - 2].style.backgroundImage)
            if (box.getAttribute('data-index') === flippedBoxes[flippedBoxes.length - 2].getAttribute('data-index')) {
                toastNotif("you pressed the same box twice", "error")
                box.style.backgroundImage = `url(${defaultImage})`
                flippedBoxes[flippedBoxes.length - 2].style.backgroundImage = `url(${defaultImage})`
                flippedBoxes.pop()
                flippedBoxes.pop()
            }
            else if (box.style.backgroundImage !== flippedBoxes[flippedBoxes.length - 2].style.backgroundImage) {
                console.log("hello")
                setTimeout(() => {
                    box.style.backgroundImage = `url(${defaultImage})`
                    flippedBoxes[flippedBoxes.length - 2].style.backgroundImage = `url(${defaultImage})`
                    flippedBoxes.pop()
                    flippedBoxes.pop()
                }, 800)
            }

            else if (box.style.backgroundImage === flippedBoxes[flippedBoxes.length - 2].style.backgroundImage) {
                toastNotif("wow you got a match", "success")
                flippedBoxes.pop()
                flippedBoxes.pop()
                score++
                scoreCard.innerText = score
            }
        }

    })



});

function toastNotif(message, state) {
    const toast = document.createElement('div')
    toast.innerText = message
    toast.classList.add('toast', state)
    toasts.appendChild(toast)

    setTimeout(() => { toast.remove() }, 1000)
}