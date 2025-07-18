import { PaymentProvider } from "../../core/PaymentProvider";



export class ApplePaymentProvider implements PaymentProvider {
    authorize(amount: number): string {
        const transactionId = "apple_" + Math.random().toString(36).substring(2, 15);
        console.log(`[Apple] Authorizing payment of $${amount}`);
        return transactionId;
    }

    capture(transactionId: string): void {
        console.log(`[Apple] Capturing transaction ${transactionId}`);
    }

    refund(transactionId: string): void {
        console.log(`[Apple] Refunding transaction ${transactionId}`);
    }
}