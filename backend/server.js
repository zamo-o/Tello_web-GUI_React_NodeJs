const dgram = require('dgram');

const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {  cors: { origin: "*", methods: ["GET", "POST"] }})

const HOST = '192.168.10.1';
const PORT = '8889';

//app.use(express.static("public"));


const dron = dgram.createSocket('udp4');
const dronState = dgram.createSocket('udp4')

// Pridanenie na akých portoch majú počúvať -> "dron" na prichadzajúce správy typu dokončenia operácie, čiže iba "OK" alebo "Error"
//                                          -> "dronState" na prichádzajúci string, ktorý si rozstrihneme, obsahuje informácie o batérii, výške, teplote a nakrivení

dron.bind(8889);
dronState.bind(8890);

io.on('connection', (socket) => {
    console.log('pripojený používateľ' + socket.id);

    socket.on('prikaz-let', (prikazZFrontu) => {
        console.log('Dostal som príkaz ' + prikazZFrontu + ',' + ' odosielam dronu ...');

        dron.send(prikazZFrontu, 0, prikazZFrontu.length, PORT, HOST, handleError);

    });
});


dron.on('message', message => {
    console.log(`🤖 : ${message}`);

    io.sockets.emit('status', `${message}`);

  });


dronState.on('message', message => {
    //console.log(`my state🤖 : ${message}`);
    
    let parametre = [];
    //let skuskaMessage = "pitch:0;roll:0;yaw:0;vgx:0;vgy:0;vgz:0;templ:93;temph:96;tof:6553;h:0;bat:84;baro:834.52;time:0;agx:5.00;agy:5.00;agz:-998.00;";
    message = message.toString().split(";");
    message.forEach(parameter => {
        parameter = parameter.split(":");
        nazovParametru = parameter[0];
        hodnotaParametru = parameter[1];
        let obj = {}
        obj[nazovParametru] = hodnotaParametru;
        parametre.push(obj);
        console.log(obj);
    });

    io.sockets.emit('drone-state', parametre);

  });

  /* DEVELOPMENT AREA*/
    let obj = {};
    let skuskaMessage = "pitch:0;roll:0;yaw:0;vgx:0;vgy:0;vgz:0;templ:93;temph:96;tof:6553;h:0;bat:84;baro:834.52;time:0;agx:5.00;agy:5.00;agz:-998.00;";
    message = skuskaMessage.toString().split(";");
    message.forEach(parameter => {
        parameter = parameter.split(":");
        nazovParametru = parameter[0];
        hodnotaParametru = parameter[1];
        
        
        obj = {...obj, [nazovParametru]: hodnotaParametru};
            
        
        console.log(obj);
    });

   io.sockets.emit('drone-state', obj);






// Štartovný command, aby zaćal počúvať
dron.send('command', 0, 'command'.length, PORT, HOST, handleError);

/*
dron.send('takeoff', 0, 'takeoff'.length, PORT, HOST, handleError);
dron.send('land', 0, 'land'.length, PORT, HOST, handleError);
*/

   


app.get("/", (req,res) => {
    res.send("just server side, sup");
});

http.listen(2121, ()=>{
console.log("Server ide na porte 2121 ...");
});


// funkcia na vypísanie chybovej správy, použitie pri odosielaní rozkazov dronu
function handleError(err){
    if(err){
        console.log("Error: ${err}");
    }
}