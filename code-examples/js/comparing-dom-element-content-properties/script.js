const divElement = document.getElementById('example');

console.log('outerHTML:', divElement.outerHTML);
// outerHTML: <div id="example" style="display: none;">Hello, <span>world!</span></div>

console.log('innerHTML:', divElement.innerHTML);
// innerHTML: Hello, <span>world!</span>

console.log('textContent:', divElement.textContent);
// textContent: Hello, world!

console.log('innerText:', divElement.innerText);
// innerText: (empty string due to display: none)

// Accessing the nodeValue of the first child node (a text node)
const firstTextNode = divElement.childNodes[0];
console.log('nodeValue:', firstTextNode.nodeValue);
// nodeValue: Hello, 
