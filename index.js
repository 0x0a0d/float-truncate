Number.prototype.toTruncated = function (fractionDigit = 0) {
    fractionDigit = fractionDigit >>> 0;
    if (fractionDigit < 0 || fractionDigit > 19) {
        throw Error('toTruncated() digits argument must be between 0 and 19');
    }
    let _fixed = this.toFixed(fractionDigit + 1);
    return _fixed.substr(0, _fixed.length - (fractionDigit === 0 ? 2 : 1));
}