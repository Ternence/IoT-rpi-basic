# IoT-rpi-basic
**[English Version](https://github.com/jorgemaia/IoT-rpi-basic/blob/master/Readme.en-US.md)**

Alguns scripts para ajudar na protitipação usando Raspberry pi. 

O primeiro do repositório é o monitor de Ips usando MQTT. 

Siga os seguintes passos: 

1. clone o repositório no Raspberry pi
2. configure o arquivo send-ip-mqtt 
  2.1 Device name
  2.2 My Topic 
  2.3 MQTT Broker (tem algumas opções nos comentários - Gratuitos para teste) 
  2.4 personalize as mensagens 
3. rode no diretório: **npm install** para pegar os modulos MQTT and IP 
4. insira as linhas abaixo no  **/etc/rc.local** (assim garantimos que vai rodar em todo boot) 

    ```
    sleep 30
    su pi -c 'node /home/pi/rpi-101sos/raspberry-pi/send-ip-mqtt.js < /dev/null &'
    ```
Bom isso é tudo! 

Agora você pode testar no diretório usando: 
```
node send-ip-mqtt.js 
```
o resultado deve ser esse (com o seu ip) em um cliente MQTT de sua preferência. 

![Messages](https://github.com/jorgemaia/IoT-rpi-basic/blob/master/MQTTrpi.gif "Test Results")


**Use o MQTT Lens (estava bugado no último update) ou outro qualquer para ver os resultados, no se esqueça de mudar o Topic e conectar no mesmo broker que usou no send-ip-mqtt.js :)**


Agora temos um monitor de Ips sem a necessidade de termos uma tela! Se tem algum script legal compartilhe conosco. 

Jorge Maia 

