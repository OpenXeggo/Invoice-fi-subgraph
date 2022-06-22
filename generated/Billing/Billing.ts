// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class InvoiceCancelled extends ethereum.Event {
  get params(): InvoiceCancelled__Params {
    return new InvoiceCancelled__Params(this);
  }
}

export class InvoiceCancelled__Params {
  _event: InvoiceCancelled;

  constructor(event: InvoiceCancelled) {
    this._event = event;
  }

  get invoiceID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class InvoiceCreated extends ethereum.Event {
  get params(): InvoiceCreated__Params {
    return new InvoiceCreated__Params(this);
  }
}

export class InvoiceCreated__Params {
  _event: InvoiceCreated;

  constructor(event: InvoiceCreated) {
    this._event = event;
  }

  get invoiceID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get invoiceCreator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get tokenAmountInWei(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get receiver(): Address {
    return this._event.parameters[4].value.toAddress();
  }
}

export class InvoicePaid extends ethereum.Event {
  get params(): InvoicePaid__Params {
    return new InvoicePaid__Params(this);
  }
}

export class InvoicePaid__Params {
  _event: InvoicePaid;

  constructor(event: InvoicePaid) {
    this._event = event;
  }

  get invoiceID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get isPaidBy(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get byReceiver(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class OwnerSet extends ethereum.Event {
  get params(): OwnerSet__Params {
    return new OwnerSet__Params(this);
  }
}

export class OwnerSet__Params {
  _event: OwnerSet;

  constructor(event: OwnerSet) {
    this._event = event;
  }

  get oldOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Paused extends ethereum.Event {
  get params(): Paused__Params {
    return new Paused__Params(this);
  }
}

export class Paused__Params {
  _event: Paused;

  constructor(event: Paused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Unpaused extends ethereum.Event {
  get params(): Unpaused__Params {
    return new Unpaused__Params(this);
  }
}

export class Unpaused__Params {
  _event: Unpaused;

  constructor(event: Unpaused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Billing__getInvoiceResult {
  value0: Address;
  value1: Address;
  value2: BigInt;
  value3: Address;
  value4: Address;
  value5: boolean;

  constructor(
    value0: Address,
    value1: Address,
    value2: BigInt,
    value3: Address,
    value4: Address,
    value5: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    map.set("value4", ethereum.Value.fromAddress(this.value4));
    map.set("value5", ethereum.Value.fromBoolean(this.value5));
    return map;
  }
}

export class Billing__invoicesResult {
  value0: Address;
  value1: Address;
  value2: BigInt;
  value3: Address;
  value4: Address;
  value5: boolean;

  constructor(
    value0: Address,
    value1: Address,
    value2: BigInt,
    value3: Address,
    value4: Address,
    value5: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    map.set("value4", ethereum.Value.fromAddress(this.value4));
    map.set("value5", ethereum.Value.fromBoolean(this.value5));
    return map;
  }
}

export class Billing extends ethereum.SmartContract {
  static bind(address: Address): Billing {
    return new Billing("Billing", address);
  }

  canCancelInvoice(invoiceID: BigInt): boolean {
    let result = super.call(
      "canCancelInvoice",
      "canCancelInvoice(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(invoiceID)]
    );

    return result[0].toBoolean();
  }

  try_canCancelInvoice(invoiceID: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "canCancelInvoice",
      "canCancelInvoice(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(invoiceID)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  canIPayTheInvoice(invoiceID: BigInt): boolean {
    let result = super.call(
      "canIPayTheInvoice",
      "canIPayTheInvoice(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(invoiceID)]
    );

    return result[0].toBoolean();
  }

  try_canIPayTheInvoice(invoiceID: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "canIPayTheInvoice",
      "canIPayTheInvoice(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(invoiceID)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  cancelInvoice(invoiceID: BigInt): boolean {
    let result = super.call("cancelInvoice", "cancelInvoice(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(invoiceID)
    ]);

    return result[0].toBoolean();
  }

  try_cancelInvoice(invoiceID: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "cancelInvoice",
      "cancelInvoice(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(invoiceID)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  createInvoice(
    tokenAddress: Address,
    tokenAmountInWei: BigInt,
    receiver: Address
  ): BigInt {
    let result = super.call(
      "createInvoice",
      "createInvoice(address,uint256,address):(uint256)",
      [
        ethereum.Value.fromAddress(tokenAddress),
        ethereum.Value.fromUnsignedBigInt(tokenAmountInWei),
        ethereum.Value.fromAddress(receiver)
      ]
    );

    return result[0].toBigInt();
  }

  try_createInvoice(
    tokenAddress: Address,
    tokenAmountInWei: BigInt,
    receiver: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "createInvoice",
      "createInvoice(address,uint256,address):(uint256)",
      [
        ethereum.Value.fromAddress(tokenAddress),
        ethereum.Value.fromUnsignedBigInt(tokenAmountInWei),
        ethereum.Value.fromAddress(receiver)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  createInvoice1(tokenAddress: Address, tokenAmountInWei: BigInt): BigInt {
    let result = super.call(
      "createInvoice",
      "createInvoice(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(tokenAddress),
        ethereum.Value.fromUnsignedBigInt(tokenAmountInWei)
      ]
    );

    return result[0].toBigInt();
  }

  try_createInvoice1(
    tokenAddress: Address,
    tokenAmountInWei: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "createInvoice",
      "createInvoice(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(tokenAddress),
        ethereum.Value.fromUnsignedBigInt(tokenAmountInWei)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getInvoice(invoiceID: BigInt): Billing__getInvoiceResult {
    let result = super.call(
      "getInvoice",
      "getInvoice(uint256):(address,address,uint256,address,address,bool)",
      [ethereum.Value.fromUnsignedBigInt(invoiceID)]
    );

    return new Billing__getInvoiceResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toAddress(),
      result[4].toAddress(),
      result[5].toBoolean()
    );
  }

  try_getInvoice(
    invoiceID: BigInt
  ): ethereum.CallResult<Billing__getInvoiceResult> {
    let result = super.tryCall(
      "getInvoice",
      "getInvoice(uint256):(address,address,uint256,address,address,bool)",
      [ethereum.Value.fromUnsignedBigInt(invoiceID)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Billing__getInvoiceResult(
        value[0].toAddress(),
        value[1].toAddress(),
        value[2].toBigInt(),
        value[3].toAddress(),
        value[4].toAddress(),
        value[5].toBoolean()
      )
    );
  }

  getNextInvoiceID(): BigInt {
    let result = super.call(
      "getNextInvoiceID",
      "getNextInvoiceID():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getNextInvoiceID(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getNextInvoiceID",
      "getNextInvoiceID():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getOwner(): Address {
    let result = super.call("getOwner", "getOwner():(address)", []);

    return result[0].toAddress();
  }

  try_getOwner(): ethereum.CallResult<Address> {
    let result = super.tryCall("getOwner", "getOwner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  invoices(param0: BigInt): Billing__invoicesResult {
    let result = super.call(
      "invoices",
      "invoices(uint256):(address,address,uint256,address,address,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Billing__invoicesResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toAddress(),
      result[4].toAddress(),
      result[5].toBoolean()
    );
  }

  try_invoices(param0: BigInt): ethereum.CallResult<Billing__invoicesResult> {
    let result = super.tryCall(
      "invoices",
      "invoices(uint256):(address,address,uint256,address,address,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Billing__invoicesResult(
        value[0].toAddress(),
        value[1].toAddress(),
        value[2].toBigInt(),
        value[3].toAddress(),
        value[4].toAddress(),
        value[5].toBoolean()
      )
    );
  }

  paused(): boolean {
    let result = super.call("paused", "paused():(bool)", []);

    return result[0].toBoolean();
  }

  try_paused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("paused", "paused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  payInvoice(invoiceID: BigInt): boolean {
    let result = super.call("payInvoice", "payInvoice(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(invoiceID)
    ]);

    return result[0].toBoolean();
  }

  try_payInvoice(invoiceID: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("payInvoice", "payInvoice(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(invoiceID)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CancelInvoiceCall extends ethereum.Call {
  get inputs(): CancelInvoiceCall__Inputs {
    return new CancelInvoiceCall__Inputs(this);
  }

  get outputs(): CancelInvoiceCall__Outputs {
    return new CancelInvoiceCall__Outputs(this);
  }
}

export class CancelInvoiceCall__Inputs {
  _call: CancelInvoiceCall;

  constructor(call: CancelInvoiceCall) {
    this._call = call;
  }

  get invoiceID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CancelInvoiceCall__Outputs {
  _call: CancelInvoiceCall;

  constructor(call: CancelInvoiceCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class ChangeOwnerCall extends ethereum.Call {
  get inputs(): ChangeOwnerCall__Inputs {
    return new ChangeOwnerCall__Inputs(this);
  }

  get outputs(): ChangeOwnerCall__Outputs {
    return new ChangeOwnerCall__Outputs(this);
  }
}

export class ChangeOwnerCall__Inputs {
  _call: ChangeOwnerCall;

  constructor(call: ChangeOwnerCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ChangeOwnerCall__Outputs {
  _call: ChangeOwnerCall;

  constructor(call: ChangeOwnerCall) {
    this._call = call;
  }
}

export class CreateInvoiceCall extends ethereum.Call {
  get inputs(): CreateInvoiceCall__Inputs {
    return new CreateInvoiceCall__Inputs(this);
  }

  get outputs(): CreateInvoiceCall__Outputs {
    return new CreateInvoiceCall__Outputs(this);
  }
}

export class CreateInvoiceCall__Inputs {
  _call: CreateInvoiceCall;

  constructor(call: CreateInvoiceCall) {
    this._call = call;
  }

  get tokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenAmountInWei(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get receiver(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class CreateInvoiceCall__Outputs {
  _call: CreateInvoiceCall;

  constructor(call: CreateInvoiceCall) {
    this._call = call;
  }

  get invoiceID(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class CreateInvoice1Call extends ethereum.Call {
  get inputs(): CreateInvoice1Call__Inputs {
    return new CreateInvoice1Call__Inputs(this);
  }

  get outputs(): CreateInvoice1Call__Outputs {
    return new CreateInvoice1Call__Outputs(this);
  }
}

export class CreateInvoice1Call__Inputs {
  _call: CreateInvoice1Call;

  constructor(call: CreateInvoice1Call) {
    this._call = call;
  }

  get tokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenAmountInWei(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class CreateInvoice1Call__Outputs {
  _call: CreateInvoice1Call;

  constructor(call: CreateInvoice1Call) {
    this._call = call;
  }

  get invoiceID(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class PayInvoiceCall extends ethereum.Call {
  get inputs(): PayInvoiceCall__Inputs {
    return new PayInvoiceCall__Inputs(this);
  }

  get outputs(): PayInvoiceCall__Outputs {
    return new PayInvoiceCall__Outputs(this);
  }
}

export class PayInvoiceCall__Inputs {
  _call: PayInvoiceCall;

  constructor(call: PayInvoiceCall) {
    this._call = call;
  }

  get invoiceID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class PayInvoiceCall__Outputs {
  _call: PayInvoiceCall;

  constructor(call: PayInvoiceCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}
