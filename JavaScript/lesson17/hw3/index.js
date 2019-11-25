const bind = (func, context, [arg1], [arg2]) => {
    return func.apply(context, ...arguments);
};

export { bind };