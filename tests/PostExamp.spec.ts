import { test,expect,request } from '@playwright/test';
test('create object', async () => {
  const api = await request.newContext();
  const res = await api.post('https://api.restful-api.dev/objects', {
	data: {
  	name: "Allam MacBook Pro 16",
  	data: {
    	year: 2019,
    	price: 1849.99,
    	"CPU model": "Intel Core i9",
    	"Hard disk size": "1 TB"
  	}
    },    
  });
  expect(res.status()).toBe(200);
  const body = await res.json();
  console.log(body);
});
