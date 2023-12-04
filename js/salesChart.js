function salesChart() {
    var yillar = ['2023'];
    var listedApartments = [150];
    var listedVillas = [126];
    var listedHomes = [142];
    var listedOffices = [64];
    var listedBuildings = [86];
    var listedTownhoses = [57];
    var listedShops = [47];
    var listedGarages = [34];

    var ctx = document.getElementById('salesChart').getContext('2d');

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: yillar,
            datasets: [{
                label: 'Listed Apartments',
                data: listedApartments,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }, {
                label: 'Listed Villas',
                data: listedVillas,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }, {
                label: 'Listed Homes',
                data: listedHomes,
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 1
            }, {
                label: 'Listed Offices',
                data: listedOffices,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }, {
                label: 'Listed Buildings',
                data: listedBuildings,
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1
            }, {
                label: 'Listed Townhouses',
                data: listedTownhoses,
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }, {
                label: 'Listed Shops',
                data: listedShops,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }, {
                label: 'Listed Garages',
                data: listedGarages,
                backgroundColor: 'rgba(192, 192, 192, 0.2)',
                borderColor: 'rgba(192, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
