import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { yuckyFood, stateChanger, stateChanger2, blueFood, greenFood, lowLight, highLight, lotsOfWater, spritzOfWater } from './../src/plant.js';

$(document).ready(function () {
  // const counterFunction = () => {
  //   let counter = 2;
  //   return () => {
  //     counter ++;
  //     return counter;
  //   };
  // };
  // const incrementer = counterFunction();

  // for (i = 1; i<=counter; i++) {
  //   $(`#blueFood${i}`).click(function() {
  //   const functionToRun = "stateChanger" + i;
  //   const newState = functionToRun(blueFood);
  //   $(`#soil-value${i}`).text(newState.soil);
  //   });
  // }

  $('#blueFood1').click(function() {
    const newState = stateChanger(blueFood);
    $('#soil-value1').text(newState.soil);
  });
  $('#yuckyFood1').click(function() {
    const newState = stateChanger(yuckyFood);
    $('#soil-value1').text(newState.soil);
  });
  $('#greenFood1').click(function() {
    const newState = stateChanger(greenFood);
    $('#soil-value1').text(newState.soil);
  });
  $('#highLight1').click(function() {
    const newState = stateChanger(highLight);
    $('#light-value1').text(newState.light);
  });
  $('#lowLight1').click(function() {
    const newState = stateChanger(lowLight);
    $('#light-value1').text(newState.light);
  });
  $('#lotsOfWater1').click(function() {
    const newState = stateChanger(lotsOfWater);
    $('#water-value1').text(newState.water);
  });
  $('#spritzOfWater1').click(function() {
    const newState = stateChanger(spritzOfWater);
    $('#water-value1').text(newState.water);
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