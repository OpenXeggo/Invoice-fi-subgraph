import { BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Billing,
  InvoiceCancelled,
  InvoiceCreated,
  InvoicePaid,

  OwnerSet,
  Paused,
  Unpaused
} from "../generated/Billing/Billing"
import { Invoice } from "../generated/schema"

export function handleInvoiceCancelled(event: InvoiceCancelled): void {
  let entity =Invoice.load(event.params.invoiceID.toString());
  if(!entity) return;
  entity.isCancelled=true;
  entity.save()
}

export function handleInvoiceCreated(event: InvoiceCreated): void {
  let entity =Invoice.load(event.params.invoiceID.toString());
  if(!entity){ 
    entity=new Invoice(event.params.invoiceID.toString());
    entity.invoiceID=event.params.invoiceID;
  entity.invoiceCreator=event.params.invoiceCreator;
  entity.tokenAddress=event.params.tokenAddress;
  entity.tokenAmountInWei=event.params.tokenAmountInWei;
  entity.receiver=event.params.receiver;
  entity.createdAt=event.block.timestamp;

  let contract = Billing.bind(event.address);
  const invoice = contract.getInvoice(event.params.invoiceID);
  entity.isPaid = false;
  entity.isCancelled = invoice.value5;
  entity.PaidAt = BigInt.zero();
  }
  
  entity.save()
}
 
export function handleInvoicePaid(event: InvoicePaid): void {
  let entity =Invoice.load(event.params.invoiceID.toString());
  if(!entity) return;
  entity.isPaid=true;
  entity.PaidAt=event.block.timestamp;
  entity.save();
}


