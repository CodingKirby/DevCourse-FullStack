import { loggerReducer } from "../slicer/loggerSlicer";
import { boardReducer } from "../slicer/boardSlicer";
import { modalReducer } from "../slicer/modalSlicer";

const reducer = {
    logger: loggerReducer,
    boards: boardReducer,
    modal: modalReducer
}

export default reducer;