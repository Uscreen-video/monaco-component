<a name="readme-top"></a>

<div align="center">

  <h3 align="center"><code>&#60;monaco-editor&#62;</code></h3>

  <p align="center">
    Monaco Editor as a web-component
    <br />
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
    ·
    <a href="https://github.com/Uscreen-video/monaco-component/issues">Report Bug</a>
  </p>
</div>

## About

This is a minimal setup of [Monaco Editor](https://microsoft.github.io/monaco-editor/) in a shape of web-component. The main idea behind this repo is to skip building process of editor on the local environment.


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

To make it properly load from CDN you have to set a `window.__monaco_component_base` function that resolves a **url**

```javascript
window.__monaco_component_base = function(filename) {
  return 'https://unpkg.com/monaco-component@latest/dist/' + filename
}
```

### Installation

Load from a CDN
```html
<script>
  window.__monaco_component_base = function(filename) {
    return 'https://unpkg.com/monaco-component@latest/dist/' + filename
  }
  window.__monaco_component_module_base = function(filename) {
    return 'https://unpkg.com/monaco-component@latest/lib/' + filename
  }
</script>
<script type="module" src="https://unpkg.com/monaco-component@latest/lib/monaco-component.js"></script>
<script nomodule src="https://unpkg.com/monaco-component@latest/dist/index.js"></script>
```
Install using NPM packages
```sh
npm install monaco-component
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

```html
<monaco-editor
  value="<p>Hello world<p>"
  name="test"
  language="html"
  theme="monokai"
></monaco-editor>
```
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
