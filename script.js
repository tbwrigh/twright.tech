// Album URLs will be imported from album_urls.js
let currentAlbumIndex = 0;

// Shuffle array using Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Preload an image
function preloadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(url);
        img.onerror = reject;
        img.src = url;
    });
}

// Preload next N images
async function preloadNextImages(startIndex, count) {
    const preloadPromises = [];
    for (let i = 0; i < count; i++) {
        const index = (startIndex + i) % albumUrls.length;
        preloadPromises.push(preloadImage(albumUrls[index]));
    }
    return Promise.all(preloadPromises);
}

// Function to get next album URL in a circular manner
function getNextAlbumUrl() {
    const url = albumUrls[currentAlbumIndex];
    currentAlbumIndex = (currentAlbumIndex + 1) % albumUrls.length;
    return url;
}

// Function to calculate responsive dimensions
function getResponsiveDimensions() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Calculate number of rows based on screen height
    const numRows = Math.max(3, Math.floor(height / 200)); // One row per 200px of height, minimum 3
    
    // Calculate album size based on screen width
    const albumSize = Math.min(220, Math.max(120, width * 0.15)); // Between 120px and 220px, or 15% of screen width
    
    // Calculate row height and spacing
    const rowHeight = albumSize; // Row height matches album size
    const totalSpacing = height - (rowHeight * numRows); // Total space to distribute
    const spacing = totalSpacing / (numRows + 1); // Even spacing between rows
    
    return {
        numRows,
        albumSize,
        rowHeight,
        spacing
    };
}

// Function to create album cover elements
async function createAlbumCovers() {
    // Shuffle the album URLs array
    shuffleArray(albumUrls);
    
    // Get responsive dimensions
    const { numRows, albumSize, rowHeight, spacing } = getResponsiveDimensions();
    
    // Preload initial set of images
    await preloadNextImages(0, numRows * 10); // Preload enough images for all rows
    
    const container = document.querySelector('.background-container');
    container.innerHTML = ''; // Clear existing rows
    
    // Create rows dynamically
    for (let i = 0; i < numRows; i++) {
        const row = document.createElement('div');
        row.className = 'album-row';
        row.style.height = `${rowHeight}px`;
        row.style.position = 'absolute';
        row.style.top = `${spacing + (i * (rowHeight + spacing))}px`; // Position each row with even spacing
        row.style.width = '100%';
        container.appendChild(row);
    }
    
    const rows = document.querySelectorAll('.album-row');
    const albumWidth = albumSize + 20; // Width of album cover + margin
    
    rows.forEach((row, rowIndex) => {
        const albumContainer = document.createElement('div');
        albumContainer.style.display = 'flex';
        albumContainer.style.position = 'absolute';
        albumContainer.style.left = '0';
        albumContainer.style.transition = 'transform 0.5s linear';
        
        // Create initial set of album covers
        const initialCount = Math.ceil(window.innerWidth / albumWidth) + 2; // Enough to fill screen plus buffer
        for (let i = 0; i < initialCount; i++) {
            const img = document.createElement('img');
            img.src = getNextAlbumUrl();
            img.className = 'album-cover';
            img.style.width = `${albumSize}px`;
            img.style.height = `${albumSize}px`;
            albumContainer.appendChild(img);
        }
        
        row.appendChild(albumContainer);
        
        // Set up the animation with different starting positions and speeds for each row
        let position = -albumWidth * rowIndex * 0.4; // Offset each row
        const direction = -1; // All rows move left
        const speed = Math.random() * 0.6 + 0.9; // Random speed between 0.9 and 1.5
        
        function animate() {
            position += direction * speed; // Move in the appropriate direction with varying speed
            albumContainer.style.transform = `translateX(${position}px)`;
            
            let window_width = window.innerWidth;
            
            // Add new albums when needed
            if (position < albumWidth) {
                const newImg = document.createElement('img');
                newImg.src = getNextAlbumUrl();
                newImg.className = 'album-cover';
                newImg.style.width = `${albumSize}px`;
                newImg.style.height = `${albumSize}px`;
                albumContainer.appendChild(newImg);
                preloadNextImages(currentAlbumIndex, 1);
            }
            
            // Remove albums that have left the screen
            const windowWidth = window.innerWidth;
            while (albumContainer.lastChild && 
                   albumContainer.lastChild.getBoundingClientRect().left > windowWidth) {
                albumContainer.removeChild(albumContainer.lastChild);
            }
            
            requestAnimationFrame(animate);
        }
        
        animate();
    });
}

// Handle window resize
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(createAlbumCovers, 250); // Debounce resize events
});

// Initialize the background
async function initBackground() {
    await createAlbumCovers();
}

// Start the background when the page loads
window.addEventListener('load', initBackground); 