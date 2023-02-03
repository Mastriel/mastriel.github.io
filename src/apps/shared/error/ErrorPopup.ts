import {Window} from "../../../window/window";
import ErrorPopupWindow from "./ErrorPopupWindow.svelte";


export class ErrorPopup extends Window {

    constructor(public errorTitle: string, public message: string,
                public spawner?: Window, public unrecoverable: boolean = false) {
        super(500, 500, 400, 160, ErrorPopupWindow);
    }
}