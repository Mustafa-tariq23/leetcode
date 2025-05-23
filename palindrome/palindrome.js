function isPalindrome(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0))
        return false;
    var reversed = 0;
    while (x > reversed) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return x === reversed || x === Math.floor(reversed / 10);
}
;
console.log(isPalindrome(121));
