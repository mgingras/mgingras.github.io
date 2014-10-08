Myo.start();
Myo.lock();
var eventHappening = false;

Myo.on('pose', function(pose){
  if(eventHappening || Myo.isLocked){
    return;
  }
  console.log(pose);
  eventHappening = true;
  setTimeout(function(){
    eventHappening = false;
  }, 200);
});

Myo.on('thumb_to_pinky', function(){
  if(eventHappening){
    return;
  }
  if(!Myo.isLocked){
    resetTimeout();
    window.scrollBy(0,350);
    return;
  }
  Myo.vibrate('short');
  Myo.unlock();
  resetTimeout();
  console.log('unlocked');
});

Myo.on('spread', function(){
  console.log('spread');
  if(eventHappening || Myo.isLocked){
    return;
  }
  window.scrollBy(0,-350);
  resetTimeout();
  return;
});

Myo.on('fist', function(){
  if(eventHappening || Myo.isLocked){
    return;
  }
  location.reload();
});

Myo.on('wave_out', function() {
  console.log('wave_out');
  if(eventHappening || Myo.isLocked){
    return;
  }
  window.history.forward();
});

Myo.on('wave_in', function() {
  console.log('wave_in: ' + eventHappening + ' : ' + Myo.isLocked);
  if(eventHappening || Myo.isLocked){
    return;
  }
  window.history.back();
});

var timeout = undefined;
function resetTimeout(){
  console.log('Lock timeout reset');
  if(timeout){
    clearTimeout(timeout);
  }
  timeout = setTimeout(function(){
    Myo.lock();
    console.log('locked');
    Myo.vibrate('long');
  }, 3500);
}
