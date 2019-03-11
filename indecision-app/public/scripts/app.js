"use strict";

var app = {
    title: "Visibility App",
    text: "Hello this is my demo text. Modiji ki jai ho!"
};

var appRoot = document.getElementById("app");
var visibility = false;

var toggleDetails = function toggleDetails() {
    visibility = !visibility;
    render();
};

var render = function render() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.title
        ),
        React.createElement(
            "button",
            { onClick: toggleDetails },
            visibility ? 'Hide Details' : 'Show Details'
        ),
        visibility && React.createElement(
            "div",
            null,
            React.createElement(
                "p",
                null,
                app.text
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
