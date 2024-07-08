var items = [ "The Pyramids", "The Grand Canyon", "Bondi Beach" ];

var showItems = function () {
    console.log("Dream destinations (" + items.length + " places to visit):");
    items.forEach(function (item) {
        console.log(" – " + item);
    });
};

showItems();