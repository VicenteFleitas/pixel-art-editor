import Picture from "./Picture.js";
import { draw, fill, rectangle, pick } from "./DrawingTools.js";
import ToolSelect from "./ToolSelect.js";
import ColorSelect from "./ColorSelect.js";
import SaveButton from "./SaveButton.js";
import LoadButton from "./LoadButton.js";
import UndoButton from "./UndoButton.js";
import PixelEditor from "./PixelEditor.js";
import { historyUpdateState } from "./utils.js";

const startState = {
  tool: "draw",
  color: "#2c3e50",
  picture: Picture.empty(60, 30, "#ecf0f1"),
  done: [],
  doneAt: 0,
};

const baseTools = { draw, fill, rectangle, pick };

const baseControls = [
  ToolSelect,
  ColorSelect,
  SaveButton,
  LoadButton,
  UndoButton,
];

function startPixelEditor({
  state = startState,
  tools = baseTools,
  controls = baseControls,
}) {
  let app = new PixelEditor(state, {
    tools,
    controls,
    dispatch(action) {
      state = historyUpdateState(state, action);
      app.syncState(state);
    },
  });
  return app.dom;
}

document.querySelector("div").appendChild(startPixelEditor({}));
