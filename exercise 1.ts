// OSCAR POCO

enum TrafficLights
{Red = "Red",
 Yellow = "Yellow",
 Green = 'Green',
}

function changeColor()
{
    const colors = 
    [TrafficLights.Red,
    TrafficLights.Yellow,
    TrafficLights.Green, 
    ];

    let currentIndex = 0;

    setInterval(() =>
    {
        console.log('Robot Changed to ${colors[currentIndex]}');
        currentIndex = (currentIndex + 1) % colors.length;
    }, 10000);
}
