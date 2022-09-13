const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate = TRIVIAL_PARTITION_KEY; // initial candidate value for no input

  // function to get the Hash Digest based in input string
  const getHashDigest = (data) => {
    return crypto.createHash("sha3-512").update(data).digest("hex");
  };

  if (event) {
    if (event.partitionKey) {
      // regardless of type of partition key return string type
      candidate = event.partitionKey.length > MAX_PARTITION_KEY_LENGTH ? getHashDigest(event.partitionKey) : `${event.partitionKey}`;
    } else {
      const data = JSON.stringify(event);
      candidate = getHashDigest(data);
    }
  }

  return candidate;
};
// const crypto = require("crypto");

// exports.deterministicPartitionKey = (event) => {
//   const TRIVIAL_PARTITION_KEY = "0";
//   const MAX_PARTITION_KEY_LENGTH = 256;
//   let candidate;

//   if (event) {
//     if (event.partitionKey) {
//       candidate = event.partitionKey;
//     } else {
//       const data = JSON.stringify(event);
//       candidate = crypto.createHash("sha3-512").update(data).digest("hex");
//     }
//   }

//   if (candidate) {
//     if (typeof candidate !== "string") {
//       candidate = JSON.stringify(candidate);
//     }
//   } else {
//     candidate = TRIVIAL_PARTITION_KEY;
//   }
//   if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
//     candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
//   }
//   return candidate;
// };