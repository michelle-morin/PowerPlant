import $ from 'jquery';

export function updateStatus(plant) {
  if(plant.soil < 5) {
    $("#foodLevel1 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-danger');
  } else if(plant.soil <= 15) {
    $("#foodLevel1 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-warning');
  } else if(plant.soil > 15) {
    $("#foodLevel1 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-success');
  }
  if(plant.water < 10) {
    $("#waterLevel1 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-danger');
  } else if(plant.water <= 20) {
    $("#waterLevel1 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-warning');
  } else if(plant.water > 20) {
    $("#waterLevel1 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-success');
  }
  if(plant.light < 10) {
    $("#lightLevel1 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-danger');
  } else if(plant.light <= 20) {
    $("#lightLevel1 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-warning');
  } else if(plant.light > 20) {
    $("#lightLevel1 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-success');
  }
  $("#foodLevel1 .progress-bar").attr('style', `width: ${plant.soil*10}%`);
  $("#lightLevel1 .progress-bar").attr('style', `width: ${plant.light*10}%`);
  $("#waterLevel1 .progress-bar").attr('style', `width: ${plant.water*10}%`);
}

export function updateStatus2(plant) {
  if(plant.soil < 5) {
    $("#foodLevel2 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-danger');
  } else if(plant.soil <= 15) {
    $("#foodLevel2 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-warning');
  } else if(plant.soil > 15) {
    $("#foodLevel2 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-success');
  }
  if(plant.water < 10) {
    $("#waterLevel2 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-danger');
  } else if(plant.water <= 20) {
    $("#waterLevel2 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-warning');
  } else if(plant.water > 20) {
    $("#waterLevel2 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-success');
  }
  if(plant.light < 10) {
    $("#lightLevel2 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-danger');
  } else if(plant.light <= 20) {
    $("#lightLevel2 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-warning');
  } else if(plant.light > 20) {
    $("#lightLevel2 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-success');
  }
  $("#foodLevel2 .progress-bar").attr('style', `width: ${plant.soil*10}%`);
  $("#lightLevel2 .progress-bar").attr('style', `width: ${plant.light*10}%`);
  $("#waterLevel2 .progress-bar").attr('style', `width: ${plant.water*10}%`);
}