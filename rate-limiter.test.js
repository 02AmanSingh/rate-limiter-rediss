const RateLimiter = require('./index');

test('allows requests under limit', () => {
  const limiter = new RateLimiter(5, 60000); // 5 requests per minute
  const userId = 'user1';

  for (let i = 0; i < 5; i++) {
    expect(limiter.isRateLimited(userId)).toBe(false);
  }
});

test('blocks requests over limit', () => {
  const limiter = new RateLimiter(5, 60000); // 5 requests per minute
  const userId = 'user1';

  for (let i = 0; i < 5; i++) {
    limiter.isRateLimited(userId);
  }
  expect(limiter.isRateLimited(userId)).toBe(true);
});
