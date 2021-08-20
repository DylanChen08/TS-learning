// interface Identities<V, M> {
//     value: V,
//     message: M
//
// }
//
// function identity<T, U>(value: T, message: U): Identities<T, U> {
//     console.log(`value is ${value},type of value is ${typeof value}`)
//     console.log(`message is ${message},type of message is ${typeof message}`)
//     return {value, message}
// }
//
// console.log(identity(33, 'xxx'))
var IdentityClass = /** @class */ (function () {
    function IdentityClass(_a) {
        var value = _a.value, message = _a.message;
        this.value = value;
        this.message = message;
    }
    IdentityClass.prototype.getIdentity = function () {
        console.log("IdentityClass value is " + (this.value));
        return this.value;
    };
    IdentityClass.prototype.getMessage = function () {
        console.log("IdentityClass message is " + (this.message));
        return this.message;
    };
    return IdentityClass;
}());
var myNumberClass = new IdentityClass({ value: 67, message: 'got it ' });
console.log(myNumberClass.getIdentity());
console.log(myNumberClass.getMessage());
