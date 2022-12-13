import httpStatus from "http-status";
export function validateBody(schema) {
    return validate(schema, "body");
}
function validate(schema, type) {
    return function (req, res, next) {
        var error = schema.validate(req[type], { abortEarly: false }).error;
        if (error) {
            return res
                .status(httpStatus.BAD_REQUEST)
                .send(error.details.map(function (e) { return e.message; }));
        }
        next();
    };
}
