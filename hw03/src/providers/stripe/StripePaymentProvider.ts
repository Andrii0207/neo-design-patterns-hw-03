import { PaymentProvider } from "../../core/PaymentProvider";



export class StripePaymentProvider implements PaymentProvider {
    authorize(amount: number): string {
        const transactionId = "stripe_" + Math.random().toString(36).substring(2, 15);
        console.log(`[Stripe] Authorizing payment of $${amount}`);
        return transactionId;
    }
    
    capture(transactionId: string): void {
        console.log(`[Stripe] Capturing transaction with ID: ${transactionId}`);
    }

    refund(transactionId: string): void {
        console.log(`[Stripe] Refunding transaction with ID: ${transactionId}`);
    }
}