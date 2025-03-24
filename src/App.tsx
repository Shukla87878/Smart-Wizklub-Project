import React, { useState, useEffect } from 'react';
import { Power, Wifi, AlertTriangle, Gauge, Joystick, Volume2, Settings } from 'lucide-react';

const useIoTData = () => {
  const [distance, setDistance] = useState(100);
  const [lightBrightness, setLightBrightness] = useState(50);
  const [isLightOn, setIsLightOn] = useState(false);
  const [isBuzzerOn, setIsBuzzerOn] = useState(false);
  const [isAutoMode, setIsAutoMode] = useState(false);
  const [joystickPosition, setJoystickPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Automatically control buzzer and light based on distance
    if (distance < 30) {
      setIsBuzzerOn(true);
      setIsLightOn(true);
      // Simulate buzzer sound
      const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTGH0fPTgjMGHm7A7+OZRA0PVqzn77BdGAg+ltryxnMpBSl+zPLaizsIGGS57OihUBELTKXh8bllHgU2jdXzzn0vBSF1xe/glEILElyx6OyrWBUIQ5zd8sFuJAUuhM/z1YU2Bhxqvu7mnEYODlOq5O+zYBoGPJPY88p2KwUme8rx3I4+CRZiturqpVITC0mi4PK8aB8GM4nU8tGAMQYfcsLu45ZFDBFYr+ftrVoXCECY3PLEcSYELIHO8diJOQgZaLvt559NEAxPqOPwtmMcBjiP1/PMeS0GI3fH8N2RQAoUXrTp66hVFApGnt/yvmwhBTCG0fPTgjQGHW/A7eSaRQ0PVqzl77BeGQc9ltvyxnUoBSh+zPDaizsIGGS56+mjTxELTKXh8bllHgU1jdT0z3wvBSJ1xe/glEILElyx6OyrWRUIRJve8sFuJAUug8/z1oU2Bhxqvu3mnEYODlOq5O+zYRsGPJPY88p3KgUme8rx3I4+CRVht+rqpVMSC0mh4PK8aiAFM4nU8tGAMQYfccPu45ZFDBFYr+ftrVwWCECY3PLEcSYGK4DN8tiIOQgZZ7zs56BODwxPpuPxtmQcBjiP1/PMeywGI3fH8N+RQAoUXrTp66hWEwlGnt/yv2wiBDCG0fPTgzQHHG/A7eSaSw0PVqzl77BeGQc9ltrzxnUoBSh9y/HajDsIF2W56+mjUREKTKPi8blnHgU1jdTy0HwvBSF1xe/glEQKElyx6OyrWRUJQ5vd88FwJAQug8/z1oU2Bhxqvu3mnEgNDlOq5O+zYRsGOpPX88p3KgUmecnw3Y4/CBVht+rqpVMSC0mh4PK8aiAFM4nS89GAMQYfccLv45dGCxFYr+ftrVwWCECY3PLEcycFK4DN8tiIOQgZZ7vt56BODwxPpuPxtmQdBTiP1/PMeywGI3bH8d+RQQkUXrTp66hWEwlGnt/yv2wiBDCG0fPTgzQHHG3A7eSaSw0PVqzl77BeGQc9ltrzxnUoBSh9y/HajDwIF2W56+mjUREKTKPi8blnHwQ1jdTy0HwvBSF1xe/glEQKElyx6OyrWRUJQ5vd88FwJAUtg87y1oY2Bhxqvu3mnEgNDlOq5O+zYhkGOpPX88p3KgUmecnw3Y8+CBVht+rqpVMSC0mh4PK8aiAFM4nS89GBMAYfccLv45dGCxFYr+ftrVwWCECX2/PEcycFK4DN8tiKOAgZZ7vt56BODwxPpuPxtmQdBTeP1/PMeywGI3bH8d+RQQkUXrTp66hWEwlGnt/yv2wiBDCG0fPTgzUGHG3A7eSaSw0PVqzl77BeGQc9lNryxnUoBSh9y/HajDwIF2W56+mjUREKTKPi8blnHwQ1jdTy0H4uBSF1xe/glEQKElyx6OyrWRUJQ5vd88FwJAUtg87y1oY3BRxqvu3mnEgNDlKp5PC0YhkGOpPX88p3KgUmecnw3Y8+CBVht+rqpVMSC0mh4PK8aiAFM4nS89GBMAYfccLv45dGCxFYr+ftrV0VCD+Y3PLEcycFK4DN8tiKOAgZZ7vt56BODwxPpuPxtmQdBTeP1/PMeywGI3bH8d+RQQkTXrTp66hWEwlGnt/yv2wiBDCG0fPTgzUGHG3A7eSbSg0PVqzl77BeGQc9lNryxnUoBSh9y/HajDwIF2S46+mjUREKTKPi8blnHwQ1jdTy0H4uBSF1xe/glEQKElyx6OyrWhQJQ5vd88FwJAUtg87y1oY3BRxqvu3mnEgNDlKp5PC0YhkGOpHY88p3KgUmecnw3Y8+CBVht+rqpVQRC0mh4PK8aiAFMojT89GBMAYfccLv45dGCxFYr+ftrV0VCD+Y3PLEcycFK4DN8tiKOAgZZ7vt56BODwxPpuPxtmQdBTeP1/PMeywGI3bH8d+RQQkTXrTp66hWEwlGnt/yv2wiBDCG0fPTgzUGHG3A7eSbSg0PVqzl77BeGQc9lNryxnYnBSh9y/HajDwIF2S46+mjUREKTKPi8blnHwQ0jdTy0H4uBSF1xe/glEQKElyx6OyrWhQJQ5vd88FwJAUtg87y1oY3BRxqvu3mnUcNDlKp5PC0YhkGOpHY88p3KgUmecnw3Y8+CBVht+rqpVQRC0mh4PK8aiAFMojT89GBMAYfccLv45dGCxFYr+ftrV0VCD+Y3PLEcycFK4DN8tiKOAgZZ7vt56BODwxPpuPxtmQdBTeP1/PMeywGI3bH8d+RQQkTXrTp66hWEwlGnt/yv2wiBDCF0fPTgzUGHG3A7eSbSg0PVqzl77BeGQc9lNryxnYnBSh9y/HajDwIF2S46+mjUREKTKPi8blnHwQ0jdTy0H4uBSF1xe/glEQKElyx6OyrWhQJQ5vd88FwJAUtg87y1oY3BRxqvu3mnUcNDlKp5PC0YhkGOpHY88p3KgUmecnw3Y8+CBVht+rqpVQRC0mh4PK8aiAFMojT89GBMAYfccLv45dGCxFXsOftrV0VCD+Y3PLEcycFK4DN8tiKOAgZZ7vt56BODwxPpuPxtmQdBTeP1/PMeywGI3bH8d+RQQkTXrTp66hWEwlGnt/yv2wiBDCF0fPTgzUGHG3A7eSbSg0PVqzl77BeGQc9lNryxnYnBSh9y/HajDwIF2S46+mjUREKTKPi8blnHwQ0jdTy0H4uBSF1xe/glEQKElyx6OyrWhQJQ5vd88FwJAUtg87y1oY3BRxqvu3mnUcNDlKp5PC0YhkGOpHY88p3KgUmecnw3Y8+CBVht+rqpVQRC0mh4PK8aiAFMojT89GBMAYfccLv45dGCxFXsOftrV0VCD+Y3PLEcycFK4DN8tiKOAgZZ7vt56BODwxPpuPxtmQdBTeP1/PMeywGI3bH8d+RQQkTXrTp66hWEwlGnt/yv2wiBDCF0fPTgzUGHG3A7eSbSg0PVqzl77BeGQc9lNryxnYnBSh9y/HajDwIF2S46+mjUREKTKPi8blnHwQ0jdTy0H4uBSF1xe/glEQKElyx6OyrWhQJQ5vd88FwJAUtg87y1oY3BRxqvu3mnUcNDlKp5PC0YhkGOpHY88p3KgUmecnw3Y8+CBVht+rqpVQRC0mh4PK8aiAFMojT89GBMAYfccLv45dGCxFXsOftrV0VCD+Y3PLEcycFK4DN8tiKOAgZZ7vt56BODwxPpuPxtmQdBTeP1/PMeywGI3bH8d+RQQkTXrTp66hWEwlGnt/yv2wiBDCF0fPTgzUGHG3A7eSbSg0PVqzl77BeGQc9lNryxnYnBSh9y/HajDwIF2S46+mjUREKTKPi8blnHwQ0jdTy0H4uBSF1xe/glEQKElyx6OyrWhQJQ5vd88FwJAUtg87y1oY3BRxqvu3mnUcNDlKp5PC0YhkGOpHY88p3KgUmecnw3Y8+CBVht+rqpVQRC0mh4PK8aiAFMojT89GBMAYfccLv45dGCxFXsOftrV0VCD+Y3PLEcycFK4DN8tiKOAgZZ7vt56BODwxPpuPxtmQdBTeP1/PMeywGI3bH8d+RQQkTXrTp66hWEwlGnt/yv2wiBDCF0fPTgzUGHG3A7eSbSg0PVqzl77BeGQc9lNryxnYnBSh9y/HajDwIF2S46+mjUREKTKPi8blnHwQ0jdTy0H4uBSF1xe/glEQKElyx6OyrWhQJQ5vd88FwJAUtg87y1oY3BRxqvu3mnUcNDlKp5PC0YhkGOpHY88p3KgUmecnw3Y8+CBVht+rqpVQRC0mh4PK8aiAFMojT89GBMAYfccLv45dGCxFXsOftrV0VCD+Y3PLEcycFK4DN8tiKOAgZZ7vt56BODwxPpuPxtmQdBTeP1/PMeywGI3bH8d+RQQkTXrTp66hWEwlGnt/yv2wiBDCF0fPTgzUGHG3A7eSbSg0PVqzl77BeGQc9lNryxnYnBSh9y/HajDwIF2S46+mjUREKTKPi8blnHwQ0jdTy0H4uBSF1xe/glEQKElyx6OyrWhQJQ5vd88FwJAUtg87y1oY3BRxqvu3mnUcNDlKp5PC0YhkGOpHY88p3KgUmecnw3Y8+CBVht+rqpVQRC0mh4PK8aiAFMojT89GBMAYfccLv45dGCxFXsOftrV0VCD+Y3PLEcycFK4DN8tiKOAgZZ7vt56BODwxPpuPxtmQdBTeP1/PMeywGI3bH8d+RQQkTXrTp66hWEwlGnt/yv2wiBDCF0fPTgzUGHG3A7eSbSg0PVqzl77BeGQc9lNryxnYnBSh9y/HajDwIF2S46+mjUREKTKPi8blnHwQ0jdTy0H4uBSF1xe/glEQKElyx6OyrWhQJQ5vd88FwJAUtg87y1oY3BRxqvu3mnUcNDlKp5PC0YhkGOpHY88p3KgUmecnw3Y8+CBVht+rqpVQRC0mh4PK8aiAFMojT89GBMAYfccLv45dGCxFXsOftrV0VCD+Y3PLEcycFK4DN8tiKOAgZZ7vt56BODwxPpuPxtmQdBTeP1/PMeywGI3bH8d+RQQkTXrTp66hWEwlGnt/yv2wiBDCF0fPTgzUGHG3A7eSbSg0PVqzl77BeGQc9lNryxnYnBSh9y/HajDwIF2S46+mjUREKTKPi8blnHwQ0jdTy0H4uBSF1xe/glEQKElyx6OyrWhQJQ5vd88FwJAUtg87y1oY3BRxqvu3mnUcNDlKp5PC0YhkGOpHY88p3KgUmecnw3Y8+CBVht+rqpVQRC0mh4PK8aiAFMojT89GBMAYfccLv45dGCxFXsOftrV0VCD+Y3PLEcycFK4DN8tiKOAgZZ7vt56BODwxPpuPxtmQdBTeP1/PMeywGI3bH8d+RQQkTXrTp66hWEwlGnt/yv2wiBDCF0fPTgzUGHG3A7eSbSg0PVqzl77BeGQc9lNryxnYnBSh9y/HajDwIF2S46+mjUREKTKPi8blnHwQ0jdTy0H4uBSF1xe/glEQKElyx6OyrWhQJQ5vd88FwJAUtg87y1oY3BRxqvu3mnUcNDlKp5PC0YhkGOpHY88p3KgUmecnw3Y8+CBVht+rqpVQRC0mh4PK8aiAFMojT89GBMAYfccLv45dGCxFXsOftrV0VCD+Y3PLEcycFK4DN8tiKOAgZZ7vt56BODwxPpuPxtmQdBTeP1/PMeywGI3bH8d+RQQkTXrTp66hWEwlGnt/yv2wiBDCF0fPTgzUGHG3A7eSbSg0PVqzl77BeGQc9lNryxnYnBSh9y/HajDwIF2S46+mjUREKTKPi8blnHwQ0jdTy0H4uBSF1xe/glEQKElyx6OyrWhQJQ5vd88FwJAUtg87y1oY3BRxqvu3mnUcNDlKp5PC0YhkGOpHY88p3KgUmecnw3Y8+CBVht+rqpVQRC0mh4PK8aiAFMojT89GBMAYfccLv45dGCxFXsOftrV0VCD+Y3PLEcycFK4DN8tiKOAgZZ7vt56BODwxPpuPxtmQdBTeP1/PMeywGI3bH8d+RQQkTXrTp66hWEwlGnt/yv2wiBDCF0fPTgzUGHG3A7eSbSg0PVqzl77BeGQc9lNryxnYnBSh9y/HajDwIF2S46+mjUREKTKPi8blnHwQ0jdTy0H4uBSF1xe/glEQKElyx6OyrWhQJQ5vd88FwJAUtg87y1oY3BRxqvu3mnUcNDlKp5PC0YhkGOpHY88p3KgUmecnw3Y8+CBVht+rqpVQRC0mh4PK8aiAFMojT89GBMAYfccLv45dGCxFXsOftrV0VCD+Y3PLEcycFK4DN8tiKOAgZZ7vt56BODwxPpuPxtmQdBTeP1/PMeywGI3bH8d+RQQkTXrTp66hWEwlGnt/yv2wiBDCF0fPTgzUGHG3A7eSbSg0PVqzl77BeGQc9lNryxnYnBSh9y/HajDwIF2S46+mjUREKTKPi8blnHwQ0jdTy0H4uBSF1xe/glEQKElyx6OyrWhQJQ5vd88FwJAUtg87y1oY3BRxqvu3mnUcNDlKp5PC0YhkGOpHY88p3KgUmecnw3Y8+CBVht+rqpVQRC0mh4PK8aiAFMojT89GBMAYfccLv45dGCxFXsOftrV0VCD+Y3PLEcycFK4DN8tiKOAgZZ7vt56BODwxPpuPxtmQdBTeP1/PMeywGI3bH8d+RQQkTXrTp66hWEwlGnt/yv2wiBDCF0fPTgzUGHG3A7eSbSg0PVqzl77BeGQc9lNryxnYnBSh9y/HajDwIF2S46+mjUREKTKPi8blnHwQ0jdTy0H4uBSF1xe/glEQKElyx6OyrWhQJQ5vd88FwJAUtg87y1oY3BRxqvu3mnUcNDlKp5PC0YhkGOpHY88p3KgUmecnw3Y8+CBVht+rqpVQRC0mh4PK8aiAFMojT89GBMAYfccLv45dGCxFXsOftrV0VCD+Y3PLEcycFK4DN8tiKOAgZZ7vt56BODwxPpuPxtmQdBTeP1/PMeywGI3bH8d+RQQkTXrTp66hWEwlGnt/yv2wiBDCF0fPTgzUGHG3A7eSbSg0PVqzl77BeGQc9lNryxnYnBSh9y/HajDwIF2S46+mjUREKTKPi8blnHwQ0jdTy0H4uBSF1xe/glEQKElyx6OyrWhQJQ5vd88FwJAUtg87y1oY3BRxqvu3mnUcNDlKp5PC0YhkGOpHY88p3KgUmecnw3Y8+CBVht+rqpVQRC0mh4PK8aiAFMojT89GBMAYfccLv45dGCxFXsOftrV0VCD+Y3PLEcycFK4DN8tiKOAgZZ7vt56BODwxPpuPxtmQdBTeP1/PMeywGI3bH8d+RQQkTXrTp66hWEwlGnt/yv2wiBDCF0fPTgzUGHG3A7eSbSg0PVqzl77BeGQc9lNryxnYnBSh9y/HajDwIF2S46+mjUREKTKPi8blnHwQ0jdTy0H4uBSF1xe/glEQKElyx6OyrWhQJQ5vd88FwJAUtg87y1oY3BRxqvu3mnUcNDlKp5PC0YhkGOpHY88p3KgUmecnw3Y8+CBVht+rqpVQRC0mh4PK8aiAFMojT89GBMAYfccLv45dGCxFXsOftrV0VCD+Y3PLEcycFK4DN8tiKOAgZZ7vt56BODwxPpuPxtmQdBTeP1/PMeywGI3bH8d+RQQkTXrTp66hWEwlGnt/yv2wiBDCF0fPTgzUGHG3A7eSbSg0PVqzl77BeGQc9lNryxnYnBSh9y/HajDwIF2S46+mjUREKTKPi8blnHwQ0jdTy0H4uBSF1xe/glEQKElyx6OyrWhQJQ5vd88FwJAUtg87y1oY3BRxqvu3mnUcNDlKp5PC0YhkGOpHY88p3KgUmecnw3Y8+CBVht+rqpVQRC0mh4PK8aiAFMojT89GBMAYfccLv45dGCxFXsOftrV0VCD+Y3PLEcycFK4DN8tiKOAgZZ7vt56BODwxPpuPxtmQdBTeP1/PMeywGI3bH8d+RQQkTXrTp66hWEwlGnt/yv2wiBDCF0fPTgzUGHG3A7eSbSg0PVqzl77BeGQc9lNryxnYnBSh9y/HajDwIF2S46+mjUREKTKPi8blnHwQ0jdTy0H4uBSF1xe/glEQKElyx6OyrWhQJQ5vd88FwJAUtg87y1oY3BRxqvu3mnUcNDlKp5PC0YhkGOpHY88p3KgUmecnw3Y8+CBVht+rqpVQRC0mh4PK8aiAFMojT89GBMAYfccLv45dGCxFXsOftrV0VCD+Y3PLEcycFK4DN8tiKOAgZZ7vt56BODwxPpuPxtmQdBTeP1/PMeywGI3bH8d+RQQkTXrTp66hWEwlGnt/yv2wiBDCF0fPTgzUGHG3A7eSbSg0PVqzl77BeGQc9lNryxnYnBSh9y/HajDwIF2S46+mjUREKTKPi8blnHwQ0jdTy0H4uBSF1xe/glEQKElyx6OyrWhQJQ5vd88FwJAUtg87y1oY3BRxqvu3mnUcNDlKp5PC0YhkGOpHY88p3KgUmecnw3Y8+CBVht+rqpVQRC0mh4PK8aiAFMojT89GBMAYfccLv45dGCxFXsOftrV0VCD+Y3PLEcycFK4DN8tiKOAgZZ7vt56BODwxPpuPxtmQdBTeP1/PMeywGI3bH8d+RQQkTXrTp66hWEwlGnt/yv2wiBDCF0fPTgzUGHG3A7eSbSg0PVqzl77BeGQc9lNryxnYnBSh9y/HajDwIF2S46+mjUREKTKPi8blnHwQ0jdTy0H4uBSF1xe/glEQKElyx6OyrWhQJQ5vd88FwJAUtg87y1oY3BRxqvu3mnUcNDlKp5PC0YhkGOpHY88p3KgUmecnw3Y8+CBVht+rqpVQRC0mh4PK8aiAFMojT89GBMAYfccLv45dGCxFXsOftrV0VCD+Y3PLEcycFK4DN8tiKOAgZZ7vt56BODwxPpuPxtmQdBTeP1/PMeywGI3bH8d+RQQkTXrTp66hWEwlGnt/yv2wiBDCF0fPTgzUGHG3A7eSbSg0PVqzl77BeGQc9lNryxnYnBSh9y/HajDwIF2S46+mjUREKTKPi8blnHwQ0jdTy0H4uBSF1xe/glEQKElyx6OyrWhQJQ5vd88FwJAUtg87y1oY3BRxqvu3mnUcNDlKp5PC0YhkGOpHY88p3KgUmecnw3Y8+CBVht+rqpVQRC0mh4PK8aiAFMojT89GBMAYfccLv45dGCxFXsOftrV0VCD+Y3PLEcycFK4DN8tiKOAgZZ7vt56BODwxPpuPxtmQdBTeP1/PMeywGI3bH8d+RQQkTXrTp66hWEwlGnt/yv2wiBDCF0fPTgzUGHG3A7eSbSg0PVqzl77BeGQc9lNryxnYnBSh9y/HajDwIF2S46+mjUREKTKPi8blnHwQ0jdTy0H4uBSF1xe/glEQKElyx6OyrWhQJQ5vd88FwJAUtg87y1oY3BRxqvu3mnUcNDlKp5PC0YhkGOpHY88p3KgUmecnw3Y8+CBVht+rqpVQRC0mh4PK8aiAFMojT89GBMAYfccLv45dGCxFXsOftrV0VCD+Y3PLEcycFK4DN8tiKOAgZZ7vt56BODwxPpuPxtmQdBTeP1/PMeywGI3bH8d+RQQkTXrTp66hWEwlGnt/yv2wiBDCF0fPTgzUGHG3A7eSbSg0PVqzl77BeGQc9lNryxnYnBSh9y/HajDwIF2S46+mjUREKTKPi8blnHwQ0jdTy0H4uBSF1xe/glEQKElyx6OyrWhQJQ5vd88FwJAUtg87y1o');
      audio.play();
    } else {
      setIsBuzzerOn(false);
      if (!isAutoMode) {
        setIsLightOn(false);
      }
    }
  }, [distance, isAutoMode]);

  return {
    distance,
    setDistance,
    lightBrightness,
    setLightBrightness,
    isLightOn,
    setIsLightOn,
    isBuzzerOn,
    setIsBuzzerOn,
    isAutoMode,
    setIsAutoMode,
    joystickPosition,
    setJoystickPosition,
  };
};

