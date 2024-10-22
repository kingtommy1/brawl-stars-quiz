const matrixElement = document.getElementById('matrix');
const siteContent = document.getElementById('site-content');

function startMatrixEffect() {
    const canvas = document.createElement('canvas');
    matrixElement.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const columns = canvas.width / 20;
    const drops = Array(Math.floor(columns)).fill(1);

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const fontSize = 20;
    const speed = 10;

    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#0F0';
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
            const text = characters.charAt(Math.floor(Math.random() * characters.length));
            ctx.fillText(text, i * 20, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            drops[i]++;
        }
    }

    setInterval(drawMatrix, speed);

    setTimeout(() => {
        matrixElement.style.display = 'none';
        siteContent.style.display = 'block';
    }, 5000);
}

window.onload = startMatrixEffect;
