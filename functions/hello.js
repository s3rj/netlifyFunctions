// functions/hello.js
const express = require('express');
console.log(process.env.FIREBASE_MESSAGING_SENDER_ID);
console.log('is this visible');
exports.handler = async event => {
  const subject = event.queryStringParameters.name || 'World'
  return {
    statusCode: 200,
    body: `Hello ${subject}!`,
  }
}