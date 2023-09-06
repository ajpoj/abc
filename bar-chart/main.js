let myGraph = document.getElementById('myGraph');

//trace1
let trace1 ={};
trace1.type ="bar";
trace1.name = "Taipei_zoo";
trace1.x =[];
trace1.y =[];

for(let i=0; i<animals_Taipei_zoo.length; i++){
    trace1.x[i] =animals_Taipei_zoo[i]['name'];
    trace1.y[i] =animals_Taipei_zoo[i]['count'];
}

//trace2
let trace2 ={};
trace2.type ="bar";
trace2.name = "Taoyuan_zoo";
trace2.x =[];
trace2.y =[];

for(let i=0; i<animals_Taoyuan_zoo.length; i++){
    trace2.x[i] =animals_Taoyuan_zoo[i]['name'];
    trace2.y[i] =animals_Taoyuan_zoo[i]['count'];
}

let data =[];
data.push(trace1);
data.push(trace2);

let layout ={
    margin:{
        t:0
    },
    //barmode:'stack'
};

Plotly.newPlot(myGraph, data, layout);
