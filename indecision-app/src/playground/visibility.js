const app = {
    title : "Visibility App",
    text: "Hello this is my demo text. Modiji ki jai ho!"
};

const appRoot = document.getElementById("app");
let visibility = false;

const toggleDetails = () =>{
    visibility = !visibility;    
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={toggleDetails}>{visibility ? 'Hide Details':'Show Details'}</button>
            {visibility && (
                <div>
                    <p>{app.text}</p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(template,appRoot);
};

render();

