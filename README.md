# Rate Limiter NPM Package

A simple rate limiter for limiting the number of requests a user can make within a specified time window.

## Installation

```bash
npm install your-package-name


```Usage
const RateLimiter = require('your-package-name');

const limiter = new RateLimiter(10, 60000);  // 10 requests per minute

const userId = 'user123';

if (limiter.isRateLimited(userId)) {
  console.log('Rate limit exceeded. Try again later.');
} else {
  console.log('Request allowed.');
}
