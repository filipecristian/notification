import assert from 'assert';
import { dtoAuthenticationRequest } from '../../../src/libraries/authentication/authentication.request';
import httpMocks from 'node-mocks-http';

describe('authentication request', () => {
    it('testShouldReturnFalseIfMissingData', () => {
        const mockRequest = httpMocks.createRequest({
            body: {
                email: null,
                company: null,
                password: null
            }
        });
        const result = dtoAuthenticationRequest(mockRequest);
        assert.equal(result, false);
    });

    it('testShouldReturnOnlyPayloadData', () => {
        const body = {
            email: 'foo@bar.com',
            company: 1,
            password: 'foobar',
            other: 'something'
        };

        const mockRequest = httpMocks.createRequest({
            body: body
        });
        const result = dtoAuthenticationRequest(mockRequest);
        
        
        assert.equal(result !== false ? result.email : '', 'foo@bar.com');
        assert.equal(result !== false ? result.company : '', 1);
        assert.equal(result !== false ? result.password : '', 'foobar');
    });
});