/**
 * 
 * <div id="parent">
 *      <div id="Child">
 *          <h1> nested child. Hi I am h1   </h1>
 *          <h2> Siblind. Hi am H2</h2>
 *      </div>
 *     <div id="Child2">
 *          <h1> nested child. Hi I am h1   </h1>
 *          <h2> Siblind. Hi am H2</h2>
 *      </div>
 * </div
 * ReactElement (object ) => HTML(Browser Understand)
 */

const parent=
    React.createElement("div",{id: "parent"},[
        
        React.createElement("div",{id: "child1"},[
        React.createElement("h1",{},"I am h1 tag nested child1"),
        React.createElement("h2",{},"I am h2 tag, Sibling1")
    ]),
    React.createElement("div",{id: "child2"},[
        React.createElement("h1",{},"I am h1 tag nested child1"),
        React.createElement("h2",{},"I am h2 tag, Sibling2")
    ])
]);




//const heading=React.createElement("h1",{id:"head,ing"},"Hello World from React!")

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent  );