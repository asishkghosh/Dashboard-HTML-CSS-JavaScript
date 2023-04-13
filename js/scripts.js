// Sidebar open/close

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}

//---------Charts-----------//
//BAR chart

var barChartOptions = {
  series: [{
    data: [10, 20, 8, 7, 5]
  }],

  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: true
    },
  },

  colors: ['#0084ff', '#1ab7ea', '#39539E', '#0077B5', '#0084fe'],

  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: true,
      distubuted: true,
      columnWidth: '40%',
    }
  },

  dataLabels: {
    enabled: false
  },

  xaxis: {
    categories: ['Laptop', 'Mobile', 'Tablet', 'Desktop', 'Camera'],
    title: {
      text: 'Count'
    }
  },

};

var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
barChart.render();


//AREA chart

var areaChartOptions = {
  series: [{
    name: 'Purchase Orders',
    data: [31, 40, 28, 51, 42, 109, 100]
  },

  {
    name: 'Sales Orders',
    data: [11, 32, 45, 32, 34, 52, 41]
  }],

  chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: false,
    },
  },

  stroke: {
    curve: 'smooth'
  },


  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  
  markers: {
    size: 0
  },

  yaxis: [
    {
      title: {
        text: 'Purchase Orders',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Sales Orders',
      },
    },
  ],

  dataLabels: {
    enabled: false
  },

  tooltip: {
    shared: true,
    intersect: false,
  }

};

var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
areaChart.render();
