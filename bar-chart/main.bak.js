let myGraph = document.getElementById('myGraph');

let trace1 = {};
trace1.type = "bar";
trace1.name = "Lion";
trace1.x = [];
trace1.y = [];
trace1.x[0] = "Taipei Zoo";
trace1.x[1] = "Taoyuan Zoo";
trace1.y[0] = animals_Taipei_zoo[0]['count'];
trace1.y[1] = animals_Taoyuan_zoo[0]['count'];
trace1.text = trace1.y;
trace1.textfont = {
    color:'yellow',
    size:20
};
trace1.marker = {
    color:'blue'
};

let trace2 = {};
trace2.type = "bar";
trace2.name = "Tiger";
trace2.x = [];
trace2.y = [];
trace2.x[0] = "Taipei Zoo";
trace2.x[1] = "Taoyuan Zoo";
trace2.y[0] = animals_Taipei_zoo[1]['count'];
trace2.y[1] = animals_Taoyuan_zoo[1]['count'];
trace2.text = trace2.y;
trace2.textfont = {
    color: 'yellow',
    size: 20
};
trace2.marker = {
    color: 'purple'
};


let trace3 = {};
trace3.type = "bar";
trace3.name = "Monkey";
trace3.x = [];
trace3.y = [];
trace3.x[0] = "Taipei Zoo";
trace3.x[1] = "Taoyuan Zoo";
trace3.y[0] = animals_Taipei_zoo[2]['count'];
trace3.y[1] = animals_Taoyuan_zoo[2]['count'];
trace3.text = trace3.y;
trace3.textfont = {
    color: 'yellow',
    size: 20
};
trace3.marker = {
    color: 'green'
};



let data = [];
data.push(trace1);
data.push(trace2);
data.push(trace3);


let layout = {
    margin: {
        t: 0 
    },
    barmode:'stack'
};

Plotly.newPlot(myGraph,data,layout);