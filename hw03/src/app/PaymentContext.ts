import { PaymentProvider } from "../core/PaymentProvider";
import { PaymentProviderFactory } from "../core/PaymentProviderFactory";


export class PaymentContext {
   private provider: PaymentProvider;

  constructor(provider: PaymentProviderFactory) {
      this.provider = provider.createPaymentProvider();
  }

  processPayment(amount: number): void {
      const transactionId = this.provider.authorize(amount);
      this.provider.capture(transactionId); 
      this.provider.refund(transactionId);
  }
}
