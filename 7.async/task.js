class AlarmClock {
  constructor(alarmCollection, timerId) {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, callback, callId) {
    this.time = time;
    this.callback = callback;
    this.callId = callId;
    if(!callId) {
      //throw new Error('error text')
      throw new Error('Параметр id не передан')
    }

    if(this.alarmCollection.find(x => x.id === this.callId)) {
      //console.error();
      console.error('Будильник с таким id уже существует');
      return
    }

    let obj = {
      id: this.callId,
      time: this.time,
      callback: this.callback
    };

    this.alarmCollection.push(obj);
  }

  removeClock(callId) {
    this.callId = callId;
    let removedId = this.alarmCollection.find(x => x.id === this.callId);
    if(removedId === undefined) {
      return false
    }
    else {
      this.alarmCollection.splice(removedId,1);
      return true
    }
  }

  getCurrentFormattedTime() {
    let currentDate = new Date();
    let hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
    let minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;
    return hours + ":" + minutes
  }

  start() {
    let currentTime = this.getCurrentFormattedTime.bind();
    let currentCollection = this.alarmCollection;

    function checkClock() {
      currentCollection.forEach((alarm) => {
        if(alarm.time === currentTime()) {
          return alarm.callback() }})
    }

    function forEachCall() {
      currentCollection.forEach(checkClock)
    }

    this.timerId = setInterval(forEachCall,this.timerId);
  }

  stop() {
    if(!this.timerId) {
      clearInterval(this.timerId)
    };

    this.timerId = null;
  }

  printAlarms() {
    this.alarmCollection.forEach((alarm) => {console.log('Будильник №' + alarm.id, 'заведен на ' + alarm.time)})
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}


//Шаг 2
function testCase(){
let phoneAlarm = new AlarmClock();
phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(), () => console.log("Пора вставать"), 1);
phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(), () => {console.log("Давай, вставай уже!"); phoneAlarm.removeClock(2)}, 2);
phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(), () => ("Иди умываться!"));
phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(), () => {("Вставай, а то проспишь!"); phoneAlarm.clearAlarms(); phoneAlarm.printAlarms();}, 3);
phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(), () => ("Вставай, а то проспишь!"), 1);
phoneAlarm.printAlarms();
phoneAlarm.start();
phoneAlarm.stop();
phoneAlarm.clearAlarms();
}

testCase();