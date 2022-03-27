class AppError extends Error {
  constructor(title, message) {
    super(message);

    this.title = title || "Error";
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 *
 * @param {String} [title="Error"] The title of the error
 * @param {String} [message] The error message
 */
module.exports = (...args) => {
  throw new AppError(...args);
};
