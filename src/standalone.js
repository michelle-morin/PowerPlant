import $ from 'jquery';

export function updateStatus(plant) {
  if(plant.food < 3) {
    $("#foodLevel1 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-danger');
  } else if(plant.soil <= 6) {
    $("#foodLevel1 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-warning');
  } else if(plant.soil > 6) {
    $("#foodLevel1 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-success');
  }
  if(plant.water < 3) {
    $("#waterLevel1 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-danger');
  } else if(plant.water <= 6) {
    $("#waterLevel1 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-warning');
  } else if(plant.water > 6) {
    $("#waterLevel1 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-success');
  }
  if(plant.light < 3) {
    $("#lightLevel1 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-danger');
  } else if(plant.light <= 6) {
    $("#lightLevel1 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-warning');
  } else if(plant.light > 6) {
    $("#lightLevel1 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-success');
  }
  $("#foodLevel1 .progress-bar").attr('style', `width: ${plant.soil*10}%`);
  $("#lightLevel1 .progress-bar").attr('style', `width: ${plant.light*10}%`);
  $("#waterLevel1 .progress-bar").attr('style', `width: ${plant.water*10}%`);
}

export function updateStatus2(plant) {
  if(plant.food < 3) {
    $("#foodLevel2 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-danger');
  } else if(plant.soil <= 6) {
    $("#foodLevel2 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-warning');
  } else if(plant.soil > 6) {
    $("#foodLevel2 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-success');
  }
  if(plant.water < 3) {
    $("#waterLevel2 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-danger');
  } else if(plant.water <= 6) {
    $("#waterLevel2 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-warning');
  } else if(plant.water > 6) {
    $("#waterLevel2 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-success');
  }
  if(plant.light < 3) {
    $("#lightLevel2 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-danger');
  } else if(plant.light <= 6) {
    $("#lightLevel2 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-warning');
  } else if(plant.light > 6) {
    $("#lightLevel2 .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-success');
  }
  $("#foodLevel2 .progress-bar").attr('style', `width: ${plant.soil*10}%`);
  $("#lightLevel2 .progress-bar").attr('style', `width: ${plant.light*10}%`);
  $("#waterLevel2 .progress-bar").attr('style', `width: ${plant.water*10}%`);
}