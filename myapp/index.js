const rectangle = require ("./rectangle");

const express = require ("express");
const app = express ();
const port = 3000;

app.get ("/", (req, res) =>{
    res.write ("Rectangle Math\n");
    res.write ("Area of 2 x 4 rectangle is " + rectangle.area (2, 4) + "\n");
    res.write ("Perimeter of 2 x 4 rectangl is " + rectangle.perimeter (2, 4) + "\n");
    res.end ();
});

app.listen (port, () => {
    console.log ("Port running: ${port}");
})