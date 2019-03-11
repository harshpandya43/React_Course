"use strict";

var app = {
    title: "Indecision App",
    subtitle: "Make your own decison",
    options: ['One', 'Two']

};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        "p",
        null,
        app.subtitle
    ),
    React.createElement(
        "p",
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Demo 1"
        ),
        React.createElement(
            "li",
            null,
            "Demo 2"
        )
    )
);

var user = {
    name: 'Harsh',
    age: 27,
    location: 'Austin'
};

function getLocation(location) {
    if (location) return React.createElement(
        "p",
        null,
        "Location: ",
        location
    );
}

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name
    ),
    React.createElement(
        "p",
        null,
        "Age:",
        user.age
    ),
    getLocation(user.location)
);
var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
