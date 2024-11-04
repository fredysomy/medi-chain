const Minio = require('minio');

var minioClient = new Minio.Client({
  endPoint: process.env.MINIO_ENDPOINT,
  port: 1 * process.env.MINIO_PORT,
  useSSL: 'true' === process.env.MINIO_USE_SSL,
  accessKey: process.env.MINIO_ACCESS_KEY,
  secretKey: process.env.MINIO_SECRET_KEY,
});

module.exports = minioClient;