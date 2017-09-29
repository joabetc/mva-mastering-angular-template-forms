import { Component } from "@angular/core";

@Component({
    selector: "main",
    template: `
        <div>Old Message: {{message}}</div>
        <div>New Message: {{newMessage}}</div>
        <div>
            <label for="message-input">Message:</label>
            <input type="text" id="message-input" name="messageInput" 
                [ngModel]="message" (ngModelChange)="newMessage = $event">
        </div>
    `,
})
export class AppComponent {

    public message: string = "Hello World!";

}