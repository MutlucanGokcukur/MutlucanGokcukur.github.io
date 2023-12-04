function soldChart() {
    var yillar = ['2019', '2020', '2021', '2022', '2023'];
    var satilanApartments = [80, 85, 92, 88, 95];
    var satilanVillas = [50, 60, 55, 70, 65];
    var satilanHomes = [70, 75, 82, 78, 85];
    var satilanOffices = [40, 45, 48, 50, 55];
    var satilanBuildings = [30, 35, 38, 40, 42];
    var satilanTownhouses = [65, 70, 72, 68, 75];
    var satilanShops = [55, 58, 60, 62, 65];
    var satilanGarages = [10, 8, 12, 15, 9];

    var ctx = document.getElementById('soldChart').getContext('2d');

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: yillar,
            datasets: [{
                label: 'Apartment Sales',
                data: satilanApartments,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }, {
                label: 'Villa Sales',
                data: satilanVillas,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }, {
                label: 'Home Sales',
                data: satilanHomes,
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 1
            }, {
                label: 'Office Sales',
                data: satilanOffices,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }, {
                label: 'Building Sales',
                data: satilanBuildings,
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1
            }, {
                label: 'Townhouse Sales',
                data: satilanTownhouses,
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }, {
                label: 'Shop Sales',
                data: satilanShops,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }, {
                label: 'Garage Sales',
                data: satilanGarages,
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
