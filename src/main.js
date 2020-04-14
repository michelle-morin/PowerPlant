import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { yuckyFood, cactus, deskPlant, blueFood, greenFood, lowLight, highLight, lotsOfWater, spritzOfWater } from './../src/plant.js';
import { updateStatus, updateStatus2 } from './../src/standalone.js';

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

  // ("parentElement").on("click", "childelement")

  $('#blueFood1').click(function() {
    const newState = cactus(blueFood);
    updateStatus(newState);
    $('#soil-value1').text(newState.soil);
  });
  $('#yuckyFood1').click(function() {
    const newState = cactus(yuckyFood);
    updateStatus(newState);
    $('#soil-value1').text(newState.soil);
  });
  $('#greenFood1').click(function() {
    const newState = cactus(greenFood);
    updateStatus(newState);
    $('#soil-value1').text(newState.soil);
  });
  $('#highLight1').click(function() {
    const newState = cactus(highLight);
    updateStatus(newState);
    $('#light-value1').text(newState.light);
  });
  $('#lowLight1').click(function() {
    const newState = cactus(lowLight);
    updateStatus(newState);
    $('#light-value1').text(newState.light);
  });
  $('#lotsOfWater1').click(function() {
    const newState = cactus(lotsOfWater);
    updateStatus(newState);
    $('#water-value1').text(newState.water);
  });
  $('#spritzOfWater1').click(function() {
    const newState = cactus(spritzOfWater);
    updateStatus(newState);
    $('#water-value1').text(newState.water);
  });

  $('#blueFood2').click(function() {
    const newState = deskPlant(blueFood);
    updateStatus2(newState);
    $('#soil-value2').text(newState.soil);
  });
  $('#yuckyFood2').click(function() {
    const newState = deskPlant(yuckyFood);
    updateStatus2(newState);
    $('#soil-value2').text(newState.soil);
  });
  $('#greenFood2').click(function() {
    const newState = deskPlant(greenFood);
    updateStatus2(newState);
    $('#soil-value2').text(newState.soil);
  });
  $('#highLight2').click(function() {
    const newState = deskPlant(highLight);
    updateStatus2(newState);
    $('#light-value2').text(newState.light);
  });
  $('#lowLight2').click(function() {
    const newState = deskPlant(lowLight);
    updateStatus2(newState);
    $('#light-value2').text(newState.light);
  });
  $('#lotsOfWater2').click(function() {
    const newState = deskPlant(lotsOfWater);
    updateStatus2(newState);
    $('#water-value2').text(newState.water);
  });
  $('#spritzOfWater2').click(function() {
    const newState = deskPlant(spritzOfWater);
    updateStatus2(newState);
    $('#water-value2').text(newState.water);
  });
});