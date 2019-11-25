const bind = (func, context, [arg1], [arg2]) => {
    func.apply(context, ...arguments);
};

export { bind };