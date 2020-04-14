import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { yuckyFood, stateChanger, blueFood, greenFood, lowLight, highLight, lotsOfWater, spritzOfWater } from './../src/plant.js';

$(document).ready(function () {
  $('#blueFood').click(function() {
    const newState = stateChanger(blueFood);
    $('#soil-value').text(newState.soil);
  });
  $('#yuckyFood').click(function() {
    const newState = stateChanger(yuckyFood);
    $('#soil-value').text(newState.soil);
  });
  $('#greenFood').click(function() {
    const newState = stateChanger(greenFood);
    $('#soil-value').text(newState.soil);
  });
  $('#highLight').click(function() {
    const newState = stateChanger(highLight);
    $('#light-value').text(newState.light);
  });
  $('#lowLight').click(function() {
    const newState = stateChanger(lowLight);
    $('#light-value').text(newState.light);
  });
  $('#lotsOfWater').click(function() {
    const newState = stateChanger(lotsOfWater);
    $('#water-value').text(newState.water);
  });
  $('#spritzOfWater').click(function() {
    const newState = stateChanger(spritzOfWater);
    $('#water-value').text(newState.water);
  });
});