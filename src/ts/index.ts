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

interface GenericInterface<U, T> {
    value: U,
    getIdentity: () => U,
    getMessage: () => T
}

class IdentityClass<M, K> implements GenericInterface<M, K> {

    value: M
    message: K

    constructor({value, message}) {
        this.value = value
        this.message = message
    }

    getIdentity(): M {
        console.log(`IdentityClass value is ${(this.value)}`)
        return this.value
    }

    getMessage(): K {
        console.log(`IdentityClass message is ${(this.message)}`)
        return this.message
    }

}


const myNumberClass = new IdentityClass<Number, String>({value: 67, message: 'got it '});
console.log(myNumberClass.getIdentity());
console.log(myNumberClass.getMessage());




