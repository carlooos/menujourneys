//set up initial options
//$(function () {
var options = {//$('#container').highcharts({
        chart: {
            renderTo: "container2",
            zoomType: 'x',
            type: "column",
            style: {
                // fontFamily: 'Montserrat', sans-serif;
            }
        },
        title: {
            text: 'NYPL Dish and Menu Collection from 1851-2008'
        },
        subtitle: {
            text: document.ontouchstart === undefined ?
                    'Click and drag in the plot area to zoom in' :
                    'Pinch the chart to zoom in'
        },
        xAxis: {
            categories: [],
            type: 'datetime',
            labels: {
                rotation: -90,
                step: 5,
                style: {
                    // fontFamily: 'Montserrat', sans-serif;
                    fontSize: '11px'
                }
            }
        },
        yAxis: [{ // Primary yAxis
            labels: {
                style: {
                    color: Highcharts.getOptions().colors[1]
                },
                align: 'left'
            },
            title: {
                text: 'Dishes',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }, { // Secondary yAxis
            title: {
                text: 'Menus',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                style: {
                    color: Highcharts.getOptions().colors[0]
                },
                align: 'right',
                x: -3,
                y: 16,
                format: '{value:.,0f}'
            },
            opposite: true
        }],
        // tooltip: {
        //     shared: true
        // },
        legend: {
            enabled: false
        },

        series: [],

        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
}

//ajax call to data from the csv file
$.get("data/menu_dish_count.csv", function (data) {

 // split the csv by line ("\n")
 //console.log(data)
 var lines = data.split('\r');
 //console.log(lines)

 // "menu_dish_count" is an empty array that will be populated by the label menu or dish
 // "menu_dish_amount" is an array containing 2 empty arrays, each of will be populated by count of menus and dishes per year
 var menu_dish_label = [];
 var menu_dish_count = [[], []];

 // loop through each line using $.each
 $.each(lines, function(lineNo, line) {

    // turn each line into an array that contains 3 items:
    // year, menu value, dish value
    // use the .split() method
    var items = line.split(",");
    //console.log(items)

    // use an if statement to differentiate between header & content
    // if it's the header,
    if (lineNo == 0) {
      // set the menu_dish_label variable as the appropriate values from the header line
      menu_dish_label = items.slice(1,3);
      //console.log(menu_dish_label)

    // otherwise,
    } else {
      // populate "options.xAxis.categories" array with the years ("1851", "1852", "1853", etc.)
      options.xAxis.categories.push(items[0]);

      // populate "menu_dish_count" array
      menu_dish_count[0].push(parseFloat(items[1]));
      menu_dish_count[1].push(parseFloat(items[2]));
      //console.log(menu_dish_count[0]);
    }

 });

 // "options.series" is an array & each item in the array is an object with 3 main keys: "name", "data", & "color"; in this example:
    // "name" = menu or dish label
    // "yAxis" = yAxis side
    // "data" = menu or dish value
    // "color" = bar segment color

 // use a for loop to populate "options.series"

 //for(var i = 0; i < menu_dish_count.length; i++) {
    // create a placeholder object & pull the required value for each key from "menu_dish_label" variable, "menu_dish_count" variable, & colors function
     var seriesData1 = {
        name: "",
        yAxis: "",
        data: [],
        color: ""
      };

      var seriesData2 = {
        name: "",
        yAxis: "",
        data: [],
        color: ""
      };

     seriesData1.name = menu_dish_label[0];
     seriesData1.yAxis = 1;
     seriesData1.data = menu_dish_count[0];
     seriesData1.color = "#1F77B4";

     seriesData2.name = menu_dish_label[1];
     seriesData2.yAxis = 0;
     seriesData2.data = menu_dish_count[1];
     seriesData2.color = "#2CA02C";

    // after the object is properly constructed, push it to "options.series"
    options.series.push(seriesData1);
    options.series.push(seriesData2);
    //console.log(options.series);


 // finally draw the chart by creating a new "Highcharts" object, which has settings that are defined in "options"
    var chart = new Highcharts.Chart(options);

});
