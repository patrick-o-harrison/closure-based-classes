function BaseClass(__prot = undefined) {
    __prot = __prot ?? Symbol();
    self = {
        withFoo: (a, b) => {
            return self[__prot].foo(a, b);
        },
        [__prot]: {
            // foo is protected
            foo() {
                throw Error('Not implemented');
            },
        },
    };
    return self;
}

function DerivedClass(c, __prot = undefined) {
    __prot = __prot ?? Symbol();
    self = BaseClass(__prot);
    self[__prot].foo = (a, b) => {
        return a + b * c;
    }
    return self;
}

let d = DerivedClass(10);
console.log(d.withFoo(3, 4));
