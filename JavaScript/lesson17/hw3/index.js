const bind = (func, context, [arg1], [arg2]) => {
    func.call(context);
};

export { bind };