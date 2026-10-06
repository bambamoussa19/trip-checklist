// Name: Moussa | Date: October 4, 2026 | Assignment: Week 5 Project - Trip Destination Check List
// Builds the packing checklist when the page loads and keeps the tally updated.

// Called when the page loads. Creates a checkbox and label for each trip item.
function loadChecklist() {
    // List of items needed for the trip
    var items = [
        "Passport",
        "Food for plane ride",
        "Clothes",
        "Sunglasses",
        "Umbrella",
        "Airtag for luggage and passport",
        "Phone",
        "200 Euros for first day"
    ];

    var divList = document.getElementById("div-list");

    // Loop through each item and add a checkbox + label to the div list
    for (var i = 0; i < items.length; i++) {
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "item" + i;
        checkbox.onclick = updateTally;

        var label = document.createElement("label");
        label.htmlFor = "item" + i;
        label.textContent = items[i];

        var lineBreak = document.createElement("br");

        divList.appendChild(checkbox);
        divList.appendChild(label);
        divList.appendChild(lineBreak);
    }
}

// Runs every time a checkbox is clicked. Counts checked boxes and updates the tally span.
function updateTally() {
    var checkboxes = document.querySelectorAll("#div-list input[type='checkbox']");
    var count = 0;

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            count++;
        }
    }

    document.getElementById("tally").textContent = "Checked items: " + count;
}
