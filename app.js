const arr = ['red', 'y', 'or', 'pu', 'gr', 'cy', 'bl'];

const randomize = () => arr[Math.floor(Math.random() * arr.length)]

const arrColor = Array.from({ length: 160 }, randomize)

const cont = document.querySelector('.cont')

cont.style.backgroundImage = arrColor.map(url => `url("${url}.svg")`).join(', ');

// const step = 6
// const arrPosX = Array.from({ length: 20 }, (_, index) => index * step);
// const arrPosY = Array.from({ length: 20 }, (_, index) => index * step);

const matrix = [];


const size = 20; // 20x20 matrix
const stepX = 8.2; // Step of 6
const stepY = 12.3;
// Generate the matrix
for (let i = 0; i <= 10; i++) {
    // Initialize the current row
    const row = [];
    for (let j = 0; j <= 16; j++) {
        // Calculate the current position with the step
        const x = j * stepX;
        const y = i * stepY;
        // Add the position to the row
        row.push({ x, y });
    }
    // Add the row to the matrix
    matrix.push(row);
}

// Output the matrix
console.log(matrix.map(item => item.map(subitem => `${subitem.x}% ${subitem.y}%`)));

cont.style.backgroundPosition = matrix.map(item => item.map(subitem => `${subitem.x}% ${subitem.y}%`).join(',')).join(',');

cont.style.backgroundRepeat = 'no-repeat';