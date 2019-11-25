function bind(func, context) {
    let bindArgs = [].slice.call(arguments, 2);
    return function() {
        let fnArgs = [].slice.call(arguments);
        return func.apply(context, bindArgs.concat(fnArgs));
    };
}

export { bind };