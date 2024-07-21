import ConfirmationView from '../views/confirmation.view';

export default class ConfirmationController {
    private confirmationView: ConfirmationView;

    constructor() {
        this.confirmationView = new ConfirmationView();
    }

    init(): void {
        this.confirmationView.bindEventListeners(this);
    }

    /**
     * Show the confirmation
     */
    handleShowConfirmation(): void {
        this.confirmationView.showTheConfirmation();
    }

    /**
     * Hide the confirmation
     */
    handleHideConfirmation(): void {
        this.confirmationView.hideTheConfirmation();
    }
}
