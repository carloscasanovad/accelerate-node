export function validateBody(schema) {
  return validate(schema);
}

function validate(schema) {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      return res.status(400).send(error.details.map((e) => e.message));
    }
    next();
  };
}
