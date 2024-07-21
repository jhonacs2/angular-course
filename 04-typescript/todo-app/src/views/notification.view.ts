import CONSTANTS from '../constants/index';
import { qs } from '../helpers';
import NotificationController from '../controllers/notification.controller';

/**
 * Export this module as default
 */
export default class NotificationView {
    private dismiss: Element;
    private notification: Element;
    private notificationContent: Element;
    private notificationDescription: Element;

    constructor() {
        this.dismiss = qs('.dismiss');
        this.notification = qs('.notification');
        this.notificationContent = qs('.notification__content');
        this.notificationDescription = qs('.notification__description');
    }

    /**
     * Show notification
     */
    showNotification(type: string, content: string) {
        console.log(type, content);
        const { ERROR, INFORMATION, WARNING, SUCCESS } = CONSTANTS.NOTIFICATIONS;
        const notificationType = [ERROR, INFORMATION, WARNING, SUCCESS];
        const notification = this.notification as HTMLElement;

        /**
         * TODO: Refactor for this
         */
        notificationType.forEach((notificationItem) => {
            this.notificationContent.classList.remove(`notification--${notificationItem}`);
        });

        this.notificationContent.classList.add(`notification--${type}`);
        notification.style.display = 'block';
        this.notificationDescription.innerHTML = content;
    }

    /**
     * Hide notification
     */
    hideNotification(): void {
        this.notification.removeAttribute('style');
        this.notificationDescription.innerHTML = '';
    }

    /**
     * Events handling
     *
     * @param {Object} controller
     */
    bindEventListeners(controller: NotificationController): void {
        this.dismiss.addEventListener('click', () => {
            controller.dismissNotication();
        });

        this.notification.addEventListener('mouseenter', () => {
            controller.mouseEnterNotificationState();
        });

        this.notification.addEventListener('mouseleave', () => {
            controller.mouseLeaveNotificationState();
        });
    }
}
