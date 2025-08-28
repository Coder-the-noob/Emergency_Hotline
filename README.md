# JavaScript Questions & Answers

## 1. Difference between getElementById, getElementsByClassName, querySelector, and querySelectorAll

- **getElementById()**  
  - Selects a single element by its unique `id`.

- **getElementsByClassName()**  
  - Selects all elements that share the same class (returns an HTMLCollection).

- **querySelector()**  
  - Selects the first element that matches a CSS selector.  
  - Example:
    ```html
    <p class="example">First Paragraph</p>
    <p class="example">Second Paragraph</p>

    <script>
      document.querySelector("p.example").style.backgroundColor = "red";
    </script>
    ```
    👉 Only the first `<p>` will be affected.

- **querySelectorAll()**  
  - Selects all elements that match a CSS selector (returns a NodeList).  
  - Example:
    ```html
    <h2 class="example">A heading</h2>
    <p class="example">First paragraph</p>
    <p class="example">Second paragraph</p>

    <script>
      const nodeList = document.querySelectorAll(".example");
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.backgroundColor = "red";
      }
    </script>
    ```
    👉 All elements with `"example"` class will be affected.

## 2. How do you create and insert a new element into the DOM?

  Steps:
  1. **Create an element** --> `document.createElement("tagname")`
  2. **Add text or attributes** --> `element.textContent = "Hello"`
  3. **Insert into the DOM** --> `parent.appendChild(element)`
 
  Example:
  ```js
  const newDiv = document.createElement("div");
  newDiv.textContent = "I am new here!";
  document.body.appendChild(newDiv);
```
## 3. What is Event Bubbling and how does it work?

- **Event Bubbling** means when an event happens on a child element, it also triggers on its parent elements, moving upward in the DOM tree.

**Example:**
```html
<div id="parent" style="padding:20px; background:lightblue;">
  Parent Div
  <button id="child">Click Me</button>
</div>

<script>
document.getElementById("parent").addEventListener("click", function() {
  alert("Parent Div Clicked!");
});
document.getElementById("child").addEventListener("click", function() {
  alert("Button Clicked!");
});
</script>
```
## 4.What is Event Delegation in JavaScript? Why is it useful?

**Event Delegation is like this:
- When children (child elements) make trouble, instead of complaining to each child, people complain to the parent(parent element). The parent handles it.
- In JavaScript, instead of attaching event listeners to every child, we attach it once to the parent,and the parent decides what to do when a child is clicked.

-It saves memory and works for elements added later

- **Example:**
```html
<ul id="parentList">
  <li>Child 1</li>
  <li>Child 2</li>
  <li>Child 3</li>
</ul>

<script>
document.getElementById("parentList").addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    alert("Parent handled the event from: " + event.target.textContent);
  }
});
</script>
```
## 5. What is the difference between preventDefault() and stopPropagation() methods?

- **preventDefault()** → Stops the browser’s default action.  
  - Example: By default, if you place a button inside a `<form>` tag, it acts like a **submit button** and refreshes the page.  
  - To stop this behavior, we use `preventDefault()` in JavaScript.  

- **stopPropagation()** → Stops the event from bubbling up to parent elements.
  -Example: If you click a button inside a div, the click won't go up to the div.  

**Example:**
```html
<form>
  <button id="formBtn">Form Button</button>
</form>

<div id="parentDiv" style="padding:20px; background:lightblue;">
  Parent Div
  <button id="childBtn">Click Me</button>
</div>

<script>
// Example of preventDefault()

document.getElementById("formBtn").addEventListener("click", function(event) {
  event.preventDefault(); // stops form from submitting (page refresh)
  alert("Form submit prevented!");
});

// Example of stopPropagation()
document.getElementById("parentDiv").addEventListener("click", function() {
  alert("Parent Div Clicked!");
});

document.getElementById("childBtn").addEventListener("click", function(event) {
  event.stopPropagation(); // stops bubbling to parent
  alert("Button Clicked! (Parent won't be triggered)");
});
</script>
```

