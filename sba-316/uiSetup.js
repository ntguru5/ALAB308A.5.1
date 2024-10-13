// this file will handle the styling of the UI elements

export function setupBodyStyles() {
    document.body.style.fontFamily = 'Source Code Pro, monospace';
    document.body.style.backgroundColor = 'azure';
    // Set font for everything else
    const formElements = document.querySelectorAll('button, input, select');
    formElements.forEach((element) => {
    element.style.fontFamily = "'Source Code Pro', 'monospace'";
});
}

export function styleButtons(buttons) {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        // Set base styles
        button.style.padding = '10px 15px';
        button.style.borderRadius = '7px';
        button.style.border = 'none';
        button.style.backgroundColor = 'green';
        button.style.color = '#fff';
        button.style.fontSize = '15px';
        button.style.cursor = 'pointer';
        button.style.transition = 'background-color 0.3s ease, box-shadow 0.3s ease';
        button.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';

        // Hover effect
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = '#6200ea';
            button.style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.15)';
        });

        // Reset styles on mouse out
        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = 'green';
            button.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });
}
