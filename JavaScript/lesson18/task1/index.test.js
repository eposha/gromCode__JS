import { createLogger } from './index';

it('should be array', () => {
    const result = Array.isArray(event.getInvitations())
    expect(result).toEqual(true);
});