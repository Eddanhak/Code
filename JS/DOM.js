
            const container = document.querySelector("#container");
            // Selects the "container" div. with id(#).
            console.dir(container.firstElementChild);
            // Selects first child of container id.
            const controls = document.querySelector(".controls");
            // Selects the "controls" div. with class(.).
            console.dir(controls.previousElementSibling);
            // Secelts the sibling before the given.


            // Using query selectors to create and manipulate html elements.

            const newDiv = document.createElement("div");
            const newParagraph = document.createElement("p");
            //  This creates a div element in memory only.
            // Can manipulate, add styles and all other things before placing it on page.
            

            newDiv.style.color = "aqua";
            // Adds style rule.

            newDiv.style.cssText = "color: aqua; background: red";
            // Adds several rules.

            newDiv.setAttribute("style", "color: aqua; background: red");
            // Add several rules.

            newDiv.setAttribute("id", "theDiv");
            // If given id exists, update it to 'theDiv'. Else creates an id with value theDiv.

            newDiv.getAttribute("id");
            // Returns value of specified attribute 'id'. = theDiv.

            newDiv.removeAttribute("id");
            // Removes specified attribute.

            newDiv.classList.add("new");
            // Adds class "new" to div.

            newDiv.classList.remove("new");
            // Removes "new" from div.

            newDiv.classList.toggle("active");
            // If div does not have class "active", add it. if it exists, remove it.
            // It is often standard (and cleaner) to toggle a CSS style rather than adding and removing inline CSS.
            
            newParagraph.textContent = "Hallaaaauuu";
            newDiv.textContent = "Hallau Dau";

            newDiv.innerHTML = "<span>Hallau Du. </span>";
            newParagraph.innerHTML = "<span> Hallau DU. </span>";

            container.appendChild(controls);
            newDiv.appendChild(newParagraph);
            // parentNode.insertBefore(newNode, referenceNode);
            // Use these methods to place element into the DOM.
            
            container.removeChild(controls);
            // Removes from DOM and returns reference to child.
            
            bodyEdit = document.querySelector("body");
            bodyEdit.setAttribute("style", "background-color: grey");