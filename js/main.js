"use strict"
const container = document.querySelector('.container')
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
            if (box.style.backgroundImage !== flippedBoxes[flippedBoxes.length - 2].style.backgroundImage) {
                console.log("hello")
                setTimeout(() => {
                    box.style.backgroundImage = `url(${defaultImage})`
                    flippedBoxes[flippedBoxes.length - 2].style.backgroundImage = `url(${defaultImage})`
                    flippedBoxes.pop()
                    flippedBoxes.pop()
                }, 800)
            }
        }

    })



});