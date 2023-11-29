var Undo = [];
var Redo = [];

function WRITE(Undo, X) {
  Undo.push(X);
}

function UNDO(Undo, Redo) {
  var state = Undo.pop();
  Redo.push(state);
}

function REDO(Undo, Redo) {
  var state = Redo.pop();
  Undo.push(state);
}

function READ(Undo) {
  console.log(Undo[Undo.length - 1]);
}

function QUERY(Q) {
  for (var i = 0; i < Q.length; i++) {
    var query = Q[i];
    if (query.startsWith("WRITE")) {
      var state = query.slice(6);
      WRITE(Undo, state);
    } else if (query === "UNDO") {
      UNDO(Undo, Redo);
    } else if (query === "REDO") {
      REDO(Undo, Redo);
    } else if (query === "READ") {
      READ(Undo);
    }
  }
}

var Q = ["WRITE A", "WRITE B", "WRITE C", "UNDO", "READ", "REDO", "READ"];

QUERY(Q);
