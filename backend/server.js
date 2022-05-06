const dgram = require('dgram');
const app = require('express')();
const http = require('http').createServer(app);

const io = require('socket.io')(http, {  cors: { origin: "*", methods: ["GET", "POST"] }})

const HOST = '192.168.10.1';
const PORT = '8889';

const dron = dgram.createSocket('udp4');
const dronState = dgram.createSocket('udp4')

dron.bind(8889);
dronState.bind(8890);

let vykonavaCommand = false;

io.on('connection', (socket) => {

    console.log('pripojený používateľ ' + socket.id);

    socket.on('prikaz-let', (prikazZFrontu) => {
        
        if (!vykonavaCommand) {
            console.log('Dostal som príkaz ' + prikazZFrontu + ',' + ' odosielam dronu ...');
            dron.send(prikazZFrontu, 0, prikazZFrontu.length, PORT, HOST, handleError);
            vykonavaCommand = true;
        }
    });

    socket.on('pripojenie-drona', (socket) => {
        if(socket == "pripoj"){
            console.log("Žiadosť o pripojenie ododslaná");
            dron.send('command', 0, 'command'.length, PORT, HOST, handleError);
            vykonavaCommand = false;
        }
    });
});


dron.on('message', message => {
    console.log(`🤖 : ${message}`);
    io.sockets.emit('status', `${message}`);
    vykonavaCommand = false;

  });


dronState.on('message', message => {
    
    //console.log(`my state🤖 : ${message}`);
    
    let obj = {};
    //let skuskaMessage = "pitch:0;roll:0;yaw:0;vgx:0;vgy:0;vgz:0;templ:93;temph:96;tof:6553;h:0;bat:84;baro:834.52;time:0;agx:5.00;agy:5.00;agz:-998.00;";
    message = message.toString().split(";");
    message.forEach(parameter => {
        parameter = parameter.split(":");
        nazovParametru = parameter[0];
        hodnotaParametru = parameter[1];  
        obj = {...obj, [nazovParametru]: hodnotaParametru};
    });
   io.sockets.emit('drone-state', obj);
  });

dron.send('command', 0, 'command'.length, PORT, HOST, handleError);

app.get("/", (req,res) => {
    res.send("just server side, sup");
});

http.listen(2121, ()=>{
console.log("Server ide na porte 2121 ...");
});

function handleError(err){
    if(err){
        console.log("Error: " + err);
    }
}