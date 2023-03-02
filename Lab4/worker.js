let runTime = () => {
  postMessage(new Date());
};
setInterval(runTime, 1000);
