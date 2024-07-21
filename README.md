
# Online HTML Editor

An online editor for HTML, CSS, and JavaScript with real-time preview and project saving capabilities. This tool allows users to write and edit code in a web-based interface, preview their work in real-time, and save their projects as a ZIP file.

## Features

- **Real-time Preview**: Instantly preview the HTML, CSS, and JavaScript code as you type.
- **CodeMirror Integration**: Enhanced code editing experience with syntax highlighting, line numbers, and various themes.
- **Save Projects**: Save your HTML, CSS, and JavaScript files as a ZIP package.
- **Responsive Design**: Works seamlessly on various devices and screen sizes.

## Technologies Used

- **HTML**
- **CSS**
- **JavaScript**
- **CodeMirror**: Syntax highlighting and code editing.
- **JSZip**: Generating ZIP files for project downloads.
- **FileSaver.js**: Saving files locally on the user's device.

## Getting Started

### Prerequisites

Ensure you have a modern web browser installed. No additional software is required.

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/online-html-editor.git
    ```
2. Navigate to the project directory:
    ```sh
    cd online-html-editor
    ```

### Usage

1. Open the `index.html` file in your web browser.
2. Start editing the HTML, CSS, and JavaScript code in the respective editors.
3. See the live preview of your code in the preview pane.
4. Click the "Save" button to download your project as a ZIP file.

### File Structure

```
online-html-editor/
│
├── index.html          # Main HTML file
├── styles.css          # CSS styles for the project
├── scripts.js          # JavaScript for editor functionality
├── README.md           # Project README file

```

## Customization

### Changing the Theme

You can change the CodeMirror theme by updating the link to the CSS file in the `index.html`:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.5/theme/monokai.min.css">
```

Replace `monokai` with your preferred theme. Available themes can be found on the [CodeMirror website](https://codemirror.net/).

### Adding More Languages

To add support for more programming languages in the editor, include the respective mode files from CodeMirror:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.5/mode/python/python.min.js"></script>
```

And configure the editor in the `scripts.js` file accordingly.

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgements

- [CodeMirror](https://codemirror.net/)
- [JSZip](https://stuk.github.io/jszip/)
- [FileSaver.js](https://github.com/eligrey/FileSaver.js)