const UltrasonicSensor = ({ distance }: { distance: number }) => {
  const objectPosition = `${(distance / 200) * 100}%`;
  
  return (
    <div className="relative h-48 bg-gray-800/30 rounded-xl p-4 perspective-1000">
      {/* 3D Ultrasonic Sensor */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 w-24 h-16 bg-gray-700 rounded-lg transform-3d rotate-y-45 shadow-xl">
        {/* Sensor Eyes */}
        <div className="absolute left-2 top-1/2 -translate-y-1/2 flex gap-4">
          <div className="w-4 h-4 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"></div>
          <div className="w-4 h-4 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50"></div>
        </div>
      </div>
      
      {/* Distance Line */}
      <div className="absolute left-28 top-1/2 -translate-y-1/2 h-1 bg-blue-500/20 rounded" style={{ width: `calc(100% - 8rem)` }}>
        <div className="absolute top-1/2 -translate-y-1/2 left-0 h-4 w-1 bg-blue-400"></div>
        <div className="absolute top-1/2 -translate-y-1/2 right-0 h-4 w-1 bg-blue-400"></div>
      </div>
      
      {/* Moving Object */}
      <div 
        className={`absolute top-1/2 -translate-y-1/2 w-8 h-8 transition-all duration-300 ${
          distance < 30 ? 'bg-red-500/20' : 'bg-blue-500/20'
        } rounded-lg backdrop-blur-sm border-2 ${
          distance < 30 ? 'border-red-500' : 'border-blue-500'
        }`}
        style={{ left: objectPosition }}
      >
        <div className={`absolute inset-0 ${distance < 30 ? 'animate-ping' : ''} rounded-lg ${
          distance < 30 ? 'bg-red-500/20' : 'bg-blue-500/20'
        }`}></div>
      </div>
      
      {/* Distance Markers */}
      <div className="absolute bottom-2 left-28 right-8 flex justify-between text-xs text-gray-400">
        <span>0cm</span>
        <span>50cm</span>
        <span>100cm</span>
        <span>150cm</span>
        <span>200cm</span>
      </div>
    </div>
  );
};

function App() {
  const {
    distance,
    setDistance,
    lightBrightness,
    setLightBrightness,
    isLightOn,
    setIsLightOn,
    isBuzzerOn,
    setIsBuzzerOn,
    isAutoMode,
    setIsAutoMode,
  } = useIoTData();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <header className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-700/50">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-blue-500/10 p-3 rounded-xl">
                <Wifi className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">WizKlub IoT Control System</h1>
                <p className="text-gray-400">Smart Home Automation Dashboard</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-green-500/10 px-4 py-2 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400">System Online</span>
              </div>
              <button
                onClick={() => setIsAutoMode(!isAutoMode)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                  isAutoMode
                    ? 'bg-blue-500 hover:bg-blue-600 shadow-lg shadow-blue-500/20'
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
              >
                <Settings className={`w-4 h-4 ${isAutoMode ? 'animate-spin' : ''}`} />
                {isAutoMode ? 'Auto Mode: ON' : 'Auto Mode: OFF'}
              </button>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Distance Sensor Card */}
          <div className="col-span-full bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-700/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-500/10 p-2 rounded-lg">
                <Gauge className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-xl font-semibold">Distance Sensor</h2>
            </div>
            
            {/* 3D Ultrasonic Visualization */}
            <UltrasonicSensor distance={distance} />
            
            {/* Virtual Object Slider */}
            <div className="mt-6">
              <label className="block text-sm text-gray-400 mb-3">
                Simulate object distance:
              </label>
              <input
                type="range"
                min="0"
                max="200"
                value={distance}
                onChange={(e) => setDistance(Number(e.target.value))}
                className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            
            {/* Alert for close objects */}
            {distance < 30 && (
              <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-4 rounded-xl border border-red-400/20 animate-pulse mt-4">
                <AlertTriangle className="w-5 h-5" />
                <span>Object detected nearby! Activating safety measures.</span>
              </div>
            )}
          </div>

          {/* Smart Light Control Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-700/50">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="bg-yellow-500/10 p-2 rounded-lg">
                  <Power className="w-6 h-6 text-yellow-400" />
                </div>
                <h2 className="text-xl font-semibold">Smart Light</h2>
              </div>
              <button
                onClick={() => setIsLightOn(!isLightOn)}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  isLightOn 
                    ? 'bg-gradient-to-r from-yellow-500 to-yellow-400 shadow-lg shadow-yellow-500/20' 
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
              >
                <Power className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-6">
              <div className="text-center">
                <div className={`text-4xl font-bold mb-2 transition-colors ${isLightOn ? 'text-yellow-400' : 'text-gray-600'}`}>
                  {lightBrightness}%
                </div>
                <div className="text-sm text-gray-400">Brightness Level</div>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={lightBrightness}
                onChange={(e) => setLightBrightness(Number(e.target.value))}
                className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>

          {/* Buzzer Control Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-700/50">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="bg-red-500/10 p-2 rounded-lg">
                  <Volume2 className="w-6 h-6 text-red-400" />
                </div>
                <h2 className="text-xl font-semibold">Buzzer</h2>
              </div>
              <button
                onClick={() => setIsBuzzerOn(!isBuzzerOn)}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  isBuzzerOn 
                    ? 'bg-gradient-to-r from-red-500 to-red-400 shadow-lg shadow-red-500/20' 
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
              >
                <Volume2 className="w-6 h-6" />
              </button>
            </div>
            <div className="text-center space-y-4">
              <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl ${
                isBuzzerOn ? 'bg-red-500/10 text-red-400' : 'bg-gray-700 text-gray-400'
              }`}>
                <div className={`w-2 h-2 rounded-full ${isBuzzerOn ? 'bg-red-400 animate-pulse' : 'bg-gray-500'}`}></div>
                <span className="font-medium">{isBuzzerOn ? 'Active' : 'Silent'}</span>
              </div>
            </div>
          </div>

          {/* Joystick Control Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-700/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-purple-500/10 p-2 rounded-lg">
                <Joystick className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className="text-xl font-semibold">Joystick Control</h2>
            </div>
            <div className="text-center space-y-4">
              <div className="inline-block bg-gray-700/50 p-6 rounded-xl border border-gray-600/20">
                <Joystick className="w-16 h-16 text-purple-400" />
              </div>
              <p className="text-gray-400">
                Use joystick to control light brightness
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;