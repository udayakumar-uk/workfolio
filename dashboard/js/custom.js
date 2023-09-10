
if(window.innerWidth > 1199){
    setTimeout(function(){
        $('#profileIcon').click();
    }, 100);
}

$('#menuBtn').click(function(){
    if($('.profile-section').hasClass('show')){
        $('.profile-section').removeClass('show');
        $(this).removeClass('active');
    }else{
        $(this).addClass('active');
        $('.profile-section').addClass('show')
    }
});

$('#profileIcon').click(function(){
    if($('.profile-section').hasClass('show')){
        $('.profile-section').removeClass('show');
        $(this).removeClass('active');
    }else{
        $(this).addClass('active');
        $('.profile-section').addClass('show')
    }
});

$(document).click(function(e){
    if(e.target.classList[0] === 'profile-section'){
        $('.profile-section').removeClass('show');
        $('#profileIcon').removeClass('active');
    }
});




runBarchart();

function runBarchart(){

    const barChartContainer = document.getElementById('barChartContainer').getContext('2d');


    new Chart(barChartContainer, {
        type: "bar",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May"],
            datasets: [{
                backgroundColor: ["#ff9053", "#ff9053","#ff9053","#ff9053","#ff9053"],
                borderRadius: 10,
                data: [65, 40, 70, 50, 25],
            }]
        },
        options: {
            responsive: true,
            legend: {
                display: false,
                text: ''
            },
            title: {
            display: false,
            text: "Dashboard",
            },
            scales: {
                yAxes: [{ticks: {beginAtZero: true, stepSize: 20, min: 0, max:80, }}]
            }
        }
    });

}





runGaugeChart();

function runGaugeChart(){
   

    var gaugeChart = document.getElementById('gaugeChart').getContext('2d');
    
    new Chart(gaugeChart, {
        type: 'gauge',
        data: {
        datasets: [{
                data: [60, 88],
                value: 60,
                backgroundColor: ['#2FB2AB', '#f7eee1'],
                borderWidth: 0,
            }]
        },
        options: {
            responsive: true,
            title: {
                display: false,
                text: 'Gauge chart'
            },
            layout: {
                padding: {
                    bottom: 20,
                }
            },
            needle: {
                radiusPercentage: 4,
                widthPercentage: 3,
                lengthPercentage: 10,
                color: '#ff9053'
            },
        }

    });
    
}
  
  