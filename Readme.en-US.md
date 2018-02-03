# IoT-rpi-basic

In this repository i will try to put some scripts that help us in prototyping using Raspberry pi. 

To start, an IP monitor. 

folow the next steps: 

1. clone the repo in your Raspberry pi
2. configure the send-ip-mqtt 
    * Device name
    * My Topic 
    * MQTT Broker (some free to test are provided in the script comments) 
    * customize your message 
3. npm install to get modules MQTT and IP 
4. Insert these lines in **/etc/rc.local** (to run on every boot) 

    ```
    sleep 30
    su pi -c 'node /home/pi/rpi-101sos/raspberry-pi/send-ip-mqtt.js < /dev/null &'
    ```
Thats all! 

to test you can run
```
node send-ip-mqtt.js 
```
and the result should be the same (with your ip) on the MQTT client. 

![Messages](https://github.com/jorgemaia/IoT-rpi-basic/blob/master/MQTTrpi.gif "Test Results")


** Use MQTT Lens or other to see the results, and don't forget to use the same broker and topic :) **


Now, you can see your ip address without monitor :) 
