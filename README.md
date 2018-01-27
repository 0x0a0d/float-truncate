# Number.toTruncated

0x0a0d

# Usage

```javascript
require('float-truncate');
let test_numbers = [
    19.0000019,
    19.9999999,
    1e-10,
    16.32e-5,
    16.32e1,
];
test_numbers.forEach(num => {
    console.log(num, num.toTruncated('0'), num.toTruncated(5), num.toTruncated(6), num.toTruncated(7))
});
```