//dom.js
export let dom = {
  body: document.body,

  btn: document.querySelector('button'),

  main2: document.body.lastElementChild.previousElementSibling,

  main1:
    document.body.lastElementChild.previousElementSibling
      .previousElementSibling,

  span1: document.querySelector('.span1'),

  span2: document.querySelector('.span2'),

  country: document.querySelector('.country'),

  time: document.querySelector('.time'),

  warning1: document.querySelector('.warning1'),

  warning2: document.querySelector('.warning'),

  temperature: document.querySelector('.temp'),

  humidity: document.querySelector('.hum'),

  wind: document.querySelector('.wind'),

  temp1: document.querySelector('.temp1'),

  temp2: document.querySelector('.temp2'),

  temp3: document.querySelector('.temp3'),

  temp4: document.querySelector('.temp4'),

  temp5: document.querySelector('.temp5'),

  temp6: document.querySelector('.temp6'),

  temp7: document.querySelector('.temp7'),

  wind1: document.querySelector('.win1'),

  wind2: document.querySelector('.win2'),

  wind3: document.querySelector('.win3'),

  wind4: document.querySelector('.win4'),

  wind5: document.querySelector('.win5'),

  wind6: document.querySelector('.win6'),

  wind7: document.querySelector('.win7'),

  icon: document.querySelector('.icon'),

  h1: document.querySelector('h1'),

  h2: document.querySelector('h2'),

  p1: document.getElementById('day1'),

  p2: document.getElementById('day2'),

  p3: document.getElementById('day3'),

  p4: document.getElementById('day4'),

  p5: document.getElementById('day5'),

  p6: document.getElementById('day6'),

  p7: document.getElementById('day7'),

  i1: document.getElementsByClassName('day1'),

  i2: document.getElementsByClassName('day2'),

  i3: document.getElementsByClassName('day3'),

  i4: document.getElementsByClassName('day4'),

  i5: document.getElementsByClassName('day5'),

  i6: document.getElementsByClassName('day6'),

  i7: document.getElementsByClassName('day7'),

  forecastCards: document.querySelectorAll('#second-main > div'),

  temps: document.querySelectorAll(
    '.temp1, .temp2, .temp3, .temp4, .temp5, .temp6, .temp7'
  ),

  winds: document.querySelectorAll(
    '.win1, .win2, .win3, .win4, .win5, .win6, .win7'
  ),

  imgs: document.querySelectorAll('#second-main img'),

  times: document.querySelectorAll('#second-main [id]'),
  days: document.querySelectorAll('#second-main .names'),
  input: document.getElementById('inp'),

  searchBtn: document.getElementById('search'),
};
