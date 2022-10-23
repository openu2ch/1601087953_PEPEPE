const CLASSNAME = "-visible";
const TIMEOUT = 5000;
const $target = $(".bg");

setInterval(() => {
  $target.addClass(CLASSNAME);

  setTimeout(() => {
  }, TIMEOUT);
}, TIMEOUT*2);
