const arrayContainer = document.getElementById('arrayContainer');
const generateArrayBtn = document.getElementById('generateArray');
const startSortingBtn = document.getElementById('startSorting');
const arraySizeInput = document.getElementById('arraySize');
const arrayElementInput = document.getElementById('arrayElement');
const addElementBtn = document.getElementById('addElement');

generateArrayBtn.addEventListener('click', generateArray);
startSortingBtn.addEventListener('click', bubbleSort);
addElementBtn.addEventListener('click', addElement);

let array = [];

function generateArray() {
    const size = parseInt(arraySizeInput.value);
    array = [];
    arrayContainer.innerHTML = '';

    for (let i = 0; i < size; i++) {
        const value = Math.floor(Math.random() * 100) + 1;
        array.push(value);

        const arrayBar = document.createElement('div');
        arrayBar.className = 'array-bar';
        arrayBar.style.height = `${value * 3}px`;
        arrayContainer.appendChild(arrayBar);
    }
}

function addElement() {
    const value = parseInt(arrayElementInput.value);
    if (!isNaN(value)) {
        array.push(value);

        const arrayBar = document.createElement('div');
        arrayBar.className = 'array-bar';
        arrayBar.style.height = `${value * 3}px`;
        arrayContainer.appendChild(arrayBar);
    }
}

async function bubbleSort() {
    const bars = document.querySelectorAll('.array-bar');

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            bars[j].style.backgroundColor = '#000'; // Highlight the selected bar
            bars[j + 1].style.backgroundColor = '#000';

            if (array[j] > array[j + 1]) {
                await swap(j, j + 1);
            }

            bars[j].style.backgroundColor = '#000'; // Reset the color
            bars[j + 1].style.backgroundColor = '#000';
        }
    }
}

async function swap(i, j) {
    await sleep(50);

    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;

    const bars = document.querySelectorAll('.array-bar');
    const bar1 = bars[i];
    const bar2 = bars[j];

    const tempHeight = bar1.style.height;
    bar1.style.height = bar2.style.height;
    bar2.style.height = tempHeight;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


generateArray();
