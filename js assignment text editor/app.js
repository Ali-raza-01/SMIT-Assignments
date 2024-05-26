// Function to apply selected font family
function applyFontFamily() {
    var fontFamily = document.getElementById('fontFamily').value;
    document.getElementById('textArea').style.fontFamily = fontFamily;
}

// Function to apply selected font size
function applyFontSize() {
    var fontSize = document.getElementById('fontSize').value;
    document.getElementById('textArea').style.fontSize = fontSize;
}

// Function to toggle bold style
function makeBold() {
    var textArea = document.getElementById('textArea');
    var currentWeight = window.getComputedStyle(textArea, null).getPropertyValue('font-weight');
    var newWeight = (currentWeight === 'bold') ? 'normal' : 'bold';
    textArea.style.fontWeight = newWeight;
}

// Function to toggle italic style
function makeItalic() {
    var textArea = document.getElementById('textArea');
    var currentStyle = window.getComputedStyle(textArea, null).getPropertyValue('font-style');
    var newStyle = (currentStyle === 'italic') ? 'normal' : 'italic';
    textArea.style.fontStyle = newStyle;
}

// Function to justify text
function justify(align) {
    document.getElementById('textArea').style.textAlign = align;
}

// Apply font family and font size when dropdown values change
document.getElementById('fontFamily').addEventListener('change', applyFontFamily);
document.getElementById('fontSize').addEventListener('change', applyFontSize);
