// const DEFAULT_STATE = {
//     face:"<&_&>"
//   };
//   Happy : "¯\_(ツ)_/¯"
//   Sad : "《〠_〠》"
//   Angry : "(◡‿◡✿)"
//   Confused : "(｡:hearts:‿:hearts:｡)"

//   const store = Redux.createStore(
//     rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );

//   const face = document.getElementById('face');
//   function render() {
//     face.innerText = store.getState().face.toString();
//   }
//   render();
//   store.subscribe(render);

// ACTIONS

// const happyFace = (smiley) => {
//     return {
//         type: "HAPPY_FACE",
//         payload: smiley
//     }
// }

// const sadFace = (smiley) => {
//     return {
//         type: "SAD_FACE",
//         payload: smiley
//     }
// }

// const angryFace = (smiley) => {
//     return {
//         type: "ANGRY_FACE",
//         payload: smiley
//     }
// }

// const confuseFace = (smiley) => {
//     return {
//         type: "CONFUSE_FACE",
//         payload: smiley
//     }
// }

// const initialState = {
//     face = "(__)"
// };

// const faceReducer = (state = initialState, action) => {
//     switch(action.type) {
//         case "HAPPY_FACE":
//             return {
//                 ...state,
//                 face: action.payload
//             }
//         case "SAD_FACE":
//             return {
//                 ...state,
//                 face: action.payload
//             }
//         case "ANGRY_FACE":
//             return {
//                 ...state,
//                 face: action.payload
//             }
//         case "CONFUSE_FACE":
//             return {
//                 ...state,
//                 face: action.payload
//             }
//         default:
//             return state;
//     }
// }

// const store = createStore(reducer)

// // EVENT LISTENERS

// function happySmiley() {
//     return store.dispatch(happyFace("¯\_(ツ)_/¯"))
// }

// function sadSmiley() {
//     return store.dispatch(sadSmiley("《〠_〠》"))
// }

// function angrySmiley() {
//     return store.dispatch(angrySmiley("(◡‿◡✿)"))
// }

// function confuseSmiley() {
//     return store.dispatch(confuseSmiley("(｡:hearts:‿:hearts:｡)"))
// }

// happy.addEventListener('click', happySmiley);
// document.getElementById("sad").addEventListener('click', sadSmiley);
// document.getElementById("angry").addEventListener('click', angrySmiley);
// document.getElementById("confused").addEventListener('click', confuseSmiley);

// store.subscribe(() => (face.innerHTML = store.getState().face));

const newFace = document.getElementById("face");

function faceSmiley(state = "current mood", action) {
  switch (action.type) {
    case "HAPPY":
      return "¯\_(ツ)_/¯"

    case "SAD":
      return "《〠_〠》"

    case "ANGRY":
      return "(◡‿◡✿)"

    case "CONFUSED":
      return "(｡:hearts:‿:hearts:｡)"

    default:
      return state
  }
}

const store = Redux.createStore(faceSmiley)

function render() {
  newFace.innerHTML = store.getState().toString();
}
render();
store.subscribe(render);

document.getElementById("happy").addEventListener("click", function () {
  store.dispatch({ type: "HAPPY" });
});

document.getElementById("sad").addEventListener("click", function () {
  store.dispatch({ type: "SAD" });
});

document.getElementById("angry").addEventListener("click", function () {
  store.dispatch({ type: "ANGRY" });
});

document.getElementById("confused").addEventListener("click", function () {
  store.dispatch({ type: "CONFUSED" });
});
