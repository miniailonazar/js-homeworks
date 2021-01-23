let styleCss = [
    {
        name: "color",
        value: "black",
    },
    {
        name: "font-size",
        value: "18px",
    },
    {
        name: "border",
        value: "solid",
    }
];

const changedArray = styleCss.map(function(element, index) {
    return {
        id: index,
        value: element,
        toString: function() {
            return `${styleCss[this.id].name} ${":"} ${styleCss[this.id].value}`;
        }
    };
});

function doInStyle(obj, text) {
    return "<p " + "style='" + obj.join("; ") + "'> " + text + " </p>";
}
alert(doInStyle(changedArray, "text"));