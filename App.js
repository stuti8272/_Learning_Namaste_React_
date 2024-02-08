// App.js
const headingReact = React.createElement("h1", {}, "Stuti Singh by using React");
const rootReact = ReactDOM.createRoot(document.getElementById("root"));
rootReact.render(headingReact);


/*   <div id ="parent">
        <div id="child">
        <h1>I'm H1 tag</h1>
        <h2>I'm H2 tag</h2>
        </div>
    </div>*/
    //This create created in react .please note if we have more than one child then we pass children in an array.
    const parent = React.createElement(
        "div",
        {"id":"parent"},
        React.createElement(
            "div",
            {"id":"child"},
            [React.createElement("h1", {}, "I'm H1 tag"), React.createElement("h2", {}, "I'm H2 tag")]
        )
    );
    console.log(parent);
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);
    //INDEX.HTML ME JO ROOT DIV HAI WOHA JAYEGA


    /*   <div id ="parent">
        <div id="child1">
        <h1>I'm H1 tag</h1>
        <h2>I'm H2 tag</h2>
        </div>
        <div id="child2">
        <h1>I'm H1 tag</h1>
        <h2>I'm H2 tag</h2>
        </div>
    </div>*/
    const parent1 = React.createElement(
        "div",
        {"id":"parent"},[
        React.createElement(
            "div",
            {"id":"child1"},
            [React.createElement("h1", {}, "I'm H1 tag"), React.createElement("h2", {}, "I'm H2 tag")]
        )]
        ,[
            React.createElement(
                "div",
                {"id":"child2"},
                [React.createElement("h1", {}, "I'm H1 tag"), React.createElement("h2", {}, "I'm H2 tag")]
            )]
    );
    console.log(parent);
    const root1 = ReactDOM.createRoot(document.getElementById("root1"));
    root1.render(parent1);
    //INDEX.HTML ME JO ROOT1 DIV HAI WOHA JAYEGA

    //This will make code very bad "NOW JSX COMES INTO A PICTURE"