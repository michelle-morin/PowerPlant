import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { yuckyFood, stateChanger, stateChanger2, blueFood, greenFood, lowLight, highLight, lotsOfWater, spritzOfWater } from './../src/plant.js';

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

  $('#blueFood2').click(function() {
    const newState = stateChanger2(blueFood);
    $('#soil-value2').text(newState.soil);
  });
  $('#yuckyFood2').click(function() {
    const newState = stateChanger2(yuckyFood);
    $('#soil-value2').text(newState.soil);
  });
  $('#greenFood2').click(function() {
    const newState = stateChanger2(greenFood);
    $('#soil-value2').text(newState.soil);
  });
  $('#highLight2').click(function() {
    const newState = stateChanger2(highLight);
    $('#light-value2').text(newState.light);
  });
  $('#lowLight2').click(function() {
    const newState = stateChanger2(lowLight);
    $('#light-value2').text(newState.light);
  });
  $('#lotsOfWater2').click(function() {
    const newState = stateChanger2(lotsOfWater);
    $('#water-value2').text(newState.water);
  });
  $('#spritzOfWater2').click(function() {
    const newState = stateChanger2(spritzOfWater);
    $('#water-value2').text(newState.water);
  });
});