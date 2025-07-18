import { PaymentProvider } from "../../core/PaymentProvider";



export class PaypalPaymentProvider implements PaymentProvider {
    authorize(amount: number): string {
        const transactionId = "paypal_" + Math.random().toString(36).substring(2, 15);
        console.log(`[PayPal] Authorizing payment of $${amount}`);
        return transactionId;
    }

    capture(transactionId: string): void {
        console.log(`[PayPal] Capturing transaction ${transactionId}`);
    }

    refund(transactionId: string): void {
        console.log(`[PayPal] Refunding transaction ${transactionId}`);
    }
}