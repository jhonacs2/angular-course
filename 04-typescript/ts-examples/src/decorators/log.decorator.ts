export const Log = () => {
    return (target: any, name: string, descriptor: any) => {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            console.log(target, `Call to ${name} with args: ${JSON.stringify(args)}`);
            return originalMethod.apply(this, args);
        };

        return descriptor;
    };
};

/*
* target: The prototype of the object.
  name: The name of the method.
  descriptor: The descriptor of the method property.
* */
