let xValue = [];
let yValue = [];
let operationValue = [];

let size = 0;
var i

//Input of Slider 1
function xSlider()
{
    let xval = document.getElementById("inputvalx").value;
    document.getElementById("outputvalx").innerHTML = xval;
}

//Input for Slider 2
function ySlider()
{
    let yval = document.getElementById("inputvaly").value;
    document.getElementById("slidervaly").innerHTML = yval;
}

function addValue(){
 // document.getElementById('readin').innerHTML = "";
 xValue=[]
 yValue=[]
        var myTab = document.getElementById('readin');

        // LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.
        for (i = 1; i < myTab.rows.length; i++) {

            // GET THE CELLS COLLECTION OF THE CURRENT ROW.
            var objCells = myTab.rows.item(i).cells;

            // LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
           
                
                xValue.push(objCells.item(0).innerHTML);
              
                yValue.push(objCells.item(1).innerHTML);
            }
           
         
        //Now call function to add rows
    
    
}




function makePlot(){


addValue()

    if(xValue.length <= 2|| yValue.length <= 2){
        alert("Take Down Some Values For Voltage and Power");
        return false
    }
  
else{
   
        document.getElementById("exp").style.opacity="0"
  document.getElementById("exp").style.display="none"
  document.getElementById("graph").style.opacity="1"
  document.getElementById("graph").style.display="block"
  var trace1 = {
  
    x: [197, 205, 215],
    y: [4,6,4],
    
    mode: 'lines+markers', 
    name: 'spline', 
     text: ['tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object'], 
    line: {shape: 'spline'}, 
    type: 'scatter'
  };
}
  
  
  var data = [trace1];
  
  var layout = {
    title: 'Graph of Reflector Voltage vs Output Power',
    xaxis: {
     title: 'Reflector Voltage',
      titlefont: {
        family: 'Arial, sans-serif',
        size: 18,
        
      },
      range: [0,320],
      autorange: false
    },
    yaxis: {
      title: 'Output Power',
      titlefont: {
        family: 'Arial, sans-serif',
        size: 18,
       
      },
      range: [0,15],
      autorange: false,
      
      showticklabels: false
    },
    legend: {
      y: 0.5,
      traceorder: 'reversed',
      font: {
        size: 16
      }
    }
  };
  
  Plotly.newPlot('myDiv', data, layout);
        size = xValue.length;
       
    }

function close1(){
  document.getElementById("exp").style.opacity="1",
  document.getElementById("exp").style.display="block",
  document.getElementById("graph").style.opacity="0",
  document.getElementById("graph").style.display="none"
  
}