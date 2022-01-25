// 1. Change the title of the page to `Hello AltCampus!`
document.title='Hello Altcampus!';
// 2. Select the element using the children property:
console.log(document.head.children[2]);
//    - Select the `h1` element and change the value to `Learning DOM`
let h=document.body.children[0];
h.innerText='Learning DOM';

//    - Select the first `li` element inside the `ul` with class `topics` and change the innerText to `all about document`
let l=document.querySelector('li');
l.innerText='all about document';
//    - Select the input element with name `email`
console.log(document.body.children[6].children[2]);
// 3. Log the number (using console.log) of children of all the `li` element inside the ul with class `topics`
console.log(document.querySelectorAll('li').length);
// 4. Select the first input using the `type` selector and store them in variable named `emailInput`
let emailInput = document.body.children[6].children[2].type;
// 5. Select the ul element using class selector and store in `topics`
let topics = document.getElementsByClassName('topics');
// 6. Select the first label element and store in `label`
let label = document.querySelector('label');
// 7. Select the input of type `checkbox` with the `id` selector and store in `inputCheckbox`
let inputCheckbox = document.getElementById('remember');
// 8. Select the input of type password using Attribute selectors. (eg: input[type="text"]) and store in `password`
let password = document.body.children[6].children[4].type;
// 9. Select the input using the placeholder attribute selector with value `password` and store in `attrPassword`
let attrPassword = document.body.children[6].children[4].placeholder;
// 10. Select all the `li` element and store in `allTopics`
let allTopics = document.querySelectorAll('li');
// 11. Select all the input element of any type and store in `allInput`
let allInput=document.body.children[6].children[5].children[0];
// 12. Use forEach to console the `innerText` property of all the li element in `allTopics` variable.
let y=allTopics.forEach(x=>{
    console.log(x.innerText);
})
// 13. Select all the elements with class `list` and store in variable `listOfSelectedTopics`
let listOfSelectedTopics = document.getElementsByClassName('list');
// 14. Select the first li element inside the `ul` element using `>` (direct child) and store in `firstLi`
let firstLi = document.body.children[5].querySelector('li');
// 15. Select all the img element and log the number of element saying `The total number of img element is ---`
let noOfImg= document.getElementsByTagName('img');
console.log(`The total number of img element is ${noOfImg.length}`);
// 16. Select all the `p` element and store in `allPElement`
let allPElement = document.querySelectorAll('p');
// 17. Select all the buttons and log the count of buttons.
console.log(document.getElementsByTagName('button').length);
// 18. Select all the `label` element and log the count.
console.log(document.getElementsByTagName('label').length);
// 19. Select all the elements with `id` of `test`
document.querySelectorAll('#test');
// 20. Select the first element with id `test` using `getElementById`
document.getElementById('test');
// 21. Select the parent element of the element stored in `topics` variable (#5) and log the element.
let parent = document.querySelector('ul');
console.log(parent.parentElement);
// 22. Select the next element sibling of the element stored in `topics` variable (#5) and log the element.
console.log(parent.nextElementSibling);
// 23. Select the previous element sibling of the element stored in `topics` variable (#5) and change the `innerText` property to `Learning About Walking the DOM`.
console.log(parent.previousElementSibling);

// 24. Select the first element child of the element stored in `topics` variable (#5) and change the `innerText` property of the element to `This is the first child element`.
console.log(parent.firstElementChild);

// 25. Select the last element child of the element stored in `topics` variable (#5) and log the `typeof` the element.
console.log(parent.lastElementChild);

// 26. Select the element with type `fieldset` and store in a variable named `fieldsetElm`.
let fieldsetElm = parent.nextElementSibling;

// 27. Select the parent element of the element stored in `fieldsetElm` variable (#5) and log the `typeof` the element.
console.log(typeof(fieldsetElm.parentElement));