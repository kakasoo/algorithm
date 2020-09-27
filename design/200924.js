const action = (() => {
  const interfaceTest = { run: null };
  const work = function (val) {
    interfaceTest.run(val);
  };

  work.change = function (runner) {
    interfaceTest.run = runner;
  };
  return work;
})();

action.change((val) => console.log(val * val));

action(5);
