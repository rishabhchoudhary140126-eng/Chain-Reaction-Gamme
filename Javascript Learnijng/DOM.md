Document  object model

# DOM manipulation

--Selecting with ID:
    document.getElementByI("myID");
    
--Selecting with class:
    document.getElementByClassName("myClass");

--Selecting with tag:
    document.getElementByTagName("p");



--QUERY SELECTOR:
we can select elements with id, class or tag name.
    document.querySelector("myId/myClass/myTag");

    whatever insside, it will rreturn 1st match


    document.querySelectorAll("myId/myClass/myTag");

    will give all elements.

# DOM properties:

-> tagname: returns tag for element nodes.
-> innerText: returns text content of the element and its children.
-> innerHTML: returns plain text or html contents of the element.

-> textContent: return text content even for hidden elements.

# DOM Attributes:

getAttribute(attr)   //to get attribute value
setAttribute(attr, new attr)  //to set the attribute value


# style


# insert elements using DOM

node.appen(el) \\ add element to end of noe/tag
node.prepend(el) \\ add element to start
node.before(el)   \\add element before node(outside)
node.after(el)     \\add element after(outside)
node.remove(el)     \\removes an element.
