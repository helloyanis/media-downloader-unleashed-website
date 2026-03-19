// Function to generate a system-based color scheme
function generateSystemColor() {
    const rgbToHex = (r, g, b) => '#' + [r, g, b]
        .map(x => x.toString(16).padStart(2, '0')).join('')
    // Generate a color based on the system theme
    const accentColorEl = document.createElement('div');
    accentColorEl.style.backgroundColor = 'AccentColor';
    document.body.appendChild(accentColorEl);
    const bgColor = getComputedStyle(accentColorEl).backgroundColor;
    document.body.removeChild(accentColorEl);
    const rgb = bgColor.match(/\d+/g).map(Number);
    let hexColor = '#2196f3'; // Default to blue
    if (rgbToHex(rgb[0], rgb[1], rgb[2]) !== '#000000' && rgbToHex(rgb[0], rgb[1], rgb[2]) !== '#ffffff') hexColor = rgbToHex(rgb[0], rgb[1], rgb[2]);
    return hexColor;
}
window.onload = () => {
mdui.setColorScheme(generateSystemColor());
}