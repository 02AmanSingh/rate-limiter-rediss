class RateLimiter {
    constructor(limit, windowMs) {
      this.limit = limit;         // Max requests allowed
      this.windowMs = windowMs;   // Time window in milliseconds
      this.requests = new Map();  // Stores the timestamp of requests
    }
  
    isRateLimited(userId) {
      const currentTime = Date.now();
      const resetTime = currentTime - this.windowMs;
  
      // Remove old requests
      if (this.requests.has(userId)) {
        const requestTimes = this.requests.get(userId).filter(time => time > resetTime);
        this.requests.set(userId, requestTimes);
      }
  
      const userRequests = this.requests.get(userId) || [];
  
      if (userRequests.length < this.limit) {
        // Allow the request
        this.requests.set(userId, [...userRequests, currentTime]);
        return false;  // Not rate-limited
      } else {
        // Block the request
        return true;   // Rate-limited
      }
    }
  }
  
  module.exports = RateLimiter;
  