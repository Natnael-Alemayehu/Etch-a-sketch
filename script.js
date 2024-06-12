
document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.querySelector(".container");

    for (let i = 0; i < 256; i++) {
        const gridItem = document.createElement('div');
        gridItem.id = 'divs';

        gridItem.addEventListener('mouseover', () => {
            gridItem.style.backgroundColor = '#000'; // Change color on hover
        });

        gridItem.addEventListener('mouseout', () => {
            setInterval(() => {
                gridItem.style.backgroundColor = '#e2e2e2';
            }, 5000)
        });

        gridContainer.appendChild(gridItem);
    }
});