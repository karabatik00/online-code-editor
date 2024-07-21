// scripts.js

document.addEventListener('DOMContentLoaded', (event) => {
    const htmlTextarea = document.getElementById('html-code');
    const cssTextarea = document.getElementById('css-code');
    const jsTextarea = document.getElementById('js-code');

    // Ensure textareas are visible for initialization
    htmlTextarea.style.display = 'block';
    cssTextarea.style.display = 'block';
    jsTextarea.style.display = 'block';

    const htmlEditor = CodeMirror.fromTextArea(htmlTextarea, {
        mode: 'htmlmixed',
        theme: 'monokai',
        lineNumbers: true
    });

    const cssEditor = CodeMirror.fromTextArea(cssTextarea, {
        mode: 'css',
        theme: 'monokai',
        lineNumbers: true
    });

    const jsEditor = CodeMirror.fromTextArea(jsTextarea, {
        mode: 'javascript',
        theme: 'monokai',
        lineNumbers: true
    });

    // Hide textareas after CodeMirror initialization
    htmlTextarea.style.display = 'none';
    cssTextarea.style.display = 'none';
    jsTextarea.style.display = 'none';

    const debounce = (func, delay) => {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), delay);
        };
    };

    const updatePreview = debounce(function() {
        const htmlCode = htmlEditor.getValue();
        const cssCode = `<style>${cssEditor.getValue()}</style>`;
        const jsCode = `<script>${jsEditor.getValue()}<\/script>`;

        const previewFrame = document.getElementById('preview');
        const previewDocument = previewFrame.contentDocument || previewFrame.contentWindow.document;

        const combinedCode = `${htmlCode}\n${cssCode}\n${jsCode}`;

        previewDocument.open();
        previewDocument.write(combinedCode);
        previewDocument.close();
    }, 300);

    htmlEditor.on('change', updatePreview);
    cssEditor.on('change', updatePreview);
    jsEditor.on('change', updatePreview);

    window.saveProject = function() {
        const projectName = document.getElementById('project-title').innerText.trim() || 'Untitled';
        const htmlCode = htmlEditor.getValue();
        const cssCode = cssEditor.getValue();
        const jsCode = jsEditor.getValue();

        const zip = new JSZip();
        zip.file(`${projectName}/index.html`, htmlCode);
        zip.file(`${projectName}/styles.css`, cssCode);
        zip.file(`${projectName}/script.js`, jsCode);

        zip.generateAsync({ type: 'blob' })
            .then(function(content) {
                saveAs(content, `${projectName}.zip`);
            });
    };

    updatePreview();
});
