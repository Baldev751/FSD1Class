console.log("HEllo");
const parent=document.getElementById('root');
console.dir(parent);
const root=ReactDOM.createRoot(parent);

// let h1=React.createElement("h1",{style:{color:'cyan'}},"ABES Engineering college"); 
// const l1 = React.createElement("li",{},"orange");
// const l2 = React.createElement("li",{},"apple");
// const ul = React.createElement("ul",{style:{backgroundColor:'yellow'}},l1,l2);
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
const l1 = <li>Orange</li>;
const l2= <li>Apple</li>;
const ul = <ul>{l1}{l2}</ul>

const container=(
<div style={{backgroundColor:'cyan'}}>
<div>{element}</div>
<div>{ul}</div>
</div>
)
root.render(container);
