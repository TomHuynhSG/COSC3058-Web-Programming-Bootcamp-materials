const element = document.getElementById('example');

console.log('outerHTML:', element.outerHTML);
// This will return the entire HTML of the element, including the element itself.
// Output: "<div id="example">Visible text, <span style="display: none;">hidden text,</span> <span>more visible text.</span></div>"

console.log('innerHTML:', element.innerHTML);
// This will return the HTML content inside the element, including HTML tags.
// Output: "Visible text, <span style="display: none;">hidden text,</span> <span>more visible text.</span>"

console.log('textContent:', element.textContent);
// This includes the text content of all elements, visible or not.
// Output: "Visible text, hidden text, more visible text."

console.log('innerText:', element.innerText);
// This will only include the text that is visually rendered, ignoring the <span> with display: none.
// Output: "Visible text, more visible text."

// Note: nodeValue is applicable to Text, Comment, and CDATASection nodes, not directly to Element nodes.
// To demonstrate nodeValue, let's access the first child node of the element, which is a Text node.
const firstTextNode = element.childNodes[0];
console.log('nodeValue:', firstTextNode.nodeValue);
// This will return the text content of the first text node.
// Output: "Visible text,"
