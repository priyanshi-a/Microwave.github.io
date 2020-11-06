let xValue = [];
let yValue = [];
let operationValue = [];

let size = 0;
var i

//Input of Slider 1
function xSlider() {
  let xval = document.getElementById("inputvalx").value;
  document.getElementById("outputvalx").innerHTML = xval;
}

//Input for Slider 2
function ySlider() {
  let yval = document.getElementById("inputvaly").value;
  document.getElementById("slidervaly").innerHTML = yval;
}

function addValue() {
  // document.getElementById('readin').innerHTML = "";
  xValue = []
  yValue = []
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




function makePlot() {





  addValue()
  if (xValue.length <= 6 || yValue.length <= 6) {
    alert("Take Down Some Values For Voltage and Current and then Click on 'Print' button to print your current page (readings and connections) or to save your page (readings and connections) in a PDF form.");
    return false
  }


  else if (size < xValue.length) {
    document.getElementById("print").disabled = false
    let c = [];

    for (let i = 0; i < xValue.length; i++) {
      c.push(i)
    }
    document.getElementById("exp").style.opacity = "0"
    document.getElementById("exp").style.display = "none"
    document.getElementById("graph").style.opacity = "1"
    document.getElementById("graph").style.display = "block"

    let layout = {

      autosize: false,
      width: 800,
      height: 400,

      title: {
        text: 'Graph of Gunn Bias Voltage vs Gunn Diode Current',
        font: {
          family: 'verdana',
          size: 24
        },

      },
      xaxis: {
        title: {
          text: 'Voltage',
          font: {
            family: 'verdana',
            size: 15,
          }
        },
      },
      yaxis: {
        title: {
          text: 'Current',
          font: {
            family: 'verdana',
            size: 15,
          }
        }
      },
      showlegend: false,
    };

    var trace1 = {
      x: xValue,
      y: yValue,

    };

    var data = [trace1];

    Plotly.newPlot('myDiv', data, layout, { displaylogo: false });
    size = xValue.length;

  }
}
function close1() {
  document.getElementById("exp").style.opacity = "1",
    document.getElementById("exp").style.display = "block",
    document.getElementById("graph").style.opacity = "0",
    document.getElementById("graph").style.display = "none"

}