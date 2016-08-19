var device_catlog = [
   {device_category:1, device:"Accelerometer", image:"Accelerometer.png",inputs:0,outputs:1},
   {device_category:1, device:"Barometer", image:"barometer.png",inputs:1,outputs:2},
   {device_category:1, device:"Battery", image:"battery.png",inputs:1,outputs:1},
   {device_category:1, device:"Bulb", image:"bulb.png",inputs:1,outputs:1},
   {device_category:1, device:"Cloud", image:"cloud.png",inputs:1,outputs:1},
   {device_category:1, device:"CPU", image:"cpu.png",inputs:1,outputs:1},
   {device_category:1, device:"Gyroscope", image:"gyroscope.png",inputs:1,outputs:1},
   {device_category:1, device:"Humerdity Sensor", image:"humerdity_sensor.png",inputs:1,outputs:1},
   {device_category:1, device:"Monitor", image:"monitor.png",inputs:1,outputs:1},
   {device_category:2, device:"Router", image:"router.png",inputs:1,outputs:1},
   {device_category:2, device:"Temperature Sensor", image:"TemperatureSensor.png",inputs:1,outputs:1},
   {device_category:2, device:"Thired Party Server", image:"thiredpartyServer.png",inputs:1,outputs:1},
];

var device_category_arr = [
   {device_category:1, category_name:"Measuring equipments"},
   {device_category:2, category_name:"Lighting Equipment"}
];

var inputs_ports =[
             {inputs:[] },
             {inputs:['in'] },
             {inputs:['in','in1'] },
             {inputs:['in','in1','in2'] },
             {inputs:['in','in1','in2','in3'] },
             {inputs:['in','in1','in2','in3','in4'] },
             {inputs:['in','in1','in2','in3','in4','in5'] },
             {inputs:['in','in1','in2','in3','in4','in5','in6'] }
             ];

var outputs_ports =[
                    {outputs:[] },
                    {outputs:['out'] },
                    {outputs:['out','out1'] },
                    {outputs:['out','out1','out2'] },
                    {outputs:['out','out1','out2','out3'] },
                    {outputs:['out','out1','out2','out3','out4'] },
                    {outputs:['out','out1','out2','out3','out4','out5'] },
                    {outputs:['out','out1','out2','out3','out4','out5','out6'] }
                    ];