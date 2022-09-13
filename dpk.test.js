const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns key when given  input with partitionKey", () => {
    const trivialKey = deterministicPartitionKey({key: 123});
    expect(trivialKey).toBe('e30ebfef6bf33aecaf47a8cb16b5a15adec0f9772cc2ba704889cc15253aea033af31ecf0a698a58a5643a5d70fa52b2ff8e2be4e993b008d88ab7667965f98e');
  });

  it("Returns key when given  input without partitionKey", () => {
    const trivialKey = deterministicPartitionKey({key: '123'});
    expect(trivialKey).toBe('4d6e6a7bd626ee11ac93db52a0465aa5c8e2eb1801417058d1754ea2a51d5bd2a653b74b599562b00d663ea3f74ec3aff6a4420b1c49f8326ed4f4bd71340873');
  });

  it("Returns key when given  input with partitionKey", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: '123'});
    expect(trivialKey).toBe('123');
  });

  it("Returns key when given  input with partitionKey as number", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: 123});
    expect(trivialKey).toBe('123');
  });

  it("Returns key when given  input with partitionKey as number 0", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: 0});
    expect(trivialKey).toBe('e65a0cb83a95cae7eb0642da576cac881e397c0405c63577c977068f7892f69f1c315baa294124da2a67e0c486d340f9d357377f894d0c0fd850484f8984f2e7');
  });

  it("Returns key when given  input with partitionKey as number true", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: true});
    expect(trivialKey).toBe('true');
  });

  it("Returns key when given input with partitionKey > 256", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: '34d6e6a7bd626ee11ac93db52a0465aa5c8e2eb1801417058d1754ea2a51d5bd2a653b74b599562b00d663ea3f74ec3aff6a4420b1c49f8326ed4f4bd713408734d6e6a7bd626ee11ac93db52a0465aa5c8e2eb1801417058d1754ea2a51d5bd2a653b74b599562b00d663ea3f74ec3aff6a4420b1c49f8326ed4f4bd71340873'});
    expect(trivialKey).toBe('f73f820587e555aacba3a7869ec8e61e05f83526857253131eb975b80b4ff28b07a1b36779c8db37044fd85e6371d997313abfe5300337cecaf28776626fd5e6');
  });
});
