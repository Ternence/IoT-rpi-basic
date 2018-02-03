//module MQTT client / Cliente MQTT
var mqtt = require('mqtt'); 
//module ip / modulo que busca o IP da interface ativa
var ip = require('ip');
//Ip Address
var myip = ip.address(); 
// Device Name / Nome do Dispositivo
var devicename = 'devdemo001';  
// MQTT Topic 
// Tópico em que serão postadas as mensagens do dispositivo
var mytopic = 'jorgemaiatopic1';  


//Client with Last Will and Testament message, we will receive a message when disconnected
//Cliente com mensagem de testamento, para quando o device sair da rede sermos avisados.

//brokers free - "TEST"
//Mosquitto	 iot.eclipse.org	 1883 / 8883	n/a
//HiveMQ	 broker.hivemq.com	 1883	8000
//Mosquitto	 test.mosquitto.org	 1883 / 8883 / 8884	WS: 8080 / 8081
//mosca	     test.mosca.io	     1883	WS: 80
//HiveMQ	 broker.mqttdashboard.com	1883	

var client  = mqtt.connect('tcp://broker.mqttdashboard.com', { 
    will: {
    topic: mytopic,  
    payload: devicename + ' down' //message when network down / mensagem quando o device cair
    }
    })



 


//When connected send a message with IP address
// Assim que conectar ao broker mandar uma mensagem com o IP 
client.on('connect', function () {
  
  client.publish(mytopic, devicename + ' up - IP: ' + myip);
})
 